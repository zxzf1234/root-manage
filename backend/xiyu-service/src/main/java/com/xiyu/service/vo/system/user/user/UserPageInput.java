package com.xiyu.service.vo.system.user.user;

import com.xiyu.service.framework.web.web.core.pojo.PageParam;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;
import static com.xiyu.service.util.date.DateUtils.FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND;
import java.time.LocalDateTime;

@Schema(description = "用户分页列表")
@Data
public class UserPageInput extends PageParam {

    @Schema(description = "创建时间")
    @DateTimeFormat(pattern = FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND)
    private LocalDateTime[] createTime;

    @Schema(description = "用户账号", example = "xiyu")
    private String username;

    @Schema(description = "部门ID", example = "1")
    private Long deptId;

    @Schema(description = "手机号码", example = "15601691300")
    private String mobile;

    @Schema(description = "帐号状态（0正常 1停用）", example = "0")
    private Integer status;

}