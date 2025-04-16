package cn.iocoder.yudao.service.service.infra.data;

import cn.iocoder.yudao.service.model.infra.data.DictDistrict;
import cn.iocoder.yudao.service.repository.infra.data.DictCityRepository;
import cn.iocoder.yudao.service.repository.infra.data.DictDistrictRepository;
import cn.iocoder.yudao.service.repository.infra.data.DictProvinceRepository;
import cn.iocoder.yudao.service.vo.infra.data.area.AreaDistrictListByCityIdOutput;
import cn.iocoder.yudao.service.vo.infra.data.area.AreaCityListByProvinceIdOutput;
import cn.iocoder.yudao.service.vo.infra.data.area.AreaProvinceListByCountryIdOutput;
import cn.iocoder.yudao.service.model.infra.data.DictCountry;
import cn.iocoder.yudao.service.model.infra.data.DictCountryProps;
import cn.iocoder.yudao.service.repository.infra.data.DictCountryRepository;
import cn.iocoder.yudao.service.vo.infra.data.area.AreaCountryListOutput;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import jakarta.annotation.Resource;
import org.springframework.validation.annotation.Validated;
import org.babyfish.jimmer.Page;
import java.util.*;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.transaction.annotation.Transactional;
import java.io.IOException;
import cn.iocoder.yudao.service.util.entity.EntityUtils;
import org.babyfish.jimmer.DraftObjects;
import cn.iocoder.yudao.service.framework.web.web.core.pojo.PageResult;
import cn.iocoder.yudao.service.convert.infra.data.AreaConvert;
import cn.iocoder.yudao.service.vo.infra.data.area.*;

import static cn.iocoder.yudao.service.framework.exception.util.ServiceExceptionUtil.exception;
import static cn.iocoder.yudao.service.errorCode.infra.data.AreaErrorCode.*;

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
