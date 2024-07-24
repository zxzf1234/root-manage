package cn.iocoder.yudao.service.repository.infra.data;

import cn.iocoder.yudao.service.model.infra.data.QrtzCronTriggersTable;
import cn.iocoder.yudao.service.model.infra.data.QrtzTriggers;
import cn.iocoder.yudao.service.model.infra.data.QrtzTriggersTable;
import org.babyfish.jimmer.spring.repository.JRepository;

public interface QrtzTriggersRepository extends JRepository<QrtzTriggers, String> {
    QrtzTriggersTable qrtzTriggersTable = QrtzTriggersTable.$;
}
