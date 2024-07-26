package cn.iocoder.yudao.service.framework.web.apiLog.config;

import cn.iocoder.yudao.service.framework.web.apiLog.core.filter.ApiAccessLogFilter;
import cn.iocoder.yudao.service.framework.web.apiLog.core.service.ApiAccessLogFrameworkService;
import cn.iocoder.yudao.service.framework.web.apiLog.core.service.ApiAccessLogFrameworkServiceImpl;
import cn.iocoder.yudao.service.framework.web.apiLog.core.service.ApiErrorLogFrameworkService;
import cn.iocoder.yudao.service.framework.web.apiLog.core.service.ApiErrorLogFrameworkServiceImpl;
import cn.iocoder.yudao.service.enums.common.WebFilterOrderEnum;
import cn.iocoder.yudao.service.framework.web.web.config.WebProperties;
import cn.iocoder.yudao.service.framework.web.web.config.WebAutoConfiguration;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

import javax.servlet.Filter;

@AutoConfiguration(after = WebAutoConfiguration.class)
public class ApiLogAutoConfiguration {

    @Bean
    public ApiAccessLogFrameworkService apiAccessLogFrameworkService() {
        return new ApiAccessLogFrameworkServiceImpl();
    }

    @Bean
    public ApiErrorLogFrameworkService apiErrorLogFrameworkService() {
        return new ApiErrorLogFrameworkServiceImpl();
    }

    /**
     * 创建 ApiAccessLogFilter Bean，记录 API 请求日志
     */
    @Bean
    @ConditionalOnProperty(prefix = "yudao.access-log", value = "enable", matchIfMissing = true) // 允许使用 yudao.access-log.enable=false 禁用访问日志
    public FilterRegistrationBean<ApiAccessLogFilter> apiAccessLogFilter(WebProperties webProperties,
                                                                         @Value("${spring.application.name}") String applicationName,
                                                                         ApiAccessLogFrameworkService apiAccessLogFrameworkService) {
        ApiAccessLogFilter filter = new ApiAccessLogFilter(webProperties, applicationName, apiAccessLogFrameworkService);
        return createFilterBean(filter, WebFilterOrderEnum.API_ACCESS_LOG_FILTER);
    }

    private static <T extends Filter> FilterRegistrationBean<T> createFilterBean(T filter, Integer order) {
        FilterRegistrationBean<T> bean = new FilterRegistrationBean<>(filter);
        bean.setOrder(order);
        return bean;
    }

}
