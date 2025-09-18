package com.xiyu.service.repository.infra.logger;

import com.xiyu.service.vo.infra.logger.loginlog.LoginLogExportReqVO;
import com.xiyu.service.vo.infra.logger.loginlog.LoginLogPageReqVO;
import com.xiyu.service.enums.system.login.SystemLoginResultEnum;
import com.xiyu.service.model.infra.logger.SystemLoginLog;
import com.xiyu.service.model.infra.logger.SystemLoginLogTable;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.babyfish.jimmer.Page;

import java.util.List;

public interface SystemLoginLogRepository extends JRepository<SystemLoginLog, Long>{
    SystemLoginLogTable systemLoginLogTable = SystemLoginLogTable.$;

    default Page<SystemLoginLog> selectPage(LoginLogPageReqVO reqVO){
        return sql()
                .createQuery(systemLoginLogTable)
                .whereIf(reqVO.getStatus() != null && Boolean.TRUE.equals(reqVO.getStatus()), systemLoginLogTable.result().eq(SystemLoginResultEnum.SUCCESS.getValue()))
                .whereIf(reqVO.getStatus() != null && !Boolean.TRUE.equals(reqVO.getStatus()), systemLoginLogTable.result().gt(SystemLoginResultEnum.SUCCESS.getValue()))
                .where(systemLoginLogTable.username().eqIf(reqVO.getUsername()))
                .where(systemLoginLogTable.userIp().eqIf(reqVO.getUserIp()))
                .whereIf(reqVO.getCreateTime() != null, ()-> systemLoginLogTable.createTime().between(reqVO.getCreateTime()[0], reqVO.getCreateTime()[1]))
                .select(systemLoginLogTable).fetchPage(reqVO.getPageNo() - 1, reqVO.getPageSize());
    }

    default List<SystemLoginLog> selectList(LoginLogExportReqVO reqVO){
        return sql()
                .createQuery(systemLoginLogTable)
                .whereIf(reqVO.getStatus() != null && Boolean.TRUE.equals(reqVO.getStatus()), systemLoginLogTable.result().eq(SystemLoginResultEnum.SUCCESS.getValue()))
                .whereIf(reqVO.getStatus() != null && !Boolean.TRUE.equals(reqVO.getStatus()), systemLoginLogTable.result().gt(SystemLoginResultEnum.SUCCESS.getValue()))
                .where(systemLoginLogTable.username().eqIf(reqVO.getUsername()))
                .where(systemLoginLogTable.userIp().eqIf(reqVO.getUserIp()))
                .whereIf(reqVO.getCreateTime() != null, ()-> systemLoginLogTable.createTime().between(reqVO.getCreateTime()[0], reqVO.getCreateTime()[1]))
                .select(systemLoginLogTable)
                .execute();
    }

}
