package cn.iocoder.yudao.server;

import cn.hutool.core.io.FileUtil;
import cn.hutool.core.thread.ThreadUtil;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import java.io.IOException;
import java.nio.file.DirectoryStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;
import java.util.concurrent.TimeUnit;

@SpringBootApplication(scanBasePackages = {"cn.iocoder.yudao.server"})
public class YudaoServerApplication extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(YudaoServerApplication.class, args);
//        initialize(args);
        ThreadUtil.execute(() -> {
            ThreadUtil.sleep(1, TimeUnit.SECONDS); // 延迟 1 秒，保证输出到结尾
            System.out.println("----------------------------------------------------------\n\t" +
                    "项目启动成功！\n" +
                    "----------------------------------------------------------");
        });
    }

    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder){
        return builder.sources(YudaoServerApplication.class);
    }

    private static void initialize(String[] args) {
        String directory = FileUtil.getParent(FileUtil.getAbsolutePath(""), 3) + "/yudao-service/target";
        System.out.println("Executable Path: " + directory);

        Set<String> jarPaths = listJars(directory);
        List<String> classList = new ArrayList<>();
        Set<Class<?>> components = new HashSet<>();
//        for(String jarPath : jarPaths){
//            ConfigurableApplicationContext app = new SpringApplication(YudaoServerApplication.class, args);
            ConfigurableApplicationContext app = SpringApplication.run(YudaoServerApplication.class, args);
//        }


        // 创建新的 ApplicationContext
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext();

        // 注册默认的配置类（这些类包含了所有 Bean 配置）
//        context.register(YudaoServerApplication.class);
        context.setParent(app);

        // 刷新 ApplicationContext 使其生效
        context.refresh();
        System.out.println(Arrays.toString(context.getParent().getBeanDefinitionNames()));
        System.out.println(Arrays.toString(context.getBeanDefinitionNames()));
    }

    private static Set<String> listJars(String directory) {
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

}
