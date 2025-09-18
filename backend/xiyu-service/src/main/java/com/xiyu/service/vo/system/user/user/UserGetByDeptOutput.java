package com.xiyu.service.vo.system.user.user;

import com.xiyu.service.vo.system.user.baseVO.SystemUserBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Schema(description = "根据部门获取员工")
@Data
@AllArgsConstructor
public class UserGetByDeptOutput extends SystemUserBase {

    @Schema(description = "用户信息表主键ID")
    private Long id;
}