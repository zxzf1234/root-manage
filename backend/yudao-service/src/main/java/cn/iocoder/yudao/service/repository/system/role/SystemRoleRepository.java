package cn.iocoder.yudao.service.repository.system.role;

import cn.iocoder.yudao.service.model.system.role.SystemRole;
import cn.iocoder.yudao.service.model.system.role.SystemRoleTable;
import cn.iocoder.yudao.service.vo.system.role.role.RoleExportedInput;
import cn.iocoder.yudao.service.vo.system.role.role.RolePageInput;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.babyfish.jimmer.Page;
import org.springframework.util.StringUtils;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface SystemRoleRepository extends JRepository<SystemRole, Long> {
    SystemRoleTable systemRoleTable = SystemRoleTable.$;

    default List<SystemRole> selectList(RoleExportedInput reqVO){
        return sql()
                .createQuery(systemRoleTable)
                .where(systemRoleTable.status().eqIf(reqVO.getStatus()))
                .where(systemRoleTable.code().eqIf(reqVO.getCode()))
//                .whereIf(StringUtils.hasText(reqVO.getName()), systemRoleTable.name().eq(reqVO.getName()))
                .whereIf(reqVO.getCreateTime() != null, ()-> systemRoleTable.createTime().between(reqVO.getCreateTime()[0], reqVO.getCreateTime()[1]))
                .select(systemRoleTable)
                .execute();
    }

    default Page<SystemRole> pageSelect(RolePageInput reqVO){
        return sql()
                .createQuery(systemRoleTable)
                .where(systemRoleTable.id().ge(0L))
                .where(systemRoleTable.status().eqIf(reqVO.getStatus()))
                .where(systemRoleTable.code().eqIf(reqVO.getCode()))
                .where(systemRoleTable.name().eqIf(reqVO.getName()))
                .whereIf(reqVO.getCreateTime() != null, ()-> systemRoleTable.createTime().between(reqVO.getCreateTime()[0], reqVO.getCreateTime()[1]))
                .select(systemRoleTable).fetchPage(reqVO.getPageNo() - 1, reqVO.getPageSize());
    }

    List<SystemRole> findByStatusIn(Collection<Integer> statuses);

    List<SystemRole> findByIdIn(Collection<Long> ids);

    Optional<SystemRole> findByCode(String code);

    Optional<SystemRole> findByName(String name);
}
