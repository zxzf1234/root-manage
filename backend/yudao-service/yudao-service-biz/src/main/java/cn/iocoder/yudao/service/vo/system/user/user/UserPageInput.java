package cn.iocoder.yudao.service.vo.system.user.user;

import cn.iocoder.yudao.framework.common.pojo.PageParam;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;
import javax.validation.constraints.*;
import org.hibernate.validator.constraints.Length;
import javax.validation.Valid;
import org.springframework.format.annotation.DateTimeFormat;
import static cn.iocoder.yudao.framework.common.util.date.DateUtils.FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND;
import java.time.LocalDateTime;

@Schema(description = "用户分页列表")
@Data
public class UserPageInput extends PageParam {

    @Schema(description = "创建时间")
    @DateTimeFormat(pattern = FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND)
    private LocalDateTime[] createTime;

    @Schema(description = "用户账号", example = "yudao")
    private String username;

    @Schema(description = "部门ID", example = "1")
    private Long deptId;

    @Schema(description = "手机号码", example = "15601691300")
    private String mobile;

    @Schema(description = "帐号状态（0正常 1停用）", example = "0")
    private Integer status;

}