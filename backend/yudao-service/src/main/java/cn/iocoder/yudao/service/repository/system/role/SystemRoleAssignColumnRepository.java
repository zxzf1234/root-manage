package cn.iocoder.yudao.service.repository.system.role;

import cn.iocoder.yudao.service.model.infra.codegen.InfraDatabaseColumnFetcher;
import cn.iocoder.yudao.service.model.infra.codegen.InfraDatabaseTableFetcher;
import cn.iocoder.yudao.service.model.system.role.SystemRoleAssignColumn;
import cn.iocoder.yudao.service.model.system.role.SystemRoleAssignColumnFetcher;
import cn.iocoder.yudao.service.model.system.role.SystemRoleAssignColumnTable;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.babyfish.jimmer.Page;
import org.springframework.util.StringUtils;
import java.util.Optional;
import java.util.List;
import java.time.LocalDateTime;
import java.util.UUID;

public interface SystemRoleAssignColumnRepository extends JRepository<SystemRoleAssignColumn, Long> {
    SystemRoleAssignColumnTable systemRoleAssignColumnTable = SystemRoleAssignColumnTable.$;

    default void deleteByNotInColumnId(Long roleId, List<UUID> columnIds){
        sql().createDelete(systemRoleAssignColumnTable)
                .where(systemRoleAssignColumnTable.roleId().eq(roleId))
                .where(systemRoleAssignColumnTable.columnId().notIn(columnIds))
                .execute();
    }

    default List<SystemRoleAssignColumn> findByRoleCodes(List<String> roleCodes){
        return sql().createQuery(systemRoleAssignColumnTable)
                .where(systemRoleAssignColumnTable.role().code().in(roleCodes))
                .orderBy(systemRoleAssignColumnTable.roleId())
                .select(systemRoleAssignColumnTable.fetch(SystemRoleAssignColumnFetcher.$.allTableFields()
                        .column(InfraDatabaseColumnFetcher.$.allTableFields().table(InfraDatabaseTableFetcher.$.allTableFields())))
                )
                .execute();
    }

    List<SystemRoleAssignColumn> findByRoleId(Long roleId);

    Optional<SystemRoleAssignColumn> findByRoleIdAndColumnId(Long roleId, UUID columnId);


}