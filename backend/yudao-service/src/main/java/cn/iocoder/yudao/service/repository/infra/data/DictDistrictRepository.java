package cn.iocoder.yudao.service.repository.infra.data;

import cn.iocoder.yudao.service.model.infra.data.DictDistrict;
import cn.iocoder.yudao.service.model.infra.data.DictDistrictTable;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.babyfish.jimmer.Page;
import org.springframework.util.StringUtils;
import java.util.Optional;
import java.util.List;

public interface DictDistrictRepository extends JRepository<DictDistrict, Long> {
    DictDistrictTable dictDistrictTable = DictDistrictTable.$;

    List<DictDistrict> findByCityId(Long cityId);


}