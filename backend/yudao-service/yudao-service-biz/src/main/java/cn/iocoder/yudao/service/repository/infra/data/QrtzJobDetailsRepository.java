package cn.iocoder.yudao.service.repository.infra.data;

import cn.iocoder.yudao.service.model.infra.data.QrtzCronTriggers;
import cn.iocoder.yudao.service.model.infra.data.QrtzJobDetails;
import cn.iocoder.yudao.service.model.infra.data.QrtzJobDetailsTable;
import cn.iocoder.yudao.service.model.infra.data.QrtzTriggersTable;
import org.babyfish.jimmer.spring.repository.JRepository;

public interface QrtzJobDetailsRepository extends JRepository<QrtzJobDetails, String> {
    QrtzJobDetailsTable qrtzJobDetailsTable = QrtzJobDetailsTable.$;
}
