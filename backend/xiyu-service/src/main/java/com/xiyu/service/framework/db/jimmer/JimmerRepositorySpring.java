package com.xiyu.service.framework.db.jimmer;

import org.babyfish.jimmer.spring.repository.EnableJimmerRepositories;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableJimmerRepositories(basePackages= {"com.yudao.service.repository"})
public class JimmerRepositorySpring {
}
