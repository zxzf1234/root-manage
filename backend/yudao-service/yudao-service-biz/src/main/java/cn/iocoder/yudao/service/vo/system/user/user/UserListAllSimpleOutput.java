package cn.iocoder.yudao.service.vo.system.user.user;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;
import javax.validation.constraints.*;
import org.hibernate.validator.constraints.Length;
import javax.validation.Valid;

@Schema(description = "获取用户精简信息列表")
@Data
public class UserListAllSimpleOutput  {

    @Schema(description = "用户账号", example = "yudao")
    private String username;

    @Schema(description = "主键ID")
    private Long id;
}