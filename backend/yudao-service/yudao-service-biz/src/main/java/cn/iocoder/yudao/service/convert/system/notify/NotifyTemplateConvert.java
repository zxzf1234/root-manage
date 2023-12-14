package cn.iocoder.yudao.service.convert.system.notify;

import cn.iocoder.yudao.service.vo.system.notify.notifyTemplate.NotifyTemplateSendNotifyInput;
import cn.iocoder.yudao.service.vo.system.notify.notifyTemplate.NotifyTemplatePageOutput;
import cn.iocoder.yudao.service.vo.system.notify.notifyTemplate.NotifyTemplatePageInput;
import cn.iocoder.yudao.service.vo.system.notify.notifyTemplate.NotifyTemplateGetOutput;
import cn.iocoder.yudao.service.vo.system.notify.notifyTemplate.NotifyTemplateUpdateInput;
import cn.iocoder.yudao.service.vo.system.notify.notifyTemplate.NotifyTemplateCreateInput;
import cn.iocoder.yudao.service.model.system.notify.SystemNotifyTemplate;
import java.util.*;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import org.springframework.data.domain.Page;
import cn.iocoder.yudao.service.vo.system.notify.notifyTemplate.*;

/**
 * 站内信模板 Convert
 */
@Mapper
public interface NotifyTemplateConvert {
    NotifyTemplateConvert INSTANCE = Mappers.getMapper(NotifyTemplateConvert.class);


    SystemNotifyTemplate createInputConvert(NotifyTemplateCreateInput input);

    SystemNotifyTemplate updateInputConvert(NotifyTemplateUpdateInput input);

    NotifyTemplateGetOutput getOutputConvert(SystemNotifyTemplate output);

    List<NotifyTemplatePageOutput> pagePageOutputConvert(Page<SystemNotifyTemplate> output);

}
