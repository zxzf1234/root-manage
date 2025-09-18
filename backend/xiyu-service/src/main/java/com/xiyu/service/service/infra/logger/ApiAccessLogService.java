package com.xiyu.service.service.infra.logger;

import com.xiyu.service.framework.web.web.core.pojo.PageResult;
import com.xiyu.service.vo.infra.logger.apiaccesslog.ApiAccessLogCreateReqVO;
import com.xiyu.service.vo.infra.logger.apiaccesslog.ApiAccessLogExportReqVO;
import com.xiyu.service.vo.infra.logger.apiaccesslog.ApiAccessLogPageReqVO;
import com.xiyu.service.model.infra.data.InfraApiAccessLog;

import java.util.List;

/**
 * API 访问日志 Service 接口
 *
 * @author 芋道源码
 */
public interface ApiAccessLogService {

    /**
     * 创建 API 访问日志
     *
     * @param createReqDTO API 访问日志
     */
    void createApiAccessLog(ApiAccessLogCreateReqVO createReqDTO);

    /**
     * 获得 API 访问日志分页
     *
     * @param pageReqVO 分页查询
     * @return API 访问日志分页
     */
    PageResult<InfraApiAccessLog> getApiAccessLogPage(ApiAccessLogPageReqVO pageReqVO);

    /**
     * 获得 API 访问日志列表, 用于 Excel 导出
     *
     * @param exportReqVO 查询条件
     * @return API 访问日志分页
     */
    List<InfraApiAccessLog> getApiAccessLogList(ApiAccessLogExportReqVO exportReqVO);

}
