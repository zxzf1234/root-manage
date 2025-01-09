package cn.iocoder.yudao.server.classLoader;

import cn.hutool.core.io.FileUtil;
import jakarta.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.stereotype.Service;

import java.net.URLClassLoader;
import java.util.Map;
import java.util.Set;

//@Service
@Slf4j
public class JarLoadingService {

    private final ConfigurableApplicationContext applicationContext;
    private final VersionedJarLoader jarLoader = new VersionedJarLoader();

//    @Autowired
    public JarLoadingService(ConfigurableApplicationContext applicationContext) {
        this.applicationContext = applicationContext;
    }

    @PostConstruct
    public void init() {
        try {
            // 加载所有 JAR 包
            String path = FileUtil.getParent(FileUtil.getAbsolutePath(""), 3);
            System.out.println("Executable Path: " + FileUtil.getParent(FileUtil.getAbsolutePath(""), 3));
            jarLoader.loadJars(path + "/yudao-service");

            // 遍历所有已加载的 JAR 包
            for (Map.Entry<String, URLClassLoader> entry : jarLoader.getLoaders().entrySet()) {
                log.info("******* 开始加载JAR包 " + entry.getKey() +"  ******");
                String version = entry.getKey();
                URLClassLoader loader = entry.getValue();

                // 扫描组件并注册 Bean
                Set<Class<?>> components = new ComponentScanner().scanComponents(loader, "cn.iocoder.yudao.service");
                new BeanRegister(applicationContext).registerBeans(components, loader);
            }
        } catch (Exception e) {
            throw new RuntimeException("Failed to load jars and register beans", e);
        }
    }
}