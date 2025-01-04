package cn.iocoder.yudao.service.vo.system.role.role;

import cn.iocoder.yudao.service.enums.common.CommonStatusEnum;
import cn.iocoder.yudao.service.framework.validation.InEnum;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

import jakarta.validation.constraints.*;

@Schema(description = "修改角色状态")
@Data
public class RoleUpdateStatusInput  {

    @Schema(description = "主键ID", requiredMode = Schema.RequiredMode.REQUIRED)
    @NotNull(message = "角色编号不能为空")
    private Long id;

    @Schema(description = "角色状态（0正常 1停用）", requiredMode = Schema.RequiredMode.REQUIRED)
    @NotNull(message = "状态不能为空")
    @InEnum(value = CommonStatusEnum.class, message = "修改状态必须是 {value}")
    private Integer status;

}