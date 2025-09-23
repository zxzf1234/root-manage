package com.xiyu.service.service.system.role;

import com.xiyu.service.vo.system.role.role.RoleGetColumnByRoleCodesOutput;
import com.xiyu.service.vo.system.role.role.RoleGetColumnByRoleCodesInput;
import com.xiyu.service.vo.system.role.role.RoleSaveRoleColumnInput;
import com.xiyu.service.vo.system.role.role.RoleGetColumnByRoleIdOutput;
import com.xiyu.service.model.system.role.SystemRole;
import com.xiyu.service.vo.system.role.role.RoleExportedInput;
import com.xiyu.service.vo.system.role.role.RoleListAllSimpleOutput;
import com.xiyu.service.vo.system.role.role.RolePageInput;
import com.xiyu.service.vo.system.role.role.RolePageOutput;
import com.xiyu.service.vo.system.role.role.RoleGetOutput;
import com.xiyu.service.vo.system.role.role.RoleUpdateStatusInput;
import com.xiyu.service.vo.system.role.role.RoleUpdateInput;
import com.xiyu.service.vo.system.role.role.RoleCreateInput;

import java.io.IOException;
import java.util.*;

import com.xiyu.service.framework.web.web.core.pojo.PageResult;
import jakarta.servlet.http.HttpServletResponse;

/**
 * 角色管理 Service 接口
 */
public interface RoleService {

    Long create(RoleCreateInput inputVO);

    Boolean update(RoleUpdateInput inputVO);

    Boolean updateStatus(RoleUpdateStatusInput inputVO);

    Boolean deleted(Long id);

    RoleGetOutput get(Long id);

    PageResult<RolePageOutput> page(RolePageInput inputVO);

    List<RoleListAllSimpleOutput> listAllSimple();

    void exported(HttpServletResponse response, RoleExportedInput inputVO) throws IOException;

    boolean hasAnySuperAdmin(Collection<Long> roleList);

    List<SystemRole> getRoleListFrom(Collection<Long> ids);

    SystemRole getRoleFrom(Long id);

    void updateRoleDataScope(Long id, Integer dataScope, List<Long> dataScopeDeptIds);

    void validateRoleList(Collection<Long> ids);

    List<RoleGetColumnByRoleIdOutput> getColumnByRoleId(Long id);

    Boolean saveRoleColumn(RoleSaveRoleColumnInput inputVO);

    List<RoleGetColumnByRoleCodesOutput> getColumnByRoleCodes(RoleGetColumnByRoleCodesInput inputVO);

}
