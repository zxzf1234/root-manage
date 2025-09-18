package com.xiyu.service.service.system.notice;

import com.xiyu.service.vo.system.notice.notice.NoticeSetReadInput;
import com.xiyu.service.vo.system.notice.notice.NoticeGetUnreadInfoOutput;
import com.xiyu.service.vo.system.notice.notice.NoticeGetUnreadInfoInput;
import com.xiyu.service.vo.system.notice.notice.NoticePageQueryOutput;
import com.xiyu.service.vo.system.notice.notice.NoticePageQueryInput;
import com.xiyu.service.framework.web.web.core.pojo.PageResult;

/**
 * 通知管理 Service 接口
 */
public interface NoticeService {

    PageResult<NoticePageQueryOutput> pageQuery(NoticePageQueryInput inputVO);

    NoticeGetUnreadInfoOutput getUnreadInfo(NoticeGetUnreadInfoInput inputVO);

    Boolean setRead(NoticeSetReadInput inputVO);

    Boolean allSetRead(Long notifierId);

}
