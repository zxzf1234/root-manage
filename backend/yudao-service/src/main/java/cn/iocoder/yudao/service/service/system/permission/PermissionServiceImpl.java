package cn.iocoder.yudao.service.service.system.permission;

import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.collection.CollectionUtil;
import cn.hutool.core.util.ArrayUtil;
import cn.iocoder.yudao.service.enums.common.CommonStatusEnum;
import cn.iocoder.yudao.service.util.collection.CollectionUtils;
import cn.iocoder.yudao.service.model.infra.data.SystemMenu;
import cn.iocoder.yudao.service.model.system.permission.*;
import cn.iocoder.yudao.service.model.system.role.SystemRole;
import cn.iocoder.yudao.service.repository.infra.data.SystemMenuRepository;
import cn.iocoder.yudao.service.repository.system.permission.SystemRoleMenuRepository;
import cn.iocoder.yudao.service.repository.system.permission.SystemUserRoleRepository;
import cn.iocoder.yudao.service.service.infra.data.MenuService;
import cn.iocoder.yudao.service.service.system.role.RoleService;
import com.google.common.collect.Sets;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jakarta.annotation.Resource;
import java.util.*;
import java.util.stream.Collectors;

import static cn.iocoder.yudao.service.util.collection.CollectionUtils.convertList;
import static cn.iocoder.yudao.service.util.collection.CollectionUtils.convertSet;
import static java.util.Collections.singleton;

/**
 * 权限 Service 实现类
 *
 * @author 芋道源码
 */
@Service
@Slf4j
public class PermissionServiceImpl implements PermissionService {

    @Resource
    private SystemRoleMenuRepository systemRoleMenuRepository;
    @Resource
    private SystemUserRoleRepository systemUserRoleRepository;

    @Resource
    private SystemMenuRepository systemMenuRepository;

    @Resource
    private RoleService roleService;
    @Resource
    private MenuService menuService;


    @Override
    public List<SystemMenu> getRoleMenuList(Collection<Long> roleIds, Collection<Integer> menuTypes,
                                                     Collection<Integer> menusStatuses) {
        // 任一一个参数为空时，不返回任何菜单
        if (CollectionUtils.isAnyEmpty(roleIds, menuTypes, menusStatuses)) {
            return Collections.emptyList();
        }

        // 判断角色是否包含超级管理员。如果是超级管理员，获取到全部
        if (roleService.hasAnySuperAdmin(roleIds)) {
            return menuService.getMenuList(menuTypes, menusStatuses, false);
        }

        if (roleService.hasAnyRoot(roleIds)) {
            return menuService.getMenuList(menuTypes, menusStatuses, null);
        }

        // 获得角色拥有的菜单关联
        List<UUID> menuIds = systemRoleMenuRepository.findByRoleIdIn(roleIds).stream().map(SystemRoleMenu::menuId).collect(Collectors.toList());
        return menuService.getMenuList(menuIds, menuTypes, menusStatuses);
    }

    @Override
    public List<Long> getUserRoleIds(Long userId, Collection<Integer> roleStatuses) {
        List<Long> roleIds = systemUserRoleRepository.findByUserId(userId).stream().map(SystemUserRole::roleId).collect(Collectors.toList());
        // 创建用户的时候没有分配角色，会存在空指针异常
        if (CollUtil.isEmpty(roleIds)) {
            return Collections.emptyList();
        }
        // 过滤角色状态
        if (CollectionUtil.isNotEmpty(roleStatuses)) {
            roleIds.removeIf(roleId -> {
                SystemRole role = roleService.getRoleFrom(roleId);
                return role == null || !roleStatuses.contains(role.status());
            });
        }
        return roleIds;
    }

