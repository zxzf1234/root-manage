package com.xiyu.server;

import cn.hutool.core.thread.ThreadUtil;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

import java.util.concurrent.TimeUnit;

@SpringBootApplication(scanBasePackages = {"com.xiyu.server","com.xiyu.service"})
public class ServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(ServerApplication.class, args);
        ThreadUtil.execute(() -> {
            ThreadUtil.sleep(1, TimeUnit.SECONDS); // 延迟 1 秒，保证输出到结尾
            System.out.println("----------------------------------------------------------\n\t" +
                    "项目启动成功！\n" +
                    "----------------------------------------------------------");
        });
    }

}
