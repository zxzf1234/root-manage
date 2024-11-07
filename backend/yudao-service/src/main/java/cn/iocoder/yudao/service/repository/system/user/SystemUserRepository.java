package cn.iocoder.yudao.service.repository.system.user;

import cn.iocoder.yudao.service.vo.system.user.user.*;
import cn.iocoder.yudao.service.model.system.dept.SystemDeptFetcher;
import cn.iocoder.yudao.service.model.system.dept.SystemUserPostTable;
import cn.iocoder.yudao.service.model.system.user.SystemUser;
import cn.iocoder.yudao.service.model.system.user.SystemUserFetcher;
import cn.iocoder.yudao.service.model.system.user.SystemUserTable;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.babyfish.jimmer.Page;
import org.springframework.util.StringUtils;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface SystemUserRepository extends JRepository<SystemUser, Long>{

    SystemUserTable systemUserTable = SystemUserTable.$;

    default Page<SystemUser> getUserPage(UserPageInput reqVO){
        return sql().createQuery(systemUserTable)
                .whereIf(StringUtils.hasText(reqVO.getUsername()), () -> systemUserTable.username().like(reqVO.getUsername()))
                .whereIf(StringUtils.hasText(reqVO.getMobile()), () -> systemUserTable.mobile().like(reqVO.getMobile()))
                .whereIf(reqVO.getStatus() != null, systemUserTable.status().eq(reqVO.getStatus()))
                .whereIf(reqVO.getCreateTime() != null,  () -> systemUserTable.createTime().between(reqVO.getCreateTime()[0], reqVO.getCreateTime()[1]))
                .where(systemUserTable.id().ge(0L))
                .select(systemUserTable.fetch(SystemUserFetcher.$.allScalarFields().dept(SystemDeptFetcher.$.allScalarFields())))
                .fetchPage(reqVO.getPageNo() - 1, reqVO.getPageSize());
    }

    default List<SystemUser> getExportUserList(UserExportedInput reqVO){
        return sql()
                .createQuery(systemUserTable)
                .whereIf(StringUtils.hasText(reqVO.getUsername()), systemUserTable.username().like(reqVO.getUsername()))
                .whereIf(StringUtils.hasText(reqVO.getMobile()), systemUserTable.mobile().like(reqVO.getMobile()))
                .whereIf(reqVO.getStatus() != null, systemUserTable.status().eq(reqVO.getStatus()))
                .whereIf(reqVO.getCreateTime() != null,  () -> systemUserTable.createTime().between(reqVO.getCreateTime()[0], reqVO.getCreateTime()[1]))
                .select(systemUserTable.fetch(SystemUserFetcher.$.allScalarFields().dept(SystemDeptFetcher.$.allScalarFields().leaderUser(SystemUserFetcher.$.nickname())))).execute();
    }

    default Optional<SystemUser> GetUser(long id){
        return sql()
                .createQuery(systemUserTable)
                .where(systemUserTable.id().eq(id))
                .select(systemUserTable.fetch(SystemUserFetcher.$.allScalarFields().dept(SystemDeptFetcher.$.allScalarFields())))
                .fetchOptional();
    }

    default List<SystemUser> GetUserListByStatus(Integer status){
        return sql().createQuery(systemUserTable).where(systemUserTable.status().eq(status)).select(systemUserTable).execute();
    }

    default void UpdateUserPassword(long id, String password){
        sql().createUpdate(systemUserTable).set(systemUserTable.password(), password).where(systemUserTable.id().eq(id)).execute();
    }

    default void UpdateUserStatus(long id,int status){
        sql().createUpdate(systemUserTable).set(systemUserTable.status(), status).where(systemUserTable.id().eq(id)).execute();
    }

    default void UpdateUserLogin(long id, String loginIp){
        sql().createUpdate(systemUserTable).set(systemUserTable.loginIp(), loginIp).set(systemUserTable.loginDate(), LocalDateTime.now()).where(systemUserTable.id().eq(id)).execute();
    }

    default void UpdateUserAvatar(long id, String avatar){
        sql().createUpdate(systemUserTable).set(systemUserTable.avatar(), avatar).set(systemUserTable.loginDate(), LocalDateTime.now()).where(systemUserTable.id().eq(id)).execute();
    }

    default List<SystemUser> getUserListByPostIds(Collection<Long> postIds){
        return sql().createQuery(SystemUserPostTable.$).where(SystemUserPostTable.$.id().in(postIds)).select(SystemUserPostTable.$.user()).execute();
    }

    Optional<SystemUser> findByUsername(String username);

    Optional<SystemUser> findByMobile(String mobile);

    Optional<SystemUser> findByEmail(String email);

    List<SystemUser> findByNickname(String nickname);

    List<SystemUser> findByDeptIdIn(Collection<Long> deptIds);


}
