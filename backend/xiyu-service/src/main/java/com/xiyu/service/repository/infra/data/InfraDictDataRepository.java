package com.xiyu.service.repository.infra.data;

import com.xiyu.service.model.infra.data.*;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.babyfish.jimmer.sql.ast.mutation.DeleteMode;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface InfraDictDataRepository extends JRepository<InfraDictData, UUID> {
    InfraDictDataTable infraDictDataTable = InfraDictDataTable.$;

    Optional<InfraDictData> findByTypeIdAndValue(UUID typeId, String value);

    List<InfraDictData> findByTypeId(UUID typeId);

    default List<InfraDictData> findSimpleList(){
        return sql().createQuery(infraDictDataTable)
                .orderBy(infraDictDataTable.sort())
                .select(infraDictDataTable.fetch(InfraDictDataFetcher.$.allScalarFields().type(InfraDictTypeFetcher.$.type())))
                .execute();
    }



    default void deleteByTypeId(UUID typeId){
        sql().createDelete(infraDictDataTable)
                .where(infraDictDataTable.typeId().eq(typeId))
                .setMode(DeleteMode.PHYSICAL)
                .execute();
    };



}