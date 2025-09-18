package com.xiyu.service.dal.applicationInit;

import com.xiyu.service.service.infra.codegen.inner.CodegenEngine;
import com.xiyu.service.service.infra.file.FileConfigService;
import jakarta.annotation.Resource;
import org.jetbrains.annotations.NotNull;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

@Component
public class ApplicationInit implements ApplicationListener<ContextRefreshedEvent> {

    @Resource
    private FileConfigService fileConfigService;

    @Resource
    private CodegenEngine codegenEngine;

    /**
     * 项目启动时，初始化参数
     */
    @Override
    public void onApplicationEvent(@NotNull ContextRefreshedEvent contextRefreshedEvent) {
        fileConfigService.initLocalCache();
        codegenEngine.initGlobalBindingMap();
    }
}
