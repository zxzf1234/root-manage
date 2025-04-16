package cn.iocoder.yudao.service.model.system.role;

import cn.iocoder.yudao.service.model.base.BaseEntity;
import cn.iocoder.yudao.service.model.infra.codegen.InfraDatabaseColumn;
import cn.iocoder.yudao.service.model.system.role.SystemRole;
import org.babyfish.jimmer.sql.*;
import java.time.LocalDateTime;
import org.jetbrains.annotations.Nullable;
import org.babyfish.jimmer.sql.meta.UUIDIdGenerator;
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