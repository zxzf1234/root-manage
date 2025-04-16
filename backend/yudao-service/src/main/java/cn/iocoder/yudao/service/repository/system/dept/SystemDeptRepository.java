package cn.iocoder.yudao.service.repository.system.dept;

import cn.iocoder.yudao.service.model.system.dept.*;
import cn.iocoder.yudao.service.model.system.user.SystemUser;
import cn.iocoder.yudao.service.model.system.user.SystemUserFetcher;
import cn.iocoder.yudao.service.vo.system.dept.dept.DeptListInput;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.Optional;

public interface SystemDeptRepository extends JRepository<SystemDept, Long> {
    SystemDeptTable systemDeptTable = SystemDeptTable.$;

    default List<SystemDept> selectList(DeptListInput reqVO)
    {
        return sql().createQuery(systemDeptTable).
                where(systemDeptTable.name().likeIf(reqVO.getName())).
                where(systemDeptTable.status().eqIf(reqVO.getStatus())).
                select(systemDeptTable.fetch(SystemDeptFetcher.$.allTableFields()
                        .leaders(SystemDeptLeaderFetcher.$.allTableFields().leader(SystemUserFetcher.$.allTableFields()))))
                .execute();
    }

    default Optional<SystemDept> singleGet(Long id){
        return sql().createQuery(systemDeptTable)
                .where(systemDeptTable.id().eq(id))
                .select(systemDeptTable.fetch(SystemDeptFetcher.$.allTableFields().leaders(SystemDeptLeaderFetcher.$.allTableFields())))
                .fetchOptional();
    }

    long countByParentId(Long parentId);

    Optional<SystemDept> findByParentIdAndName(Long parentId, String name);

    Optional<SystemDept> findByName(String name);

    List<SystemDept> findByParentId(Long parentId);

}
