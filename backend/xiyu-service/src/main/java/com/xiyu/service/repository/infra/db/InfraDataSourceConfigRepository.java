package com.xiyu.service.repository.infra.db;

import com.xiyu.service.model.infra.db.InfraDataSourceConfig;
import org.babyfish.jimmer.spring.repository.JRepository;

public interface InfraDataSourceConfigRepository extends JRepository<InfraDataSourceConfig, Long> {
}
