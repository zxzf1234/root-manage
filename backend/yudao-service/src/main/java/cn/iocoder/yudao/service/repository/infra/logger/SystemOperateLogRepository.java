package cn.iocoder.yudao.service.repository.infra.logger;

import cn.iocoder.yudao.service.framework.exception.enums.GlobalErrorCodeConstants;
import cn.iocoder.yudao.service.vo.infra.logger.operatelog.OperateLogExportReqVO;
import cn.iocoder.yudao.service.vo.infra.logger.operatelog.OperateLogPageReqVO;
import cn.iocoder.yudao.service.model.infra.logger.SystemOperateLog;
import cn.iocoder.yudao.service.model.infra.logger.SystemOperateLogFetcher;
import cn.iocoder.yudao.service.model.infra.logger.SystemOperateLogTable;
import cn.iocoder.yudao.service.model.system.user.SystemUserFetcher;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.babyfish.jimmer.Page;
import org.springframework.util.StringUtils;

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
