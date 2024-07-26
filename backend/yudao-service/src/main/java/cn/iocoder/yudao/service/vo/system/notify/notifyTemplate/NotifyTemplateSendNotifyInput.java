package cn.iocoder.yudao.service.vo.system.notify.notifyTemplate;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;

import cn.iocoder.yudao.service.framework.validation.InEnum;

@Schema(description = "发送站内信")
@Data
public class NotifyTemplateSendNotifyInput  {

    @Schema(description = "模板编码")
    private String templateCode;

    @Schema(description = "用户ID")
    private Long userId;

    @Schema(description = "模板参数")
    private Map<String, Object> templateParams;

}