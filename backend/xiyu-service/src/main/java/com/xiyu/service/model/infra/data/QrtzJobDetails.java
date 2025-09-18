package com.xiyu.service.model.infra.data;

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

    Boolean isDurable();

    Boolean isNonconcurrent();

    Boolean isUpdateData();

    String requestsRecovery();

    byte[] jobData();

}
