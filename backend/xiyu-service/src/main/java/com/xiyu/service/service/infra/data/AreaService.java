package com.xiyu.service.service.infra.data;

import com.xiyu.service.vo.infra.data.area.AreaDistrictListByCityIdOutput;
import com.xiyu.service.vo.infra.data.area.AreaCityListByProvinceIdOutput;
import com.xiyu.service.vo.infra.data.area.AreaProvinceListByCountryIdOutput;
import com.xiyu.service.vo.infra.data.area.AreaCountryListOutput;
import java.util.*;

/**
 * 地区管理 Service 接口
 */
public interface AreaService {

    List<AreaCountryListOutput> countryList();

    List<AreaProvinceListByCountryIdOutput> provinceListByCountryId(Long id);

    List<AreaCityListByProvinceIdOutput> cityListByProvinceId(Long id);

    List<AreaDistrictListByCityIdOutput> districtListByCityId(Long id);

}
