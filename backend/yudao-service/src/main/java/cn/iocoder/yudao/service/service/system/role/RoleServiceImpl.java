package cn.iocoder.yudao.service.service.system.role;

import cn.hutool.core.collection.CollectionUtil;
import cn.hutool.core.collection.CollUtil;

import static cn.iocoder.yudao.service.util.collection.CollectionUtils.convertMap;
import cn.iocoder.yudao.service.enums.common.CommonStatusEnum;
import cn.iocoder.yudao.service.util.object.ObjectUtils;
import cn.iocoder.yudao.service.framework.excel.core.util.ExcelUtils;
import cn.iocoder.yudao.service.convert.system.role.RoleConvert;
import cn.iocoder.yudao.service.enums.system.permission.SystemDataScopeEnum;
import cn.iocoder.yudao.service.enums.system.permission.SystemRoleCodeEnum;
import cn.iocoder.yudao.service.enums.system.permission.SystemRoleTypeEnum;
import cn.iocoder.yudao.service.model.system.role.SystemRole;
import cn.iocoder.yudao.service.model.system.role.SystemRoleDraft;
import cn.iocoder.yudao.service.repository.system.role.SystemRoleRepository;
import cn.iocoder.yudao.service.service.system.permission.PermissionService;
import cn.iocoder.yudao.service.vo.system.role.role.RoleExcelVO;
import cn.iocoder.yudao.service.vo.system.role.role.RoleListAllSimpleOutput;
import cn.iocoder.yudao.service.vo.system.role.role.RolePageInput;
import cn.iocoder.yudao.service.vo.system.role.role.RolePageOutput;
import cn.iocoder.yudao.service.vo.system.role.role.RoleGetOutput;
import cn.iocoder.yudao.service.vo.system.role.role.RoleUpdateStatusInput;
import cn.iocoder.yudao.service.vo.system.role.role.RoleUpdateInput;
import cn.iocoder.yudao.service.vo.system.role.role.RoleCreateInput;
import com.google.common.annotations.VisibleForTesting;
import org.springframework.stereotype.Service;
import jakarta.annotation.Resource;

import org.springframework.util.StringUtils;
import org.springframework.validation.annotation.Validated;
import org.babyfish.jimmer.Page;

import java.io.IOException;
import java.util.*;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.transaction.annotation.Transactional;
import cn.iocoder.yudao.service.framework.web.web.core.pojo.PageResult;
import cn.iocoder.yudao.service.vo.system.role.role.*;

import static cn.iocoder.yudao.service.framework.exception.util.ServiceExceptionUtil.exception;
import static cn.iocoder.yudao.service.errorCode.system.role.RoleErrorCode.*;
import static java.util.Collections.singleton;

/**
 * 角色管理 Service 实现类
 */
@Service
@Validated
public class RoleServiceImpl implements RoleService {

    @Resource
    private PermissionService permissionService;

    @Resource
    private SystemRoleRepository systemRoleRepository;

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Long create(RoleCreateInput inputVO) {
        // 校验角色
        validateRoleDuplicate(inputVO.getName(), inputVO.getCode(), null);
        // 插入到数据库
        SystemRole role = RoleConvert.INSTANCE.createInputConvert(inputVO);
        role = SystemRoleDraft.$.produce(role, SystemRole->{
            SystemRole
                    .setType( SystemRoleTypeEnum.CUSTOM.getValue())
                    .setStatus(CommonStatusEnum.ENABLE.getValue())
                    .setDataScope(SystemDataScopeEnum.ALL.getValue()); // 默认可查看所有数据。原因是，可能一些项目不需要项目权限
        });
        role = systemRoleRepository.insert(role);
        // 返回
        return role.id();
    }

    /**
     * 校验角色的唯一字段是否重复
     *
     * 1. 是否存在相同名字的角色
     * 2. 是否存在相同编码的角色
     *
     * @param name 角色名字
     * @param code 角色额编码
     * @param id 角色编号
     */
    @VisibleForTesting
    void validateRoleDuplicate(String name, String code, Long id) {
        // 0. 超级管理员，不允许创建
        if (ObjectUtils.equalsAny(code, SystemRoleCodeEnum.SUPER_ADMIN.getValue())) {
            throw exception(ROLE_ADMIN_CODE_ERROR, code);
        }
        // 1. 该 name 名字被其它角色所使用
        Optional<SystemRole> opRole = systemRoleRepository.findByName(name);
        if (opRole.isPresent() && (id == null || opRole.get().id() != id)) {
            throw exception(ROLE_NAME_DUPLICATE, name);
        }
        // 2. 是否存在相同编码的角色
        if (!StringUtils.hasText(code)) {
            return;
        }
        // 该 code 编码被其它角色所使用
        opRole = systemRoleRepository.findByCode(code);
        if (opRole.isPresent() && (id == null || opRole.get().id() != id)) {
            throw exception(ROLE_CODE_DUPLICATE, code);
        }
    }

    @Override
    public Boolean update(RoleUpdateInput inputVO) {
        // 校验是否可以更新
        validateRoleForUpdate(inputVO.getId());
        // 校验角色的唯一字段是否重复
        validateRoleDuplicate(inputVO.getName(), inputVO.getCode(), inputVO.getId());

        // 更新到数据库
        SystemRole updateObj = RoleConvert.INSTANCE.updateInputConvert(inputVO);
        systemRoleRepository.update(updateObj);
        return true;
    }

