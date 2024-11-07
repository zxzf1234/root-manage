package cn.iocoder.yudao.service.repository.infra.codegen;

import cn.iocoder.yudao.service.model.infra.codegen.*;
import cn.iocoder.yudao.service.vo.infra.codegen.database.DatabaseTableListReqVO;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.babyfish.jimmer.Page;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface InfraDatabaseTableRepository extends JRepository<InfraDatabaseTable, UUID> {
    InfraDatabaseTableTable infraDatabaseTableTable = InfraDatabaseTableTable.$;

    default Page<InfraDatabaseTable> selectList(DatabaseTableListReqVO listReqVO){
        return sql().createQuery(infraDatabaseTableTable)
                        .whereIf(StringUtils.hasText(listReqVO.getComment()), () -> infraDatabaseTableTable.comment().like(listReqVO.getComment()))
                        .whereIf(StringUtils.hasText(listReqVO.getName()), () -> infraDatabaseTableTable.name().like(listReqVO.getName()))
                        .whereIf(StringUtils.hasText(listReqVO.getFirstModule()), () -> infraDatabaseTableTable.firstModule().like(listReqVO.getFirstModule()))
                        .whereIf(StringUtils.hasText(listReqVO.getSecondModule()), () -> infraDatabaseTableTable.secondModule().like(listReqVO.getSecondModule()))
                        .orderBy(infraDatabaseTableTable.createTime().desc())
                        .select(infraDatabaseTableTable).fetchPage(listReqVO.getPageNo() - 1, listReqVO.getPageSize());

    }

    default List<InfraDatabaseTable> selectColumnList(DatabaseTableListReqVO listReqVO){
        return sql().createQuery(infraDatabaseTableTable)
                .whereIf(StringUtils.hasText(listReqVO.getComment()), () -> infraDatabaseTableTable.comment().like(listReqVO.getComment()))
                .whereIf(StringUtils.hasText(listReqVO.getName()), () -> infraDatabaseTableTable.name().like(listReqVO.getName()))
                .whereIf(StringUtils.hasText(listReqVO.getFirstModule()), () -> infraDatabaseTableTable.firstModule().like(listReqVO.getFirstModule()))
                .whereIf(StringUtils.hasText(listReqVO.getSecondModule()), () -> infraDatabaseTableTable.secondModule().like(listReqVO.getSecondModule()))
                .select(infraDatabaseTableTable.fetch(InfraDatabaseTableFetcher.$.allScalarFields()
                        .columns(InfraDatabaseColumnFetcher.$.allTableFields())))
                .execute();

    }

    default List<InfraDatabaseTable> selectName(String name){
        return sql().createQuery(infraDatabaseTableTable)
                .where(infraDatabaseTableTable.name().like(name))
                .select(infraDatabaseTableTable)
                .execute();
    }

    default Optional<InfraDatabaseTable> findDetailById(UUID tableId){
        return sql().createQuery(infraDatabaseTableTable)
                .where(infraDatabaseTableTable.id().eq(tableId))
                .select(infraDatabaseTableTable.fetch(InfraDatabaseTableFetcher.$.allScalarFields()
                        .columns(InfraDatabaseColumnFetcher.$.allTableFields().validations(InfraInterfaceValidationFetcher.$.allTableFields()))
                        .indexes(InfraDatabaseIndexFetcher.$.allTableFields())
                        .mappings(InfraDatabaseMappingFetcher.$.allTableFields())
                ))
                .fetchOptional();
    }

    default void updateById(UUID id, InfraDatabaseTable newTable){
        sql().createUpdate(infraDatabaseTableTable)
                .set(infraDatabaseTableTable.name(), newTable.name())
                .set(infraDatabaseTableTable.firstModule(), newTable.firstModule())
                .set(infraDatabaseTableTable.secondModule(), newTable.secondModule())
                .set(infraDatabaseTableTable.comment(), newTable.comment())
                .set(infraDatabaseTableTable.remark(), newTable.remark())
                .where(infraDatabaseTableTable.id().eq(id))
                .execute();
    }

    default Optional<InfraDatabaseTable> findByName(String name){
        return sql().createQuery(infraDatabaseTableTable)
                .where(infraDatabaseTableTable.name().eq(name))
                .select(infraDatabaseTableTable.fetch(InfraDatabaseTableFetcher.$.allTableFields()
                        .columns(InfraDatabaseColumnFetcher.$.allTableFields())
                        .indexes(InfraDatabaseIndexFetcher.$.allTableFields())
                        .mappings(InfraDatabaseMappingFetcher.$.allTableFields())
                ))
                .fetchOptional();
    };
}
