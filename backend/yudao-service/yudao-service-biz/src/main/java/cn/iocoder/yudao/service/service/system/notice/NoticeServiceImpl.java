package cn.iocoder.yudao.service.service.system.notice;

import cn.iocoder.yudao.service.model.system.notify.SystemNotice;
import cn.iocoder.yudao.service.repository.system.notify.SystemNoticeRepository;
import cn.iocoder.yudao.service.vo.system.notice.notice.NoticeGetOutput;
import cn.iocoder.yudao.service.vo.system.notice.notice.NoticePageOutput;
import cn.iocoder.yudao.service.vo.system.notice.notice.NoticePageInput;
import cn.iocoder.yudao.service.vo.system.notice.notice.NoticeUpdateInput;
import cn.iocoder.yudao.service.vo.system.notice.notice.NoticeCreateInput;
import com.google.common.annotations.VisibleForTesting;
import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import org.springframework.validation.annotation.Validated;
import org.springframework.data.domain.Page;
import java.util.*;
import javax.servlet.http.HttpServletResponse;
import org.springframework.transaction.annotation.Transactional;
import java.io.IOException;
import cn.iocoder.yudao.framework.common.pojo.PageResult;
import cn.iocoder.yudao.service.convert.system.notice.NoticeConvert;
import cn.iocoder.yudao.service.vo.system.notice.notice.*;

import static cn.iocoder.yudao.framework.common.exception.util.ServiceExceptionUtil.exception;
import static cn.iocoder.yudao.service.enums.system.ErrorCodeConstants.*;

/**
 * 通知公告管理 Service 实现类
 */
@Service
@Validated
public class NoticeServiceImpl implements NoticeService {

    @Resource
    private SystemNoticeRepository systemNoticeRepository;

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Long create(NoticeCreateInput inputVO) {
        SystemNotice notice = NoticeConvert.INSTANCE.createInputConvert(inputVO);
        notice = systemNoticeRepository.insert(notice);
        return notice.id();
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Boolean update(NoticeUpdateInput inputVO) {
        // 校验是否存在
        validateNoticeExists(inputVO.getId());
        // 更新通知公告
        SystemNotice updateObj = NoticeConvert.INSTANCE.updateInputConvert(inputVO);
        systemNoticeRepository.update(updateObj);
        return true;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Boolean deleted(Long id) {
        // 校验是否存在
        validateNoticeExists(id);
        // 删除通知公告
        systemNoticeRepository.deleteById(id);
        return true;
    }

    @Override
    public PageResult<NoticePageOutput> page(NoticePageInput inputVO) {
        Page<SystemNotice> postPage = systemNoticeRepository.selectPage(inputVO);
        List<NoticePageOutput> listPage = NoticeConvert.INSTANCE.pagePageOutputConvert(postPage);
        return new PageResult<>(listPage, postPage.getTotalElements());
    }

    @Override
    public NoticeGetOutput get(Long id) {
        Optional<SystemNotice> opNotice = systemNoticeRepository.findById(id);
        if(!opNotice.isPresent())
            throw exception(NOTICE_NOT_FOUND);
        return NoticeConvert.INSTANCE.getOutputConvert(opNotice.get());
    }

    @VisibleForTesting
    public void validateNoticeExists(Long id) {
        if (id == null) {
            return;
        }
        Optional<SystemNotice> opNotice = systemNoticeRepository.findById(id);
        if (!opNotice.isPresent()) {
            throw exception(NOTICE_NOT_FOUND);
        }
    }

}
