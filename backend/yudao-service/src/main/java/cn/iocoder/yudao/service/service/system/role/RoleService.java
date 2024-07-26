package cn.iocoder.yudao.service.service.system.role;

import cn.iocoder.yudao.service.model.system.role.SystemRole;
import cn.iocoder.yudao.service.vo.system.role.role.RoleExportedInput;
import cn.iocoder.yudao.service.vo.system.role.role.RoleListAllSimpleOutput;
import cn.iocoder.yudao.service.vo.system.role.role.RolePageInput;
import cn.iocoder.yudao.service.vo.system.role.role.RolePageOutput;
import cn.iocoder.yudao.service.vo.system.role.role.RoleGetOutput;
import cn.iocoder.yudao.service.vo.system.role.role.RoleUpdateStatusInput;
import cn.iocoder.yudao.service.vo.system.role.role.RoleUpdateInput;
import cn.iocoder.yudao.service.vo.system.role.role.RoleCreateInput;

import java.io.IOException;
import java.util.*;

import cn.iocoder.yudao.service.framework.web.web.core.pojo.PageResult;
import javax.servlet.http.HttpServletResponse;

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

    boolean hasAnyRoot(Collection<Long> roleList);

    List<SystemRole> getRoleListFrom(Collection<Long> ids);

    SystemRole getRoleFrom(Long id);

    void updateRoleDataScope(Long id, Integer dataScope, List<Long> dataScopeDeptIds);

    void validateRoleList(Collection<Long> ids);

}
