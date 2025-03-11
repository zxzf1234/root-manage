package cn.iocoder.yudao.service.repository.system.notice;

import cn.iocoder.yudao.service.model.system.notice.SystemNotice;
import cn.iocoder.yudao.service.model.system.notice.SystemNoticeTable;
import cn.iocoder.yudao.service.vo.system.notice.notice.NoticePageQueryInput;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.babyfish.jimmer.Page;
import org.springframework.util.StringUtils;
import java.util.Optional;
import java.util.List;
import java.time.LocalDateTime;

public interface SystemNoticeRepository extends JRepository<SystemNotice, Long> {
    SystemNoticeTable systemNoticeTable = SystemNoticeTable.$;

    default Page<SystemNotice> pageQuery(NoticePageQueryInput inputVO){
        return sql().createQuery(systemNoticeTable)
                .whereIf(inputVO.getIsRead() != null, systemNoticeTable.isRead().eq(inputVO.getIsRead()))
                .whereIf(inputVO.getNotifierId() != null, systemNoticeTable.notifierId().eq(inputVO.getNotifierId()))
                .orderBy(systemNoticeTable.id().desc())
                .select(systemNoticeTable)
                .fetchPage(inputVO.getPageNo() - 1, inputVO.getPageSize());
    }

    default Long getUnreadCount(Long noticerId){
        return sql().createQuery(systemNoticeTable)
                .whereIf(noticerId != null, systemNoticeTable.notifierId().eq(noticerId))
                .where(systemNoticeTable.isRead().eq(false))
                .select(systemNoticeTable)
                .fetchUnlimitedCount();
    }

    default List<Long> getUnreadMaxId(Long noticerId){
        return sql().createQuery(systemNoticeTable)
                .whereIf(noticerId != null, systemNoticeTable.notifierId().eq(noticerId))
                .where(systemNoticeTable.isRead().eq(false))
                .orderBy(systemNoticeTable.id().desc())
                .select(systemNoticeTable.id())
                .limit(1).execute();
    }

    default void setRead(Long id){
        sql().createUpdate(systemNoticeTable)
                .where(systemNoticeTable.id().eq(id))
                .set(systemNoticeTable.isRead(), true)
                .execute();
    }

    default void setAllRead(Long noticerId){
        sql().createUpdate(systemNoticeTable)
                .where(systemNoticeTable.notifierId().eq(noticerId))
                .where(systemNoticeTable.isRead().eq(false))
                .set(systemNoticeTable.isRead(), true)
                .execute();
    }


}