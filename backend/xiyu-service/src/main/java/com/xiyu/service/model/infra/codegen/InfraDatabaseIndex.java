package com.xiyu.service.model.infra.codegen;

import com.xiyu.service.model.base.BaseEntity;
import org.babyfish.jimmer.sql.*;
import java.time.LocalDateTime;
import org.jetbrains.annotations.Nullable;
import java.util.List;
import org.babyfish.jimmer.sql.meta.UUIDIdGenerator;
import java.util.UUID;
@Entity
public interface InfraDatabaseIndex extends BaseEntity {
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

    String indexType();

    @Key
    String indexName();

    @Serialized
    List<String> columnNames();

    @Nullable
    @LogicalDeleted("now")
    LocalDateTime deletedTime();

}