package com.xiyu.service.repository.infra.data;

import com.xiyu.service.model.infra.data.DictProvince;
import com.xiyu.service.model.infra.data.DictProvinceTable;
import org.babyfish.jimmer.spring.repository.JRepository;

import java.util.List;

public interface DictProvinceRepository extends JRepository<DictProvince, Long> {
    DictProvinceTable dictProvinceTable = DictProvinceTable.$;

    List<DictProvince> findByCountryId(Long countryId);


}