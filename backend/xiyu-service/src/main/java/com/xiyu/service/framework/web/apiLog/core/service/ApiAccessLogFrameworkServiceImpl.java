package com.xiyu.service.framework.web.apiLog.core.service;

import cn.hutool.core.bean.BeanUtil;
import com.xiyu.service.vo.infra.logger.apiaccesslog.ApiAccessLogCreateReqVO;
import com.xiyu.service.service.infra.logger.ApiAccessLogService;
import org.springframework.scheduling.annotation.Async;

import jakarta.annotation.Resource;

/**
 * API 访问日志 Framework Service 实现类
 *
 * @author 芋道源码
 */
public class ApiAccessLogFrameworkServiceImpl implements ApiAccessLogFrameworkService {

    @Resource
    private ApiAccessLogService apiAccessLogService;

    @Override
    @Async
    public void createApiAccessLog(ApiAccessLog apiAccessLog) {
        ApiAccessLogCreateReqVO reqDTO = BeanUtil.copyProperties(apiAccessLog, ApiAccessLogCreateReqVO.class);
        apiAccessLogService.createApiAccessLog(reqDTO);
    }

}
