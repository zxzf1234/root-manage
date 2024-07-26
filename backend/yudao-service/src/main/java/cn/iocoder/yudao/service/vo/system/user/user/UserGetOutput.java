package cn.iocoder.yudao.service.vo.system.user.user;

import cn.iocoder.yudao.service.vo.system.user.baseVO.SystemUserBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;
import static cn.iocoder.yudao.service.util.date.DateUtils.FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND;
import java.time.LocalDateTime;

@Schema(description = "获得用户详情")
@Data
public class UserGetOutput extends SystemUserBase {

    @Schema(description = "创建时间")
    @DateTimeFormat(pattern = FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND)
    private LocalDateTime createTime;

    @Schema(description = "用户ID")
    private Long id;
}