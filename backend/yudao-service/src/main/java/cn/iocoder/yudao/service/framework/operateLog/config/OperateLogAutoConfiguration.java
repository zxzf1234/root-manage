package cn.iocoder.yudao.service.framework.operateLog.config;

import cn.iocoder.yudao.service.framework.operateLog.core.aop.OperateLogAspect;
import cn.iocoder.yudao.service.framework.operateLog.core.service.OperateLogFrameworkService;
import cn.iocoder.yudao.service.framework.operateLog.core.service.OperateLogFrameworkServiceImpl;
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