    /**
     * 校验角色是否可以被更新
     *
     * @param id 角色编号
     */
    @VisibleForTesting
    void validateRoleForUpdate(Long id) {
        Optional<SystemRole> opSystemRole = systemRoleRepository.findById(id);
        if (opSystemRole.isEmpty()) {
            throw exception(ROLE_NOT_EXISTS);
        }
        // 内置角色，不允许删除
        if (SystemRoleTypeEnum.SYSTEM.getValue().equals(opSystemRole.get().type())) {
            throw exception(ROLE_CAN_NOT_UPDATE_SYSTEM_TYPE_ROLE);
        }
    }

    @Override
    public Boolean updateStatus(RoleUpdateStatusInput inputVO) {
        // 校验是否可以更新
        validateRoleForUpdate(inputVO.getId());

        // 更新状态
        SystemRole updateObj = SystemRoleDraft.$.produce(SystemRole-> SystemRole.setId(inputVO.getId()).setStatus(inputVO.getStatus()));
        systemRoleRepository.update(updateObj);
        return true;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Boolean deleted(Long id) {
        // 校验是否可以更新
        validateRoleForUpdate(id);
        // 标记删除
        systemRoleRepository.deleteById(id);
        // 删除相关数据
        permissionService.processRoleDeleted(id);

        return true;
    }

    @Override
    public RoleGetOutput get(Long id) {
        Optional<SystemRole> opRole = systemRoleRepository.findById(id);
        if(opRole.isEmpty())
            throw exception(ROLE_NOT_EXISTS);
        return RoleConvert.INSTANCE.getOutputConvert(opRole.get());
    }

    @Override
    public PageResult<RolePageOutput> page(RolePageInput inputVO) {
        Page<SystemRole> postPage = systemRoleRepository.pageSelect(inputVO);
        List<RolePageOutput> listOutputs = RoleConvert.INSTANCE.pagePageOutputConvert(postPage.getRows());
        return new PageResult<>(listOutputs, postPage.getTotalRowCount());
    }

    @Override
    public List<RoleListAllSimpleOutput> listAllSimple() {
        Collection<Integer> statuses = singleton(CommonStatusEnum.ENABLE.getValue());
        List<SystemRole> listRoles = systemRoleRepository.findByStatusIn(statuses);
        return RoleConvert.INSTANCE.listAllSimpleOutPutConvert(listRoles);
    }

    @Override
    public void exported(HttpServletResponse response, RoleExportedInput inputVO) throws IOException {
        List<SystemRole> list = systemRoleRepository.selectList(inputVO);
        List<RoleExcelVO> data = RoleConvert.INSTANCE.exportOutPutConvert(list);
        // 输出
        ExcelUtils.write(response, "角色数据.xls", "角色列表", RoleExcelVO.class, data);
    }

    @Override
    public boolean hasAnySuperAdmin(Collection<Long> ids) {
        Collection<SystemRole> roleList = getRoleListFrom(ids);
        if (CollectionUtil.isEmpty(roleList)) {
            return false;
        }
        return roleList.stream().anyMatch(role -> ObjectUtils.equalsAny(role.code(), SystemRoleCodeEnum.SUPER_ADMIN.getValue()));
    }

    @Override
    public boolean hasAnyRoot(Collection<Long> ids) {
        Collection<SystemRole> roleList = getRoleListFrom(ids);
        if (CollectionUtil.isEmpty(roleList)) {
            return false;
        }
        return roleList.stream().anyMatch(role -> ObjectUtils.equalsAny(role.code(), SystemRoleCodeEnum.ROOT.getValue()));
    }

    @Override
    public List<SystemRole> getRoleListFrom(Collection<Long> ids) {
        if (CollectionUtil.isEmpty(ids)) {
            return Collections.emptyList();
        }
        return systemRoleRepository.findByIds(ids);
    }

    @Override
    public SystemRole getRoleFrom(Long id) {
        return systemRoleRepository.findById(id).get();
    }

    @Override
    public void updateRoleDataScope(Long id, Integer dataScope, List<Long> dataScopeDeptIds) {
        // 校验是否可以更新
        validateRoleForUpdate(id);

        // 更新数据范围
        SystemRole updateObject = SystemRoleDraft.$.produce(SystemRole-> SystemRole
                .setId(id)
                .setDataScope(dataScope)
                .setDataScopeDeptIds(dataScopeDeptIds));
        systemRoleRepository.update(updateObject);
    }

    @Override
    public void validateRoleList(Collection<Long> ids) {
        if (CollUtil.isEmpty(ids)) {
            return;
        }
        // 获得角色信息
        List<SystemRole> roles = systemRoleRepository.findByIdIn(ids);
        Map<Long, SystemRole> roleMap = convertMap(roles, SystemRole::id);
        // 校验
        ids.forEach(id -> {
            SystemRole role = roleMap.get(id);
            if (role == null) {
                throw exception(ROLE_NOT_EXISTS);
            }
            if (!CommonStatusEnum.ENABLE.getValue().equals(role.status())) {
                throw exception(ROLE_IS_DISABLE, role.name());
            }
        });
    }

}
