package cn.iocoder.yudao.server;

import cn.hutool.core.thread.ThreadUtil;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.babyfish.jimmer.spring.repository.EnableJimmerRepositories;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

import java.util.concurrent.TimeUnit;

@SuppressWarnings("SpringComponentScan")
@SpringBootApplication(scanBasePackages = {"cn.iocoder.yudao.server", "cn.iocoder.yudao.service"})
@EnableJimmerRepositories(basePackages= {"cn.iocoder.yudao.service.repository"})
public class YudaoServerApplication extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(YudaoServerApplication.class, args);
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

}
