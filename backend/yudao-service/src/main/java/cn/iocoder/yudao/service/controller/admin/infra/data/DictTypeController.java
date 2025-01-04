package cn.iocoder.yudao.service.controller.admin.infra.data;

import cn.iocoder.yudao.service.vo.infra.data.dictType.DictDataListAllSimpleOutput;
import cn.iocoder.yudao.service.vo.infra.data.dictType.DictDataListOutput;
import cn.iocoder.yudao.service.vo.infra.data.dictType.DictTypeUpdateInput;
import cn.iocoder.yudao.service.vo.infra.data.dictType.DictTypeGetOutput;
import cn.iocoder.yudao.service.vo.infra.data.dictType.DictTypeCreateInput;
import cn.iocoder.yudao.service.vo.infra.data.dictType.*;
import cn.iocoder.yudao.service.vo.infra.data.dictType.DictTypeListAllSimpleOutput;
import org.springframework.web.bind.annotation.*;
import jakarta.annotation.Resource;
import org.springframework.validation.annotation.Validated;
import org.springframework.security.access.prepost.PreAuthorize;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.Operation;

import jakarta.validation.*;
import java.util.*;

import cn.iocoder.yudao.service.framework.web.web.core.pojo.PageResult;
import cn.iocoder.yudao.service.framework.web.web.core.pojo.CommonResult;
import static cn.iocoder.yudao.service.framework.web.web.core.pojo.CommonResult.success;

import cn.iocoder.yudao.service.service.infra.data.DictTypeService;

@Tag(name = "字典类型")
@RestController
@RequestMapping("/infra/data/dict-type")
@Validated
public class DictTypeController {

    @Resource
    private DictTypeService dictTypeService;

    @PostMapping("/create")
    @Operation(summary = "创建字典类型")
    @PreAuthorize("@ss.hasPermission('infra:data:dict:create')")
    public CommonResult<UUID> create(@Valid @RequestBody DictTypeCreateInput inputVO) {
        return success(dictTypeService.create(inputVO));
    }

    @PutMapping("/update")
    @Operation(summary = "修改字典类型")
    @PreAuthorize("@ss.hasPermission('infra:data:dict:update')")
    public CommonResult<Boolean> update(@Valid @RequestBody DictTypeUpdateInput inputVO) {
        return success(dictTypeService.update(inputVO));
    }

    @DeleteMapping("/delete")
    @Operation(summary = "删除字典类型")
    @PreAuthorize("@ss.hasPermission('infra:data:dict:delete')")
    @Parameter(name = "id", description = "编号", required = true, example = "1100200200024")
    public CommonResult<Boolean> delete(@RequestParam("id") UUID id) {
        return success(dictTypeService.delete(id));
    }

    @GetMapping("/page")
    @Operation(summary = "获得字典类型的分页列表")
    @PreAuthorize("@ss.hasPermission('infra:data:dict:query')")
    public CommonResult<PageResult<DictTypePageOutput>> page(@Valid DictTypePageInput inputVO) {
        return success(dictTypeService.page(inputVO));
    }

    @GetMapping("/get")
    @Operation(summary = "查询字典类型详细")
    @PreAuthorize("@ss.hasPermission('infra:data:dict:query')")
    @Parameter(name = "id", description = "编号", required = true, example = "434543")
    public CommonResult<DictTypeGetOutput> get(@RequestParam("id") UUID id) {
        return success(dictTypeService.get(id));
    }

    @GetMapping("/list-all-simple")
    @Operation(summary = "获得全部字典类型列表")
    public CommonResult<List<DictTypeListAllSimpleOutput>> listAllSimple() {
        return success(dictTypeService.listAllSimple());
    }

    @GetMapping("/list-all-data")
    @Operation(summary = "获得全部字典类型列表")
    public CommonResult<List<DictDataListAllSimpleOutput>> listAllData() {
        return success(dictTypeService.listAllData());
    }

    @GetMapping("/data-list")
    @Operation(summary = "获得字典类型列表")
    @PreAuthorize("@ss.hasPermission('infra:data:dict:query')")
    @Parameter(name = "typeId", description = "字典类型id", example = "sys_common_sex")
    public CommonResult<List<DictDataListOutput>> dataList(@RequestParam("typeId") UUID typeId) {
        return success(dictTypeService.dataList(typeId));
    }

}
