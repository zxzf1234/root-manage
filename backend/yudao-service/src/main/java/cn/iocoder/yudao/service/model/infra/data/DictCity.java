package cn.iocoder.yudao.service.model.infra.data;

import cn.iocoder.yudao.service.model.base.BaseEntity;
import cn.iocoder.yudao.service.model.infra.data.DictProvince;
import org.babyfish.jimmer.sql.*;
import java.time.LocalDateTime;
import org.jetbrains.annotations.Nullable;

@Entity
public interface DictCity extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id();

    @IdView
    @Nullable
    Long provinceId();

    @ManyToOne
    @Nullable
    @OnDissociate(DissociateAction.DELETE)
    DictProvince province();

    String name();

    String pinyin();

    String cityCode();

    @Nullable
    @LogicalDeleted("now")
    LocalDateTime deletedTime();

}