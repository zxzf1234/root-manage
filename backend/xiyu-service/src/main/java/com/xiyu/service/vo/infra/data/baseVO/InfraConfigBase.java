package com.xiyu.service.vo.infra.data.baseVO;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

import jakarta.validation.constraints.*;
import org.hibernate.validator.constraints.*;

/**
 * 配置 Base VO，提供给添加、修改、详细的子 VO 使用
 * 如果子 VO 存在差异的字段，请不要添加到这里，影响 Swagger 文档生成
 */
@Data
public class InfraConfigBase {

    @Schema(description = "参数分组")
    @Size(max = 50, message = "参数分组长度不能超过50")
    private String category;

    @Schema(description = "参数类型")
    @Range(max = 127, message = "最大不能超过127")
    private Integer type;

    @Schema(description = "参数名称")
    @Size(max = 255, message = "长度不能超过255")
    private String name;

    @Schema(description = "参数键名")
    @Size(max = 255, message = "长度不能超过255")
    private String configKey;

    @Schema(description = "参数键值")
    @Size(max = 1024, message = "长度不能超过1024")
    private String value;

    @Schema(description = "是否可见")
    @Range(max = 127, message = "最大不能超过127")
    private Boolean visible;

    @Schema(description = "备注")
    @Size(max = 1024, message = "长度不能超过1024")
    private String remark;

}
