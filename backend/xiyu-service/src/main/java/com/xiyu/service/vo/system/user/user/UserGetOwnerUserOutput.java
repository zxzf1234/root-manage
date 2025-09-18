package com.xiyu.service.vo.system.user.user;

import com.xiyu.service.vo.system.user.baseVO.SystemUserBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Schema(description = "获取当前用户有权限的员工")
@Data
@AllArgsConstructor
public class UserGetOwnerUserOutput extends SystemUserBase {

    @Schema(description = "用户信息表主键ID")
    private Long id;
}