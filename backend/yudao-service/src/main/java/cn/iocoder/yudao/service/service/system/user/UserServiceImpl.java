package cn.iocoder.yudao.service.service.system.user;
import cn.iocoder.yudao.service.framework.exception.ServiceException;
import cn.iocoder.yudao.service.repository.system.dept.SystemUserPostRepository;
import cn.iocoder.yudao.service.repository.system.user.SystemUserRepository;
import cn.iocoder.yudao.service.service.infra.file.FileService;
import cn.iocoder.yudao.service.service.system.dept.DeptService;
import cn.iocoder.yudao.service.service.system.permission.PermissionService;
import cn.iocoder.yudao.service.service.system.post.PostService;
import cn.iocoder.yudao.service.vo.system.user.profile.UserProfileUpdatePasswordReqVO;
import cn.iocoder.yudao.service.vo.system.user.profile.UserProfileUpdateReqVO;
import com.google.common.annotations.VisibleForTesting;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import cn.iocoder.yudao.service.util.collection.CollectionUtils;
import cn.iocoder.yudao.service.model.system.dept.SystemUserPost;
import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.collection.CollectionUtil;
import cn.hutool.core.io.IoUtil;
import cn.hutool.core.util.StrUtil;
import cn.iocoder.yudao.service.framework.excel.core.util.ExcelUtils;
import cn.iocoder.yudao.service.enums.common.CommonSexEnum;

import cn.iocoder.yudao.service.model.system.user.SystemUser;
import cn.iocoder.yudao.service.vo.system.user.user.UserGetOutput;
import cn.iocoder.yudao.service.vo.system.user.user.UserListAllSimpleOutput;
import cn.iocoder.yudao.service.vo.system.user.user.UserPageOutput;
import cn.iocoder.yudao.service.vo.system.user.user.UserPageInput;
import cn.iocoder.yudao.service.vo.system.user.user.UserUpdateStatusInput;
import cn.iocoder.yudao.service.vo.system.user.user.UserUpdatePasswordInput;
import cn.iocoder.yudao.service.vo.system.user.user.UserUpdateInput;
import cn.iocoder.yudao.service.vo.system.user.user.UserCreateInput;
import org.springframework.security.crypto.password.PasswordEncoder;
import cn.iocoder.yudao.service.model.system.user.SystemUserDraft;
import cn.iocoder.yudao.service.model.system.dept.SystemUserPostDraft;
import org.springframework.stereotype.Service;
import jakarta.annotation.Resource;

import org.babyfish.jimmer.Page;

import java.io.IOException;
import java.io.InputStream;
import java.util.*;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.transaction.annotation.Transactional;
import cn.iocoder.yudao.service.framework.web.web.core.pojo.PageResult;
import cn.iocoder.yudao.service.convert.system.user.UserConvert;
import cn.iocoder.yudao.service.vo.system.user.user.*;
import cn.iocoder.yudao.service.enums.common.CommonStatusEnum;

import static cn.iocoder.yudao.service.framework.exception.util.ServiceExceptionUtil.exception;
import static cn.iocoder.yudao.service.errorCode.system.user.UserErrorCode.*;
import static cn.iocoder.yudao.service.util.collection.CollectionUtils.convertList;

/**
 * 用户管理 Service 实现类
 */
@Service("adminUserService")
@Slf4j
public class UserServiceImpl implements UserService {

    @Resource
    private SystemUserRepository systemUserRepository;

    @Resource
    private SystemUserPostRepository systemUserPostRepository;

    @Resource
    private DeptService deptService;
    @Resource
    private PostService postService;
    @Resource
    private PermissionService permissionService;
    @Resource
    private PasswordEncoder passwordEncoder;

    @Resource
    private FileService fileService;

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Long create(UserCreateInput inputVO) {
        // 校验正确性
        validateUserForCreateOrUpdate(null, inputVO.getUsername(), inputVO.getMobile(), inputVO.getEmail(),
                inputVO.getDeptId(), inputVO.getPostIds());
        SystemUser newUserConvert = UserConvert.INSTANCE.createInputConvert(inputVO);
        String password = passwordEncoder.encode(inputVO.getPassword());
        SystemUser newUser = SystemUserDraft.$.produce(newUserConvert, SystemUsers -> SystemUsers
                .setStatus(CommonStatusEnum.ENABLE.getValue())
                .setPassword(password));
        newUser = systemUserRepository.insert(newUser);
        return newUser.id();
    }


