package cn.iocoder.yudao.service.model.system.notify;

import cn.iocoder.yudao.service.model.base.BaseEntity;
import cn.iocoder.yudao.service.model.system.user.SystemUser;
import org.babyfish.jimmer.sql.*;
import java.time.LocalDateTime;
import org.jetbrains.annotations.Nullable;
import java.util.Map;

@Entity
public interface SystemNotifyMessage extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id();

    @IdView
    @Nullable
    Long userId();

    @ManyToOne
    @Nullable
    SystemUser user();

    Integer userType();

    Long templateId();

    String templateCode();

    String templateNickname();

    String templateContent();

    Integer templateType();

    @Serialized
    Map<String, Object> templateParams();

    Boolean readStatus();

    @Nullable
    LocalDateTime readTime();

    @Nullable
    @LogicalDeleted("now")
    LocalDateTime deletedTime();

}