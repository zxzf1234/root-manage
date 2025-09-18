package com.xiyu.service.service.system.notice;

import com.xiyu.service.vo.system.notice.notice.NoticeSetReadInput;
import com.xiyu.service.vo.system.notice.notice.NoticeGetUnreadInfoOutput;
import com.xiyu.service.vo.system.notice.notice.NoticeGetUnreadInfoInput;
import com.xiyu.service.model.system.notice.SystemNotice;
import com.xiyu.service.repository.system.notice.SystemNoticeRepository;
import com.xiyu.service.vo.system.notice.notice.NoticePageQueryOutput;
import com.xiyu.service.vo.system.notice.notice.NoticePageQueryInput;
import org.springframework.stereotype.Service;
import jakarta.annotation.Resource;
import org.springframework.validation.annotation.Validated;
import org.babyfish.jimmer.Page;
import java.util.*;

import com.xiyu.service.framework.web.web.core.pojo.PageResult;
import com.xiyu.service.convert.system.notice.NoticeConvert;

import static com.xiyu.service.framework.exception.util.ServiceExceptionUtil.exception;

/**
 * 通知管理 Service 实现类
 */
@Service
@Validated
public class NoticeServiceImpl implements NoticeService {

    @Resource
    private SystemNoticeRepository systemNoticeRepository;




    @Override
    public PageResult<NoticePageQueryOutput> pageQuery(NoticePageQueryInput inputVO) {
        Page<SystemNotice> pageSystemNotice = systemNoticeRepository.pageQuery(inputVO);
        List<NoticePageQueryOutput> listSystemNotice = NoticeConvert.INSTANCE.pageQueryOutputConvert(pageSystemNotice.getRows());
        return new PageResult<>(listSystemNotice, pageSystemNotice.getTotalRowCount());
    }

    @Override
    public NoticeGetUnreadInfoOutput getUnreadInfo(NoticeGetUnreadInfoInput inputVO) {
        Long count = systemNoticeRepository.getUnreadCount(inputVO.getNotifierId());
        List<Long> maxIds = systemNoticeRepository.getUnreadMaxId(inputVO.getNotifierId());
        return new NoticeGetUnreadInfoOutput( maxIds == null || maxIds.size() == 0 ? 0L : maxIds.get(0), count);
    }

    @Override
    public Boolean setRead(NoticeSetReadInput inputVO) {
        systemNoticeRepository.setRead(inputVO.getId());
        return true;
    }

    @Override
    public Boolean allSetRead(Long notifierId) {
        systemNoticeRepository.setAllRead(notifierId);
        return true;
    }

}
