package cn.iocoder.yudao.service.model.infra.codegen;

import cn.iocoder.yudao.service.model.base.BaseEntity;
import org.babyfish.jimmer.sql.*;
import java.time.LocalDateTime;
import org.jetbrains.annotations.Nullable;
import org.babyfish.jimmer.sql.meta.UUIDIdGenerator;
import java.util.UUID;

@Entity
public interface InfraInterfaceModule extends BaseEntity {
    @Id
    @GeneratedValue(generatorType = UUIDIdGenerator.class)
    UUID id();

    String name();

    String comment();

    String parentId();

    Integer type();

    Long sort();

    @Nullable
    @LogicalDeleted("now")
    LocalDateTime deletedTime();

}