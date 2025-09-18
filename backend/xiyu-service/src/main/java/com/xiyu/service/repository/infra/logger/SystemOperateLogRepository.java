package com.xiyu.service.repository.infra.logger;

import com.xiyu.service.framework.exception.enums.GlobalErrorCodeConstants;
import com.xiyu.service.vo.infra.logger.operatelog.OperateLogExportReqVO;
import com.xiyu.service.vo.infra.logger.operatelog.OperateLogPageReqVO;
import com.xiyu.service.model.infra.logger.SystemOperateLog;
import com.xiyu.service.model.infra.logger.SystemOperateLogFetcher;
import com.xiyu.service.model.infra.logger.SystemOperateLogTable;
import com.xiyu.service.model.system.user.SystemUserFetcher;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.babyfish.jimmer.Page;

import java.util.List;

public interface SystemOperateLogRepository extends JRepository<SystemOperateLog, Long> {
    SystemOperateLogTable systemOperatorLogTable = SystemOperateLogTable.$;

    default Page<SystemOperateLog> selectPage(OperateLogPageReqVO reqVO){
        return sql()
                .createQuery(systemOperatorLogTable)
                .where(systemOperatorLogTable.type().eqIf(reqVO.getType()))
                .where(systemOperatorLogTable.module().eqIf(reqVO.getModule()))
                .where(systemOperatorLogTable.user().nickname().eqIf(reqVO.getUserNickname()))
                .whereIf(reqVO.getStartTime() != null, systemOperatorLogTable.startTime().between(reqVO.getStartTime()[0], reqVO.getStartTime()[1]))
                .whereIf(reqVO.getSuccess() != null && reqVO.getSuccess(), systemOperatorLogTable.resultCode().eq(GlobalErrorCodeConstants.SUCCESS.getCode()))
                .whereIf(reqVO.getSuccess() != null && !reqVO.getSuccess(), systemOperatorLogTable.resultCode().gt(GlobalErrorCodeConstants.SUCCESS.getCode()))
                .select(systemOperatorLogTable.fetch(SystemOperateLogFetcher.$.allScalarFields().user(SystemUserFetcher.$.nickname())))
                .fetchPage(reqVO.getPageNo() - 1, reqVO.getPageSize());
    };

    default List<SystemOperateLog> selectList(OperateLogExportReqVO reqVO){
        return sql()
                .createQuery(systemOperatorLogTable)
                .where(systemOperatorLogTable.type().eqIf(reqVO.getType()))
                .where(systemOperatorLogTable.module().eqIf(reqVO.getModule()))
                .where(systemOperatorLogTable.user().nickname().eqIf(reqVO.getUserNickname()))
                .whereIf(reqVO.getStartTime() != null, systemOperatorLogTable.startTime().between(reqVO.getStartTime()[0], reqVO.getStartTime()[1]))
                .whereIf(reqVO.getSuccess() != null && reqVO.getSuccess(), systemOperatorLogTable.resultCode().eq(GlobalErrorCodeConstants.SUCCESS.getCode()))
                .whereIf(reqVO.getSuccess() != null && !reqVO.getSuccess(), systemOperatorLogTable.resultCode().gt(GlobalErrorCodeConstants.SUCCESS.getCode()))
                .select(systemOperatorLogTable.fetch(SystemOperateLogFetcher.$.allScalarFields().user(SystemUserFetcher.$.nickname())))
                .execute();
    };
}
