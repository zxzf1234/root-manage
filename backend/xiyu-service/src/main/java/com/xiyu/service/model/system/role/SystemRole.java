package com.xiyu.service.model.system.role;

import com.xiyu.service.model.base.BaseEntity;
import org.babyfish.jimmer.sql.*;
import java.time.LocalDateTime;
import org.jetbrains.annotations.Nullable;
import java.util.List;

@Entity
public interface SystemRole extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id();

    String name();

    String code();

    Integer sort();

    Integer dataScope();

    @Serialized
    List<Long> dataScopeDeptIds();

    Integer status();

    Integer type();

    String remark();

    @Nullable
    @LogicalDeleted("now")
    LocalDateTime deletedTime();

}