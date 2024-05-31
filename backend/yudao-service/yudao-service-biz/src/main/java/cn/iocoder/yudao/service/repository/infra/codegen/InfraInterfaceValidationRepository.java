package cn.iocoder.yudao.service.repository.infra.codegen;

import cn.iocoder.yudao.service.model.infra.codegen.InfraInterfaceValidation;
import cn.iocoder.yudao.service.model.infra.codegen.InfraInterfaceValidationTable;
import org.babyfish.jimmer.spring.repository.JRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface InfraInterfaceValidationRepository extends JRepository<InfraInterfaceValidation, UUID> {
    InfraInterfaceValidationTable infraInterfaceValidationTable = InfraInterfaceValidationTable.$;

    List<InfraInterfaceValidation> findByParentId(UUID parentId);

}