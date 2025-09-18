package com.xiyu.service.vo.system.notice.notice;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Schema(description = "获取未读通知信息")
@Data
@AllArgsConstructor
public class NoticeGetUnreadInfoOutput  {

    @Schema(description = "通知公告表主键ID")
    private Long maxId;

    @Schema(description = "数量")
    private Long count;
}