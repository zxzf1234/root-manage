package com.xiyu.service.repository.infra.job;

import com.xiyu.service.vo.infra.data.job.log.JobLogExportReqVO;
import com.xiyu.service.vo.infra.data.job.log.JobLogPageReqVO;
import com.xiyu.service.model.infra.job.InfraJobLog;
import com.xiyu.service.model.infra.job.InfraJobLogTable;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.babyfish.jimmer.Page;

import java.util.List;

public interface InfraJobLogRepository extends JRepository<InfraJobLog, Long> {
    InfraJobLogTable infraJobLogTable = InfraJobLogTable.$;

    default Page<InfraJobLog> selectPage(JobLogPageReqVO reqVO){
        return sql().createQuery(infraJobLogTable)
                .where(infraJobLogTable.jobId().eqIf(reqVO.getJobId()))
                .where(infraJobLogTable.handlerName().eqIf(reqVO.getHandlerName()))
                .where(infraJobLogTable.status().eqIf(reqVO.getStatus()))
                .where(infraJobLogTable.beginTime().eqIf(reqVO.getBeginTime()))
                .where(infraJobLogTable.endTime().eqIf(reqVO.getEndTime()))
                .select(infraJobLogTable).fetchPage(reqVO.getPageNo() - 1, reqVO.getPageSize());
    }

    default List<InfraJobLog> selectList(JobLogExportReqVO reqVO) {
        return sql().createQuery(infraJobLogTable)
                .where(infraJobLogTable.jobId().eqIf(reqVO.getJobId()))
                .where(infraJobLogTable.handlerName().eqIf(reqVO.getHandlerName()))
                .where(infraJobLogTable.status().eqIf(reqVO.getStatus()))
                .where(infraJobLogTable.beginTime().eqIf(reqVO.getBeginTime()))
                .where(infraJobLogTable.endTime().eqIf(reqVO.getEndTime()))
                .select(infraJobLogTable)
                .execute();
    }
}
