package com.xiyu.service.repository.infra.job;

import com.xiyu.service.vo.infra.data.job.job.JobExportReqVO;
import com.xiyu.service.vo.infra.data.job.job.JobPageReqVO;
import com.xiyu.service.model.infra.job.InfraJob;
import com.xiyu.service.model.infra.job.InfraJobTable;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.babyfish.jimmer.Page;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface InfraJobRepository extends JRepository<InfraJob, UUID> {
    InfraJobTable infraJobTable = InfraJobTable.$;

    default Page<InfraJob> selectPage(JobPageReqVO reqVO){
        return sql()
                .createQuery(infraJobTable)
                .where(infraJobTable.status().eqIf(reqVO.getStatus()))
                .where(infraJobTable.handlerName().eqIf(reqVO.getHandlerName()))
                .where(infraJobTable.name().eqIf(reqVO.getName()))
                .select(infraJobTable).fetchPage(reqVO.getPageNo() - 1, reqVO.getPageSize());
    }

    default List<InfraJob> selectList(JobExportReqVO reqVO){
        return sql()
                .createQuery(infraJobTable)
                .where(infraJobTable.status().eqIf(reqVO.getStatus()))
                .where(infraJobTable.handlerName().eqIf(reqVO.getHandlerName()))
                .where(infraJobTable.name().eqIf(reqVO.getName()))
                .select(infraJobTable)
                .execute();

    }

    Optional<InfraJob> findByHandlerName(String handlerName);

}
