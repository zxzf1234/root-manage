package com.xiyu.service.controller.admin.infra.codegen;
import com.xiyu.service.vo.infra.codegen.databaseTable.DatabaseTableGetColumnByNamesOutput;
import com.xiyu.service.vo.infra.codegen.databaseTable.DatabaseTableGetColumnByNamesInput;
import com.xiyu.service.vo.infra.codegen.database.*;
import org.springframework.web.bind.annotation.*;
import jakarta.annotation.Resource;
import org.springframework.validation.annotation.Validated;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.Operation;

import jakarta.validation.*;

import java.util.*;

import com.xiyu.service.framework.web.web.core.pojo.PageResult;
import com.xiyu.service.framework.web.web.core.pojo.CommonResult;
import static com.xiyu.service.framework.web.web.core.pojo.CommonResult.success;

import com.xiyu.service.service.infra.codegen.DatabaseTableService;

@Tag(name = "数据库表")
@RestController
@RequestMapping("/infra/codegen/database-table")
@Validated
public class DatabaseTableController {

    @Resource
    private DatabaseTableService databaseTableService;

    @GetMapping("/list")
    @Operation(summary = "查询数据库表")
    public CommonResult<PageResult<DatabaseTableResp>> getDatabaseTableList(
            @Validated DatabaseTableListReqVO list) {
        return success(databaseTableService.getDatabaseTableList(list));
    }

    @GetMapping("/name")
    @Operation(summary = "查询数据库表名")
    public CommonResult<List<DatabaseTableResp>> getDatabaseTableList(
            @RequestParam("name") String name) {
        return success(databaseTableService.getDatabaseTableName(name));
    }

    @GetMapping("/column_list")
    @Operation(summary = "查询数据库表字段")
    public CommonResult<List<DatabaseTableColumnResp>> getColumnList(
            @Validated DatabaseTableListReqVO list) {
        return success(databaseTableService.getColumnList(list));
    }

    @PostMapping("/create")
    @Operation(summary = "新增数据库表")
    public CommonResult<UUID> createTable(@Valid @RequestBody DatabaseUpdateReq reqVO) {
        return success(databaseTableService.createTable(reqVO));
    }

    @GetMapping("/get")
    @Operation(summary = "获得数据库表详情")
    @Parameter(name = "id", description = "编号", required = true, example = "1024")
    public CommonResult<DatabaseTableDetailResp> getDatabaseTable(@RequestParam("id") UUID id) {
        return success(databaseTableService.getDatabaseTable(id));
    }

    @PostMapping("/update")
    @Operation(summary = "更新数据库表")
    public CommonResult<UUID> updateTable(@Valid @RequestBody DatabaseUpdateReq reqVO) {
        return success(databaseTableService.updateTable(reqVO));
    }

    @DeleteMapping("/deleted")
    @Operation(summary = "删除接口")
    @Parameter(name = "id", description = "编号", required = true, example = "1024")
    public CommonResult<Boolean> deleteModule(@RequestParam("id") String id) {
        databaseTableService.deleted(id);
        return success(true);
    }

    @PostMapping("/get-column-by-names")
    @Operation(summary = "根据名称获取字段信息")
    public CommonResult<List<DatabaseTableGetColumnByNamesOutput>> getColumnByNames(@Valid @RequestBody DatabaseTableGetColumnByNamesInput inputVO) {
        return success(databaseTableService.getColumnByNames(inputVO));
    }

}
