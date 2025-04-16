package cn.iocoder.yudao.service.repository.system.dept;

import cn.iocoder.yudao.service.model.system.dept.SystemDeptLeader;
import cn.iocoder.yudao.service.model.system.dept.SystemDeptLeaderTable;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.babyfish.jimmer.Page;
import org.springframework.util.StringUtils;
import java.util.Optional;
import java.util.List;
import java.time.LocalDateTime;

public interface SystemDeptLeaderRepository extends JRepository<SystemDeptLeader, Long> {
    SystemDeptLeaderTable systemDeptLeaderTable = SystemDeptLeaderTable.$;

    default void deleteNotInLeaderIds(Long deptId, List<Long> leaderIds){
        sql().createDelete(systemDeptLeaderTable)
                .where(systemDeptLeaderTable.deptId().eq(deptId))
                .where(systemDeptLeaderTable.leaderId().notIn(leaderIds))
                .execute();
    }
    default List<Long> findIdByLeaderId(Long leaderId){
        return sql().createQuery(systemDeptLeaderTable)
                .where(systemDeptLeaderTable.leaderId().eq(leaderId))
                .select(systemDeptLeaderTable.deptId())
                .execute();
    };

    Optional<SystemDeptLeader> findByDeptIdAndLeaderId(Long deptId, Long leaderId);


}