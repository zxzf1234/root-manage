package com.xiyu.service.repository.infra.data;

import com.xiyu.service.model.infra.data.FlywaySchemaHistory;
import com.xiyu.service.model.infra.data.FlywaySchemaHistoryTable;
import com.xiyu.service.model.infra.data.InfraApiAccessLogTable;
import org.babyfish.jimmer.spring.repository.JRepository;

import java.util.List;

public interface FlywaySchemaHistoryRepository extends JRepository<FlywaySchemaHistory, Integer> {
     FlywaySchemaHistoryTable flywaySchemaHistoryTable = FlywaySchemaHistoryTable.$;

     default List<FlywaySchemaHistory> findFirstByVersionLikeOrderByInstalledRankDesc(String version){
          return sql().createQuery(flywaySchemaHistoryTable)
                  .where(flywaySchemaHistoryTable.version().like(version))
                  .orderBy(flywaySchemaHistoryTable.installedRank().desc())
                  .select(flywaySchemaHistoryTable)
                  .limit(1)
                  .execute();
     };
}
