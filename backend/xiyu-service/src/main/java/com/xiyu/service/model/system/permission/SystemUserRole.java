package com.xiyu.service.model.system.permission;

import com.xiyu.service.model.base.BaseEntity;
import org.babyfish.jimmer.sql.*;
import java.time.LocalDateTime;
import org.jetbrains.annotations.Nullable;
@Entity
public interface SystemUserRole extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id();

    Long userId();

    Long roleId();

    @Nullable
    @LogicalDeleted("now")
    LocalDateTime deletedTime();

}