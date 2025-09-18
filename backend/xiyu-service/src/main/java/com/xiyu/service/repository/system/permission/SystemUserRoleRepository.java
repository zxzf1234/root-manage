package com.xiyu.service.repository.system.permission;

import com.xiyu.service.model.system.permission.SystemUserRole;
import org.babyfish.jimmer.spring.repository.JRepository;

import java.util.Collection;
import java.util.List;

public interface SystemUserRoleRepository extends JRepository<SystemUserRole, Long> {



    void deleteByUserIdAndRoleIdIn(Long userId, Collection<Long> deleteMenuIds);

    void deleteByRoleId(Long roleId);

    int deleteByUserId(Long userId);

    List<SystemUserRole> findByUserId(Long userId);

    List<SystemUserRole> findByRoleIdIn(Collection<Long> userIds);
}
