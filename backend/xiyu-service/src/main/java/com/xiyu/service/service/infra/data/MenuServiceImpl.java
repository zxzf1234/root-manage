package com.xiyu.service.service.infra.data;

import com.xiyu.service.service.infra.codegen.inner.CodegenEngine;
import com.xiyu.service.util.collection.CollectionUtils;
import com.xiyu.service.service.system.permission.PermissionService;
import com.xiyu.service.vo.infra.data.menu.MenuCreateReqVO;
import com.xiyu.service.vo.infra.data.menu.MenuListReqVO;
import com.xiyu.service.vo.infra.data.menu.MenuUpdateReqVO;
import com.xiyu.service.enums.system.permission.MenuTypeEnum;
import com.xiyu.service.model.infra.data.SystemMenu;
import com.xiyu.service.model.infra.data.SystemMenuDraft;
import com.xiyu.service.repository.infra.data.SystemMenuRepository;
import com.xiyu.service.convert.infra.data.MenuConvert;
import com.google.common.annotations.VisibleForTesting;
import lombok.extern.slf4j.Slf4j;
import org.babyfish.jimmer.sql.ast.mutation.DeleteMode;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jakarta.annotation.Resource;
import java.util.*;

import static com.xiyu.service.framework.exception.util.ServiceExceptionUtil.exception;
import static com.xiyu.service.framework.security.core.util.SecurityFrameworkUtils.getLoginUserId;
import static com.xiyu.service.errorCode.infra.data.MenuErrorCode.*;

/**
 * 菜单 Service 实现
 *
 * @author 芋道源码
 */
@Service
@Slf4j
public class MenuServiceImpl implements MenuService {

    /**
     * 权限与菜单缓存
     * key：权限 {@link SystemMenu#permission()}
     * value：SystemMenu 数组，因为一个权限可能对应多个 SystemMenu 对象
     *
     * 这里声明 volatile 修饰的原因是，每次刷新时，直接修改指向
     */

    @Resource
    private SystemMenuRepository systemMenuRepository;

    @Resource
    private PermissionService permissionService;

    @Resource
    private CodegenEngine codegenEngine;

    @Value("${spring.profiles.active}")
    private String profile;

    @Override
    public UUID createMenu(MenuCreateReqVO reqVO) {
        // 校验父菜单存在
        validateParentMenu(reqVO.getParentId(), null);
        // 校验菜单（自己）
        validateMenu(reqVO.getParentId(), reqVO.getName(), null);

        // 插入数据库
        SystemMenu menu = MenuConvert.INSTANCE.convert(reqVO);
        menu = initMenuProperty(menu);
        menu = systemMenuRepository.insert(menu);
        codegenEngine.saveInsertSql(menu);
        // 返回
        return menu.id();
    }

