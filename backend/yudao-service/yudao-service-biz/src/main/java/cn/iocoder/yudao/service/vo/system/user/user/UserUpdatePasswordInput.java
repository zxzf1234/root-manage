package cn.iocoder.yudao.service.vo.system.user.user;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;
import javax.validation.constraints.*;
import org.hibernate.validator.constraints.Length;
import javax.validation.Valid;

@Schema(description = "重置用户密码")
@Data
public class UserUpdatePasswordInput  {

    @Schema(description = "用户ID")
    private Long id;

    @Schema(description = "新密码")
    private String password;

}