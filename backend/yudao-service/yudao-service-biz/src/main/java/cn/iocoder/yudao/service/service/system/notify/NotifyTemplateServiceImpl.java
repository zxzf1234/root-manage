package cn.iocoder.yudao.service.service.system.notify;

import cn.iocoder.yudao.service.convert.system.notice.NoticeConvert;
import cn.hutool.core.util.StrUtil;
import cn.iocoder.yudao.service.model.system.notify.SystemNotifyTemplate;
import cn.iocoder.yudao.service.model.system.notify.SystemNotifyTemplateDraft;
import cn.iocoder.yudao.service.repository.system.notify.SystemNotifyTemplateRepository;
import cn.iocoder.yudao.service.vo.system.notify.notifyTemplate.NotifyTemplateSendNotifyInput;
import cn.iocoder.yudao.service.vo.system.notify.notifyTemplate.NotifyTemplatePageOutput;
import cn.iocoder.yudao.service.vo.system.notify.notifyTemplate.NotifyTemplatePageInput;
import cn.iocoder.yudao.service.vo.system.notify.notifyTemplate.NotifyTemplateGetOutput;
import cn.iocoder.yudao.service.vo.system.notify.notifyTemplate.NotifyTemplateUpdateInput;
import cn.iocoder.yudao.service.vo.system.notify.notifyTemplate.NotifyTemplateCreateInput;
import com.google.common.annotations.VisibleForTesting;
import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import org.springframework.validation.annotation.Validated;
import org.springframework.data.domain.Page;
import java.util.*;
import javax.servlet.http.HttpServletResponse;
import org.springframework.transaction.annotation.Transactional;
import java.io.IOException;
import java.util.regex.Pattern;
import cn.hutool.core.util.ReUtil;

import cn.iocoder.yudao.framework.common.pojo.PageResult;
import cn.iocoder.yudao.service.convert.system.notify.NotifyTemplateConvert;
import cn.iocoder.yudao.service.vo.system.notify.notifyTemplate.*;

import static cn.iocoder.yudao.framework.common.exception.util.ServiceExceptionUtil.exception;
import static cn.iocoder.yudao.service.enums.infra.ErrorCodeConstants.*;

/**
 * 站内信模板 Service 实现类
 */
@Service
@Validated
public class NotifyTemplateServiceImpl implements NotifyTemplateService {

    /**
     * 正则表达式，匹配 {} 中的变量
     */
    private static final Pattern PATTERN_PARAMS = Pattern.compile("\\{(.*?)}");

    @Resource
    private SystemNotifyTemplateRepository systemNotifyTemplateRepository;

    @Override
    public SystemNotifyTemplate getNotifyTemplateByCodeFromCache(String code) {
        return systemNotifyTemplateRepository.findByCode(code).get();
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Long create(NotifyTemplateCreateInput inputVO) {
        // 校验站内信编码是否重复
        validateNotifyTemplateCodeDuplicate(null, inputVO.getCode());

        // 插入
        SystemNotifyTemplate notifyTemplate = NotifyTemplateConvert.INSTANCE.createInputConvert(inputVO);
        SystemNotifyTemplate finalNotifyTemplate = notifyTemplate;
        notifyTemplate = SystemNotifyTemplateDraft.$.produce(notifyTemplate, SystemNotifyTemplate->{
            SystemNotifyTemplate.setParams(parseTemplateContentParams(finalNotifyTemplate.content()));
        });
        notifyTemplate = systemNotifyTemplateRepository.insert(notifyTemplate);

        return notifyTemplate.id();
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Boolean update(NotifyTemplateUpdateInput inputVO) {
        // 校验存在
        validateNotifyTemplateExists(inputVO.getId());
        // 校验站内信编码是否重复
        validateNotifyTemplateCodeDuplicate(inputVO.getId(), inputVO.getCode());

        // 更新
        SystemNotifyTemplate updateObj = NotifyTemplateConvert.INSTANCE.updateInputConvert(inputVO);
        SystemNotifyTemplate finalUpdateObj = updateObj;
        updateObj = SystemNotifyTemplateDraft.$.produce(updateObj, SystemNotifyTemplate->{
            SystemNotifyTemplate.setParams(parseTemplateContentParams(finalUpdateObj.content()));
        });
        systemNotifyTemplateRepository.update(updateObj);
        return true;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Boolean deleted(Long id) {
        // 校验存在
        validateNotifyTemplateExists(id);
        // 删除
        systemNotifyTemplateRepository.deleteById(id);
        return true;
    }

    @Override
    public NotifyTemplateGetOutput get(Long id) {
        Optional<SystemNotifyTemplate> opTemplate = systemNotifyTemplateRepository.findById(id);
        if(!opTemplate.isPresent())
            throw exception(NOTIFY_TEMPLATE_NOT_EXISTS);
        return NotifyTemplateConvert.INSTANCE.getOutputConvert(opTemplate.get());
    }

    @Override
    public PageResult<NotifyTemplatePageOutput> page(NotifyTemplatePageInput inputVO) {
        Page<SystemNotifyTemplate> postPage = systemNotifyTemplateRepository.selectPage(inputVO);
        List<NotifyTemplatePageOutput> listPage = NotifyTemplateConvert.INSTANCE.pagePageOutputConvert(postPage);
        return new PageResult<>(listPage, postPage.getTotalElements());
    }

    private void validateNotifyTemplateExists(Long id) {
        if (!systemNotifyTemplateRepository.findById(id).isPresent()) {
            throw exception(NOTIFY_TEMPLATE_NOT_EXISTS);
        }
    }

    @VisibleForTesting
    public void validateNotifyTemplateCodeDuplicate(Long id, String code) {
        Optional<SystemNotifyTemplate> opTemplate = systemNotifyTemplateRepository.findByCode(code);
        if (!opTemplate.isPresent()) {
            return;
        }
        // 如果 id 为空，说明不用比较是否为相同 id 的字典类型
        if (id == null) {
            throw exception(NOTIFY_TEMPLATE_CODE_DUPLICATE, code);
        }
        if (opTemplate.get().id() != id) {
            throw exception(NOTIFY_TEMPLATE_CODE_DUPLICATE, code);
        }
    }

    @VisibleForTesting
    public List<String> parseTemplateContentParams(String content) {
        return ReUtil.findAllGroup1(PATTERN_PARAMS, content);
    }

    @Override
    public String formatNotifyTemplateContent(String content, Map<String, Object> params) {
        return StrUtil.format(content, params);
    }

}
