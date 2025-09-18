package com.xiyu.service.convert.system.role;

import com.xiyu.service.vo.system.role.role.RoleGetColumnByRoleCodesOutput;
import com.xiyu.service.model.infra.codegen.InfraDatabaseColumn;
import com.xiyu.service.vo.system.role.role.RoleGetColumnByRoleIdOutput;
import com.xiyu.service.model.system.role.SystemRoleAssignColumn;
import com.xiyu.service.vo.system.role.role.RoleExcelVO;
import com.xiyu.service.vo.system.role.role.*;
import com.xiyu.service.vo.system.role.role.RolePageOutput;
import com.xiyu.service.model.system.role.SystemRole;

import java.util.*;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

/**
 * 角色管理 Convert
 */
@Mapper
public interface RoleConvert {
    RoleConvert INSTANCE = Mappers.getMapper(RoleConvert.class);


    SystemRole createInputConvert(RoleCreateInput input);

    SystemRole updateInputConvert(RoleUpdateInput input);

    RoleGetOutput getOutputConvert(SystemRole output);

    List<RolePageOutput> pagePageOutputConvert(List<SystemRole> output);

    List<RoleListAllSimpleOutput> listAllSimpleOutPutConvert(List<SystemRole> output);

    List<RoleExcelVO> exportOutPutConvert(List<SystemRole> list);

    List<RoleGetColumnByRoleIdOutput> getColumnByRoleIdOutputConvert(List<SystemRoleAssignColumn> output);

    List<RoleGetColumnByRoleCodesOutput> getColumnByRoleCodesOutputConvert(List<InfraDatabaseColumn> output);

}
