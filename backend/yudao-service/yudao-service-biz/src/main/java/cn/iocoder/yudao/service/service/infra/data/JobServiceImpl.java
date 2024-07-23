package cn.iocoder.yudao.service.service.infra.data;

import cn.iocoder.yudao.framework.common.util.upgrade.UpgradeUtils;
import cn.iocoder.yudao.service.framework.job.core.scheduler.SchedulerManager;
import cn.iocoder.yudao.service.framework.job.core.util.CronUtils;
import cn.iocoder.yudao.service.enums.infra.job.InfraJobStatusEnum;
import cn.iocoder.yudao.service.framework.codegen.config.SchemaHistory;
import cn.iocoder.yudao.service.model.infra.data.QrtzCronTriggers;
import cn.iocoder.yudao.service.model.infra.data.QrtzJobDetails;
import cn.iocoder.yudao.service.model.infra.data.QrtzTriggers;
import cn.iocoder.yudao.service.model.infra.job.InfraJob;
import cn.iocoder.yudao.service.model.infra.job.InfraJobDraft;
import cn.iocoder.yudao.service.model.infra.job.InfraJobProps;
import cn.iocoder.yudao.service.repository.infra.data.QrtzCronTriggersRepository;
import cn.iocoder.yudao.service.repository.infra.data.QrtzJobDetailsRepository;
import cn.iocoder.yudao.service.repository.infra.data.QrtzTriggersRepository;
import cn.iocoder.yudao.service.repository.infra.job.InfraJobRepository;
import cn.iocoder.yudao.service.convert.infra.data.JobConvert;
import cn.iocoder.yudao.service.vo.infra.job.job.JobCreateReqVO;
import cn.iocoder.yudao.service.vo.infra.job.job.JobExportReqVO;
import cn.iocoder.yudao.service.vo.infra.job.job.JobPageReqVO;
import cn.iocoder.yudao.service.vo.infra.job.job.JobUpdateReqVO;
import org.babyfish.jimmer.ImmutableObjects;
import org.quartz.SchedulerException;
import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import org.springframework.validation.annotation.Validated;
import org.springframework.data.domain.Page;
import java.util.*;

import org.springframework.transaction.annotation.Transactional;
import cn.iocoder.yudao.framework.common.pojo.PageResult;

import static cn.iocoder.yudao.framework.common.exception.util.ServiceExceptionUtil.exception;
import static cn.iocoder.yudao.framework.common.util.collection.CollectionUtils.containsAny;
import static cn.iocoder.yudao.service.errorCode.infra.data.JobErrorCode.*;

/**
 * 定时任务 Service 实现类
 */
@Service
@Validated
public class JobServiceImpl implements JobService {


    @Resource
    private InfraJobRepository infraJobRepository;

    @Resource
    private SchedulerManager schedulerManager;

    @Resource
    private QrtzCronTriggersRepository qrtzCronTriggersRepository;

    @Resource
    private QrtzTriggersRepository qrtzTriggersRepository;

    @Resource
    private QrtzJobDetailsRepository qrtzJobDetailsRepository;

    @Resource
    private SchemaHistory schemaHistory;

