package com.xiyu.service.model.system.dept;

import com.xiyu.service.model.base.BaseEntity;
import org.babyfish.jimmer.sql.*;
import java.time.LocalDateTime;
import org.jetbrains.annotations.Nullable;
import java.util.List;

@Entity
public interface SystemDept extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id();

    String name();

    Long parentId();

    Integer sort();

    String phone();

    String email();

    Integer status();

    @Nullable
    @LogicalDeleted("now")
    LocalDateTime deletedTime();

    @OneToMany(mappedBy = "dept")
    List<SystemDeptLeader> leaders();

}