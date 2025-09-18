package com.xiyu.service.vo.system.role.baseVO;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import jakarta.validation.constraints.*;

import java.util.UUID;

/**
 * 角色指定字段 Base VO，提供给添加、修改、详细的子 VO 使用
 * 如果子 VO 存在差异的字段，请不要添加到这里，影响 Swagger 文档生成
 */
@Data
public class SystemRoleAssignColumnBase {

    @Schema(description = "字段ID")
    @Size(max = 50, message = "字段ID长度不能超过50")
    private UUID columnId;

    @Schema(description = "角色ID")
    private Long roleId;

}
