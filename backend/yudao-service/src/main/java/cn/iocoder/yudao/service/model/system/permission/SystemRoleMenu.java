package cn.iocoder.yudao.service.model.system.permission;

import cn.iocoder.yudao.service.model.base.BaseEntity;
import org.babyfish.jimmer.sql.*;
import java.time.LocalDateTime;
import java.util.UUID;

import org.jetbrains.annotations.Nullable;

@Entity
public interface SystemRoleMenu extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id();

    Long roleId();

    UUID menuId();

    @Nullable
    @LogicalDeleted("now")
    LocalDateTime deletedTime();

}