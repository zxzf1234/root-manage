package cn.iocoder.yudao.service.repository.infra.data;

import cn.iocoder.yudao.service.model.infra.data.InfraDictTypeTable;
import cn.iocoder.yudao.service.model.infra.data.QrtzCronTriggers;
import cn.iocoder.yudao.service.model.infra.data.QrtzCronTriggersTable;
import org.babyfish.jimmer.spring.repository.JRepository;
import java.util.Optional;

public interface QrtzCronTriggersRepository extends JRepository<QrtzCronTriggers, String> {
    QrtzCronTriggersTable qrtzCronTriggersTable = QrtzCronTriggersTable.$;

    Optional<QrtzCronTriggers> findByTriggerName(String triggerName);
}
