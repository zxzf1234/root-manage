package cn.iocoder.yudao.service.repository.infra.data;

import cn.iocoder.yudao.service.model.infra.data.InfraDictNo;
import cn.iocoder.yudao.service.model.infra.data.InfraDictNoTable;
import org.babyfish.jimmer.spring.repository.JRepository;

public interface InfraDictNoRepository extends JRepository<InfraDictNo, Long> {
    InfraDictNoTable infraNoTable = InfraDictNoTable.$;

}