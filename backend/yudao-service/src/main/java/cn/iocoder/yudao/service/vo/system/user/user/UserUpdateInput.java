package cn.iocoder.yudao.service.vo.system.user.user;

import cn.iocoder.yudao.service.vo.system.user.baseVO.SystemUserBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;
import jakarta.validation.constraints.*;
import org.hibernate.validator.constraints.Length;
import jakarta.validation.Valid;

@Schema(description = "修改用户")
@Data
public class UserUpdateInput extends SystemUserBase {

    @Schema(description = "用户ID", requiredMode = Schema.RequiredMode.REQUIRED)
    @NotNull(message = "用户编号不能为空")
    private Long id;

}