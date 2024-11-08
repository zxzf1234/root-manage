package cn.iocoder.yudao.service.repository.infra.data;

import cn.iocoder.yudao.service.vo.infra.data.menu.MenuListReqVO;
import cn.iocoder.yudao.service.model.infra.data.SystemMenu;
import cn.iocoder.yudao.service.model.infra.data.SystemMenuTable;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.springframework.util.StringUtils;

import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface SystemMenuRepository extends JRepository<SystemMenu, UUID> {
    SystemMenuTable systemMenuTable = SystemMenuTable.$;
    default List<SystemMenu> selectList(MenuListReqVO reqVO, Long userId){
        return sql()
                .createQuery(systemMenuTable)
                .where(systemMenuTable.status().eqIf(reqVO.getStatus()))
                .where(systemMenuTable.name().eqIf(reqVO.getName()))
                .whereIf(userId != -1, systemMenuTable.backShow().eq(false))
                .select(systemMenuTable)
                .execute();
    };

    Optional<SystemMenu> findByParentIdAndName(String parentId, String name);

    long countByParentId(String menuId);

    List<SystemMenu> findByPermission(String permission);

    default List<SystemMenu> findByTypeInAndStatusIn(Collection<Integer> types, Collection<Integer> statuses, Boolean showBack){
        return sql().createQuery(systemMenuTable)
                .where(systemMenuTable.type().in(types))
                .where(systemMenuTable.status().in(statuses))
                .where(systemMenuTable.backShow().eqIf(showBack))
                .select(systemMenuTable)
                .execute();
    };

    default List<SystemMenu> findByIdInAndTypeInAndStatusIn(Collection<UUID> menuIds, Collection<Integer> types, Collection<Integer> statuses){
        return sql().createQuery(systemMenuTable)
                .where(systemMenuTable.id().in(menuIds))
                .where(systemMenuTable.type().in(types))
                .where(systemMenuTable.status().in(statuses))
                .where(systemMenuTable.backShow().eq(false))
                .select(systemMenuTable)
                .execute();
    };

    default List<SystemMenu> findAllExcludeBack(){
        return sql().createQuery(systemMenuTable)
                .where(systemMenuTable.backShow().eq(false))
                .select(systemMenuTable)
                .execute();
    };

}
