package com.xiyu.service.repository.infra.codegen;

import com.xiyu.service.model.infra.codegen.*;
import com.xiyu.service.vo.infra.codegen.interfaceModule.InterfaceListReqVO;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.babyfish.jimmer.Page;
import org.springframework.util.StringUtils;

import java.util.Optional;
import java.util.UUID;

public interface InfraInterfaceRepository extends JRepository<InfraInterface, UUID> {
    InfraInterfaceTable infraInterfaceTable = InfraInterfaceTable.$;

    default Page<InfraInterface> getList(InterfaceListReqVO reqVO){
        return sql().createQuery(infraInterfaceTable)
                .where(infraInterfaceTable.name().likeIf(reqVO.getName()))
                .whereIf(StringUtils.hasText(reqVO.getModuleName()), () -> infraInterfaceTable.module().id().eq(UUID.fromString(reqVO.getModuleName())))
                .orderBy(infraInterfaceTable.createTime().desc())
                .select(infraInterfaceTable.fetch(InfraInterfaceFetcher.$.allScalarFields().module(InfraInterfaceModuleFetcher.$.name())))
                .fetchPage(reqVO.getPageNo() - 1, reqVO.getPageSize());
    }
    default Optional<InfraInterface> findDetailById(UUID id){
        return sql().createQuery(infraInterfaceTable)
                .where(infraInterfaceTable.id().eq(id))
                .select(
                        infraInterfaceTable.fetch(InfraInterfaceFetcher.$.allTableFields()
                                .inputParams(InfraInterfaceParamFetcher.$.allTableFields()
                                        .validations(InfraInterfaceValidationFetcher.$.allTableFields()))
                                .outputParams(InfraInterfaceParamFetcher.$.allTableFields()
                                        .validations(InfraInterfaceValidationFetcher.$.allTableFields()))
                                .inputSubclasses(InfraInterfaceSubclassFetcher.$.allTableFields()
                                        .subclassParams(InfraInterfaceParamFetcher.$.allTableFields().
                                                validations(InfraInterfaceValidationFetcher.$.allTableFields())))
                                .outputSubclasses(InfraInterfaceSubclassFetcher.$.allTableFields()
                                        .subclassParams(InfraInterfaceParamFetcher.$.allTableFields().
                                                validations(InfraInterfaceValidationFetcher.$.allTableFields())))
                        )

                )
                .fetchOptional();
    };

    default Optional<InfraInterface> findRepeat(String name, UUID moduleId, UUID id){
        return sql().createQuery(infraInterfaceTable)
                .where(infraInterfaceTable.name().eq(name))
                .where(infraInterfaceTable.moduleId().eq(moduleId))
                .where(infraInterfaceTable.id().ne(id))
                .select(infraInterfaceTable)
                .fetchOptional();
    }

    Optional<InfraInterface> findByNameAndModuleId(String name, UUID moduleId);


}