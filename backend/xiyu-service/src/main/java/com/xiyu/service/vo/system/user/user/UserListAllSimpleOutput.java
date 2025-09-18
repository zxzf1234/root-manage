package com.xiyu.service.vo.system.user.user;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Schema(description = "获取用户精简信息列表")
@Data
public class UserListAllSimpleOutput  {

    @Schema(description = "用户昵称", example = "yudao")
    private String nickname;

    @Schema(description = "主键ID")
    private Long id;
}