package com.xiyu.service.model.infra.data;

import com.xiyu.service.model.base.BaseEntity;
import org.babyfish.jimmer.sql.*;
import java.time.LocalDateTime;
import org.jetbrains.annotations.Nullable;
import org.babyfish.jimmer.sql.meta.UUIDIdGenerator;
import java.util.UUID;
@Entity
public interface InfraDictNo extends BaseEntity {
    @Id
    @GeneratedValue(generatorType = UUIDIdGenerator.class)
    UUID id();

    @Key
    String keyName();

    String prefix();

    Integer dateForm();

    Integer dateBase();

    @Nullable
    LocalDateTime lastDate();

    Integer postfixLen();

    Integer postfixVal();

    String remark();

    @Nullable
    @LogicalDeleted("now")
    LocalDateTime deletedTime();

}