package cn.iocoder.yudao.service.repository.infra.data;

import cn.iocoder.yudao.service.model.infra.data.FlywaySchemaHistory;
import cn.iocoder.yudao.service.model.infra.data.FlywaySchemaHistoryTable;
import cn.iocoder.yudao.service.model.infra.data.InfraApiAccessLogTable;
import org.babyfish.jimmer.spring.repository.JRepository;

import java.util.List;
import java.util.Optional;

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
