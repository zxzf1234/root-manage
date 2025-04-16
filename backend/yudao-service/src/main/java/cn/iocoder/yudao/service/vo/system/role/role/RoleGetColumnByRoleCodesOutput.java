package cn.iocoder.yudao.service.vo.system.role.role;

import cn.iocoder.yudao.service.vo.infra.codegen.baseVO.InfraDatabaseColumnBase;
import cn.iocoder.yudao.service.vo.infra.codegen.baseVO.InfraDatabaseTableBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;
import jakarta.validation.constraints.*;
import jakarta.validation.constraints.NotBlank;
import org.hibernate.validator.constraints.Length;
import jakarta.validation.Valid;
import cn.iocoder.yudao.service.enums.common.CommonStatusEnum;
import cn.iocoder.yudao.service.framework.validation.InEnum;
import java.math.BigDecimal;

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