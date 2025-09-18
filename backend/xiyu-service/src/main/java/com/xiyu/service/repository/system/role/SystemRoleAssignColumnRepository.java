package com.xiyu.service.repository.system.role;

import com.xiyu.service.model.infra.codegen.InfraDatabaseColumnFetcher;
import com.xiyu.service.model.infra.codegen.InfraDatabaseTableFetcher;
import com.xiyu.service.model.system.role.SystemRoleAssignColumn;
import com.xiyu.service.model.system.role.SystemRoleAssignColumnFetcher;
import com.xiyu.service.model.system.role.SystemRoleAssignColumnTable;
import org.babyfish.jimmer.spring.repository.JRepository;

import java.util.Optional;
import java.util.List;
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