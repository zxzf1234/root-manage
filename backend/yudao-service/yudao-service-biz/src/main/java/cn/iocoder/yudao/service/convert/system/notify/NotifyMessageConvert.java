package cn.iocoder.yudao.service.convert.system.notify;

import cn.iocoder.yudao.service.vo.system.notify.notifyMessage.NotifyMessageGetUnreadListOutput;
import cn.iocoder.yudao.service.vo.system.notify.notifyMessage.NotifyMessageMyPageOutput;
import cn.iocoder.yudao.service.vo.system.notify.notifyMessage.NotifyMessageMyPageInput;
import cn.iocoder.yudao.service.vo.system.notify.notifyMessage.NotifyMessagePageOutput;
import cn.iocoder.yudao.service.vo.system.notify.notifyMessage.NotifyMessagePageInput;
import cn.iocoder.yudao.service.vo.system.notify.notifyMessage.NotifyMessageGetOutput;
import cn.iocoder.yudao.service.model.system.notify.SystemNotifyMessage;
import java.util.*;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import org.springframework.data.domain.Page;
import cn.iocoder.yudao.service.vo.system.notify.notifyMessage.*;

/**
 * 站内信-消息记录 Convert
 */
@Mapper
public interface NotifyMessageConvert {
    NotifyMessageConvert INSTANCE = Mappers.getMapper(NotifyMessageConvert.class);


    NotifyMessageGetOutput getOutputConvert(SystemNotifyMessage output);

    List<NotifyMessagePageOutput> pagePageOutputConvert(Page<SystemNotifyMessage> output);

    List<NotifyMessageMyPageOutput> myPagePageOutputConvert(Page<SystemNotifyMessage> output);

    List<NotifyMessageGetUnreadListOutput> getUnreadListListOutputConvert(List<SystemNotifyMessage> output);

}