    @Override
    @Transactional(rollbackFor = Exception.class)
    public String createJob(JobCreateReqVO createReqVO) throws SchedulerException {
        validateCronExpression(createReqVO.getCronExpression());
        // 校验唯一性
        if (infraJobRepository.findByHandlerName(createReqVO.getHandlerName()).isPresent()) {
            throw exception(JOB_HANDLER_EXISTS);
        }
        // 插入
        InfraJob job = JobConvert.INSTANCE.convert(createReqVO);
        job = InfraJobDraft.$.produce(job, draft -> {
            draft.setStatus(InfraJobStatusEnum.INIT.getValue()).setId(UUID.randomUUID());
        });
        fillJobMonitorTimeoutEmpty(job);
        job = infraJobRepository.insert(job);

        // 添加 Job 到 Quartz 中
        schedulerManager.addJob(job.id(), job.handlerName(), job.handlerParam(), job.cronExpression(),
                createReqVO.getRetryCount(), createReqVO.getRetryInterval());
        // 更新
        InfraJob finalJob = job;
        InfraJob updateObj = InfraJobDraft.$.produce(draft -> {
            draft.setId(finalJob.id()).setStatus(InfraJobStatusEnum.NORMAL.getValue());
        });
        infraJobRepository.update(updateObj);

        Integer curGitUserVersion = schemaHistory.getCurGitUserVersion();
        Integer curGitUserId = schemaHistory.getCurGitUserId();

        Optional<QrtzCronTriggers> optionalQrtzCronTriggers = qrtzCronTriggersRepository.findByTriggerName(job.handlerName());
        if(optionalQrtzCronTriggers.isPresent()){
            String sql = "INSERT IGNORE INTO qrtz_cron_triggers(SCHED_NAME, TRIGGER_NAME, TRIGGER_GROUP, CRON_EXPRESSION, TIME_ZONE_ID)VALUES ("
                    + "'" +  optionalQrtzCronTriggers.get().schedName() + "',"
                    + "'" +  optionalQrtzCronTriggers.get().triggerName() + "',"
                    + "'" +  optionalQrtzCronTriggers.get().triggerGroup() + "',"
                    + "'" +  optionalQrtzCronTriggers.get().cronExpression() + "',"
                    + "'" +  optionalQrtzCronTriggers.get().timeZoneId() + "');\r\n";
            UpgradeUtils.upgradeSql(sql, curGitUserVersion, curGitUserId);
        }

        Optional<QrtzJobDetails> optionalQrtzJobDetails = qrtzJobDetailsRepository.findById(job.handlerName());
        if(optionalQrtzJobDetails.isPresent()){
            String sql = "INSERT IGNORE INTO qrtz_job_details(SCHED_NAME, JOB_NAME, JOB_GROUP, DESCRIPTION, JOB_CLASS_NAME, IS_DURABLE, IS_NONCONCURRENT, IS_UPDATE_DATA, REQUESTS_RECOVERY, JOB_DATA)VALUES ("
                    + "'" +  optionalQrtzJobDetails.get().schedName() + "',"
                    + "'" +  optionalQrtzJobDetails.get().jobName() + "',"
                    + "'" +  optionalQrtzJobDetails.get().jobGroup() + "',"
                    + "'" +  optionalQrtzJobDetails.get().description() + "',"
                    + "'" +  optionalQrtzJobDetails.get().jobClassName() + "',"
                    + "'" +  optionalQrtzJobDetails.get().isDurable() + "',"
                    + "'" +  optionalQrtzJobDetails.get().isNonconcurrent() + "',"
                    + "'" +  optionalQrtzJobDetails.get().isUpdateData() + "',"
                    + "'" +  optionalQrtzJobDetails.get().requestsRecovery() + "',"
                    + "UNHEX('" +  bytesToHex(optionalQrtzJobDetails.get().jobData()) + "'));\r\n";
            UpgradeUtils.upgradeSql(sql, curGitUserVersion, curGitUserId);
        }

        Optional<QrtzTriggers> optionalQrtzTriggers = qrtzTriggersRepository.findById(job.handlerName());
        if(optionalQrtzTriggers.isPresent()){
            String sql = "INSERT IGNORE INTO qrtz_triggers(SCHED_NAME, TRIGGER_NAME, TRIGGER_GROUP, JOB_NAME, "
                    +"JOB_GROUP, DESCRIPTION, NEXT_FIRE_TIME, PREV_FIRE_TIME, PRIORITY, TRIGGER_STATE, TRIGGER_TYPE, " +
                    "START_TIME, END_TIME, CALENDAR_NAME, MISFIRE_INSTR, JOB_DATA)VALUES ("
                    + "'" +  optionalQrtzTriggers.get().schedName() + "',"
                    + "'" +  optionalQrtzTriggers.get().triggerName() + "',"
                    + "'" +  optionalQrtzTriggers.get().triggerGroup() + "',"
                    + "'" +  optionalQrtzTriggers.get().jobName() + "',"
                    + "'" +  optionalQrtzTriggers.get().jobGroup() + "',"
                    + "'" +  optionalQrtzTriggers.get().description() + "',"
                    + "'" +  optionalQrtzTriggers.get().nextFireTime() + "',"
                    + "'" +  optionalQrtzTriggers.get().prevFireTime() + "',"
                    + "'" +  optionalQrtzTriggers.get().priority() + "',"
                    + "'" +  optionalQrtzTriggers.get().triggerState() + "',"
                    + "'" +  optionalQrtzTriggers.get().triggerType() + "',"
                    + "'" +  optionalQrtzTriggers.get().startTime() + "',"
                    + "'" +  optionalQrtzTriggers.get().endTime() + "',"
                    + "'" +  optionalQrtzTriggers.get().calendarName() + "',"
                    + "'" +  optionalQrtzTriggers.get().misfireInstr() + "',"
                    + "UNHEX('" +  bytesToHex(optionalQrtzTriggers.get().jobData()) + "'));\r\n";
            UpgradeUtils.upgradeSql(sql, curGitUserVersion, curGitUserId);
        }

        // 返回
        return job.id().toString();
    }

