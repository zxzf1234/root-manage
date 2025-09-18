package com.xiyu.service.service.infra.logger;

import com.xiyu.service.framework.web.web.core.pojo.PageResult;
import com.xiyu.service.vo.infra.logger.apierrorlog.ApiErrorLogCreateReqVO;
import com.xiyu.service.vo.infra.logger.apierrorlog.ApiErrorLogExportReqVO;
import com.xiyu.service.vo.infra.logger.apierrorlog.ApiErrorLogPageReqVO;
import com.xiyu.service.convert.infra.logger.ApiErrorLogConvert;
import com.xiyu.service.enums.infra.api.InfraApiErrorLogProcessStatusEnum;
import com.xiyu.service.model.infra.data.InfraApiErrorLog;
import com.xiyu.service.model.infra.data.InfraApiErrorLogDraft;
import com.xiyu.service.repository.infra.data.InfraApiErrorLogRepository;
import org.babyfish.jimmer.Page;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import jakarta.annotation.Resource;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import static com.xiyu.service.framework.exception.util.ServiceExceptionUtil.exception;
import static com.xiyu.service.errorCode.infra.ErrorCodeConstants.API_ERROR_LOG_NOT_FOUND;
import static com.xiyu.service.errorCode.infra.ErrorCodeConstants.API_ERROR_LOG_PROCESSED;

/**
 * API 错误日志 Service 实现类
 *
 * @author 芋道源码
 */
@Service
@Validated
public class ApiErrorLogServiceImpl implements ApiErrorLogService {

    @Resource
    private InfraApiErrorLogRepository infraApiErrorLogRepository;

    @Override
    public void createApiErrorLog(ApiErrorLogCreateReqVO createDTO) {
        InfraApiErrorLog apiErrorLog = ApiErrorLogConvert.INSTANCE.convert(createDTO);
        apiErrorLog = InfraApiErrorLogDraft.$.produce(apiErrorLog, draft -> draft.setProcessStatus(InfraApiErrorLogProcessStatusEnum.INIT.getValue()));
        infraApiErrorLogRepository.insert(apiErrorLog);
    }

    @Override
    public PageResult<InfraApiErrorLog> getApiErrorLogPage(ApiErrorLogPageReqVO pageReqVO) {
        Page<InfraApiErrorLog> postPage = infraApiErrorLogRepository.selectPage(pageReqVO);
        return new PageResult<>(postPage.getRows(), postPage.getTotalRowCount());
    }

    @Override
    public List<InfraApiErrorLog> getApiErrorLogList(ApiErrorLogExportReqVO exportReqVO) {
        return infraApiErrorLogRepository.selectList(exportReqVO);
    }

    @Override
    public void updateApiErrorLogProcess(Long id, Integer processStatus, Long processUserId) {
        Optional<InfraApiErrorLog> opErrorLog = infraApiErrorLogRepository.findById(id);
        if (opErrorLog.isEmpty()) {
            throw exception(API_ERROR_LOG_NOT_FOUND);
        }
        if (!InfraApiErrorLogProcessStatusEnum.INIT.getValue().equals(opErrorLog.get().processStatus())) {
            throw exception(API_ERROR_LOG_PROCESSED);
        }
        // 标记处理
        InfraApiErrorLog errorLog = InfraApiErrorLogDraft.$.produce(draft -> draft.setId(id).setProcessStatus(processStatus).setProcessUserId(processUserId)
                .setProcessTime(LocalDateTime.now()));
        infraApiErrorLogRepository.update(errorLog);
    }

}
