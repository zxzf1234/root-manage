package com.xiyu.service.service.infra.data;

import com.xiyu.service.repository.infra.data.DictCityRepository;
import com.xiyu.service.repository.infra.data.DictDistrictRepository;
import com.xiyu.service.repository.infra.data.DictProvinceRepository;
import com.xiyu.service.vo.infra.data.area.AreaDistrictListByCityIdOutput;
import com.xiyu.service.vo.infra.data.area.AreaCityListByProvinceIdOutput;
import com.xiyu.service.vo.infra.data.area.AreaProvinceListByCountryIdOutput;
import com.xiyu.service.model.infra.data.DictCountryProps;
import com.xiyu.service.repository.infra.data.DictCountryRepository;
import com.xiyu.service.vo.infra.data.area.AreaCountryListOutput;
import org.springframework.stereotype.Service;
import jakarta.annotation.Resource;
import org.springframework.validation.annotation.Validated;

import java.util.*;

import com.xiyu.service.convert.infra.data.AreaConvert;

import static com.xiyu.service.framework.exception.util.ServiceExceptionUtil.exception;

/**
 * 地区管理 Service 实现类
 */
@Service
@Validated
public class AreaServiceImpl implements AreaService {

    @Resource
    DictCountryRepository dictCountryRepository;

    @Resource
    DictProvinceRepository dictProvinceRepository;

    @Resource
    DictCityRepository dictCityRepository;

    @Resource
    DictDistrictRepository dictDistrictRepository;

    @Override
    public List<AreaCountryListOutput> countryList() {
        return AreaConvert.INSTANCE.countryListOutputConvert(dictCountryRepository.findAll(DictCountryProps.ID));
    }

    @Override
    public List<AreaProvinceListByCountryIdOutput> provinceListByCountryId(Long id) {
        return AreaConvert.INSTANCE.provinceListByCountryIdOutputConvert(dictProvinceRepository.findByCountryId(id));
    }

    @Override
    public List<AreaCityListByProvinceIdOutput> cityListByProvinceId(Long id) {
        return AreaConvert.INSTANCE.cityListByProvinceIdOutputConvert(dictCityRepository.findByProvinceId(id));
    }

    @Override
    public List<AreaDistrictListByCityIdOutput> districtListByCityId(Long id) {
        return AreaConvert.INSTANCE.districtListByCityIdOutputConvert(dictDistrictRepository.findByCityId(id));
    }

}
