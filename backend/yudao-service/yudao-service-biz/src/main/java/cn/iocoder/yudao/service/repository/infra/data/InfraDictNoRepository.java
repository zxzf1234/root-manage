package cn.iocoder.yudao.service.repository.infra.data;

import cn.iocoder.yudao.service.model.infra.data.InfraDictNo;
import cn.iocoder.yudao.service.model.infra.data.InfraDictNoTable;
import cn.iocoder.yudao.service.vo.infra.data.dictNo.DictNoQueryInput;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.springframework.data.domain.Page;
import org.springframework.util.StringUtils;

import java.util.Optional;
import java.util.UUID;

public interface InfraDictNoRepository extends JRepository<InfraDictNo, Long> {
    InfraDictNoTable infraDictNoTable = InfraDictNoTable.$;

    default Page<InfraDictNo> query(DictNoQueryInput inputVO){
        return pager(inputVO.getPageNo() - 1, inputVO.getPageSize()).execute(sql().createQuery(infraDictNoTable)
                .whereIf(StringUtils.hasText(inputVO.getKeyName()), infraDictNoTable.keyName().like(inputVO.getKeyName()))
                .whereIf(StringUtils.hasText(inputVO.getPrefix()), infraDictNoTable.prefix().like(inputVO.getPrefix()))
                .whereIf(StringUtils.hasText(inputVO.getRemark()), infraDictNoTable.remark().like(inputVO.getRemark()))
                .orderBy(infraDictNoTable.createTime())
                .select(infraDictNoTable)
        );
    }

    Optional<InfraDictNo> findById(UUID id);

    Optional<InfraDictNo> findByKeyName(String keyName);

    default Optional<InfraDictNo> findByKeyNameUpdate(String keyName){
        return sql().createQuery(infraDictNoTable).where(infraDictNoTable.keyName().eq(keyName)).select(infraDictNoTable).forUpdate().fetchOptional();
    }


}