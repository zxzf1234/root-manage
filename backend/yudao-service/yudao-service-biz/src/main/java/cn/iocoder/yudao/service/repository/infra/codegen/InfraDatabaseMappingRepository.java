package cn.iocoder.yudao.service.repository.infra.codegen;

import cn.iocoder.yudao.service.model.infra.codegen.InfraDatabaseMapping;
import cn.iocoder.yudao.service.model.infra.codegen.InfraDatabaseMappingTable;
import org.babyfish.jimmer.spring.repository.JRepository;

import java.util.Optional;
import java.util.UUID;

public interface InfraDatabaseMappingRepository extends JRepository<InfraDatabaseMapping, UUID> {
    InfraDatabaseMappingTable infraDatabaseMappingTable = InfraDatabaseMappingTable.$;

    void deleteByTableId(UUID tableId);

}