package com.xiyu.service.controller.admin.infra.auth;

import cn.hutool.core.util.StrUtil;
import com.xiyu.service.enums.common.CommonStatusEnum;
import com.xiyu.service.framework.account.service.AccountService;
import com.xiyu.service.framework.web.web.core.pojo.CommonResult;
import com.xiyu.service.util.collection.SetUtils;
import com.xiyu.service.framework.operateLog.core.annotations.OperateLog;
import com.xiyu.service.framework.security.config.SecurityProperties;
import com.xiyu.service.convert.infra.auth.AuthConvert;
import com.xiyu.service.enums.system.login.SystemLoginTypeEnum;
import com.xiyu.service.enums.system.permission.MenuTypeEnum;
import com.xiyu.service.model.infra.data.SystemMenu;
import com.xiyu.service.model.system.role.SystemRole;
import com.xiyu.service.model.system.user.SystemUser;
import com.xiyu.service.service.infra.auth.AdminAuthService;
import com.xiyu.service.service.system.permission.PermissionService;
import com.xiyu.service.service.system.role.RoleService;
import com.xiyu.service.service.system.user.UserService;
import com.xiyu.service.vo.infra.auth.*;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.Operation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import jakarta.annotation.Resource;
import jakarta.annotation.security.PermitAll;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import java.util.List;
import java.util.Optional;

import static com.xiyu.service.framework.web.web.core.pojo.CommonResult.success;
import static com.xiyu.service.framework.security.core.util.SecurityFrameworkUtils.getLoginUserId;
import static com.xiyu.service.framework.security.core.util.SecurityFrameworkUtils.obtainAuthorization;
import static java.util.Collections.singleton;

@Tag(name = "管理后台 - 认证")
@RestController
@RequestMapping("/infra/auth")
@Validated
@Slf4j
public class AuthController {

    @Resource
    private AdminAuthService authService;
    @Resource
    private UserService userService;
    @Resource
    private RoleService roleService;
    @Resource
    private PermissionService permissionService;
    @Resource
    private SecurityProperties securityProperties;
    @Resource
    private AccountService accountService;


    @PostMapping("/login")
    @PermitAll
    @Operation(summary = "使用账号密码登录")
    @OperateLog(enable = false) // 避免 Post 请求被记录操作日志
    public CommonResult<AuthLoginRespVO> login(@RequestBody @Valid AuthLoginReqVO reqVO) {
        return success(authService.login(reqVO));
    }

    @PostMapping("/logout")
    @PermitAll
    @Operation(summary = "登出系统")
    @OperateLog(enable = false) // 避免 Post 请求被记录操作日志
    public CommonResult<Boolean> logout(HttpServletRequest request) {
        String token = obtainAuthorization(request, securityProperties.getTokenHeader(), securityProperties.getTokenParameter());
        if (StrUtil.isNotBlank(token)) {
            authService.logout(token, SystemLoginTypeEnum.LOGOUT_SELF.getValue());
        }
        return success(true);
    }

    @PostMapping("/refresh-token")
    @PermitAll
    @Operation(summary = "刷新令牌")
    @Parameter(name = "refreshToken", description = "刷新令牌", required = true)
    @OperateLog(enable = false) // 避免 Post 请求被记录操作日志
    public CommonResult<AuthLoginRespVO> refreshToken(@RequestParam("refreshToken") String refreshToken) {
        return success(authService.refreshToken(refreshToken));
    }

    @GetMapping("/get-permission-info")
    @Operation(summary = "获取登录用户的权限信息")
    public CommonResult<AuthPermissionInfoRespVO> getPermissionInfo() {
        // 获得用户信息
        Optional<SystemUser> user = userService.getUser(getLoginUserId());
        if (user.isEmpty()) {
            return null;
        }
        // 获得角色列表
        List<Long> roleIds = permissionService.getUserRoleIds(getLoginUserId(), singleton(CommonStatusEnum.ENABLE.getValue()));
        List<SystemRole> roleList = roleService.getRoleListFrom(roleIds);
        // 获得菜单列表
        List<SystemMenu> menuList = permissionService.getRoleMenuList(roleIds,
                SetUtils.asSet(MenuTypeEnum.DIR.getType(), MenuTypeEnum.MENU.getType(), MenuTypeEnum.BUTTON.getType()),
                singleton(CommonStatusEnum.ENABLE.getValue())); // 只要开启的
        // 拼接结果返回
        return success(AuthConvert.INSTANCE.convert(user.get(), roleList, menuList));
    }

    @GetMapping("/list-menus")
    @Operation(summary = "获得登录用户的菜单列表")
    public CommonResult<List<AuthMenuRespVO>> getMenuList() {
        // 获得角色列表
        List<Long> roleIds = permissionService.getUserRoleIds(getLoginUserId(), singleton(CommonStatusEnum.ENABLE.getValue()));
        // 获得用户拥有的菜单列表
        List<SystemMenu> menuList = permissionService.getRoleMenuList(roleIds,
                SetUtils.asSet(MenuTypeEnum.DIR.getType(), MenuTypeEnum.MENU.getType()), // 只要目录和菜单类型
                singleton(CommonStatusEnum.ENABLE.getValue())); // 只要开启的
        // 转换成 Tree 结构返回
        return success(AuthConvert.INSTANCE.buildMenuTree(menuList));
    }

    @PostMapping("/refresh-account")
    @PermitAll
    @Operation(summary = "刷新账号")
    @OperateLog(enable = false) // 避免 Post 请求被记录操作日志
    public CommonResult<Boolean> refreshToken(@RequestBody @Valid AuthRefreshAccountInput input) {
        return success(accountService.refreshAccountInfo(input));
    }

}
