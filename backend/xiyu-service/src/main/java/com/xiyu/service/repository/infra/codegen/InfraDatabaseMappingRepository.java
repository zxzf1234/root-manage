package com.xiyu.service.repository.infra.codegen;

import com.xiyu.service.model.infra.codegen.InfraDatabaseMapping;
import com.xiyu.service.model.infra.codegen.InfraDatabaseMappingTable;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.babyfish.jimmer.sql.ast.mutation.DeleteMode;

import java.util.List;
import java.util.UUID;

public interface InfraDatabaseMappingRepository extends JRepository<InfraDatabaseMapping, UUID> {
    InfraDatabaseMappingTable infraDatabaseMappingTable = InfraDatabaseMappingTable.$;

    default void deleteByTableId(UUID tableId){
        sql().createDelete(infraDatabaseMappingTable)
                .where(infraDatabaseMappingTable.tableId().eq(tableId))
                .setMode(DeleteMode.PHYSICAL)
                .execute();
    };

    List<InfraDatabaseMapping> findByTableId(UUID tableId);

}