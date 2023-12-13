package cn.iocoder.yudao.service.service.system.notice;

import cn.iocoder.yudao.service.vo.system.notice.notice.NoticeGetOutput;
import cn.iocoder.yudao.service.vo.system.notice.notice.NoticePageOutput;
import cn.iocoder.yudao.service.vo.system.notice.notice.NoticePageInput;
import cn.iocoder.yudao.service.vo.system.notice.notice.NoticeUpdateInput;
import cn.iocoder.yudao.service.vo.system.notice.notice.NoticeCreateInput;
import java.util.*;
import cn.iocoder.yudao.service.vo.system.notice.notice.*;
import cn.iocoder.yudao.framework.common.pojo.PageResult;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 通知公告管理 Service 接口
 */
public interface NoticeService {

    Long create(NoticeCreateInput inputVO);

    Boolean update(NoticeUpdateInput inputVO);

    Boolean deleted(Long id);

    PageResult<NoticePageOutput> page(NoticePageInput inputVO);

    NoticeGetOutput get(Long id);

}
