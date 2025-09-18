package com.xiyu.service.repository.infra.data;

import com.xiyu.service.vo.infra.logger.apiaccesslog.ApiAccessLogExportReqVO;
import com.xiyu.service.vo.infra.logger.apiaccesslog.ApiAccessLogPageReqVO;
import com.xiyu.service.model.infra.data.InfraApiAccessLog;
import com.xiyu.service.model.infra.data.InfraApiAccessLogTable;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.babyfish.jimmer.Page;

import java.util.List;

public interface InfraApiAccessLogRepository extends JRepository<InfraApiAccessLog, Long> {
    InfraApiAccessLogTable infraApiAccessLogTable = InfraApiAccessLogTable.$;

    default Page<InfraApiAccessLog> selectPage(ApiAccessLogPageReqVO reqVO){
        return sql().createQuery(infraApiAccessLogTable)
                .where(infraApiAccessLogTable.duration().eqIf(reqVO.getDuration()))
                .where(infraApiAccessLogTable.applicationName().eqIf(reqVO.getApplicationName()))
                .where(infraApiAccessLogTable.requestUrl().eqIf(reqVO.getRequestUrl()))
                .whereIf(reqVO.getBeginTime() != null, ()-> infraApiAccessLogTable.beginTime().between(reqVO.getBeginTime()[0], reqVO.getBeginTime()[1]))
                .where(infraApiAccessLogTable.resultCode().eqIf(reqVO.getResultCode()))
                .where(infraApiAccessLogTable.userId().eqIf(reqVO.getUserId()))
                .where(infraApiAccessLogTable.userType().eqIf(reqVO.getUserType()))
                .orderBy(infraApiAccessLogTable.id().desc())
                .select(infraApiAccessLogTable)
                .fetchPage(reqVO.getPageNo() - 1, reqVO.getPageSize());
    }

    default List<InfraApiAccessLog> selectList(ApiAccessLogExportReqVO reqVO){
        return sql()
                .createQuery(infraApiAccessLogTable)
                .where(infraApiAccessLogTable.duration().eqIf(reqVO.getDuration()))
                .where(infraApiAccessLogTable.applicationName().eqIf(reqVO.getApplicationName()))
                .where(infraApiAccessLogTable.requestUrl().eqIf(reqVO.getRequestUrl()))
                .whereIf(reqVO.getBeginTime() != null, ()-> infraApiAccessLogTable.beginTime().between(reqVO.getBeginTime()[0], reqVO.getBeginTime()[1]))
                .where(infraApiAccessLogTable.resultCode().eqIf(reqVO.getResultCode()))
                .where(infraApiAccessLogTable.userId().eqIf(reqVO.getUserId()))
                .where(infraApiAccessLogTable.userType().eqIf(reqVO.getUserType()))
                .orderBy(infraApiAccessLogTable.id().desc())
                .select(infraApiAccessLogTable)
                .execute();
    }
}
