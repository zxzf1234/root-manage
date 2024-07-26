package cn.iocoder.yudao.service.vo.system.notify.notifyTemplate;

import cn.iocoder.yudao.service.vo.system.notify.baseVO.SystemNotifyTemplateBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;
import static cn.iocoder.yudao.service.util.date.DateUtils.FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND;
import java.time.LocalDateTime;

@Schema(description = "获得单个站内信模版")
@Data
public class NotifyTemplateGetOutput extends SystemNotifyTemplateBase {

    @Schema(description = "创建时间")
    @DateTimeFormat(pattern = FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND)
    private LocalDateTime createTime;

    @Schema(description = "主键ID")
    private Long id;
}