package com.xiyu.service.repository.infra.data;

import com.xiyu.service.model.infra.data.DictCity;
import com.xiyu.service.model.infra.data.DictCityTable;
import org.babyfish.jimmer.spring.repository.JRepository;

import java.util.List;

public interface DictCityRepository extends JRepository<DictCity, Long> {
    DictCityTable dictCityTable = DictCityTable.$;

    List<DictCity> findByProvinceId(Long provinceId);


}