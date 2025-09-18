package com.xiyu.service.service.infra.logger;

import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.util.StrUtil;
import com.xiyu.service.framework.web.web.core.pojo.PageResult;
import com.xiyu.service.model.infra.logger.SystemOperateLogProps;
import com.xiyu.service.util.string.StrUtils;
import com.xiyu.service.vo.infra.logger.operatelog.OperateLogCreateReqVO;
import com.xiyu.service.model.system.user.SystemUser;
import com.xiyu.service.vo.infra.logger.operatelog.OperateLogExportReqVO;
import com.xiyu.service.vo.infra.logger.operatelog.OperateLogPageReqVO;
import com.xiyu.service.vo.infra.logger.operatelog.OperateLogRespVO;
import com.xiyu.service.convert.infra.logger.OperateLogConvert;
import com.xiyu.service.model.infra.logger.SystemOperateLog;
import com.xiyu.service.model.infra.logger.SystemOperateLogDraft;
import com.xiyu.service.repository.infra.logger.SystemOperateLogRepository;
import com.xiyu.service.service.system.user.UserService;
import lombok.extern.slf4j.Slf4j;
import org.babyfish.jimmer.ImmutableObjects;
import org.babyfish.jimmer.Page;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import jakarta.annotation.Resource;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

import static com.xiyu.service.util.collection.CollectionUtils.convertSet;

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
