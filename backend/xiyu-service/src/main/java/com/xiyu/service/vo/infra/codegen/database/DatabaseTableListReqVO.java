package com.xiyu.service.vo.infra.codegen.database;

import com.xiyu.service.framework.web.web.core.pojo.PageParam;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;
import lombok.ToString;

@Schema(description = "管理后台 - 数据库表查询 Request VO")
@Data
@ToString(callSuper = true)
public class DatabaseTableListReqVO extends PageParam {
    @Schema(description = "表名称,模糊匹配", example = "table")
    private String name;

    @Schema(description = "表描述,模糊匹配", example = "芋道")
    private String comment;

    @Schema(description = "一级模块,模糊匹配", example = "芋道")
    private String firstModule;

    @Schema(description = "二级模块,模糊匹配", example = "芋道")
    private String secondModule;
}
