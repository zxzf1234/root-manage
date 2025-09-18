package com.xiyu.service.repository.system.permission;

import com.xiyu.service.model.system.permission.SystemRoleMenu;
import com.xiyu.service.model.system.permission.SystemRoleMenuTable;
import org.babyfish.jimmer.spring.repository.JRepository;

import java.util.Collection;
import java.util.List;
import java.util.UUID;

public interface SystemRoleMenuRepository extends JRepository<SystemRoleMenu, Long> {

    SystemRoleMenuTable systemRoleMenuTable = SystemRoleMenuTable.$;



    default void insertBatch(List<SystemRoleMenu> systemRoleMenuList){
        sql().getEntities().saveEntities(systemRoleMenuList);
    };

    List<SystemRoleMenu> findByRoleId(Long roleId);

    List<SystemRoleMenu> findByMenuId(UUID menuId);

    List<SystemRoleMenu> findByRoleIdIn(Collection<Long> roleIds);

    int deleteByRoleIdAndMenuIdIn(Long roleId, Collection<UUID> deleteMenuIds);

    int deleteByRoleId(Long roleId);

    int deleteByMenuId(UUID menuId);
}
