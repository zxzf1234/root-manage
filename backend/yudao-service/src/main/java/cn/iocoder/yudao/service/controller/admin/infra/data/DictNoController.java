package cn.iocoder.yudao.service.controller.admin.infra.data;
import cn.iocoder.yudao.service.vo.infra.data.dictNo.DictNoQueryOutput;
import cn.iocoder.yudao.service.vo.infra.data.dictNo.DictNoQueryInput;
import cn.iocoder.yudao.service.vo.infra.data.dictNo.DictNoUpdateInput;
import cn.iocoder.yudao.service.vo.infra.data.dictNo.DictNoCreateInput;
import cn.iocoder.yudao.service.vo.infra.data.dictNo.DictNoGetOutput;
import org.springframework.web.bind.annotation.*;
import jakarta.annotation.Resource;
import org.springframework.validation.annotation.Validated;
import org.springframework.security.access.prepost.PreAuthorize;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.Operation;

import jakarta.validation.*;

import cn.iocoder.yudao.service.framework.web.web.core.pojo.PageResult;
import cn.iocoder.yudao.service.framework.web.web.core.pojo.CommonResult;
import static cn.iocoder.yudao.service.framework.web.web.core.pojo.CommonResult.success;

import cn.iocoder.yudao.service.service.infra.data.DictNoService;

@Tag(name = "字典编号")
@RestController
@RequestMapping("/infra/data/dict-no")
@Validated
public class DictNoController {

    @Resource
    private DictNoService dictNoService;

    @GetMapping("/get")
    @Operation(summary = "获取单个字典编号")
    @Parameter(name = "id", description = "字典ID", example = "")
    public CommonResult<DictNoGetOutput> get(@RequestParam("id") String id) {
        return success(dictNoService.get(id));
    }

    @PostMapping("/create")
    @Operation(summary = "新建字段编号")
    @PreAuthorize("@ss.hasPermission('infra:data:dict-no:create')")
    public CommonResult<String> create(@Valid @RequestBody DictNoCreateInput inputVO) {
        return success(dictNoService.create(inputVO));
    }

    @PostMapping("/update")
    @Operation(summary = "更新字典编号")
    @PreAuthorize("@ss.hasPermission('infra:data:dict-no:update')")
    public CommonResult<String> update(@Valid @RequestBody DictNoUpdateInput inputVO) {
        return success(dictNoService.update(inputVO));
    }

    @GetMapping("/query")
    @Operation(summary = "字典编号查询")
    @PreAuthorize("@ss.hasPermission('infra:data:dict-no:query')")
    public CommonResult<PageResult<DictNoQueryOutput>> query(@Valid DictNoQueryInput inputVO) {
        return success(dictNoService.query(inputVO));
    }

}