    @Override
    @Transactional(rollbackFor = Exception.class)
    public Long update(UserUpdateInput inputVO) {
        // 校验正确性
        validateUserForCreateOrUpdate(inputVO.getId(), inputVO.getUsername(), inputVO.getMobile(), inputVO.getEmail(),
                inputVO.getDeptId(), inputVO.getPostIds());
        // 更新用户
        SystemUser updateUser = UserConvert.INSTANCE.updateInputConvert(inputVO);
        updateUser = systemUserRepository.update(updateUser);
        updateUserPost(inputVO, updateUser);
        return updateUser.id();
    }

    private void updateUserPost(UserUpdateInput reqVO, SystemUser updateUser) {
        Long userId = reqVO.getId();
        List<Long> dbPostIds = convertList(systemUserPostRepository.findByUserId(userId), SystemUserPost::postId);
        // 计算新增和删除的岗位编号
        List<Long> postIds = updateUser.postIds();
        Collection<Long> createPostIds = CollUtil.subtract(postIds, dbPostIds);
        Collection<Long> deletePostIds = CollUtil.subtract(dbPostIds, postIds);
        // 执行新增和删除。对于已经授权的菜单，不用做任何处理
        if (!CollectionUtil.isEmpty(createPostIds)) {
            systemUserPostRepository.saveAll(convertList(createPostIds,
                    postId -> SystemUserPostDraft.$.produce(SystemUserPost-> SystemUserPost.setUserId(userId).setPostId(postId)))
            );

        }
        if (!CollectionUtil.isEmpty(deletePostIds)) {
            systemUserPostRepository.deleteByUserIdAndPostIdIn(userId, deletePostIds);
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Boolean deleted(Long id) {
        // 校验用户存在
        validateUserExists(id);
        // 删除用户
        systemUserRepository.deleteById(id);
        // 删除用户关联数据
        permissionService.processUserDeleted(id);
        // 删除用户岗位
        systemUserPostRepository.deleteByUserId(id);
        return true;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Boolean updatePassword(UserUpdatePasswordInput inputVO) {
        // 校验旧密码密码
        // 校验用户存在
        validateUserExists(inputVO.getId());
        systemUserRepository.UpdateUserPassword(inputVO.getId(), encodePassword(inputVO.getPassword()));
        return true;
    }

    /**
     * 校验旧密码
     * @param id          用户 id
     * @param oldPassword 旧密码
     */
    @VisibleForTesting
    void validateOldPassword(Long id, String oldPassword) {
        Optional<SystemUser> user = systemUserRepository.findById(id);
        if (user.isEmpty()) {
            throw exception(USER_NOT_EXISTS);
        }
        if (!isPasswordMatch(oldPassword, user.get().password())) {
            throw exception(USER_PASSWORD_FAILED);
        }
    }

    /**
     * 对密码进行加密
     *
     * @param password 密码
     * @return 加密后的密码
     */
    private String encodePassword(String password) {
        return passwordEncoder.encode(password);
    }
    @Override
    public boolean isPasswordMatch(String rawPassword, String encodedPassword) {
        return passwordEncoder.matches(rawPassword, encodedPassword);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Boolean updateStatus(UserUpdateStatusInput inputVO) {
        // 校验用户存在
        validateUserExists(inputVO.getId());
        // 更新状态
        systemUserRepository.UpdateUserStatus(inputVO.getId(), inputVO.getStatus());
        return true;
    }

    @Override
    public PageResult<UserPageOutput> page(UserPageInput inputVO) {
        Page<SystemUser> pageResult = systemUserRepository.getUserPage(inputVO);
        List<UserPageOutput> userList = UserConvert.INSTANCE.pagePageOutputConvert(pageResult.getRows());
        return new PageResult<>(userList, pageResult.getTotalRowCount());
    }

    @Override
    public List<UserListAllSimpleOutput> listAllSimple() {
        List<SystemUser> systemUsers = systemUserRepository.GetUserListByStatus(CommonStatusEnum.ENABLE.getValue());
        // 排序后，返回给前端
        return UserConvert.INSTANCE.convertSimpleListUser(systemUsers);
    }

    @Override
    public UserGetOutput get(Long id) {
         Optional<SystemUser> opUser = systemUserRepository.GetUser(id);
         if(opUser.isEmpty())
             throw exception(USER_NOT_EXISTS);
         return UserConvert.INSTANCE.getOutputConvert(opUser.get());
    }

    @Override
    public void exported(HttpServletResponse response, UserExportedInput inputVO) throws IOException {
        List<SystemUser> systemUsers = systemUserRepository.getExportUserList(inputVO);
        List<UserExcelVO> excelUsers  = UserConvert.INSTANCE.convertExcelListUser(systemUsers);
        // 输出
        ExcelUtils.write(response, "用户数据.xls", "用户列表", UserExcelVO.class, excelUsers);
    }

    @Override
    public void getImportTemplate(HttpServletResponse response ) throws IOException {
        ExcelUtils.write(response, "用户导入模板.xls", "用户列表", UserImportExcelVO.class, null);
    }

    @Override
    public UserImportRespVO importUserList(List<UserImportExcelVO> list) {
        if (CollUtil.isEmpty(list)) {
            throw exception(USER_IMPORT_LIST_IS_EMPTY);
        }
        UserImportRespVO respVO = UserImportRespVO.builder().createUsernames(new ArrayList<>())
                .updateUsernames(new ArrayList<>()).failureUsernames(new LinkedHashMap<>()).build();
        list.forEach(importUser -> {
            // 校验，判断是否有不符合的原因
            try {
                validateUserForCreateOrUpdate(null, importUser.getUsername(), importUser.getMobile(), importUser.getEmail(),
                        null, null);
            } catch (ServiceException ex) {
                respVO.getFailureUsernames().put(importUser.getUsername(), ex.getMessage());
                return;
            }
            SystemUser newUserConvert = UserConvert.INSTANCE.convertUser(importUser);
            newUserConvert = SystemUserDraft.$.produce(newUserConvert, SystemUsers ->
                    SystemUsers.setPassword(passwordEncoder.encode(importUser.getPassword()))
                            .setStatus(importUser.getStatus() == null ? CommonStatusEnum.ENABLE.getValue() : SystemUsers.status())
                            .setSex(importUser.getSex() == null ? CommonSexEnum.MALE.getValue() : SystemUsers.sex())
            );
            systemUserRepository.insert(newUserConvert);
            respVO.getCreateUsernames().add(importUser.getUsername());

        });
        return respVO;
    }

    private void validateUserForCreateOrUpdate(Long id, String username, String mobile, String email,
                                               Long deptId, List<Long> postIds) {

        // 校验用户存在
        validateUserExists(id);
        // 校验用户名唯一
        validateUsernameUnique(id, username);
        // 校验手机号唯一
        validateMobileUnique(id, mobile);
        // 校验邮箱唯一
        validateEmailUnique(id, email);
        // 校验部门处于开启状态
        deptService.validateDeptList(CollectionUtils.singleton(deptId));
        // 校验岗位处于开启状态
        postService.validatePostList(postIds);

    }

    @VisibleForTesting
    void validateUserExists(Long id) {
        if (id == null) {
            return;
        }
        Optional<SystemUser> opUser = systemUserRepository.findById(id);
        if (opUser.isEmpty()) {
            throw exception(USER_NOT_EXISTS);
        }
    }

    @VisibleForTesting
    void validateUsernameUnique(Long id, String username) {
        if (StrUtil.isBlank(username)) {
            return;
        }
        Optional<SystemUser> opUser = systemUserRepository.findByUsername(username);
        if (opUser.isEmpty()) {
            return;
        }
        // 如果 id 为空，说明不用比较是否为相同 id 的用户
        if (id == null) {
            throw exception(USER_USERNAME_EXISTS);
        }
        if (!(opUser.get().id() == id)) {
            throw exception(USER_USERNAME_EXISTS);
        }
    }

    @VisibleForTesting
    void validateEmailUnique(Long id, String email) {
        if (StrUtil.isBlank(email)) {
            return;
        }
        Optional<SystemUser> opUser = systemUserRepository.findByEmail(email);
        if (opUser.isEmpty()) {
            return;
        }
        // 如果 id 为空，说明不用比较是否为相同 id 的用户
        if (id == null) {
            throw exception(USER_EMAIL_EXISTS);
        }
        if (!(opUser.get().id() == id)) {
            throw exception(USER_EMAIL_EXISTS);
        }
    }

    @VisibleForTesting
    void validateMobileUnique(Long id, String mobile) {
        if (StrUtil.isBlank(mobile)) {
            return;
        }
        Optional<SystemUser> opUser = systemUserRepository.findByMobile(mobile);
        if (opUser.isEmpty()) {
            return;
        }
        // 如果 id 为空，说明不用比较是否为相同 id 的用户
        if (id == null) {
            throw exception(USER_MOBILE_EXISTS);
        }
        if (!(opUser.get().id() == id)) {
            throw exception(USER_MOBILE_EXISTS);
        }
    }

    @Override
    public Optional<SystemUser> getUserByUsername(String username) {
        return systemUserRepository.findByUsername(username);
    }

    @Override
    public Optional<SystemUser> getUserByMobile(String mobile) {
        return systemUserRepository.findByMobile(mobile);
    }

    @Override
    public void updateUserLogin(Long id, String loginIp) {
        systemUserRepository.UpdateUserLogin(id, loginIp);
    }

    @Override
    public List<SystemUser> getUserListByNickname(String nickname) {
        return systemUserRepository.findByNickname(nickname);
    }

    @Override
    public Optional<SystemUser> getUser(Long id) {
        return systemUserRepository.GetUser(id);
    }

    @Override
    public void updateUserProfile(Long id, UserProfileUpdateReqVO reqVO) {
        // 校验正确性
        validateUserExists(id);
        validateEmailUnique(id, reqVO.getEmail());
        validateMobileUnique(id, reqVO.getMobile());
        // 执行更新
        SystemUser updateUser = UserConvert.INSTANCE.convertUser(reqVO);
        updateUser = SystemUserDraft.$.produce(updateUser, SystemUsers -> SystemUsers
                .setId(id));
        systemUserRepository.update(updateUser);
    }

    @Override
    public void updateUserPassword(Long id, UserProfileUpdatePasswordReqVO reqVO) {
        // 校验旧密码密码
        validateOldPassword(id, reqVO.getOldPassword());
        systemUserRepository.UpdateUserPassword(id, encodePassword(reqVO.getNewPassword()));
    }

    @Override
    public String updateUserAvatar(Long id, InputStream avatarFile) {
        validateUserExists(id);
        // 存储文件
        String avatar = fileService.createFile(null, null, IoUtil.readBytes(avatarFile));
        systemUserRepository.UpdateUserAvatar(id, avatar);
        return avatar;
    }

    @Override
    public List<SystemUser> getUserListByDeptIds(Collection<Long> deptIds) {
        if (CollUtil.isEmpty(deptIds)) {
            return Collections.emptyList();
        }
        return systemUserRepository.findByDeptIdIn(deptIds);
    }

    @Override
    public List<SystemUser> getUserListByPostIds(Collection<Long> postIds) {
        if (CollUtil.isEmpty(postIds)) {
            return Collections.emptyList();
        }
        return systemUserRepository.getUserListByPostIds(postIds);
    }

    @Override
    public List<SystemUser> getUserList(Collection<Long> ids) {
        if (CollUtil.isEmpty(ids)) {
            return Collections.emptyList();
        }
        return systemUserRepository.findByIds(ids);
    }

    @Override
    public void validateUserList(Collection<Long> ids) {
        if (CollUtil.isEmpty(ids)) {
            return;
        }
        // 获得岗位信息
        List<SystemUser> users = systemUserRepository.findByIds(ids);
        Map<Long, SystemUser> userMap = CollectionUtils.convertMap(users, SystemUser::id);
        // 校验
        ids.forEach(id -> {
            SystemUser user = userMap.get(id);
            if (user == null) {
                throw exception(USER_NOT_EXISTS);
            }
            if (!CommonStatusEnum.ENABLE.getValue().equals(user.status())) {
                throw exception(USER_IS_DISABLE, user.nickname());
            }
        });
    }


}
