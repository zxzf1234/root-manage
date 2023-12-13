package cn.iocoder.yudao.service.service.system.notify;

import cn.iocoder.yudao.service.model.system.notify.SystemNotifyMessage;
import cn.iocoder.yudao.service.model.system.notify.SystemNotifyMessageDraft;
import cn.iocoder.yudao.service.model.system.notify.SystemNotifyTemplate;
import cn.iocoder.yudao.service.repository.system.notify.SystemNotifyMessageRepository;
import cn.iocoder.yudao.service.vo.system.notify.notifyMessage.NotifyMessageGetUnreadListOutput;
import cn.iocoder.yudao.service.vo.system.notify.notifyMessage.NotifyMessageMyPageOutput;
import cn.iocoder.yudao.service.vo.system.notify.notifyMessage.NotifyMessageMyPageInput;
import cn.iocoder.yudao.service.vo.system.notify.notifyMessage.NotifyMessagePageOutput;
import cn.iocoder.yudao.service.vo.system.notify.notifyMessage.NotifyMessagePageInput;
import cn.iocoder.yudao.service.vo.system.notify.notifyMessage.NotifyMessageGetOutput;
import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import org.springframework.validation.annotation.Validated;
import org.springframework.data.domain.Page;
import java.util.*;
import javax.servlet.http.HttpServletResponse;
import org.springframework.transaction.annotation.Transactional;
import java.io.IOException;
import cn.iocoder.yudao.framework.common.enums.UserTypeEnum;
import cn.iocoder.yudao.framework.common.pojo.PageResult;
import cn.iocoder.yudao.service.convert.system.notify.NotifyMessageConvert;
import cn.iocoder.yudao.service.vo.system.notify.notifyMessage.*;

import static cn.iocoder.yudao.framework.common.exception.util.ServiceExceptionUtil.exception;
import static cn.iocoder.yudao.service.enums.system.ErrorCodeConstants.*;
import static cn.iocoder.yudao.framework.security.core.util.SecurityFrameworkUtils.getLoginUserId;

/**
 * 站内信-消息记录 Service 实现类
 */
@Service
@Validated
public class NotifyMessageServiceImpl implements NotifyMessageService {

    @Resource
    private SystemNotifyMessageRepository systemNotifyMessageRepository;

    @Override
    public Long createNotifyMessage(Long userId, Integer userType,
                                    SystemNotifyTemplate template, String templateContent, Map<String, Object> templateParams) {
        SystemNotifyMessage message = SystemNotifyMessageDraft.$.produce(SystemNotifyMessage->{
            SystemNotifyMessage
                    .setUserId(userId)
                    .setUserType(userType)
                    .setTemplateId(template.id())
                    .setTemplateCode(template.code())
                    .setTemplateType(template.type())
                    .setTemplateNickname(template.nickname())
                    .setTemplateContent(templateContent)
                    .setTemplateParams(templateParams).setReadStatus(false);
        });
        message = systemNotifyMessageRepository.insert(message);
        return message.id();
    }

    @Override
    public NotifyMessageGetOutput get(Long id) {
        Optional<SystemNotifyMessage> opMessage = systemNotifyMessageRepository.findById(id);
        if(!opMessage.isPresent())
            throw exception(NOTIFY_MESSAGE_NOT_EXISTS);
        return NotifyMessageConvert.INSTANCE.getOutputConvert(opMessage.get());
    }

    @Override
    public PageResult<NotifyMessagePageOutput> page(NotifyMessagePageInput inputVO) {
        Page<SystemNotifyMessage> postPage = systemNotifyMessageRepository.selectPage(inputVO);
        List<NotifyMessagePageOutput> listPage = NotifyMessageConvert.INSTANCE.pagePageOutputConvert(postPage);
        return new PageResult<>(listPage, postPage.getTotalElements());
    }

    @Override
    public PageResult<NotifyMessageMyPageOutput> myPage(NotifyMessageMyPageInput inputVO) {
        Page<SystemNotifyMessage> postPage = systemNotifyMessageRepository.selectPage(inputVO, getLoginUserId(), UserTypeEnum.ADMIN.getValue());
        List<NotifyMessageMyPageOutput> listPage = NotifyMessageConvert.INSTANCE.myPagePageOutputConvert(postPage);
        return new PageResult<>(listPage, postPage.getTotalElements());

    }

    @Override
    public Boolean updateRead(List<Long> ids) {
        systemNotifyMessageRepository.updateNotifyMessageRead(ids, getLoginUserId(), UserTypeEnum.ADMIN.getValue());
        return true;
    }

    @Override
    public Boolean updateAllRead() {
        systemNotifyMessageRepository.updateAllNotifyMessageRead(getLoginUserId(), UserTypeEnum.ADMIN.getValue());
        return true;
    }

    @Override
    public List<NotifyMessageGetUnreadListOutput> getUnreadList(Integer size) {
        List<SystemNotifyMessage> messages =  systemNotifyMessageRepository.getUnreadNotifyMessageList(getLoginUserId(), UserTypeEnum.ADMIN.getValue(), size);
        return NotifyMessageConvert.INSTANCE.getUnreadListListOutputConvert(messages);
    }

    @Override
    public Long getUnreadCount() {
        return systemNotifyMessageRepository.countByUserIdAndUserType(getLoginUserId(), UserTypeEnum.ADMIN.getValue());
    }

}
