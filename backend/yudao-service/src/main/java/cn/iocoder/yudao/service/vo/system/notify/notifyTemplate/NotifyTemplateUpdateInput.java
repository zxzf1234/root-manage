package cn.iocoder.yudao.service.vo.system.notify.notifyTemplate;

import cn.iocoder.yudao.service.vo.system.notify.baseVO.SystemNotifyTemplateBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

import javax.validation.constraints.*;

import cn.iocoder.yudao.service.framework.validation.InEnum;

@Schema(description = "更新站内信模版")
@Data
public class NotifyTemplateUpdateInput extends SystemNotifyTemplateBase {

    @Schema(description = "模板ID", requiredMode = Schema.RequiredMode.REQUIRED)
    @NotNull(message = "ID 不能为空")
    private Long id;

}