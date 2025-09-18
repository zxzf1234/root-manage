package com.xiyu.service.framework.captcha.config;

import cn.hutool.core.util.ClassUtil;
import com.xiyu.service.framework.captcha.core.enums.CaptchaRedisKeyConstants;
import org.springframework.boot.autoconfigure.AutoConfiguration;

@AutoConfiguration
public class CaptchaConfiguration {

    static {
        // 手动加载 Lock4jRedisKeyConstants 类，因为它不会被使用到
        // 如果不加载，会导致 Redis 监控，看到它的 Redis Key 枚举
        ClassUtil.loadClass(CaptchaRedisKeyConstants.class.getName());
    }

//    @Bean
//    public CaptchaCacheService captchaCacheService(StringRedisTemplate stringRedisTemplate) {
//        return new RedisCaptchaServiceImpl(stringRedisTemplate);
//    }

}
