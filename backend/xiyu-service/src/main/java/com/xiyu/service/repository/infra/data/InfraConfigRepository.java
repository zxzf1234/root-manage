package com.xiyu.service.repository.infra.data;

import com.xiyu.service.model.infra.data.InfraConfig;
import com.xiyu.service.model.infra.data.InfraConfigTable;
import com.xiyu.service.vo.infra.config.ConfigExportReqVO;
import com.xiyu.service.vo.infra.data.config.ConfigPageInput;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.babyfish.jimmer.Page;

import java.util.Optional;
import java.util.List;
import java.util.UUID;

public interface InfraConfigRepository extends JRepository<InfraConfig, UUID> {
    InfraConfigTable infraConfigTable = InfraConfigTable.$;

    default List<InfraConfig> selectList(ConfigExportReqVO reqVO){
        return sql()
                .createQuery(infraConfigTable)
                .where(infraConfigTable.type().eqIf(reqVO.getType()))
                .where(infraConfigTable.configKey().eqIf(reqVO.getKey()))
                .where(infraConfigTable.name().eqIf(reqVO.getName()))
                .whereIf(reqVO.getCreateTime()!=null, ()-> infraConfigTable.createTime().between(reqVO.getCreateTime()[0], reqVO.getCreateTime()[1]))
                .select(infraConfigTable)
                .execute();
    }

    default Page<InfraConfig> selectPage(ConfigPageInput reqVO){
        return sql().createQuery(infraConfigTable)
                .where(infraConfigTable.type().eqIf(reqVO.getType()))
                .where(infraConfigTable.configKey().eqIf(reqVO.getConfigKey()))
                .where(infraConfigTable.name().eqIf(reqVO.getName()))
                .whereIf(reqVO.getCreateTime()!=null, ()-> infraConfigTable.createTime().between(reqVO.getCreateTime()[0], reqVO.getCreateTime()[1]))
                .select(infraConfigTable).fetchPage(reqVO.getPageNo() - 1, reqVO.getPageSize());
    }

    Optional<InfraConfig> findByConfigKey(String key);
}