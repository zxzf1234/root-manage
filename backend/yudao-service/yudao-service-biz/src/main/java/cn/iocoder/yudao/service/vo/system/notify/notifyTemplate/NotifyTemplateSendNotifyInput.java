package cn.iocoder.yudao.service.vo.system.notify.notifyTemplate;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;
import javax.validation.constraints.*;
import org.hibernate.validator.constraints.Length;
import javax.validation.Valid;
import cn.iocoder.yudao.framework.common.enums.CommonStatusEnum;
import cn.iocoder.yudao.framework.common.validation.InEnum;

@Schema(description = "发送站内信")
@Data
public class NotifyTemplateSendNotifyInput  {

    @Schema(description = "模板编码")
    private String templateCode;

    @Schema(description = "主键ID")
    private Long id;

    @Schema(description = "模板参数")
    private Map<String, Object> templateParams;

}