package cn.iocoder.yudao.service.convert.system.role;

import cn.iocoder.yudao.service.vo.system.role.role.RoleGetColumnByRoleCodesInput;
import cn.iocoder.yudao.service.vo.system.role.role.RoleGetColumnByRoleCodesOutput;
import cn.iocoder.yudao.service.model.infra.codegen.InfraDatabaseColumn;
import cn.iocoder.yudao.service.vo.system.role.role.RoleSaveRoleColumnInput;
import cn.iocoder.yudao.service.vo.system.role.role.RoleGetColumnByRoleIdOutput;
import cn.iocoder.yudao.service.model.system.role.SystemRoleAssignColumn;
import cn.iocoder.yudao.service.vo.system.role.role.RoleExcelVO;
import cn.iocoder.yudao.service.vo.system.role.role.*;
import cn.iocoder.yudao.service.vo.system.role.role.RolePageOutput;
import cn.iocoder.yudao.service.vo.system.role.role.RolePageInput;
import cn.iocoder.yudao.service.model.system.role.SystemRole;

import java.util.*;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import org.babyfish.jimmer.Page;

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
