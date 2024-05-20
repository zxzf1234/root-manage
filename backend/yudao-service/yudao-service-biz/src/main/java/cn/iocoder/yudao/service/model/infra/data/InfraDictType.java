package cn.iocoder.yudao.service.model.infra.data;

import cn.iocoder.yudao.service.model.base.BaseEntity;
import cn.iocoder.yudao.service.model.infra.data.InfraDictData;
import org.babyfish.jimmer.sql.*;
import java.time.LocalDateTime;
import org.jetbrains.annotations.Nullable;
import java.util.List;
import org.babyfish.jimmer.sql.meta.UUIDIdGenerator;
import java.util.UUID;
@Entity
public interface InfraDictType extends BaseEntity {
    @Id
    @GeneratedValue(generatorType = UUIDIdGenerator.class)
    UUID id();

    String name();

    String type();

    Integer status();

    String remark();

    String firstModule();

    String secondModule();

    @Nullable
    @LogicalDeleted("now")
    LocalDateTime deletedTime();

    @OneToMany(mappedBy = "type", orderedProps =@OrderedProp("sort"))
    List<InfraDictData> datas();

}