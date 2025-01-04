package cn.iocoder.yudao.service.vo.system.role.role;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;
import jakarta.validation.constraints.*;
import org.hibernate.validator.constraints.Length;
import jakarta.validation.Valid;

@Schema(description = "获取角色精简信息列表")
@Data
public class RoleListAllSimpleOutput  {

    @Schema(description = "主键ID")
    private Long id;

    @Schema(description = "角色名称")
    private String name;
}