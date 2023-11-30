package cn.iocoder.yudao.service.repository.infra.data;

import cn.iocoder.yudao.service.model.infra.data.InfraNo;
import cn.iocoder.yudao.service.model.infra.data.InfraNoTable;
import org.babyfish.jimmer.spring.repository.JRepository;

public interface InfraNoRepository extends JRepository<InfraNo, Long> {
    InfraNoTable infraNoTable = InfraNoTable.$;

}