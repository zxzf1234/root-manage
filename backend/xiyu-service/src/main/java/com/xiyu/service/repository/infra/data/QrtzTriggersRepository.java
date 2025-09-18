package com.xiyu.service.repository.infra.data;

import com.xiyu.service.model.infra.data.QrtzCronTriggersTable;
import com.xiyu.service.model.infra.data.QrtzTriggers;
import com.xiyu.service.model.infra.data.QrtzTriggersTable;
import org.babyfish.jimmer.spring.repository.JRepository;

public interface QrtzTriggersRepository extends JRepository<QrtzTriggers, String> {
    QrtzTriggersTable qrtzTriggersTable = QrtzTriggersTable.$;
}
