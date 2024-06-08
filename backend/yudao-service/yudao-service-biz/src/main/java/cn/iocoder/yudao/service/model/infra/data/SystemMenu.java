package cn.iocoder.yudao.service.model.infra.data;

import cn.iocoder.yudao.service.model.base.BaseEntity;
import org.babyfish.jimmer.sql.*;
import java.time.LocalDateTime;
import java.util.UUID;

import org.babyfish.jimmer.sql.meta.UUIDIdGenerator;
import org.jetbrains.annotations.Nullable;

@Entity
public interface SystemMenu extends BaseEntity {
    @Id
    @GeneratedValue(generatorType = UUIDIdGenerator.class)
    UUID id();

    String name();

    String permission();

    Integer type();

    Integer sort();

    String parentId();

    String path();

    String icon();

    String component();

    String componentName();

    Integer status();

    Boolean visible();

    Boolean keepAlive();

    Boolean alwaysShow();

    Boolean backShow();

    @Nullable
    @LogicalDeleted("now")
    LocalDateTime deletedTime();

}