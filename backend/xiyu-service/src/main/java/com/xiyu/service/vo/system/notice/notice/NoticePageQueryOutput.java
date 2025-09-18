package com.xiyu.service.vo.system.notice.notice;

import com.xiyu.service.vo.system.notice.baseVO.SystemNoticeBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;
import static com.xiyu.service.util.date.DateUtils.FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND;
import java.time.LocalDateTime;

@Schema(description = "分页查询消息通知")
@Data
@AllArgsConstructor
public class NoticePageQueryOutput extends SystemNoticeBase {

    @Schema(description = "通知公告表主键ID")
    private Long id;

    @Schema(description = "创建时间")
    @DateTimeFormat(pattern = FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND)
    private LocalDateTime createTime;

    @Schema(description = "更新时间")
    @DateTimeFormat(pattern = FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND)
    private LocalDateTime updateTime;
}