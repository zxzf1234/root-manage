package com.xiyu.service.repository.infra.codegen;

import com.xiyu.service.model.infra.codegen.InfraInterfaceModule;
import com.xiyu.service.model.infra.codegen.InfraInterfaceModuleTable;
import com.xiyu.service.vo.infra.codegen.interfaceModule.InterfaceModuleListReqVO;
import org.babyfish.jimmer.spring.repository.JRepository;

import jakarta.validation.constraints.NotNull;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface InfraInterfaceModuleRepository extends JRepository<InfraInterfaceModule, UUID> {
    InfraInterfaceModuleTable infraInterfaceModuleTable = InfraInterfaceModuleTable.$;

    default List<InfraInterfaceModule> selectList(InterfaceModuleListReqVO reqVO){
        return sql().createQuery(infraInterfaceModuleTable)
                .where(infraInterfaceModuleTable.name().likeIf(reqVO.getName()))
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

    default @NotNull Long countByTypeAndSort(Integer type, Long beginSort, Long endSort){
        return sql().createQuery(infraInterfaceModuleTable)
                .where(infraInterfaceModuleTable.type().eq(type))
                .where(infraInterfaceModuleTable.sort().gt(beginSort))
                .where(infraInterfaceModuleTable.sort().lt(endSort))
                .select(infraInterfaceModuleTable.count())
                .fetchOne();
    }

    int countByParentId(String parentId);

    default Optional<InfraInterfaceModule> findFirstByName(String name){
        List<InfraInterfaceModule> modules =
            sql().createQuery(infraInterfaceModuleTable)
                .where(infraInterfaceModuleTable.name().eq(name))
                .orderBy(infraInterfaceModuleTable.createTime())
                .select(infraInterfaceModuleTable)
                .execute();
        return Optional.of(modules.get(0));
    };
}