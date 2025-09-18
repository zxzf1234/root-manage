package com.xiyu.service.model.infra.codegen;

import com.xiyu.service.model.base.BaseEntity;
import org.babyfish.jimmer.sql.*;
import java.time.LocalDateTime;
import org.jetbrains.annotations.Nullable;
import org.babyfish.jimmer.sql.meta.UUIDIdGenerator;
import java.util.UUID;

@Entity
public interface InfraInterfaceValidation extends BaseEntity {
    @Id
    @GeneratedValue(generatorType = UUIDIdGenerator.class)
    UUID id();

    @Key
    UUID parentId();

    Integer parentType();

    @Key
    String validation();

    String validationCondition();

    String message();

    @Nullable
    @LogicalDeleted("now")
    LocalDateTime deletedTime();

}