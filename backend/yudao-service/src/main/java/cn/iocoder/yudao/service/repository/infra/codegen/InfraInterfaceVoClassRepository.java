package cn.iocoder.yudao.service.repository.infra.codegen;

import cn.iocoder.yudao.service.model.infra.codegen.InfraInterfaceValidationTable;
import cn.iocoder.yudao.service.model.infra.codegen.InfraInterfaceVoClass;
import cn.iocoder.yudao.service.model.infra.codegen.InfraInterfaceVoClassTable;
import cn.iocoder.yudao.service.vo.infra.codegen.interfaceModule.InterfaceListReqVO;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.babyfish.jimmer.sql.ast.mutation.DeleteMode;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface InfraInterfaceVoClassRepository extends JRepository<InfraInterfaceVoClass, UUID> {
    InfraInterfaceVoClassTable infraInterfaceVoClassTable = InfraInterfaceVoClassTable.$;

    default List<InfraInterfaceVoClass> findList(InterfaceListReqVO reqVO){
        return sql().createQuery(infraInterfaceVoClassTable)
                .whereIf(StringUtils.hasText(reqVO.getName()), () -> infraInterfaceVoClassTable.name().like(reqVO.getName()))
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
