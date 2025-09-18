package com.xiyu.service.model.infra.data;

import com.xiyu.service.model.base.BaseEntity;
import org.babyfish.jimmer.sql.*;
import java.time.LocalDateTime;
import org.jetbrains.annotations.Nullable;

@Entity
public interface DictCountry extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id();

    String name();

    String countryCode();

    String pinyin();

    @Nullable
    @LogicalDeleted("now")
    LocalDateTime deletedTime();

}