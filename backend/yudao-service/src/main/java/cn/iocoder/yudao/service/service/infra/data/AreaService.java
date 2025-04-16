package cn.iocoder.yudao.service.service.infra.data;

import cn.iocoder.yudao.service.vo.infra.data.area.AreaDistrictListByCityIdOutput;
import cn.iocoder.yudao.service.vo.infra.data.area.AreaCityListByProvinceIdOutput;
import cn.iocoder.yudao.service.vo.infra.data.area.AreaProvinceListByCountryIdOutput;
import cn.iocoder.yudao.service.vo.infra.data.area.AreaCountryListOutput;
import java.util.*;
import cn.iocoder.yudao.service.vo.infra.data.area.*;
import cn.iocoder.yudao.service.framework.web.web.core.pojo.PageResult;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 地区管理 Service 接口
 */
public interface AreaService {

    List<AreaCountryListOutput> countryList();

    List<AreaProvinceListByCountryIdOutput> provinceListByCountryId(Long id);

    List<AreaCityListByProvinceIdOutput> cityListByProvinceId(Long id);

    List<AreaDistrictListByCityIdOutput> districtListByCityId(Long id);

}
