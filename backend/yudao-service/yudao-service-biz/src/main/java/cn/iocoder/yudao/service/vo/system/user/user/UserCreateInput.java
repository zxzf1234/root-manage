package cn.iocoder.yudao.service.vo.system.user.user;

import cn.iocoder.yudao.service.vo.system.user.baseVO.SystemUserBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;
import javax.validation.constraints.*;
import org.hibernate.validator.constraints.Length;
import javax.validation.Valid;

@Schema(description = "新建用户")
@Data
public class UserCreateInput extends SystemUserBase {

    @Schema(description = "密码", requiredMode = Schema.RequiredMode.REQUIRED)
    @Size(min = 4, max = 16, message = "密码长度为 4-16 位")
    @NotEmpty(message = "密码不能为空")
    private String password;

}