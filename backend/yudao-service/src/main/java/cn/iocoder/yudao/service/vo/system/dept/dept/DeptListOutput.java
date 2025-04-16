package cn.iocoder.yudao.service.vo.system.dept.dept;

import cn.iocoder.yudao.service.vo.system.dept.baseVO.SystemDeptBase;
import cn.iocoder.yudao.service.vo.system.user.baseVO.SystemUserBase;
import cn.iocoder.yudao.service.vo.system.dept.baseVO.SystemDeptLeaderBase;
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
    import org.springframework.format.annotation.DateTimeFormat;
    import static cn.iocoder.yudao.service.util.date.DateUtils.FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND;
    import java.time.LocalDateTime;

@Schema(description = "获取部门列表")
@Data
@AllArgsConstructor
public class DeptListOutput extends SystemDeptBase {

    @Schema(description = "部门负责人")
    @Valid
    private List<leaders> leaders;

    @Schema(description = "部门编号", requiredMode = Schema.RequiredMode.REQUIRED, example = "1024")
    private Long id;

    @Schema(description = "状态,参见 CommonStatusEnum 枚举类", requiredMode = Schema.RequiredMode.REQUIRED, example = "1")
    private Integer status;

    @Schema(description = "创建时间", requiredMode = Schema.RequiredMode.REQUIRED, example = "时间戳格式")
    @DateTimeFormat(pattern = FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND)
    private LocalDateTime createTime;

    @Schema(description = "部门负责人")
    @Data
    public static class leaders extends SystemDeptLeaderBase {

        @Schema(description = "用户信息表")
        @Valid
        private leader leader;
    }

    @Schema(description = "用户信息表")
    @Data
    public static class leader extends SystemUserBase {
    }
}