package com.xiyu.service.vo.system.role.role;

import com.xiyu.service.vo.system.role.baseVO.SystemRoleBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import jakarta.validation.constraints.*;

@Schema(description = "修改角色")
@Data
public class RoleUpdateInput extends SystemRoleBase {

    @Schema(description = "角色ID", requiredMode = Schema.RequiredMode.REQUIRED)
    @NotNull(message = "角色编号不能为空")
    private Long id;

}