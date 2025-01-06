package cn.iocoder.yudao.service.framework.db.jimmer;

import org.babyfish.jimmer.spring.repository.EnableJimmerRepositories;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableJimmerRepositories(basePackages= {"cn.iocoder.yudao.service.repository"})
public class JimmerRepositorySpring {
}
