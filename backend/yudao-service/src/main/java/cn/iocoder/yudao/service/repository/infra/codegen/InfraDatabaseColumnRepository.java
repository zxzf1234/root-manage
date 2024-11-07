package cn.iocoder.yudao.service.repository.infra.codegen;

import cn.hutool.core.text.CharSequenceUtil;
import cn.iocoder.yudao.service.model.infra.codegen.InfraDatabaseColumn;
import cn.iocoder.yudao.service.model.infra.codegen.InfraDatabaseColumnTable;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.babyfish.jimmer.sql.ast.mutation.DeleteMode;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface InfraDatabaseColumnRepository extends JRepository<InfraDatabaseColumn, UUID> {
    InfraDatabaseColumnTable infradatabaseColumnTable = InfraDatabaseColumnTable.$;
    
    default void updateColumn(InfraDatabaseColumn column){
        sql().createUpdate(infradatabaseColumnTable)
                .set(infradatabaseColumnTable.columnComment(), column.columnComment())
                .set(infradatabaseColumnTable.columnName(), column.columnName())
                .set(infradatabaseColumnTable.dataType(), column.dataType())
                .set(infradatabaseColumnTable.defaultValue(), column.defaultValue())
                .set(infradatabaseColumnTable.dictType(), column.dictType())
                .set(infradatabaseColumnTable.example(), column.example())
                .set(infradatabaseColumnTable.javaType(), column.javaType())
                .set(infradatabaseColumnTable.nullable(), column.nullable())
                .set(infradatabaseColumnTable.relatedTable(), column.relatedTable())
                .set(infradatabaseColumnTable.required(), column.required())
                .where(infradatabaseColumnTable.id().eq(column.id()))
                .execute();
    }

    int countByTableIdAndColumnNameIn(UUID tableId, List<String> columnNameList);

    default void deleteByTableId(UUID tableId){
        sql().createDelete(infradatabaseColumnTable)
                .where(infradatabaseColumnTable.tableId().eq(tableId))
                .setMode(DeleteMode.PHYSICAL)
                .execute();
    };

    List<InfraDatabaseColumn> findByTableId(UUID tableId);

}
