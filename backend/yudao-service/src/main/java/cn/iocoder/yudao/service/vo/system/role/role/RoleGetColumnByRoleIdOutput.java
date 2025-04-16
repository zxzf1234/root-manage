package cn.iocoder.yudao.service.vo.system.role.role;

import cn.iocoder.yudao.service.vo.system.role.baseVO.SystemRoleAssignColumnBase;
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

@Schema(description = "根据角色ID获取字段权限")
@Data
@AllArgsConstructor
public class RoleGetColumnByRoleIdOutput extends SystemRoleAssignColumnBase {
}