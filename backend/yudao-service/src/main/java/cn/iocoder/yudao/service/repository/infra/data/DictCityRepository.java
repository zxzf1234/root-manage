package cn.iocoder.yudao.service.repository.infra.data;

import cn.iocoder.yudao.service.model.infra.data.DictCity;
import cn.iocoder.yudao.service.model.infra.data.DictCityTable;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.babyfish.jimmer.Page;
import org.springframework.util.StringUtils;
import java.util.Optional;
import java.util.List;

public interface DictCityRepository extends JRepository<DictCity, Long> {
    DictCityTable dictCityTable = DictCityTable.$;

    List<DictCity> findByProvinceId(Long provinceId);


}