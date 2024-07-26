package cn.iocoder.yudao.service.vo.system.notify.notifyTemplate;

import cn.iocoder.yudao.service.vo.system.notify.baseVO.SystemNotifyTemplateBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import cn.iocoder.yudao.service.framework.validation.InEnum;

@Schema(description = "创建站内信模版")
@Data
public class NotifyTemplateCreateInput extends SystemNotifyTemplateBase {

}