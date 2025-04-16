package cn.iocoder.yudao.service.convert.infra.data;

import cn.iocoder.yudao.service.vo.infra.data.area.AreaDistrictListByCityIdOutput;
import cn.iocoder.yudao.service.model.infra.data.DictDistrict;
import cn.iocoder.yudao.service.vo.infra.data.area.AreaCityListByProvinceIdOutput;
import cn.iocoder.yudao.service.model.infra.data.DictCity;
import cn.iocoder.yudao.service.vo.infra.data.area.AreaProvinceListByCountryIdOutput;
import cn.iocoder.yudao.service.model.infra.data.DictProvince;
import cn.iocoder.yudao.service.vo.infra.data.area.AreaCountryListOutput;
import cn.iocoder.yudao.service.model.infra.data.DictCountry;
import java.util.*;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import org.babyfish.jimmer.Page;
import cn.iocoder.yudao.service.vo.infra.data.area.*;

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
