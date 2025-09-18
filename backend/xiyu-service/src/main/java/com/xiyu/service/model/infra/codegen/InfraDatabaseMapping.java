package com.xiyu.service.model.infra.codegen;

import com.xiyu.service.model.base.BaseEntity;
import org.babyfish.jimmer.sql.*;
import java.time.LocalDateTime;
import org.jetbrains.annotations.Nullable;
import org.babyfish.jimmer.sql.meta.UUIDIdGenerator;
import java.util.UUID;
@Entity
public interface InfraDatabaseMapping extends BaseEntity {
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
    String name();

    Boolean isList();

    String annotate();

    String mappingTable();

    @Nullable
    @LogicalDeleted("now")
    LocalDateTime deletedTime();

}