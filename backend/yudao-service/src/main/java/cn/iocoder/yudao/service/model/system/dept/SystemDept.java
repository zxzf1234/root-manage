package cn.iocoder.yudao.service.model.system.dept;

import cn.iocoder.yudao.service.model.base.BaseEntity;
import cn.iocoder.yudao.service.model.system.dept.SystemDeptLeader;
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