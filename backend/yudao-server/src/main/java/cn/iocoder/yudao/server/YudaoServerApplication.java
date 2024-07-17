package cn.iocoder.yudao.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.babyfish.jimmer.spring.repository.EnableJimmerRepositories;

@SuppressWarnings("SpringComponentScan")
@SpringBootApplication(scanBasePackages = {"cn.iocoder.yudao.server", "cn.iocoder.yudao.service"})
@EnableJimmerRepositories(basePackages= {"cn.iocoder.yudao.service.repository"})
public class YudaoServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(YudaoServerApplication.class, args);
    }

}
