package cn.iocoder.yudao.service.model.infra.data;

import org.babyfish.jimmer.sql.Entity;
import org.babyfish.jimmer.sql.Id;
import org.jetbrains.annotations.Nullable;

@Entity
public interface QrtzTriggers {

    String schedName();

    @Id
    String triggerName();

    String triggerGroup();

    String jobName();

    String jobGroup();

    @Nullable
    String description();

    @Nullable
    Long nextFireTime();

    @Nullable
    Long prevFireTime();

    @Nullable
    Integer priority();

    String triggerState();

    String triggerType();

    @Nullable
    Long startTime();

    @Nullable
    Long endTime();

    @Nullable
    String calendarName();

    @Nullable
    Integer misfireInstr();

    byte[] jobData();
}
