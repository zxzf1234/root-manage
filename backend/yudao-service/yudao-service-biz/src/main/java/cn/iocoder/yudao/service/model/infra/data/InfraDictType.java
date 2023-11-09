package cn.iocoder.yudao.service.model.infra.data;

import cn.iocoder.yudao.service.model.base.BaseEntity;
import org.babyfish.jimmer.sql.*;
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

    @OneToMany(mappedBy = "type")
    List<InfraDictData> datas();

}