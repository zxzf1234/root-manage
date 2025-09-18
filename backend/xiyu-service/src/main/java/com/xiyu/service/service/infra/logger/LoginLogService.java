package com.xiyu.service.service.infra.logger;

import com.xiyu.service.framework.web.web.core.pojo.PageResult;
import com.xiyu.service.vo.infra.logger.loginlog.LoginLogCreateReqVO;
import com.xiyu.service.vo.infra.logger.loginlog.LoginLogExportReqVO;
import com.xiyu.service.vo.infra.logger.loginlog.LoginLogPageReqVO;
import com.xiyu.service.vo.infra.logger.loginlog.LoginLogRespVO;
import com.xiyu.service.model.infra.logger.SystemLoginLog;

import jakarta.validation.Valid;
import java.util.List;

/**
 * 登录日志 Service 接口
 */
public interface LoginLogService {

    /**
     * 获得登录日志分页
     *
     * @param reqVO 分页条件
     * @return 登录日志分页
     */
    PageResult<LoginLogRespVO> getLoginLogPage(LoginLogPageReqVO reqVO);

    /**
     * 获得登录日志列表
     *
     * @param reqVO 列表条件
     * @return 登录日志列表
     */
    List<SystemLoginLog> getLoginLogList(LoginLogExportReqVO reqVO);

    /**
     * 创建登录日志
     *
     * @param reqDTO 日志信息
     */
    void createLoginLog(@Valid LoginLogCreateReqVO reqDTO);

}
