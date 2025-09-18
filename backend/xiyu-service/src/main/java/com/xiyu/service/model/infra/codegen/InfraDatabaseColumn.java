package com.xiyu.service.model.infra.codegen;

import com.xiyu.service.model.base.BaseEntity;
import org.babyfish.jimmer.sql.*;
import java.time.LocalDateTime;
import org.jetbrains.annotations.Nullable;
import java.util.List;
import org.babyfish.jimmer.sql.meta.UUIDIdGenerator;
import java.util.UUID;
@Entity
public interface InfraDatabaseColumn extends BaseEntity {
    @Id
    @GeneratedValue(generatorType = UUIDIdGenerator.class)
    UUID id();

    @IdView
    @Nullable
    UUID tableId();

    @Key
    @ManyToOne
    @Nullable
    InfraDatabaseTable table();

    @Key
    String columnName();

    String dataType();

    String columnComment();

    Boolean nullable();

    String defaultValue();

    String javaType();

    String dictType();

    String example();

    Boolean required();

    String relatedTable();

    Integer sort();

    Integer relatedTableType();

    @Nullable
    @LogicalDeleted("now")
    LocalDateTime deletedTime();

    @Transient(InfraInterfaceValidationResolver.class)
    List<InfraInterfaceValidation> validations();

}