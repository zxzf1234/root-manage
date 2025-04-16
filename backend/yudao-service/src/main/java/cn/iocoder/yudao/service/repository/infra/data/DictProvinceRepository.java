package cn.iocoder.yudao.service.repository.infra.data;

import cn.iocoder.yudao.service.model.infra.data.DictProvince;
import cn.iocoder.yudao.service.model.infra.data.DictProvinceTable;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.babyfish.jimmer.Page;
import org.springframework.util.StringUtils;
import java.util.Optional;
import java.util.List;

public interface DictProvinceRepository extends JRepository<DictProvince, Long> {
    DictProvinceTable dictProvinceTable = DictProvinceTable.$;

    List<DictProvince> findByCountryId(Long countryId);


}