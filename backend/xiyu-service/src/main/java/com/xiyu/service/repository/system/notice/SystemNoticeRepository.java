package com.xiyu.service.repository.system.notice;

import com.xiyu.service.model.system.notice.SystemNotice;
import com.xiyu.service.model.system.notice.SystemNoticeTable;
import com.xiyu.service.vo.system.notice.notice.NoticePageQueryInput;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.babyfish.jimmer.Page;

import java.util.List;

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