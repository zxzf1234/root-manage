package com.xiyu.service.model.infra.data;

import com.xiyu.service.model.base.BaseEntity;
import org.babyfish.jimmer.sql.*;
import java.time.LocalDateTime;
import org.jetbrains.annotations.Nullable;

@Entity
public interface DictDistrict extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id();

    @IdView
    @Nullable
    Long cityId();

    @ManyToOne
    @Nullable
    @OnDissociate(DissociateAction.DELETE)
    DictCity city();

    String name();

    String pinyin();

    String districtCode();

    @Nullable
    @LogicalDeleted("now")
    LocalDateTime deletedTime();

}