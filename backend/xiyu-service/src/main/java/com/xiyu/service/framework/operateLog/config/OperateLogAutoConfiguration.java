package com.xiyu.service.framework.operateLog.config;

import com.xiyu.service.framework.operateLog.core.aop.OperateLogAspect;
import com.xiyu.service.framework.operateLog.core.service.OperateLogFrameworkService;
import com.xiyu.service.framework.operateLog.core.service.OperateLogFrameworkServiceImpl;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.context.annotation.Bean;

@AutoConfiguration
public class OperateLogAutoConfiguration {

    @Bean
    public OperateLogAspect operateLogAspect() {
        return new OperateLogAspect();
    }

    @Bean
    public OperateLogFrameworkService operateLogFrameworkService() {
        return new OperateLogFrameworkServiceImpl();
    }

}
