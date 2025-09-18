package com.xiyu.service.repository.infra.codegen;

import com.xiyu.service.model.infra.codegen.InfraInterfaceValidationTable;
import com.xiyu.service.model.infra.codegen.InfraInterfaceVoClass;
import com.xiyu.service.model.infra.codegen.InfraInterfaceVoClassTable;
import com.xiyu.service.vo.infra.codegen.interfaceModule.InterfaceListReqVO;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.babyfish.jimmer.sql.ast.mutation.DeleteMode;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface InfraInterfaceVoClassRepository extends JRepository<InfraInterfaceVoClass, UUID> {
    InfraInterfaceVoClassTable infraInterfaceVoClassTable = InfraInterfaceVoClassTable.$;

    default List<InfraInterfaceVoClass> findList(InterfaceListReqVO reqVO){
        return sql().createQuery(infraInterfaceVoClassTable)
                .where(infraInterfaceVoClassTable.name().likeIf(reqVO.getName()))
                .select(infraInterfaceVoClassTable)
                .execute();
    }

    Optional<InfraInterfaceVoClass> findByName(String name);

    Optional<InfraInterfaceVoClass> findFirstByParentId(String parentId);

    default void deleteByParentId(String parentId){
        sql().createDelete(infraInterfaceVoClassTable)
                .where(infraInterfaceVoClassTable.parentId().eq(parentId))
                .setMode(DeleteMode.PHYSICAL)
                .execute();
    };

    List<InfraInterfaceVoClass> findByParentId(String parentId);

}
