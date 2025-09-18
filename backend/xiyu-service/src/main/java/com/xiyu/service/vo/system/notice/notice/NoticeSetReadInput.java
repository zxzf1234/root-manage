package com.xiyu.service.vo.system.notice.notice;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Schema(description = "将通知消息标记未已读")
@Data
public class NoticeSetReadInput  {

    @Schema(description = "通知公告表主键ID")
    private Long id;

}