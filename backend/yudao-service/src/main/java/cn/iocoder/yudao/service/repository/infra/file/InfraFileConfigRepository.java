package cn.iocoder.yudao.service.repository.infra.file;

import cn.iocoder.yudao.service.vo.infra.file.config.FileConfigPageReqVO;
import cn.iocoder.yudao.service.model.infra.file.InfraFileConfig;
import cn.iocoder.yudao.service.model.infra.file.InfraFileConfigTable;
import org.babyfish.jimmer.Page;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.springframework.util.StringUtils;

public interface InfraFileConfigRepository extends JRepository<InfraFileConfig, Long> {
    InfraFileConfigTable infraFileConfigTable = InfraFileConfigTable.$;

    default Page<InfraFileConfig> selectPage(FileConfigPageReqVO reqVO){
        return sql().createQuery(infraFileConfigTable)
                        .where(infraFileConfigTable.storage().eqIf(reqVO.getStorage()))
                        .where(infraFileConfigTable.name().eqIf(reqVO.getName()))
                        .whereIf(reqVO.getCreateTime() != null, ()-> infraFileConfigTable.createTime().between(reqVO.getCreateTime()[0], reqVO.getCreateTime()[1]))
                        .select(infraFileConfigTable).fetchPage(reqVO.getPageNo() - 1, reqVO.getPageSize())
        ;
    }
}
