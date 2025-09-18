package com.xiyu.service.framework.web.apiLog.core.service;

import cn.hutool.core.bean.BeanUtil;
import com.xiyu.service.vo.infra.logger.apierrorlog.ApiErrorLogCreateReqVO;
import com.xiyu.service.service.infra.logger.ApiErrorLogService;
import org.springframework.scheduling.annotation.Async;

import jakarta.annotation.Resource;

/**
 * API 错误日志 Framework Service 实现类
 *
 * 基于 {@link ApiErrorLogService} 服务，记录错误日志
 *
 * @author 芋道源码
 */
public class ApiErrorLogFrameworkServiceImpl implements ApiErrorLogFrameworkService {

    @Resource
    private ApiErrorLogService apiErrorLogService;

    @Override
    @Async
    public void createApiErrorLog(ApiErrorLog apiErrorLog) {
        ApiErrorLogCreateReqVO reqDTO = BeanUtil.copyProperties(apiErrorLog, ApiErrorLogCreateReqVO.class);
        apiErrorLogService.createApiErrorLog(reqDTO);
    }

}
