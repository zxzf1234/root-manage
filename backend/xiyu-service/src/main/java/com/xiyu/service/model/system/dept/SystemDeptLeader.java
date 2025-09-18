package com.xiyu.service.model.system.dept;

import com.xiyu.service.model.base.BaseEntity;
import com.xiyu.service.model.system.user.SystemUser;
import org.babyfish.jimmer.sql.*;
import java.time.LocalDateTime;
import org.jetbrains.annotations.Nullable;

@Entity
public interface SystemDeptLeader extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id();

    @IdView
    @Nullable
    Long deptId();

    @ManyToOne
    @Nullable
    @OnDissociate(DissociateAction.DELETE)
    SystemDept dept();

    @IdView
    @Nullable
    Long leaderId();

    @ManyToOne
    @Nullable
    @OnDissociate(DissociateAction.DELETE)
    SystemUser leader();

    @Nullable
    @LogicalDeleted("now")
    LocalDateTime deletedTime();

}