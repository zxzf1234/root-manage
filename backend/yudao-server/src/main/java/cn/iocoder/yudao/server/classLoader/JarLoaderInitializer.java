package cn.iocoder.yudao.server.classLoader;

import cn.hutool.core.io.FileUtil;
import org.springframework.core.io.Resource;
import cn.iocoder.yudao.server.YudaoServerApplication;
import jakarta.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextInitializer;
import org.springframework.context.ApplicationListener;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.*;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.core.io.support.ResourcePropertySource;
import org.springframework.core.type.filter.AnnotationTypeFilter;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.core.io.ClassPathResource;

import java.io.File;
import java.io.IOException;
import java.net.JarURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLClassLoader;
import java.nio.file.DirectoryStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;
import java.util.jar.JarEntry;
import java.util.jar.JarFile;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

//@Service
public class JarLoaderInitializer  {

    private final ConfigurableApplicationContext applicationContext;

    @Autowired
    public JarLoaderInitializer(ConfigurableApplicationContext applicationContext) {
        this.applicationContext = applicationContext;
    }
//    @Override
//    @PostConstruct
    public void initialize() {
        try {
            // 加载所有 JAR 包
            String directory = FileUtil.getParent(FileUtil.getAbsolutePath(""), 3) + "/yudao-service/target";
            System.out.println("Executable Path: " + directory);

            Set<String> jarPaths = listJars(directory);
            List<String> classList = new ArrayList<>();
            Set<Class<?>> components = new HashSet<>();
            for(String jarPath : jarPaths){
                System.out.println("******* 开始加载JAR包 " + jarPath +"  ******");
                System.out.println(applicationContext.getId());

                AnnotationConfigApplicationContext jarContext = new AnnotationConfigApplicationContext();
                jarContext.setId(jarPath);

                jarContext.setParent(applicationContext);

                String version = extractVersionFromJarPath(jarPath);
                JarClassLoader urlClassLoader = getURLClassLoader(jarPath);
                jarContext.setClassLoader(urlClassLoader);
//                jarContext.register();

                File jarFile = new File(jarPath);
                if (!jarFile.exists()) {
                    System.out.println("JAR file does not exist: " + jarPath);
                    continue;
                }
                // 加载JAR文件
                JarFile jar = new JarFile(jarFile);
                Enumeration<JarEntry> entries = jar.entries();

                // 遍历JAR文件中的所有条目
                while (entries.hasMoreElements()) {
                    JarEntry entry = entries.nextElement();
                    String entryName = entry.getName();

                    // 如果是class文件，则加载
                    if (entryName.endsWith(".class")) {
                        String className = entryName.replace("/", ".").replace(".class", "");
                        try {
                            // 加载类
                            Class<?> clazz = urlClassLoader.loadClass(className);
                            components.add(clazz);
//                            System.out.println("Loaded class: " + clazz.getName());
                        } catch (ClassNotFoundException e) {
                            e.printStackTrace();
                        }
                    }
                }
                jar.close();

//                new BeanRegister(jarContext).registerBeans(components, urlClassLoader);
                loadJarClassesToContext(jarPath, jarContext);
                jarContext.refresh();
                System.out.println("开始输出 applicationContext*******************");
                System.out.println(Arrays.toString(jarContext.getBeanDefinitionNames()));
                System.out.println(Arrays.toString(applicationContext.getBeanDefinitionNames()));
                System.out.println("结束 *******************");
            }

        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to load jars and register beans", e);
        }
    }

    private void loadJarClassesToContext(String jarPath, AnnotationConfigApplicationContext context) throws Exception {
        // 创建 URLClassLoader 用于加载 JAR 文件
        URLClassLoader classLoader = new URLClassLoader(new URL[]{new URL("file://" + jarPath)}, getClass().getClassLoader());

        // 注册配置类，用 @ComponentScan 扫描指定的包
        context.register(JarAppConfig.class); // 注册 @Configuration 类

        // 这里可以使用 PathMatchingResourcePatternResolver 或者自定义扫描逻辑，注册具体的类或资源
        // 自定义类扫描逻辑可以添加在这里，假设 `scanJarClasses(jarPath)` 用来扫描 JAR 包中的类并返回需要注册的类

        // 加载扫描的类到 ApplicationContext 中
        context.scan("cn.iocoder.yudao.service");  // 扫描指定的包或类路径
    }

    private Set<String> listJars(String directory) {
        Set<String> jarPaths = new HashSet<>();
        Path dir = Paths.get(directory);

        if (Files.isDirectory(dir)) {
            try (DirectoryStream<Path> stream = Files.newDirectoryStream(dir, "*.jar")) {
                for (Path entry : stream) {
                    jarPaths.add(entry.toAbsolutePath().toString());
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        } else {
            throw new IllegalArgumentException("Provided path is not a directory: " + directory);
        }

        return jarPaths;
    }

    private String extractVersionFromJarPath(String jarPath) {
        // 定义一个正则表达式来匹配 JAR 文件名中的版本号
        Pattern pattern = Pattern.compile("yudao-service-(\\d+\\.\\d+\\.\\d+-snapshot).jar");
        Matcher matcher = pattern.matcher(new File(jarPath).getName());

        if (matcher.find()) {
            return matcher.group(1); // 返回第一个捕获组，即版本号
        } else {
            throw new IllegalArgumentException("Cannot extract version from JAR file name: " + jarPath);
        }
    }

    private JarClassLoader getURLClassLoader(String jarPath) throws MalformedURLException {

        URL[] urls = {new File(jarPath).toURI().toURL()};
        return new JarClassLoader(jarPath);
    }
}