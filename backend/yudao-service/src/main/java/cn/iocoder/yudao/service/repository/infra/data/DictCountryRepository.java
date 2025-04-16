package cn.iocoder.yudao.service.repository.infra.data;

import cn.iocoder.yudao.service.model.infra.data.DictCountry;
import cn.iocoder.yudao.service.model.infra.data.DictCountryTable;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.babyfish.jimmer.Page;
import org.springframework.util.StringUtils;
import java.util.Optional;
import java.util.List;

public interface DictCountryRepository extends JRepository<DictCountry, Long> {
    DictCountryTable dictCountryTable = DictCountryTable.$;


}