package com.xiyu.service.model.infra.data;

import com.xiyu.service.model.base.BaseEntity;
import org.babyfish.jimmer.sql.*;
import java.time.LocalDateTime;
import org.jetbrains.annotations.Nullable;

@Entity
public interface DictProvince extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id();

    @IdView
    @Nullable
    Long countryId();

    @ManyToOne
    @Nullable
    @OnDissociate(DissociateAction.DELETE)
    DictCountry country();

    String name();

    String pinyin();

    String provinceCode();

    @Nullable
    @LogicalDeleted("now")
    LocalDateTime deletedTime();

}