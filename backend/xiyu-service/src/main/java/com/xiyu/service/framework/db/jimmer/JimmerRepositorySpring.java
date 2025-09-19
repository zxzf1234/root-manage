package com.xiyu.service.framework.db.jimmer;

import org.babyfish.jimmer.spring.repository.EnableJimmerRepositories;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableJimmerRepositories(basePackages= {"com.xiyu.service.repository"})
public class JimmerRepositorySpring {
}
