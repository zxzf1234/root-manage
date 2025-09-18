package com.xiyu.service.convert.infra.data;

import com.xiyu.service.vo.infra.data.area.AreaDistrictListByCityIdOutput;
import com.xiyu.service.model.infra.data.DictDistrict;
import com.xiyu.service.vo.infra.data.area.AreaCityListByProvinceIdOutput;
import com.xiyu.service.model.infra.data.DictCity;
import com.xiyu.service.vo.infra.data.area.AreaProvinceListByCountryIdOutput;
import com.xiyu.service.model.infra.data.DictProvince;
import com.xiyu.service.vo.infra.data.area.AreaCountryListOutput;
import com.xiyu.service.model.infra.data.DictCountry;
import java.util.*;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

/**
 * 地区管理 Convert
 */
@Mapper
public interface AreaConvert {
    AreaConvert INSTANCE = Mappers.getMapper(AreaConvert.class);


    List<AreaCountryListOutput> countryListOutputConvert(List<DictCountry> output);

    List<AreaProvinceListByCountryIdOutput> provinceListByCountryIdOutputConvert(List<DictProvince> output);

    List<AreaCityListByProvinceIdOutput> cityListByProvinceIdOutputConvert(List<DictCity> output);

    List<AreaDistrictListByCityIdOutput> districtListByCityIdOutputConvert(List<DictDistrict> output);

}
