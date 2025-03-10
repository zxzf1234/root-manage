package cn.iocoder.yudao.service.service.system.notice;

import cn.iocoder.yudao.service.vo.system.notice.notice.NoticeGetUnreadCountInput;
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

    Long getUnreadCount(NoticeGetUnreadCountInput inputVO);

}
