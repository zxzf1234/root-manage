package com.xiyu.service.model.system.role;

import com.xiyu.service.model.base.BaseEntity;
import com.xiyu.service.model.infra.codegen.InfraDatabaseColumn;
import org.babyfish.jimmer.sql.*;
import java.time.LocalDateTime;
import org.jetbrains.annotations.Nullable;

import java.util.UUID;

@Entity
public interface SystemRoleAssignColumn extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id();

    @IdView
    @Nullable
    UUID columnId();

    @ManyToOne
    @Nullable
    @OnDissociate(DissociateAction.DELETE)
    InfraDatabaseColumn column();

    @IdView
    @Nullable
    Long roleId();

    @ManyToOne
    @Nullable
    @OnDissociate(DissociateAction.DELETE)
    SystemRole role();

    @Nullable
    @LogicalDeleted("now")
    LocalDateTime deletedTime();

}