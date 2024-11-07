package cn.iocoder.yudao.service.repository.infra.codegen;

import cn.iocoder.yudao.service.model.infra.codegen.InfraDatabaseIndex;
import cn.iocoder.yudao.service.model.infra.codegen.InfraDatabaseIndexTable;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.babyfish.jimmer.sql.ast.mutation.DeleteMode;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface InfraDatabaseIndexRepository extends JRepository<InfraDatabaseIndex, UUID> {
    InfraDatabaseIndexTable infraDatabaseIndexTable = InfraDatabaseIndexTable.$;

    default void deleteByTableId(UUID tableId){
        sql().createDelete(infraDatabaseIndexTable)
                .where(infraDatabaseIndexTable.tableId().eq(tableId))
                .setMode(DeleteMode.PHYSICAL)
                .execute();
    };

    List<InfraDatabaseIndex> findByTableId(UUID tableId);

}