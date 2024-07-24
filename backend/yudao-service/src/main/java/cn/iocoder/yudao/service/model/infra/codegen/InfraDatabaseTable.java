package cn.iocoder.yudao.service.model.infra.codegen;

import cn.iocoder.yudao.service.model.base.BaseEntity;
import cn.iocoder.yudao.service.model.infra.codegen.InfraDatabaseColumn;
import cn.iocoder.yudao.service.model.infra.codegen.InfraDatabaseIndex;
import cn.iocoder.yudao.service.model.infra.codegen.InfraDatabaseMapping;
import org.babyfish.jimmer.sql.*;
import java.time.LocalDateTime;
import org.jetbrains.annotations.Nullable;
import java.util.List;
import org.babyfish.jimmer.sql.meta.UUIDIdGenerator;
import java.util.UUID;

@Entity
public interface InfraDatabaseTable extends BaseEntity {
    @Id
    @GeneratedValue(generatorType = UUIDIdGenerator.class)
    UUID id();

    @Key
    String name();

    String comment();

    String remark();

    String firstModule();

    String secondModule();

    @Nullable
    @LogicalDeleted("now")
    LocalDateTime deletedTime();

    @OneToMany(mappedBy = "table", orderedProps =@OrderedProp("sort"))
    List<InfraDatabaseColumn> columns();

    @OneToMany(mappedBy = "table")
    List<InfraDatabaseIndex> indexes();

    @OneToMany(mappedBy = "table")
    List<InfraDatabaseMapping> mappings();

}