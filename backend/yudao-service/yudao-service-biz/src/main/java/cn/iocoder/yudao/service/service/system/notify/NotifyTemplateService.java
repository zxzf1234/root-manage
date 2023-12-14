package cn.iocoder.yudao.service.service.system.notify;

import cn.iocoder.yudao.service.model.system.notify.SystemNotifyTemplate;
import cn.iocoder.yudao.service.vo.system.notify.notifyTemplate.NotifyTemplateSendNotifyInput;
import cn.iocoder.yudao.service.vo.system.notify.notifyTemplate.NotifyTemplatePageOutput;
import cn.iocoder.yudao.service.vo.system.notify.notifyTemplate.NotifyTemplatePageInput;
import cn.iocoder.yudao.service.vo.system.notify.notifyTemplate.NotifyTemplateGetOutput;
import cn.iocoder.yudao.service.vo.system.notify.notifyTemplate.NotifyTemplateUpdateInput;
import cn.iocoder.yudao.service.vo.system.notify.notifyTemplate.NotifyTemplateCreateInput;
import java.util.*;
import cn.iocoder.yudao.service.vo.system.notify.notifyTemplate.*;
import cn.iocoder.yudao.framework.common.pojo.PageResult;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 站内信模板 Service 接口
 */
public interface NotifyTemplateService {

    Long create(NotifyTemplateCreateInput inputVO);

    Boolean update(NotifyTemplateUpdateInput inputVO);

    Boolean deleted(Long id);

    NotifyTemplateGetOutput get(Long id);

    PageResult<NotifyTemplatePageOutput> page(NotifyTemplatePageInput inputVO);

    String formatNotifyTemplateContent(String content, Map<String, Object> params);

    SystemNotifyTemplate getNotifyTemplateByCodeFromCache(String code);

}
