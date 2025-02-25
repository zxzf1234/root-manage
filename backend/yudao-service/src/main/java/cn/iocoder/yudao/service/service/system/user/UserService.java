package cn.iocoder.yudao.service.service.system.user;

import cn.iocoder.yudao.service.model.system.user.SystemUser;
import cn.iocoder.yudao.service.vo.system.user.profile.UserProfileUpdatePasswordReqVO;
import cn.iocoder.yudao.service.vo.system.user.profile.UserProfileUpdateReqVO;
import cn.iocoder.yudao.service.vo.system.user.user.UserExportedInput;
import cn.iocoder.yudao.service.vo.system.user.user.UserGetOutput;
import cn.iocoder.yudao.service.vo.system.user.user.UserListAllSimpleOutput;
import cn.iocoder.yudao.service.vo.system.user.user.UserPageOutput;
import cn.iocoder.yudao.service.vo.system.user.user.UserPageInput;
import cn.iocoder.yudao.service.vo.system.user.user.UserUpdateStatusInput;
import cn.iocoder.yudao.service.vo.system.user.user.UserUpdatePasswordInput;
import cn.iocoder.yudao.service.vo.system.user.user.UserUpdateInput;
import cn.iocoder.yudao.service.vo.system.user.user.UserCreateInput;

import java.io.IOException;
import java.io.InputStream;
import java.util.*;
import cn.iocoder.yudao.service.vo.system.user.user.*;
import cn.iocoder.yudao.service.framework.web.web.core.pojo.PageResult;
import jakarta.servlet.http.HttpServletResponse;

/**
 * 用户管理 Service 接口
 */
public interface UserService {

    Long create(UserCreateInput inputVO);

    Long update(UserUpdateInput inputVO);

    Boolean deleted(Long id);

    Boolean updatePassword(UserUpdatePasswordInput inputVO);

    Boolean updateStatus(UserUpdateStatusInput inputVO);

    PageResult<UserPageOutput> page(UserPageInput inputVO);

    List<UserListAllSimpleOutput> listAllSimple();

    UserGetOutput get(Long id);

    void exported(HttpServletResponse response, UserExportedInput inputVO) throws IOException;

    void getImportTemplate(HttpServletResponse response ) throws IOException;

    List<UserImportRespVO> importUserList(List<UserImportExcelVO> list);

    boolean isPasswordMatch(String rawPassword, String encodedPassword);

    Optional<SystemUser> getUserByUsername(String username);

    Optional<SystemUser> getUserByMobile(String mobile);

    void updateUserLogin(Long id, String loginIp);

    List<SystemUser> getUserListByNickname(String nickname);

    Optional<SystemUser> getUser(Long id);

    void updateUserProfile(Long id, UserProfileUpdateReqVO reqVO);

    void updateUserPassword(Long id, UserProfileUpdatePasswordReqVO reqVO);

    String updateUserAvatar(Long id, InputStream avatarFile) throws Exception;

    List<SystemUser> getUserListByDeptIds(Collection<Long> deptIds);

    List<SystemUser> getUserListByPostIds(Collection<Long> postIds);

    List<SystemUser> getUserList(Collection<Long> ids);

    void validateUserList(Collection<Long> ids);

}
