package cn.iocoder.yudao.service.vo.system.role.role;

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
public class RoleGetColumnByRoleCodesInput  {

    @Schema(description = "角色权限字符串")
    private List<String> codes;

}