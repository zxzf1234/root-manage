package cn.iocoder.yudao.service.repository.infra.data;

import cn.iocoder.yudao.service.vo.infra.logger.apierrorlog.ApiErrorLogExportReqVO;
import cn.iocoder.yudao.service.vo.infra.logger.apierrorlog.ApiErrorLogPageReqVO;
import cn.iocoder.yudao.service.model.infra.data.InfraApiErrorLog;
import cn.iocoder.yudao.service.model.infra.data.InfraApiErrorLogTable;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.babyfish.jimmer.Page;
import org.springframework.util.StringUtils;

import java.util.List;

public interface InfraApiErrorLogRepository extends JRepository<InfraApiErrorLog, Long> {
    InfraApiErrorLogTable  infraApiErrorLogTable = InfraApiErrorLogTable.$;

    default Page<InfraApiErrorLog> selectPage(ApiErrorLogPageReqVO reqVO){
        return sql().createQuery(infraApiErrorLogTable)
                .where(infraApiErrorLogTable.processStatus().eqIf(reqVO.getProcessStatus()))
                .where(infraApiErrorLogTable.applicationName().eqIf(reqVO.getApplicationName()))
                .where(infraApiErrorLogTable.requestUrl().eqIf(reqVO.getRequestUrl()))
                .whereIf(reqVO.getExceptionTime() != null, ()-> infraApiErrorLogTable.exceptionTime().between(reqVO.getExceptionTime()[0], reqVO.getExceptionTime()[1]))
                .where(infraApiErrorLogTable.userId().eqIf(reqVO.getUserId()))
                .where(infraApiErrorLogTable.userType().eqIf(reqVO.getUserType()))
                .orderBy(infraApiErrorLogTable.id().desc())
                .select(infraApiErrorLogTable).fetchPage(reqVO.getPageNo() - 1, reqVO.getPageSize());
    }

    default List<InfraApiErrorLog> selectList(ApiErrorLogExportReqVO reqVO){
        return sql().createQuery(infraApiErrorLogTable)
                .where(infraApiErrorLogTable.processStatus().eqIf(reqVO.getProcessStatus()))
                .where(infraApiErrorLogTable.applicationName().eqIf(reqVO.getApplicationName()))
                .where(infraApiErrorLogTable.requestUrl().eqIf(reqVO.getRequestUrl()))
                .whereIf(reqVO.getExceptionTime() != null, ()-> infraApiErrorLogTable.exceptionTime().between(reqVO.getExceptionTime()[0], reqVO.getExceptionTime()[1]))
                .where(infraApiErrorLogTable.userId().eqIf(reqVO.getUserId()))
                .where(infraApiErrorLogTable.userType().eqIf(reqVO.getUserType()))
                .orderBy(infraApiErrorLogTable.id().desc())
                .select(infraApiErrorLogTable)
                .execute();
    }
}
