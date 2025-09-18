package com.xiyu.service.repository.infra.data;

import com.xiyu.service.model.infra.data.InfraDictTypeTable;
import com.xiyu.service.model.infra.data.QrtzCronTriggers;
import com.xiyu.service.model.infra.data.QrtzCronTriggersTable;
import org.babyfish.jimmer.spring.repository.JRepository;
import java.util.Optional;

public interface QrtzCronTriggersRepository extends JRepository<QrtzCronTriggers, String> {
    QrtzCronTriggersTable qrtzCronTriggersTable = QrtzCronTriggersTable.$;

    Optional<QrtzCronTriggers> findByTriggerName(String triggerName);
}
