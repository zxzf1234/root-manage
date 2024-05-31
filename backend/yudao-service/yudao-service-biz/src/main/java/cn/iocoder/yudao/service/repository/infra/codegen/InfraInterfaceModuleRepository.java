package cn.iocoder.yudao.service.repository.infra.codegen;

import cn.iocoder.yudao.service.model.infra.codegen.InfraInterfaceModule;
import cn.iocoder.yudao.service.model.infra.codegen.InfraInterfaceModuleTable;
import cn.iocoder.yudao.service.vo.infra.codegen.interfaceModule.InterfaceModuleListReqVO;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface InfraInterfaceModuleRepository extends JRepository<InfraInterfaceModule, UUID> {
    InfraInterfaceModuleTable infraInterfaceModuleTable = InfraInterfaceModuleTable.$;

    default List<InfraInterfaceModule> selectList(InterfaceModuleListReqVO reqVO){
        return sql().createQuery(infraInterfaceModuleTable)
                .whereIf(StringUtils.hasText(reqVO.getName()), infraInterfaceModuleTable.name().like(reqVO.getName()))
                .orderBy(infraInterfaceModuleTable.sort())
                .select(infraInterfaceModuleTable)
                .execute();
    }

    default List<InfraInterfaceModule> selectSimpleList(){
        return sql().createQuery(infraInterfaceModuleTable)
                .orderBy(infraInterfaceModuleTable.sort())
                .select(infraInterfaceModuleTable)
                .execute();
    }

    int countByParentId(String parentId);

    Optional<InfraInterfaceModule> findFirstByName(String name);
}