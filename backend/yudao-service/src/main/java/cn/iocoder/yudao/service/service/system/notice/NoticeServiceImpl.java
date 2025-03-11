package cn.iocoder.yudao.service.service.system.notice;

import cn.iocoder.yudao.service.vo.system.notice.notice.NoticeSetReadInput;
import cn.iocoder.yudao.service.vo.system.notice.notice.NoticeGetUnreadCountInput;
import cn.iocoder.yudao.service.model.system.notice.SystemNotice;
import cn.iocoder.yudao.service.repository.system.notice.SystemNoticeRepository;
import cn.iocoder.yudao.service.vo.system.notice.notice.NoticePageQueryOutput;
import cn.iocoder.yudao.service.vo.system.notice.notice.NoticePageQueryInput;
import org.springframework.stereotype.Service;
import jakarta.annotation.Resource;
import org.springframework.validation.annotation.Validated;
import org.babyfish.jimmer.Page;
import java.util.*;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.transaction.annotation.Transactional;
import java.io.IOException;
import cn.iocoder.yudao.service.util.entity.EntityUtils;
import org.babyfish.jimmer.DraftObjects;
import cn.iocoder.yudao.service.framework.web.web.core.pojo.PageResult;
import cn.iocoder.yudao.service.convert.system.notice.NoticeConvert;

import static cn.iocoder.yudao.service.framework.exception.util.ServiceExceptionUtil.exception;
import static cn.iocoder.yudao.service.errorCode.system.notice.NoticeErrorCode.*;

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
    public Long getUnreadCount(NoticeGetUnreadCountInput inputVO) {
        return systemNoticeRepository.getUnreadCount(inputVO.getNotifierId());
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
