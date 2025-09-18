package com.xiyu.service.vo.system.notice.notice;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Schema(description = "获取未读通知信息")
@Data
public class NoticeGetUnreadInfoInput  {

    @Schema(description = "通知人")
    private Long notifierId;

}