    private static String bytesToHex(byte[] bytes) {
        StringBuilder hexString = new StringBuilder();
        for (byte b : bytes) {
            String hex = Integer.toHexString(0xFF & b);
            if (hex.length() == 1) {
                hexString.append('0');
            }
            hexString.append(hex);
        }
        return hexString.toString();
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void updateJob(JobUpdateReqVO updateReqVO) throws SchedulerException {
        validateCronExpression(updateReqVO.getCronExpression());
        // 校验存在
        InfraJob job = validateJobExists(updateReqVO.getId());
        // 只有开启状态，才可以修改.原因是，如果出暂停状态，修改 Quartz Job 时，会导致任务又开始执行
        if (job.status()!= InfraJobStatusEnum.NORMAL.getValue()) {
            throw exception(JOB_UPDATE_ONLY_NORMAL_STATUS);
        }
        // 更新
        InfraJob updateObj = JobConvert.INSTANCE.convert(updateReqVO);
        updateObj = fillJobMonitorTimeoutEmpty(updateObj);
        infraJobRepository.update(updateObj);

        // 更新 Job 到 Quartz 中
        schedulerManager.updateJob(job.handlerName(), updateReqVO.getHandlerParam(), updateReqVO.getCronExpression(),
                updateReqVO.getRetryCount(), updateReqVO.getRetryInterval());
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void updateJobStatus(UUID id, Integer status) throws SchedulerException {
        // 校验 status
        if (!containsAny(status, InfraJobStatusEnum.NORMAL.getValue(), InfraJobStatusEnum.STOP.getValue())) {
            throw exception(JOB_CHANGE_STATUS_INVALID);
        }
        // 校验存在
        InfraJob job = validateJobExists(id);
        // 校验是否已经为当前状态
        if (job.status() == status) {
            throw exception(JOB_CHANGE_STATUS_EQUALS);
        }
        // 更新 Job 状态
        InfraJob updateObj = InfraJobDraft.$.produce(draft -> {
            draft.setId(id).setStatus(status);
        });

        infraJobRepository.update(updateObj);

        // 更新状态 Job 到 Quartz 中
        if (InfraJobStatusEnum.NORMAL.getValue().equals(status)) { // 开启
            schedulerManager.resumeJob(job.handlerName());
        } else { // 暂停
            schedulerManager.pauseJob(job.handlerName());
        }
    }

    @Override
    public void triggerJob(UUID id) throws SchedulerException {
        // 校验存在
        InfraJob job = validateJobExists(id);

        // 触发 Quartz 中的 Job
        schedulerManager.triggerJob(job.id().toString(), job.handlerName(), job.handlerParam());
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void deleteJob(UUID id) throws SchedulerException {
        // 校验存在
        InfraJob job = validateJobExists(id);
        // 更新
        infraJobRepository.deleteById(id);

        // 删除 Job 到 Quartz 中
        schedulerManager.deleteJob(job.handlerName());
    }

    private InfraJob validateJobExists(UUID id) {
        Optional<InfraJob> opJob = infraJobRepository.findById(id);
        if (!opJob.isPresent()) {
            throw exception(JOB_NOT_EXISTS);
        }
        return opJob.get();
    }

    private void validateCronExpression(String cronExpression) {
        if (!CronUtils.isValid(cronExpression)) {
            throw exception(JOB_CRON_EXPRESSION_VALID);
        }
    }

    @Override
    public InfraJob getJob(UUID id) {
        return infraJobRepository.findById(id).get();
    }

    @Override
    public List<InfraJob> getJobList(Collection<UUID> ids) {
        return infraJobRepository.findAllById(ids);
    }

    @Override
    public PageResult<InfraJob> getJobPage(JobPageReqVO pageReqVO) {
        Page<InfraJob> postPage = infraJobRepository.selectPage(pageReqVO);
        return new PageResult<>(postPage.toList(), postPage.getTotalElements());
    }

    @Override
    public List<InfraJob> getJobList(JobExportReqVO exportReqVO) {
        return infraJobRepository.selectList(exportReqVO);
    }

    private static InfraJob fillJobMonitorTimeoutEmpty(InfraJob job) {
        if (ImmutableObjects.isLoaded(job, InfraJobProps.MONITOR_TIMEOUT)) {
            job = InfraJobDraft.$.produce(job, draft -> {
                draft.setMonitorTimeout(0);
            });
        }
        return job;
    }
}
