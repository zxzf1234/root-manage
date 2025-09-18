package com.xiyu.service.vo.system.role.role;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;

@Schema(description = "根据RoleCodes获取权限字段")
@Data
public class RoleGetColumnByRoleCodesInput  {

    @Schema(description = "角色权限字符串")
    private List<String> codes;

}