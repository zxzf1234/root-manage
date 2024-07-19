package cn.iocoder.yudao.service.model.infra.data;

import cn.iocoder.yudao.service.model.base.BaseEntity;
import org.babyfish.jimmer.sql.*;
import java.time.LocalDateTime;
import org.jetbrains.annotations.Nullable;
import org.babyfish.jimmer.sql.meta.UUIDIdGenerator;
import java.util.UUID;

@Entity
public interface InfraConfig extends BaseEntity {
    @Id
    @GeneratedValue(generatorType = UUIDIdGenerator.class)
    UUID id();

    String category();

    Integer type();

    String name();

    String configKey();

    String value();

    Boolean visible();

    String remark();

    @Nullable
    @LogicalDeleted("now")
    LocalDateTime deletedTime();

}