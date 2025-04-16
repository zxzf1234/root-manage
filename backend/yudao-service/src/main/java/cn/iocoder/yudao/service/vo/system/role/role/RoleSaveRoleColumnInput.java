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

@Schema(description = "保存角色字段权限")
@Data
public class RoleSaveRoleColumnInput  {

    @Schema(description = "角色ID")
    private Long roleId;

    @Schema(description = "字段ID")
    private List<UUID> columnIds;

}