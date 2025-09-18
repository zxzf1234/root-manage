package com.xiyu.service.repository.infra.data;

import com.xiyu.service.model.infra.data.DictCountry;
import com.xiyu.service.model.infra.data.DictCountryTable;
import org.babyfish.jimmer.spring.repository.JRepository;

public interface DictCountryRepository extends JRepository<DictCountry, Long> {
    DictCountryTable dictCountryTable = DictCountryTable.$;


}