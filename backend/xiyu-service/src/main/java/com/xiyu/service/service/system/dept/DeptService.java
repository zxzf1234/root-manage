package com.xiyu.service.service.system.dept;

import com.xiyu.service.vo.system.dept.dept.DeptGetOutput;
import com.xiyu.service.vo.system.dept.dept.DeptListAllSimpleOutput;
import com.xiyu.service.vo.system.dept.dept.DeptListOutput;
import com.xiyu.service.vo.system.dept.dept.DeptListInput;
import com.xiyu.service.vo.system.dept.dept.DeptUpdateInput;
import com.xiyu.service.vo.system.dept.dept.DeptCreateInput;
import cn.hutool.core.collection.CollUtil;
import com.xiyu.service.util.collection.CollectionUtils;
import com.xiyu.service.model.system.dept.SystemDept;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Map;

/**
 * 部门 Service 接口
 *
 * @author 芋道源码
 */
public interface DeptService {

    /**
     * 获得所有子部门，从缓存中
     *
     * @param parentId 部门编号
     * @param recursive 是否递归获取所有
     * @return 子部门列表
     */
    List<SystemDept> getDeptListByParentId(Long parentId, boolean recursive);

    /**
     * 获得部门信息数组
     *
     * @param ids 部门编号数组
     * @return 部门信息数组
     */
    List<SystemDept> getDeptList(Collection<Long> ids);

    /**
     * 获得指定编号的部门 Map
     *
     * @param ids 部门编号数组
     * @return 部门 Map
     */
    default Map<Long, SystemDept> getDeptMap(Collection<Long> ids) {
        if (CollUtil.isEmpty(ids)) {
            return Collections.emptyMap();
        }
        List<SystemDept> list = getDeptList(ids);
        return CollectionUtils.convertMap(list, SystemDept::id);
    }

    /**
     * 获得部门信息
     *
     * @param id 部门编号
     * @return 部门信息
     */
    SystemDept getDept(Long id);

    /**
     * 校验部门们是否有效。如下情况，视为无效：
     * 1. 部门编号不存在
     * 2. 部门被禁用
     *
     * @param ids 角色编号数组
     */
    void validateDeptList(Collection<Long> ids);

    Long create(DeptCreateInput inputVO);

    Boolean update(DeptUpdateInput inputVO);

    Boolean deleted(Long id);

    List<DeptListOutput> list(DeptListInput inputVO);

    List<DeptListAllSimpleOutput> listAllSimple();

    DeptGetOutput get(Long id);

    Boolean isLeaderUser(Long id);

}
