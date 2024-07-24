package cn.iocoder.yudao.service.model.infra.data;

import org.babyfish.jimmer.sql.Entity;
import org.babyfish.jimmer.sql.Id;
import org.jetbrains.annotations.Nullable;

@Entity
public interface QrtzJobDetails {
    String schedName();

    @Id
    String jobName();

    String jobGroup();

    @Nullable
    String description();

    String jobClassName();

    String isDurable();

    String isNonconcurrent();

    String  isUpdateData();

    String requestsRecovery();

    byte[] jobData();

}
