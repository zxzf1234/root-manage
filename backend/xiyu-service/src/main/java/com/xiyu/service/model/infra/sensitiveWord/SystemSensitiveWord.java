package com.xiyu.service.model.infra.sensitiveWord;

import com.xiyu.service.model.base.BaseEntity;
import org.babyfish.jimmer.sql.*;
import org.jetbrains.annotations.Nullable;

import java.util.List;

@Entity
public interface SystemSensitiveWord extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id();

    String name();

    @Nullable
    String description();

    @Nullable
    @Serialized
    List<String> tags();

    int status();

}
