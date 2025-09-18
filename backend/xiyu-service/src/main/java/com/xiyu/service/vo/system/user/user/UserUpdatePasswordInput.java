package com.xiyu.service.vo.system.user.user;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import jakarta.validation.constraints.*;
import org.hibernate.validator.constraints.Length;

@Schema(description = "重置用户密码")
@Data
public class UserUpdatePasswordInput  {

    @Schema(description = "用户ID", requiredMode = Schema.RequiredMode.REQUIRED)
    @NotNull(message = "用户编号不能为空")
    private Long id;

    @Schema(description = "新密码", requiredMode = Schema.RequiredMode.REQUIRED)
    @Length(min = 4, max = 16, message = "密码长度为 4-16 位")
    @NotEmpty(message = "密码不能为空")
    private String password;

}