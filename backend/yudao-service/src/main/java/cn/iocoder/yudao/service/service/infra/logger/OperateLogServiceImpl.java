package cn.iocoder.yudao.service.service.infra.logger;

import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.util.StrUtil;
import cn.iocoder.yudao.service.framework.web.web.core.pojo.PageResult;
import cn.iocoder.yudao.service.model.infra.logger.SystemOperateLogProps;
import cn.iocoder.yudao.service.util.string.StrUtils;
import cn.iocoder.yudao.service.vo.infra.logger.operatelog.OperateLogCreateReqVO;
import cn.iocoder.yudao.service.model.system.user.SystemUser;
import cn.iocoder.yudao.service.vo.infra.logger.operatelog.OperateLogExportReqVO;
import cn.iocoder.yudao.service.vo.infra.logger.operatelog.OperateLogPageReqVO;
import cn.iocoder.yudao.service.vo.infra.logger.operatelog.OperateLogRespVO;
import cn.iocoder.yudao.service.convert.infra.logger.OperateLogConvert;
import cn.iocoder.yudao.service.model.infra.logger.SystemOperateLog;
import cn.iocoder.yudao.service.model.infra.logger.SystemOperateLogDraft;
import cn.iocoder.yudao.service.repository.infra.logger.SystemOperateLogRepository;
import cn.iocoder.yudao.service.service.system.user.UserService;
import lombok.extern.slf4j.Slf4j;
import org.babyfish.jimmer.ImmutableObjects;
import org.babyfish.jimmer.Page;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

import static cn.iocoder.yudao.service.util.collection.CollectionUtils.convertSet;

@Service
@Validated
@Slf4j
public class OperateLogServiceImpl implements OperateLogService {

    @Resource
    private SystemOperateLogRepository systemOperateLogRepository;

    @Resource
    private UserService userService;

    public static final Integer JAVA_METHOD_ARGS_MAX_LENGTH = 8000;

    public static final Integer RESULT_MAX_LENGTH = 4000;

    @Override
    public void createOperateLog(OperateLogCreateReqVO createReqDTO) {
        SystemOperateLog logDO = OperateLogConvert.INSTANCE.convert(createReqDTO);
        SystemOperateLog finalLogDO = logDO;
        logDO = SystemOperateLogDraft.$.produce(logDO, draft -> draft.setJavaMethodArgs(ImmutableObjects.isLoaded(finalLogDO, SystemOperateLogProps.JAVA_METHOD_ARGS) ?
                        StrUtils.maxLength(finalLogDO.javaMethodArgs(), JAVA_METHOD_ARGS_MAX_LENGTH) : "")
                .setResultData(StrUtils.maxLength(finalLogDO.resultData(), RESULT_MAX_LENGTH)));
        systemOperateLogRepository.insert(logDO);
    }

    @Override
    public PageResult<OperateLogRespVO> getOperateLogPage(OperateLogPageReqVO reqVO) {
        // 处理基于用户昵称的查询
        Collection<Long> userIds;
        if (StrUtil.isNotEmpty(reqVO.getUserNickname())) {
            userIds = convertSet(userService.getUserListByNickname(reqVO.getUserNickname()), SystemUser::id);
            if (CollUtil.isEmpty(userIds)) {
                return PageResult.empty();
            }
        }
        // 查询分页
        Page<SystemOperateLog> postPage = systemOperateLogRepository.selectPage(reqVO);
        List<OperateLogRespVO> postList =  OperateLogConvert.INSTANCE.convertPage(postPage.getRows());
        return new PageResult<>(postList, postPage.getTotalRowCount());
    }

    @Override
    public List<SystemOperateLog> getOperateLogList(OperateLogExportReqVO reqVO) {
        // 处理基于用户昵称的查询
        Collection<Long> userIds;
        if (StrUtil.isNotEmpty(reqVO.getUserNickname())) {
            userIds = convertSet(userService.getUserListByNickname(reqVO.getUserNickname()), SystemUser::id);
            if (CollUtil.isEmpty(userIds)) {
                return Collections.emptyList();
            }
        }
        // 查询列表
        return systemOperateLogRepository.selectList(reqVO);
    }

}
