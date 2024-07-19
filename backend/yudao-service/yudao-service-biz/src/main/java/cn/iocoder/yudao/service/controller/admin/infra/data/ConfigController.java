package cn.iocoder.yudao.service.controller.admin.infra.data;
import cn.iocoder.yudao.service.vo.infra.data.config.ConfigPageOutput;
import cn.iocoder.yudao.service.vo.infra.data.config.ConfigPageInput;
import cn.iocoder.yudao.service.vo.infra.data.config.ConfigGetOutput;
import cn.iocoder.yudao.service.vo.infra.data.config.ConfigUpdateInput;
import cn.iocoder.yudao.service.vo.infra.data.config.ConfigCreateInput;
import org.springframework.web.bind.annotation.*;
import javax.annotation.Resource;
import org.springframework.validation.annotation.Validated;
import org.springframework.security.access.prepost.PreAuthorize;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.Operation;

import javax.validation.constraints.*;
import javax.validation.*;
import javax.servlet.http.*;
import java.util.*;
import java.io.IOException;

import cn.iocoder.yudao.framework.common.pojo.PageResult;
import cn.iocoder.yudao.framework.common.pojo.CommonResult;
import static cn.iocoder.yudao.framework.common.pojo.CommonResult.success;

import cn.iocoder.yudao.framework.excel.core.util.ExcelUtils;

import cn.iocoder.yudao.framework.operatelog.core.annotations.OperateLog;
import static cn.iocoder.yudao.framework.operatelog.core.enums.OperateTypeEnum.*;

import cn.iocoder.yudao.service.service.infra.data.ConfigService;
import cn.iocoder.yudao.service.vo.infra.data.config.*;

@Tag(name = "配置管理")
@RestController
@RequestMapping("/infra/data/config")
@Validated
public class ConfigController {

    @Resource
    private ConfigService configService;

    @PostMapping("/create")
    @Operation(summary = "新增配置")
    @PreAuthorize("@ss.hasPermission('infra:data:config:create')")
    public CommonResult<String> create(@Valid @RequestBody ConfigCreateInput inputVO) {
        return success(configService.create(inputVO));
    }

    @PutMapping("/update")
    @Operation(summary = "更新配置")
    @PreAuthorize("@ss.hasPermission('infra:data:config:update')")
    public CommonResult<Boolean> update(@Valid @RequestBody ConfigUpdateInput inputVO) {
        return success(configService.update(inputVO));
    }

    @DeleteMapping("/deleted")
    @Operation(summary = "删除配置")
    @PreAuthorize("@ss.hasPermission('infra:data:config:delete')")
    @Parameter(name = "id", description = "配置主键ID", example = "")
    public CommonResult<Boolean> deleted(@RequestParam("id") UUID id) {
        return success(configService.deleted(id));
    }

    @GetMapping("/get")
    @Operation(summary = "获取单个配置")
    @Parameter(name = "id", description = "配置主键ID", example = "")
    public CommonResult<ConfigGetOutput> get(@RequestParam("id") UUID id) {
        return success(configService.get(id));
    }

    @GetMapping("/get-value-by-key")
    @Operation(summary = "根据参数键名查询参数值")
    @Parameter(name = "key", description = "参数键名", example = "")
    public CommonResult<String> getValueByKey(@RequestParam("key") String key) {
        return success(configService.getValueByKey(key));
    }

    @GetMapping("/page")
    @Operation(summary = "分页查询配置")
    @PreAuthorize("@ss.hasPermission('infra:data:config:query')")
    public CommonResult<PageResult<ConfigPageOutput>> page(@Valid ConfigPageInput inputVO) {
        return success(configService.page(inputVO));
    }

}
