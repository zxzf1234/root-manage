package com.xiyu.service.repository.infra.data;

import com.xiyu.service.model.infra.data.InfraDictNo;
import com.xiyu.service.model.infra.data.InfraDictNoTable;
import com.xiyu.service.vo.infra.data.dictNo.DictNoQueryInput;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.babyfish.jimmer.Page;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

public interface InfraDictNoRepository extends JRepository<InfraDictNo, UUID> {
    InfraDictNoTable infraDictNoTable = InfraDictNoTable.$;

    default Page<InfraDictNo> query(DictNoQueryInput inputVO){
        return sql().createQuery(infraDictNoTable)
                .where(infraDictNoTable.keyName().likeIf(inputVO.getKeyName()))
                .where(infraDictNoTable.prefix().likeIf(inputVO.getPrefix()))
                .where(infraDictNoTable.remark().likeIf(inputVO.getRemark()))
                .orderBy(infraDictNoTable.createTime())
                .select(infraDictNoTable).fetchPage(inputVO.getPageNo() - 1, inputVO.getPageSize());
    }

    Optional<InfraDictNo> findByKeyName(String keyName);

    default Optional<InfraDictNo> findByKeyNameUpdate(String keyName){
        return sql().createQuery(infraDictNoTable).where(infraDictNoTable.keyName().eq(keyName)).select(infraDictNoTable).forUpdate().fetchOptional();
    }

    default void updateProductNo(UUID id, Integer postfixVal, LocalDateTime lastDate){
        sql().createUpdate(infraDictNoTable)
                .where(infraDictNoTable.id().eq(id))
                .set(infraDictNoTable.postfixVal(), postfixVal)
                .set(infraDictNoTable.lastDate(), lastDate)
                .execute();
    }


}