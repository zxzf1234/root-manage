package com.xiyu.service.vo.system.role.role;

import com.xiyu.service.vo.infra.codegen.baseVO.InfraDatabaseColumnBase;
import com.xiyu.service.vo.infra.codegen.baseVO.InfraDatabaseTableBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import jakarta.validation.Valid;

@Schema(description = "根据RoleCodes获取权限字段")
@Data
@AllArgsConstructor
public class RoleGetColumnByRoleCodesOutput extends InfraDatabaseColumnBase {

    @Schema(description = "数据库表定义")
    @Valid
    private table table;

    @Schema(description = "数据库表定义")
    @Data
    public static class table extends InfraDatabaseTableBase {
    }
}