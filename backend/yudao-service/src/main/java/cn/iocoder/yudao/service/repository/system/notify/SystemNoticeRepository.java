package cn.iocoder.yudao.service.repository.system.notify;

import cn.iocoder.yudao.service.model.system.notify.SystemNotice;
import cn.iocoder.yudao.service.model.system.notify.SystemNoticeTable;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.babyfish.jimmer.Page;
import org.springframework.util.StringUtils;
import java.util.Optional;
import java.util.List;
import java.time.LocalDateTime;

public interface SystemNoticeRepository extends JRepository<SystemNotice, Long> {
    SystemNoticeTable systemNoticeTable = SystemNoticeTable.$;


}