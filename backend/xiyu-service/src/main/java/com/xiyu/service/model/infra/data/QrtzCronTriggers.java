package com.xiyu.service.model.infra.data;

import org.babyfish.jimmer.sql.Entity;
import org.babyfish.jimmer.sql.Id;

@Entity
public interface QrtzCronTriggers {

    String schedName();

    @Id
    String triggerName();

    String triggerGroup();

    String cronExpression();

    String timeZoneId();
}
