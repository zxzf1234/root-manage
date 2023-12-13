package cn.iocoder.yudao.service.service.system.notify;

import cn.iocoder.yudao.service.model.system.notify.SystemNotifyTemplate;
import cn.iocoder.yudao.service.vo.system.notify.notifyMessage.NotifyMessageGetUnreadListOutput;
import cn.iocoder.yudao.service.vo.system.notify.notifyMessage.NotifyMessageMyPageOutput;
import cn.iocoder.yudao.service.vo.system.notify.notifyMessage.NotifyMessageMyPageInput;
import cn.iocoder.yudao.service.vo.system.notify.notifyMessage.NotifyMessagePageOutput;
import cn.iocoder.yudao.service.vo.system.notify.notifyMessage.NotifyMessagePageInput;
import cn.iocoder.yudao.service.vo.system.notify.notifyMessage.NotifyMessageGetOutput;
import java.util.*;
import cn.iocoder.yudao.service.vo.system.notify.notifyMessage.*;
import cn.iocoder.yudao.framework.common.pojo.PageResult;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 站内信-消息记录 Service 接口
 */
public interface NotifyMessageService {

    NotifyMessageGetOutput get(Long id);

    PageResult<NotifyMessagePageOutput> page(NotifyMessagePageInput inputVO);

    PageResult<NotifyMessageMyPageOutput> myPage(NotifyMessageMyPageInput inputVO);

    Boolean updateRead(List<Long> ids);

    Boolean updateAllRead();

    List<NotifyMessageGetUnreadListOutput> getUnreadList(Integer size);

    Long getUnreadCount();

    Long createNotifyMessage(Long userId, Integer userType, SystemNotifyTemplate template, String templateContent, Map<String, Object> templateParams);

}
