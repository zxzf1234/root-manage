package cn.iocoder.yudao.service.controller.admin.infra.data;
import cn.iocoder.yudao.service.vo.infra.data.area.AreaDistrictListByCityIdOutput;
import cn.iocoder.yudao.service.vo.infra.data.area.AreaCityListByProvinceIdOutput;
import cn.iocoder.yudao.service.vo.infra.data.area.AreaProvinceListByCountryIdOutput;
import cn.iocoder.yudao.service.vo.infra.data.area.AreaCountryListOutput;
import org.springframework.web.bind.annotation.*;
import jakarta.annotation.Resource;
import org.springframework.validation.annotation.Validated;
import org.springframework.security.access.prepost.PreAuthorize;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.Operation;

import jakarta.validation.constraints.*;
import jakarta.validation.*;
import jakarta.servlet.http.*;
import java.util.*;
import java.io.IOException;

import cn.iocoder.yudao.service.framework.web.web.core.pojo.PageResult;
import cn.iocoder.yudao.service.framework.web.web.core.pojo.CommonResult;
import static cn.iocoder.yudao.service.framework.web.web.core.pojo.CommonResult.success;

import cn.iocoder.yudao.service.framework.excel.core.util.ExcelUtils;

import cn.iocoder.yudao.service.framework.operateLog.core.annotations.OperateLog;
import static cn.iocoder.yudao.service.framework.operateLog.core.enums.OperateTypeEnum.*;

import cn.iocoder.yudao.service.service.infra.data.AreaService;
import cn.iocoder.yudao.service.vo.infra.data.area.*;

@Tag(name = "地区管理")
@RestController
@RequestMapping("/infra/data/area")
@Validated
public class AreaController {

    @Resource
    private AreaService areaService;

    @GetMapping("/country-list")
    @Operation(summary = "查询国家")
    public CommonResult<List<AreaCountryListOutput>> countryList() {
        return success(areaService.countryList());
    }

    @GetMapping("/province-list-by-country-id")
    @Operation(summary = "根据国家ID查询省份")
    @Parameter(name = "id", description = "字典-国家主键ID", example = "")
    public CommonResult<List<AreaProvinceListByCountryIdOutput>> provinceListByCountryId(@RequestParam("id") Long id) {
        return success(areaService.provinceListByCountryId(id));
    }

    @GetMapping("/city-list-by-province-id")
    @Operation(summary = "根据省份ID查询城市")
    @Parameter(name = "id", description = "字典-国家主键ID", example = "")
    public CommonResult<List<AreaCityListByProvinceIdOutput>> cityListByProvinceId(@RequestParam("id") Long id) {
        return success(areaService.cityListByProvinceId(id));
    }

    @GetMapping("/district-list-by-city-id")
    @Operation(summary = "根据城市ID查询区")
    @Parameter(name = "id", description = "字典-城市主键ID", example = "")
    public CommonResult<List<AreaDistrictListByCityIdOutput>> districtListByCityId(@RequestParam("id") Long id) {
        return success(areaService.districtListByCityId(id));
    }

}
