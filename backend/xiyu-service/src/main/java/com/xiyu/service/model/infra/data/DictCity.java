package com.xiyu.service.model.infra.data;

import com.xiyu.service.model.base.BaseEntity;
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