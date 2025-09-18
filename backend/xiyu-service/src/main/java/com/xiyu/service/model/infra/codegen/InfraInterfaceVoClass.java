package com.xiyu.service.model.infra.codegen;

import com.xiyu.service.model.base.BaseEntity;
import org.babyfish.jimmer.sql.*;
import org.babyfish.jimmer.sql.meta.UUIDIdGenerator;
import java.util.UUID;
@Entity
public interface InfraInterfaceVoClass extends BaseEntity {
    @Id
    @GeneratedValue(generatorType = UUIDIdGenerator.class)
    UUID id();

    @Key
    String name();

    String comment();

    Integer type();

    String parentId();

}