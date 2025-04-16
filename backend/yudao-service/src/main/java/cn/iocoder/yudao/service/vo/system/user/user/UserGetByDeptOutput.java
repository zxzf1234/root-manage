package cn.iocoder.yudao.service.vo.system.user.user;

import cn.iocoder.yudao.service.vo.system.user.baseVO.SystemUserBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;
import jakarta.validation.constraints.*;
import jakarta.validation.constraints.NotBlank;
import org.hibernate.validator.constraints.Length;
import jakarta.validation.Valid;
import cn.iocoder.yudao.service.enums.common.CommonStatusEnum;
import cn.iocoder.yudao.service.framework.validation.InEnum;
import java.math.BigDecimal;

@Schema(description = "根据部门获取员工")
@Data
@AllArgsConstructor
public class UserGetByDeptOutput extends SystemUserBase {

    @Schema(description = "用户信息表主键ID")
    private Long id;
}