    @Override
    public void updateMenu(MenuUpdateReqVO reqVO) {
        // 校验更新的菜单是否存在
        if (systemMenuRepository.findById(reqVO.getId()).isEmpty()) {
            throw exception(MENU_NOT_EXISTS);
        }
        // 校验父菜单存在
        validateParentMenu(reqVO.getParentId(), reqVO.getId());
        // 校验菜单（自己）
        validateMenu(reqVO.getParentId(), reqVO.getName(), reqVO.getId());

        // 更新到数据库
        SystemMenu updateObject = MenuConvert.INSTANCE.convert(reqVO);
        updateObject = initMenuProperty(updateObject);
        systemMenuRepository.update(updateObject);
        codegenEngine.saveUpdateSql(updateObject);

    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void deleteMenu(UUID menuId) {
        // 校验是否还有子菜单
        if (systemMenuRepository.countByParentId(menuId.toString()) > 0) {
            throw exception(MENU_EXISTS_CHILDREN);
        }
        // 校验删除的菜单是否存在
        if (systemMenuRepository.findById(menuId).isEmpty()) {
            throw exception(MENU_NOT_EXISTS);
        }
        // 标记删除
        systemMenuRepository.deleteById(menuId, DeleteMode.PHYSICAL);
        codegenEngine.saveDeleteSql(SystemMenu.class.getName(), menuId.toString());
        // 删除授予给角色的权限
        permissionService.processMenuDeleted(menuId);

    }

    @Override
    public List<SystemMenu> getMenuList(MenuListReqVO reqVO) {
        return systemMenuRepository.selectList(reqVO, getLoginUserId(), profile.equals("local"));
    }

    @Override
    public List<SystemMenu> getMenuList(Collection<Integer> menuTypes, Collection<Integer> menusStatuses) {
        // 任一一个参数为空，则返回空
        if (CollectionUtils.isAnyEmpty(menuTypes, menusStatuses)) {
            return Collections.emptyList();
        }
        return systemMenuRepository.findByTypeInAndStatusIn(menuTypes, menusStatuses, profile.equals("local"));
    }

    @Override
    public List<SystemMenu> getMenuList(Collection<UUID> menuIds, Collection<Integer> menuTypes,
                                             Collection<Integer> menusStatuses) {
        // 任一一个参数为空，则返回空
        if (CollectionUtils.isAnyEmpty(menuIds, menuTypes, menusStatuses)) {
            return Collections.emptyList();
        }
        return systemMenuRepository.findByIdInAndTypeInAndStatusIn(menuIds, menuTypes, menusStatuses);
    }

    @Override
    public List<SystemMenu> getMenuListByPermissionFromCache(String permission) {
        return systemMenuRepository.findByPermission(permission);
    }

    @Override
    public SystemMenu getMenu(UUID id) {
        return systemMenuRepository.findById(id).get();
    }

    /**
     * 校验父菜单是否合法
     *
     * 1. 不能设置自己为父菜单
     * 2. 父菜单不存在
     * 3. 父菜单必须是 {@link MenuTypeEnum#MENU} 菜单类型
     *
     * @param parentId 父菜单编号
     * @param childId 当前菜单编号
     */
    @VisibleForTesting
    void validateParentMenu(String parentId, UUID childId) {
        if (parentId == null || parentId.equals("")) {
            return;
        }
        UUID uParentId = UUID.fromString(parentId);
        // 不能设置自己为父菜单
        if (uParentId.equals(childId)) {
            throw exception(MENU_PARENT_ERROR);
        }
        Optional<SystemMenu> opMenu = systemMenuRepository.findById(uParentId);
        // 父菜单不存在
        if (opMenu.isEmpty()) {
            throw exception(MENU_PARENT_NOT_EXISTS);
        }
        // 父菜单必须是目录或者菜单类型
        if (!MenuTypeEnum.DIR.getType().equals(opMenu.get().type())
            && !MenuTypeEnum.MENU.getType().equals(opMenu.get().type())) {
            throw exception(MENU_PARENT_NOT_DIR_OR_MENU);
        }
    }

    /**
     * 校验菜单是否合法
     *
     * 1. 校验相同父菜单编号下，是否存在相同的菜单名
     *
     * @param name 菜单名字
     * @param parentId 父菜单编号
     * @param id 菜单编号
     */
    @VisibleForTesting
    void validateMenu(String parentId, String name, UUID id) {
        Optional<SystemMenu> opMenu = systemMenuRepository.findByParentIdAndName(parentId, name);
        if (opMenu.isEmpty()) {
            return;
        }
        // 如果 id 为空，说明不用比较是否为相同 id 的菜单
        if (id == null) {
            throw exception(MENU_NAME_DUPLICATE);
        }
        if (!opMenu.get().id().equals(id)) {
            throw exception(MENU_NAME_DUPLICATE);
        }
    }

    /**
     * 初始化菜单的通用属性。
     *
     * 例如说，只有目录或者菜单类型的菜单，才设置 icon
     *
     * @param menu 菜单
     */
    private SystemMenu initMenuProperty(SystemMenu menu) {
        // 菜单为按钮类型时，无需 component、icon、path 属性，进行置空
        if (MenuTypeEnum.BUTTON.getType().equals(menu.type())) {
            menu = SystemMenuDraft.$.produce(menu, SystemMenu-> SystemMenu
                    .setComponent("")
                    .setComponentName("")
                    .setIcon("")
                    .setPath(""));
        }
        return menu;
    }

}
