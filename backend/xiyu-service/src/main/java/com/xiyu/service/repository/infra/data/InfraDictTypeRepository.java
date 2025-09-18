package com.xiyu.service.repository.infra.data;

import com.xiyu.service.model.infra.data.InfraDictDataFetcher;
import com.xiyu.service.model.infra.data.InfraDictType;
import com.xiyu.service.model.infra.data.InfraDictTypeFetcher;
import com.xiyu.service.model.infra.data.InfraDictTypeTable;
import com.xiyu.service.vo.infra.data.dictType.DictTypeExportInput;
import com.xiyu.service.vo.infra.data.dictType.DictTypePageInput;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.babyfish.jimmer.Page;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface InfraDictTypeRepository extends JRepository<InfraDictType, UUID> {
    InfraDictTypeTable infraDictTypeTable = InfraDictTypeTable.$;

    Optional<InfraDictType> findByName(String name);

    Optional<InfraDictType> findByType(String type);

    default Page<InfraDictType> selectPage(DictTypePageInput reqVO){
        return sql().createQuery(infraDictTypeTable)
                .where(infraDictTypeTable.name().likeIf(reqVO.getName()))
                .where(infraDictTypeTable.type().likeIf(reqVO.getType()))
                .whereIf(reqVO.getCreateTime() != null, () -> infraDictTypeTable.createTime().between(reqVO.getCreateTime()[0], reqVO.getCreateTime()[1]))
                .orderBy(infraDictTypeTable.createTime().desc())
                .select(infraDictTypeTable).fetchPage(reqVO.getPageNo() - 1, reqVO.getPageSize());
    }

    default List<InfraDictType> selectList(DictTypeExportInput reqVO){
        return sql()
                .createQuery(infraDictTypeTable)
                .where(infraDictTypeTable.name().likeIf(reqVO.getName()))
                .where(infraDictTypeTable.type().likeIf(reqVO.getType()))
                .whereIf(reqVO.getCreateTime() != null, () -> infraDictTypeTable.createTime().between(reqVO.getCreateTime()[0], reqVO.getCreateTime()[1]))
                .select(infraDictTypeTable).execute();
    }

    default Optional<InfraDictType> findByDetailId(UUID id){
        return sql()
                .createQuery(infraDictTypeTable)
                .where(infraDictTypeTable.id().eq(id))
                .select(infraDictTypeTable.fetch(InfraDictTypeFetcher.$.allTableFields().datas(InfraDictDataFetcher.$.allTableFields())))
                .fetchOptional();
    }
}