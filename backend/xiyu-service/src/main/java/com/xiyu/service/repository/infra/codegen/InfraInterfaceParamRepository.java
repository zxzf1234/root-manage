package com.xiyu.service.repository.infra.codegen;

import com.xiyu.service.model.infra.codegen.InfraInterfaceParam;
import com.xiyu.service.model.infra.codegen.InfraInterfaceParamTable;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.babyfish.jimmer.sql.ast.mutation.DeleteMode;

import java.util.List;
import java.util.UUID;

public interface InfraInterfaceParamRepository extends JRepository<InfraInterfaceParam, UUID> {
    InfraInterfaceParamTable infraInterfaceParamTable = InfraInterfaceParamTable.$;

    default void deleteByParentId(UUID interfaceId){
        sql().createDelete(infraInterfaceParamTable)
                .where(infraInterfaceParamTable.parentId().eq(interfaceId))
                .setMode(DeleteMode.PHYSICAL)
                .execute();
    };

    List<InfraInterfaceParam> findByParentId(UUID parentId);

}