package cn.iocoder.yudao.service.service.infra.codegen;

import java.util.*;
import cn.iocoder.yudao.service.framework.web.web.core.pojo.PageResult;
import cn.iocoder.yudao.service.vo.infra.codegen.database.*;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 数据库表 Service 接口
 */
public interface DatabaseTableService {

    PageResult<DatabaseTableResp> getDatabaseTableList(DatabaseTableListReqVO listReqVO);

    List<DatabaseTableResp> getDatabaseTableName(String name);

    /**
     * 获得表列表，基于表名称 + 表描述进行模糊匹配
     *
     * @param reqVo 新建的数据库表
     * @return 表列表
     */
    UUID createTable(DatabaseUpdateReq reqVo);

    /**
     * 获得数据库表详情
     *
     * @param tableId 数据库表id
     * @return 表详情
     */
    DatabaseTableDetailResp getDatabaseTable(UUID tableId);

    /**
     * 获得数据库表详情
     *
     * @param reqVO 更新的数据库表
     * @return 表详情
     */
    UUID updateTable(DatabaseUpdateReq reqVO);

    /**
     * 获得数据库表字段
     *
     * @param listReqVO 搜索
     * @return 字段详情
     */
    List<DatabaseTableColumnResp> getColumnList(DatabaseTableListReqVO listReqVO);

    void deleted(String id);

}