    @Override
    public List<UUID> getRoleMenuIds(Long roleId) {
        // 如果是管理员的情况下，获取全部菜单编号
        if (roleService.hasAnySuperAdmin(Collections.singletonList(roleId))) {
            return convertList(systemMenuRepository.findAllExcludeBack(), SystemMenu::id);
        }
        if (roleService.hasAnyRoot(Collections.singletonList(roleId))) {
            return convertList(systemMenuRepository.findAll(), SystemMenu::id);
        }

        // 如果是非管理员的情况下，获得拥有的菜单编号
        return convertList(systemRoleMenuRepository.findByRoleId(roleId), SystemRoleMenu::menuId);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void assignRoleMenu(Long roleId, Set<UUID> menuIds) {
        // 获得角色拥有菜单编号
        Set<UUID> dbMenuIds = convertSet(systemRoleMenuRepository.findByRoleId(roleId),
                SystemRoleMenu::menuId);
        // 计算新增和删除的菜单编号
        Collection<UUID> createMenuIds = CollUtil.subtract(menuIds, dbMenuIds);
        Collection<UUID> deleteMenuIds = CollUtil.subtract(dbMenuIds, menuIds);
        // 执行新增和删除。对于已经授权的菜单，不用做任何处理
        if (!CollectionUtil.isEmpty(createMenuIds)) {
            List<SystemRoleMenu> systemRoleMenuList = CollectionUtils.convertList(createMenuIds, menuId -> SystemRoleMenuDraft.$.produce(SystemRoleMenu->{
                SystemRoleMenu.setRoleId(roleId).setMenuId(menuId);
            }));

            systemRoleMenuRepository.insertBatch(systemRoleMenuList);
        }
        if (!CollectionUtil.isEmpty(deleteMenuIds)) {
            systemRoleMenuRepository.deleteByRoleIdAndMenuIdIn(roleId, deleteMenuIds);
        }
    }

    @Override
    public Set<Long> getUserRoleIdListByUserId(Long userId) {
        return convertSet(systemUserRoleRepository.findByUserId(userId),
                SystemUserRole::roleId);
    }

    @Override
    public Set<Long> getUserRoleIdListByRoleIds(Collection<Long> roleIds) {
        return convertSet(systemUserRoleRepository.findByRoleIdIn(roleIds),
                SystemUserRole::userId);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void assignUserRole(Long userId, Set<Long> roleIds) {
        // 获得角色拥有角色编号
        Set<Long> dbRoleIds = convertSet(systemUserRoleRepository.findByUserId(userId),
                SystemUserRole::roleId);
        // 计算新增和删除的角色编号
        Collection<Long> createRoleIds = CollUtil.subtract(roleIds, dbRoleIds);
        Collection<Long> deleteMenuIds = CollUtil.subtract(dbRoleIds, roleIds);
        // 执行新增和删除。对于已经授权的角色，不用做任何处理
        if (!CollectionUtil.isEmpty(createRoleIds)) {
            List<SystemUserRole> userRoleList = CollectionUtils.convertList(createRoleIds, roleId -> SystemUserRoleDraft.$.produce(SystemUserRole->{
                SystemUserRole.setUserId(userId).setRoleId(roleId);
            }));

            systemUserRoleRepository.insertBatch(userRoleList);


        }
        if (!CollectionUtil.isEmpty(deleteMenuIds)) {
            systemUserRoleRepository.deleteByUserIdAndRoleIdIn(userId, deleteMenuIds);
        }
    }

    @Override
    public void assignRoleDataScope(Long roleId, Integer dataScope, List<Long> dataScopeDeptIds) {
        roleService.updateRoleDataScope(roleId, dataScope, dataScopeDeptIds);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void processRoleDeleted(Long roleId) {
        // 标记删除 UserRole
        systemUserRoleRepository.deleteByRoleId(roleId);
        // 标记删除 RoleMenu
        systemRoleMenuRepository.deleteByRoleId(roleId);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void processMenuDeleted(UUID menuId) {
        systemRoleMenuRepository.deleteByMenuId(menuId);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void processUserDeleted(Long userId) {
        systemUserRoleRepository.deleteByUserId(userId);
    }

    @Override
    public boolean hasAnyPermissions(Long userId, String... permissions) {
        // 如果为空，说明已经有权限
        if (ArrayUtil.isEmpty(permissions)) {
            return true;
        }

        // 获得当前登录的角色。如果为空，说明没有权限
        List<Long> roleIds = getUserRoleIds(userId, singleton(CommonStatusEnum.ENABLE.getStatus()));
        if (CollUtil.isEmpty(roleIds)) {
            return false;
        }
        // 判断是否是超管。如果是，当然符合条件
        if (roleService.hasAnySuperAdmin(roleIds)) {
            return true;
        }

        if (roleService.hasAnyRoot(roleIds)) {
            return true;
        }

        // 遍历权限，判断是否有一个满足
        return Arrays.stream(permissions).anyMatch(permission -> {
            List<SystemMenu> menuList = menuService.getMenuListByPermissionFromCache(permission);
            // 采用严格模式，如果权限找不到对应的 Menu 的话，认为
            if (CollUtil.isEmpty(menuList)) {
                return false;
            }
            // 获得是否拥有该权限，任一一个
            return menuList.stream().anyMatch(menu -> CollUtil.containsAny(roleIds,
                    systemRoleMenuRepository.findByMenuId(menu.id()).stream().map(SystemRoleMenu::roleId).collect(Collectors.toList())));
        });
    }

    @Override
    public boolean hasAnyRoles(Long userId, String... roles) {
        // 如果为空，说明已经有权限
        if (ArrayUtil.isEmpty(roles)) {
            return true;
        }

        // 获得当前登录的角色。如果为空，说明没有权限
        List<Long> roleIds = getUserRoleIds(userId, singleton(CommonStatusEnum.ENABLE.getStatus()));
        if (CollUtil.isEmpty(roleIds)) {
            return false;
        }
        // 判断是否是超管。如果是，当然符合条件
        if (roleService.hasAnySuperAdmin(roleIds)) {
            return true;
        }

        if (roleService.hasAnyRoot(roleIds)) {
            return true;
        }
        Set<String> userRoles = convertSet(roleService.getRoleListFrom(roleIds),
                SystemRole::code);
        return CollUtil.containsAny(userRoles, Sets.newHashSet(roles));
    }



}
