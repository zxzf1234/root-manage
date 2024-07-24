package cn.iocoder.yudao.service.framework.security.core.service;

import cn.hutool.core.collection.CollUtil;
import cn.iocoder.yudao.service.framework.security.core.LoginUser;
import cn.iocoder.yudao.service.framework.security.core.util.SecurityFrameworkUtils;
import cn.iocoder.yudao.service.service.system.permission.PermissionService;

import javax.annotation.Resource;
import java.util.Arrays;

import static cn.iocoder.yudao.service.framework.security.core.util.SecurityFrameworkUtils.getLoginUserId;

/**
 * 默认的 {@link SecurityFrameworkService} 实现类
 *
 * @author 芋道源码
 */
public class SecurityFrameworkServiceImpl implements SecurityFrameworkService {

    @Resource
    private PermissionService permissionService;

    @Override
    public boolean hasPermission(String permission) {
        return hasAnyPermissions(permission);
    }

    @Override
    public boolean hasAnyPermissions(String... permissions) {
        return permissionService.hasAnyPermissions(getLoginUserId(), permissions);
    }

    @Override
    public boolean hasRole(String role) {
        return hasAnyRoles(role);
    }

    @Override
    public boolean hasAnyRoles(String... roles) {
        return permissionService.hasAnyRoles(getLoginUserId(), roles);
    }

    @Override
    public boolean hasScope(String scope) {
        return hasAnyScopes(scope);
    }

    @Override
    public boolean hasAnyScopes(String... scope) {
        LoginUser user = SecurityFrameworkUtils.getLoginUser();
        if (user == null) {
            return false;
        }
        return CollUtil.containsAny(user.getScopes(), Arrays.asList(scope));
    }

}
