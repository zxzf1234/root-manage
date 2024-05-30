package cn.iocoder.yudao.service.repository.infra.data;

import cn.iocoder.yudao.service.model.infra.data.QrtzCronTriggers;
import org.babyfish.jimmer.spring.repository.JRepository;

public interface QrtzCronTriggersRepository extends JRepository<QrtzCronTriggers, String> {
}
