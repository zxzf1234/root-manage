package cn.iocoder.yudao.service.vo.infra.data.baseVO;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

import static cn.iocoder.yudao.service.util.date.DateUtils.FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND;

/**
 * 字典类型表 Base VO，提供给添加、修改、详细的子 VO 使用
 * 如果子 VO 存在差异的字段，请不要添加到这里，影响 Swagger 文档生成
 */
@Data
public class InfraDictTypeBase {

    @Schema(description = "字典名称", requiredMode = Schema.RequiredMode.REQUIRED, example = "用户性别")
    private String name;

    @Schema(description = "字典类型", requiredMode = Schema.RequiredMode.REQUIRED, example = "system_user_sex")
    private String type;

    @Schema(description = "状态（0正常 1停用）", example = "0")
    private Integer status;

    @Schema(description = "备注", example = "''")
    private String remark;

    @Schema(description = "一级菜单")
    private String firstModule;

    @Schema(description = "一级菜单")
    private String secondModule;

}
