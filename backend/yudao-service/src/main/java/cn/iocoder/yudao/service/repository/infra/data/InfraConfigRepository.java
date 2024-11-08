package cn.iocoder.yudao.service.repository.infra.data;

import cn.iocoder.yudao.service.model.infra.data.InfraConfig;
import cn.iocoder.yudao.service.model.infra.data.InfraConfigTable;
import cn.iocoder.yudao.service.vo.infra.config.ConfigExportReqVO;
import cn.iocoder.yudao.service.vo.infra.config.ConfigPageReqVO;
import cn.iocoder.yudao.service.vo.infra.data.config.ConfigPageInput;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.babyfish.jimmer.Page;
import org.springframework.util.StringUtils;
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