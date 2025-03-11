package cn.iocoder.yudao.service.service.system.notice;

import cn.iocoder.yudao.service.vo.system.notice.notice.NoticeSetReadInput;
import cn.iocoder.yudao.service.vo.system.notice.notice.NoticeGetUnreadInfoOutput;
import cn.iocoder.yudao.service.vo.system.notice.notice.NoticeGetUnreadInfoInput;
import cn.iocoder.yudao.service.vo.system.notice.notice.NoticePageQueryOutput;
import cn.iocoder.yudao.service.vo.system.notice.notice.NoticePageQueryInput;
import java.util.*;
import cn.iocoder.yudao.service.framework.web.web.core.pojo.PageResult;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 通知管理 Service 接口
 */
public interface NoticeService {

    PageResult<NoticePageQueryOutput> pageQuery(NoticePageQueryInput inputVO);

    NoticeGetUnreadInfoOutput getUnreadInfo(NoticeGetUnreadInfoInput inputVO);

    Boolean setRead(NoticeSetReadInput inputVO);

    Boolean allSetRead(Long notifierId);

}
