package cn.iocoder.yudao.service.repository.infra.codegen;

import cn.iocoder.yudao.service.model.infra.codegen.InfraInterfaceSubclass;
import cn.iocoder.yudao.service.model.infra.codegen.InfraInterfaceSubclassTable;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.babyfish.jimmer.sql.ast.mutation.DeleteMode;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface InfraInterfaceSubclassRepository extends JRepository<InfraInterfaceSubclass, UUID> {
    InfraInterfaceSubclassTable infraInterfaceSubclassTable = InfraInterfaceSubclassTable.$;

    default void deleteByParentId(UUID parentId){
        sql().createDelete(infraInterfaceSubclassTable)
                .where(infraInterfaceSubclassTable.parentId().eq(parentId))
                .setMode(DeleteMode.PHYSICAL)
                .execute();
    };

    List<InfraInterfaceSubclass> findByParentId(UUID parentId);

}