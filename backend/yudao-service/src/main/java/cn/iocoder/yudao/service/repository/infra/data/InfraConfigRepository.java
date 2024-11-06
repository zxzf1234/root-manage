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
                .whereIf(reqVO.getType() != null, infraConfigTable.type().eq(reqVO.getType()))
                .whereIf(StringUtils.hasText(reqVO.getKey()), infraConfigTable.configKey().eq(reqVO.getKey()))
                .whereIf(StringUtils.hasText(reqVO.getName()), infraConfigTable.name().eq(reqVO.getName()))
                .whereIf(reqVO.getCreateTime()!=null, ()-> infraConfigTable.createTime().between(reqVO.getCreateTime()[0], reqVO.getCreateTime()[1]))
                .select(infraConfigTable)
                .execute();
    }

    default Page<InfraConfig> selectPage(ConfigPageInput reqVO){
        return sql().createQuery(infraConfigTable)
                .whereIf(reqVO.getType() != null, infraConfigTable.type().eq(reqVO.getType()))
                .whereIf(StringUtils.hasText(reqVO.getConfigKey()), infraConfigTable.configKey().eq(reqVO.getConfigKey()))
                .whereIf(StringUtils.hasText(reqVO.getName()), infraConfigTable.name().eq(reqVO.getName()))
                .whereIf(reqVO.getCreateTime()!=null, ()-> infraConfigTable.createTime().between(reqVO.getCreateTime()[0], reqVO.getCreateTime()[1]))
                .select(infraConfigTable).fetchPage(reqVO.getPageNo() - 1, reqVO.getPageSize());
    }

    Optional<InfraConfig> findByConfigKey(String key);
}