package cn.iocoder.yudao.service.vo.system.role.role;

import cn.iocoder.yudao.service.vo.system.role.baseVO.SystemRoleBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;
import javax.validation.constraints.*;
import org.hibernate.validator.constraints.Length;
import javax.validation.Valid;

@Schema(description = "获取角色信息-分页")
@Data
public class RolePageOutput extends SystemRoleBase {

    @Schema(description = "主键ID")
    private Long id;
}