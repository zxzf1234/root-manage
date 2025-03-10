package cn.iocoder.yudao.service.model.system.notice;

import cn.iocoder.yudao.service.model.base.BaseEntity;
import org.babyfish.jimmer.sql.*;
import java.time.LocalDateTime;
import org.jetbrains.annotations.Nullable;

@Entity
public interface SystemNotice extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id();

    String title();

    String content();

    Integer type();

    Integer status();

    Long notifierId();

    Boolean isRead();

    @Nullable
    @LogicalDeleted("now")
    LocalDateTime deletedTime();

}