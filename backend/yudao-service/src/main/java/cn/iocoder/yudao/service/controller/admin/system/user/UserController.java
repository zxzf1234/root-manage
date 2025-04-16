package cn.iocoder.yudao.service.controller.admin.system.user;
import cn.iocoder.yudao.service.vo.system.user.user.UserGetOwnerUserOutput;
import cn.iocoder.yudao.service.vo.system.user.user.UserGetByDeptOutput;
import cn.iocoder.yudao.service.vo.system.user.user.UserGetOutput;
import cn.iocoder.yudao.service.vo.system.user.user.UserListAllSimpleOutput;
import cn.iocoder.yudao.service.vo.system.user.user.UserPageOutput;
import cn.iocoder.yudao.service.vo.system.user.user.UserPageInput;
import cn.iocoder.yudao.service.vo.system.user.user.UserUpdateStatusInput;
import cn.iocoder.yudao.service.vo.system.user.user.UserUpdatePasswordInput;
import cn.iocoder.yudao.service.vo.system.user.user.UserUpdateInput;
import cn.iocoder.yudao.service.vo.system.user.user.UserCreateInput;
import io.swagger.v3.oas.annotations.Parameters;
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

import cn.iocoder.yudao.service.framework.excel.core.util.ExcelUtils;

import cn.iocoder.yudao.service.service.system.user.UserService;
import cn.iocoder.yudao.service.vo.system.user.user.*;
import org.springframework.web.multipart.MultipartFile;

@Tag(name = "用户管理")
@RestController
@RequestMapping("/system/user/user")
@Validated
public class UserController {

    @Resource
    private UserService userService;

    @PostMapping("/create")
    @Operation(summary = "新建用户")
    @PreAuthorize("@ss.hasPermission('system:user:create')")
    public CommonResult<Long> create(@Valid @RequestBody UserCreateInput inputVO) {
        return success(userService.create(inputVO));
    }

    @PutMapping("/update")
    @Operation(summary = "修改用户")
    @PreAuthorize("@ss.hasPermission('system:user:update')")
    public CommonResult<Long> update(@Valid @RequestBody UserUpdateInput inputVO) {
        return success(userService.update(inputVO));
    }

    @DeleteMapping("/deleted")
    @Operation(summary = "删除用户")
    @PreAuthorize("@ss.hasPermission('system:user:delete')")
    @Parameter(name = "id", description = "用户ID", example = "")
    public CommonResult<Boolean> deleted(@RequestParam("id") Long id) {
        return success(userService.deleted(id));
    }

    @PutMapping("/update-password")
    @Operation(summary = "重置用户密码")
    @PreAuthorize("@ss.hasPermission('system:user:update-password')")
    public CommonResult<Boolean> updatePassword(@Valid @RequestBody UserUpdatePasswordInput inputVO) {
        return success(userService.updatePassword(inputVO));
    }

    @PutMapping("/update-status")
    @Operation(summary = "修改用户状态")
    @PreAuthorize("@ss.hasPermission('system:user:update')")
    public CommonResult<Boolean> updateStatus(@Valid @RequestBody UserUpdateStatusInput inputVO) {
        return success(userService.updateStatus(inputVO));
    }

    @GetMapping("/page")
    @Operation(summary = "用户分页列表")
    @PreAuthorize("@ss.hasPermission('system:user:list')")
    public CommonResult<PageResult<UserPageOutput>> page(@Valid UserPageInput inputVO) {
        return success(userService.page(inputVO));
    }

    @GetMapping("/list-all-simple")
    @Operation(summary = "获取用户精简信息列表")
    public CommonResult<List<UserListAllSimpleOutput>> listAllSimple() {
        return success(userService.listAllSimple());
    }

    @GetMapping("/get")
    @Operation(summary = "获得用户详情")
    @PreAuthorize("@ss.hasPermission('system:user:query')")
    @Parameter(name = "id", description = "用户ID", required = true, example = "")
    public CommonResult<UserGetOutput> get(@RequestParam("id") Long id) {
        return success(userService.get(id));
    }

    @GetMapping("/exported")
    @Operation(summary = "导出用户")
    @PreAuthorize("@ss.hasPermission('system:user:export')")
    public void exported(@Validated UserExportedInput inputVO, HttpServletResponse response) throws IOException {
        userService.exported(response, inputVO);
    }

    @GetMapping("/get-import-template")
    @Operation(summary = "获得导入用户模板")
    public void getImportTemplate(HttpServletResponse response ) throws IOException {
        userService.getImportTemplate(response );
    }

    @PostMapping("/import")
    @Operation(summary = "导入用户")
    @Parameters({@Parameter(name = "file", description = "Excel 文件", required = true)})
    @PreAuthorize("@ss.hasPermission('system:user:import')")
    public CommonResult<List<UserImportRespVO>> importExcel(@RequestParam("file") MultipartFile file) throws IOException {
        List<UserImportExcelVO> list = ExcelUtils.read(file, UserImportExcelVO.class);
        return success(userService.importUserList(list));
    }
    @GetMapping("/get-by-dept")
    @Operation(summary = "根据部门获取员工")
    @Parameter(name = "deptId", description = "部门表主键ID", example = "")
    public CommonResult<List<UserGetByDeptOutput>> getByDept(@RequestParam("deptId") Long deptId) {
        return success(userService.getByDept(deptId));
    }

    @GetMapping("/get-owner-user")
    @Operation(summary = "获取当前用户有权限的员工")
    public CommonResult<List<UserGetOwnerUserOutput>> getOwnerUser() {
        return success(userService.getOwnerUsers());
    }

}
