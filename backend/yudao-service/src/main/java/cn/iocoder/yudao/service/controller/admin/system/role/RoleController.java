package cn.iocoder.yudao.service.controller.admin.system.role;
import cn.iocoder.yudao.service.vo.system.role.role.RoleGetColumnByRoleCodesOutput;
import cn.iocoder.yudao.service.vo.system.role.role.RoleGetColumnByRoleCodesInput;
import cn.iocoder.yudao.service.vo.system.role.role.RoleSaveRoleColumnInput;
import cn.iocoder.yudao.service.vo.system.role.role.RoleGetColumnByRoleIdOutput;
import cn.iocoder.yudao.service.vo.system.role.role.RoleListAllSimpleOutput;
import cn.iocoder.yudao.service.vo.system.role.role.RolePageInput;
import cn.iocoder.yudao.service.vo.system.role.role.RolePageOutput;
import cn.iocoder.yudao.service.vo.system.role.role.RoleGetOutput;
import cn.iocoder.yudao.service.vo.system.role.role.RoleUpdateStatusInput;
import cn.iocoder.yudao.service.vo.system.role.role.RoleUpdateInput;
import cn.iocoder.yudao.service.vo.system.role.role.RoleCreateInput;
import org.springframework.web.bind.annotation.*;
import jakarta.annotation.Resource;
import org.springframework.validation.annotation.Validated;
import org.springframework.security.access.prepost.PreAuthorize;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.Operation;

import jakarta.validation.*;
import jakarta.servlet.http.*;
import java.util.*;
import java.io.IOException;

import cn.iocoder.yudao.service.framework.web.web.core.pojo.PageResult;
import cn.iocoder.yudao.service.framework.web.web.core.pojo.CommonResult;
import static cn.iocoder.yudao.service.framework.web.web.core.pojo.CommonResult.success;

import cn.iocoder.yudao.service.service.system.role.RoleService;
import cn.iocoder.yudao.service.vo.system.role.role.*;

@Tag(name = "角色管理")
@RestController
@RequestMapping("/system/role/role")
@Validated
public class RoleController {

    @Resource
    private RoleService roleService;

    @PostMapping("/create")
    @Operation(summary = "创建角色")
    @PreAuthorize("@ss.hasPermission('system:role:create')")
    public CommonResult<Long> create(@Valid @RequestBody RoleCreateInput inputVO) {
        return success(roleService.create(inputVO));
    }

    @PutMapping("/update")
    @Operation(summary = "修改角色")
    @PreAuthorize("@ss.hasPermission('system:role:update')")
    public CommonResult<Boolean> update(@Valid @RequestBody RoleUpdateInput inputVO) {
        return success(roleService.update(inputVO));
    }

    @PutMapping("/update-status")
    @Operation(summary = "修改角色状态")
    @PreAuthorize("@ss.hasPermission('system:role:update')")
    public CommonResult<Boolean> updateStatus(@Valid @RequestBody RoleUpdateStatusInput inputVO) {
        return success(roleService.updateStatus(inputVO));
    }

    @DeleteMapping("/deleted")
    @Operation(summary = "删除角色")
    @PreAuthorize("@ss.hasPermission('system:role:delete')")
    @Parameter(name = "id", description = "角色ID", example = "")
    public CommonResult<Boolean> deleted(@RequestParam("id") Long id) {
        return success(roleService.deleted(id));
    }

    @GetMapping("/get")
    @Operation(summary = "获得单个角色信息")
    @PreAuthorize("@ss.hasPermission('system:role:query')")
    @Parameter(name = "id", description = "主键ID", example = "")
    public CommonResult<RoleGetOutput> get(@RequestParam("id") Long id) {
        return success(roleService.get(id));
    }

    @GetMapping("/page")
    @Operation(summary = "获取角色信息-分页")
    @PreAuthorize("@ss.hasPermission('system:role:query')")
    public CommonResult<PageResult<RolePageOutput>> page(@Valid RolePageInput inputVO) {
        return success(roleService.page(inputVO));
    }

    @GetMapping("/list-all-simple")
    @Operation(summary = "获取角色精简信息列表")
    public CommonResult<List<RoleListAllSimpleOutput>> listAllSimple() {
        return success(roleService.listAllSimple());
    }

    @GetMapping("/exported")
    @Operation(summary = "导出角色信息")
    @PreAuthorize("@ss.hasPermission('system:role:export')")
    public void exported(@Valid RoleExportedInput inputVO, HttpServletResponse response) throws IOException {
        roleService.exported(response, inputVO);
    }

    @GetMapping("/get-column-by-role-id")
    @Operation(summary = "根据角色ID获取字段权限")
    @Parameter(name = "id", description = "角色信息表主键ID", example = "")
    public CommonResult<List<RoleGetColumnByRoleIdOutput>> getColumnByRoleId(@RequestParam("id") Long id) {
        return success(roleService.getColumnByRoleId(id));
    }

    @PostMapping("/save-role-column")
    @Operation(summary = "保存角色字段权限")
    public CommonResult<Boolean> saveRoleColumn(@Valid @RequestBody RoleSaveRoleColumnInput inputVO) {
        return success(roleService.saveRoleColumn(inputVO));
    }

    @GetMapping("/get-column-by-role-codes")
    @Operation(summary = "根据RoleCodes获取权限字段")
    public CommonResult<List<RoleGetColumnByRoleCodesOutput>> getColumnByRoleCodes(@Valid RoleGetColumnByRoleCodesInput inputVO) {
        return success(roleService.getColumnByRoleCodes(inputVO));
    }

}
