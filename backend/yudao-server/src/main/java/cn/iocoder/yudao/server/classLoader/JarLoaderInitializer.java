package cn.iocoder.yudao.server.classLoader;

import cn.hutool.core.io.FileUtil;
import org.springframework.context.ApplicationContextInitializer;
import org.springframework.context.ConfigurableApplicationContext;

import java.net.URLClassLoader;
import java.util.Map;
import java.util.Set;

public class JarLoaderInitializer implements ApplicationContextInitializer<ConfigurableApplicationContext> {

    private final VersionedJarLoader jarLoader = new VersionedJarLoader();

    @Override
    public void initialize(ConfigurableApplicationContext applicationContext) {
        try {
            // 加载所有 JAR 包
            String path = FileUtil.getParent(FileUtil.getAbsolutePath(""), 3);
            System.out.println("Executable Path: " + FileUtil.getParent(FileUtil.getAbsolutePath(""), 3));
            jarLoader.loadJars(path + "/yudao-service");

            // 遍历所有已加载的 JAR 包
            for (Map.Entry<String, URLClassLoader> entry : jarLoader.getLoaders().entrySet()) {
                String version = entry.getKey();
                URLClassLoader loader = entry.getValue();

                // 扫描组件并注册 Bean
                Set<Class<?>> components = new ComponentScanner().scanComponents(loader, "com.example.module");
                new BeanRegister(applicationContext).registerBeans(components, loader);
            }
        } catch (Exception e) {
            throw new RuntimeException("Failed to load jars and register beans", e);
        }
    }
}