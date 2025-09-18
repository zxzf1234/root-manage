package com.xiyu.service.model.infra.codegen;

import com.xiyu.service.model.base.BaseEntity;
import org.babyfish.jimmer.sql.*;
import java.time.LocalDateTime;
import org.jetbrains.annotations.Nullable;
import java.util.List;
import org.babyfish.jimmer.sql.meta.UUIDIdGenerator;
import java.util.UUID;

@Entity
public interface InfraInterfaceParam extends BaseEntity {
    @Id
    @GeneratedValue(generatorType = UUIDIdGenerator.class)
    UUID id();

    @Key
    String name();

    String comment();

    Boolean isList();

    String variableType();

    String relatedId();

    Integer relatedType();

    String example();

    Boolean required();

    @Key
    UUID parentId();

    Integer parentType();

    @Key
    Integer inoutType();

    String relatedColumn();

    Integer sort();

    @Nullable
    @LogicalDeleted("now")
    LocalDateTime deletedTime();

    @Transient(InfraInterfaceValidationResolver.class)
    List<InfraInterfaceValidation> validations();

}