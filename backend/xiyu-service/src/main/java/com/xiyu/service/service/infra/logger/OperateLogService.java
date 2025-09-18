package com.xiyu.service.service.infra.logger;

import com.xiyu.service.framework.web.web.core.pojo.PageResult;
import com.xiyu.service.vo.infra.logger.operatelog.OperateLogCreateReqVO;
import com.xiyu.service.vo.infra.logger.operatelog.OperateLogExportReqVO;
import com.xiyu.service.vo.infra.logger.operatelog.OperateLogPageReqVO;
import com.xiyu.service.vo.infra.logger.operatelog.OperateLogRespVO;
import com.xiyu.service.model.infra.logger.SystemOperateLog;

import java.util.List;

/**
 * 操作日志 Service 接口
 *
 * @author 芋道源码
 */
public interface OperateLogService {

    /**
     * 记录操作日志
     *
     * @param createReqDTO 操作日志请求
     */
    void createOperateLog(OperateLogCreateReqVO createReqDTO);

    /**
     * 获得操作日志分页列表
     *
     * @param reqVO 分页条件
     * @return 操作日志分页列表
     */
    PageResult<OperateLogRespVO> getOperateLogPage(OperateLogPageReqVO reqVO);

    /**
     * 获得操作日志列表
     *
     * @param reqVO 列表条件
     * @return 日志列表
     */
    List<SystemOperateLog> getOperateLogList(OperateLogExportReqVO reqVO);

}
