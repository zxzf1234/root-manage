package cn.iocoder.yudao.service.vo.infra.codegen.database;

import cn.iocoder.yudao.framework.common.pojo.PageParam;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;
import lombok.ToString;

@Schema(description = "管理后台 - 数据库表查询 Request VO")
@Data
@ToString(callSuper = true)
public class DatabaseTableListReqVO extends PageParam {
    @Schema(description = "表名称,模糊匹配", example = "yudao")
    private String name;

    @Schema(description = "表描述,模糊匹配", example = "芋道")
    private String comment;

    @Schema(description = "模块名,模糊匹配", example = "芋道")
    private String businessName;
}
