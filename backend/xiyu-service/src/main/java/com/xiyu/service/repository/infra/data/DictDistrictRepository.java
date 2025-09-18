package com.xiyu.service.repository.infra.data;

import com.xiyu.service.model.infra.data.DictDistrict;
import com.xiyu.service.model.infra.data.DictDistrictTable;
import org.babyfish.jimmer.spring.repository.JRepository;

import java.util.List;

public interface DictDistrictRepository extends JRepository<DictDistrict, Long> {
    DictDistrictTable dictDistrictTable = DictDistrictTable.$;

    List<DictDistrict> findByCityId(Long cityId);


}