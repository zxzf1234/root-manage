package com.xiyu.service.vo.system.role.role;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;

@Schema(description = "保存角色字段权限")
@Data
public class RoleSaveRoleColumnInput  {

    @Schema(description = "角色ID")
    private Long roleId;

    @Schema(description = "字段ID")
    private List<UUID> columnIds;

}