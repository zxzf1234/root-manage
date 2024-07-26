package cn.iocoder.yudao.service.vo.system.notify.notifyMessage;

import cn.iocoder.yudao.service.framework.web.web.core.pojo.PageParam;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;
import static cn.iocoder.yudao.service.util.date.DateUtils.FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND;
import java.time.LocalDateTime;

@Schema(description = "获得我的站内信分页")
@Data
public class NotifyMessageMyPageInput extends PageParam {

    @Schema(description = "创建时间")
    @DateTimeFormat(pattern = FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND)
    private LocalDateTime[] createTime;

    @Schema(description = "是否已读", example = "true")
    private Boolean readStatus;

}