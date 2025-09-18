package com.xiyu.service.vo.system.notice.notice;

import com.xiyu.service.framework.web.web.core.pojo.PageParam;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Schema(description = "分页查询消息通知")
@Data
public class NoticePageQueryInput extends PageParam {

    @Schema(description = "是否已读")
    private Boolean isRead;

    @Schema(description = "通知人")
    private Long notifierId;

}