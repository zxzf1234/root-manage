package com.xiyu.service.vo.system.role.role;

import com.xiyu.service.vo.system.role.baseVO.SystemRoleAssignColumnBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Schema(description = "根据角色ID获取字段权限")
@Data
@AllArgsConstructor
public class RoleGetColumnByRoleIdOutput extends SystemRoleAssignColumnBase {
}