package cn.iocoder.yudao.service.service.system.user;
import cn.iocoder.yudao.framework.common.exception.ServiceException;
import cn.iocoder.yudao.framework.datapermission.core.util.DataPermissionUtils;
import cn.iocoder.yudao.service.api.infra.file.FileApi;
import cn.iocoder.yudao.service.repository.system.dept.SystemUserPostRepository;
import cn.iocoder.yudao.service.repository.system.user.SystemUserRepository;
import cn.iocoder.yudao.service.service.system.dept.DeptService;
import cn.iocoder.yudao.service.service.system.permission.PermissionService;
import cn.iocoder.yudao.service.service.system.post.PostService;
import cn.iocoder.yudao.service.vo.system.user.profile.UserProfileUpdatePasswordReqVO;
import cn.iocoder.yudao.service.vo.system.user.profile.UserProfileUpdateReqVO;
import com.google.common.annotations.VisibleForTesting;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import cn.iocoder.yudao.framework.common.util.collection.CollectionUtils;
import cn.iocoder.yudao.service.model.system.dept.SystemUserPost;
import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.collection.CollectionUtil;
import cn.hutool.core.io.IoUtil;
import cn.hutool.core.util.StrUtil;
import cn.iocoder.yudao.framework.excel.core.util.ExcelUtils;
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
import javax.annotation.Resource;

import org.springframework.data.domain.Page;

import java.io.IOException;
import java.io.InputStream;
import java.util.*;
import javax.servlet.http.HttpServletResponse;
import org.springframework.transaction.annotation.Transactional;
import cn.iocoder.yudao.framework.common.pojo.PageResult;
import cn.iocoder.yudao.service.convert.system.user.UserConvert;
import cn.iocoder.yudao.service.vo.system.user.user.*;
import cn.iocoder.yudao.framework.common.enums.CommonStatusEnum;

import static cn.iocoder.yudao.framework.common.exception.util.ServiceExceptionUtil.exception;
import static cn.iocoder.yudao.service.enums.system.ErrorCodeConstants.*;
import static cn.iocoder.yudao.framework.common.util.collection.CollectionUtils.convertList;

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

    @Value("${sys.user.init-password:yudaoyuanma}")
    private String userInitPassword;

    @Resource
    private DeptService deptService;
    @Resource
    private PostService postService;
    @Resource
    private PermissionService permissionService;
    @Resource
    private PasswordEncoder passwordEncoder;

    @Resource
    private FileApi fileApi;

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Long create(UserCreateInput inputVO) {
        // 校验正确性
        validateUserForCreateOrUpdate(null, inputVO.getUsername(), inputVO.getMobile(), inputVO.getEmail(),
                inputVO.getDeptId(), inputVO.getPostIds());
        SystemUser newUserConvert = UserConvert.INSTANCE.createInputConvert(inputVO);
        String password = passwordEncoder.encode(inputVO.getPassword());
        SystemUser newUser = SystemUserDraft.$.produce(newUserConvert, SystemUsers ->{
            SystemUsers
                    .setStatus(CommonStatusEnum.ENABLE.getStatus())
                    .setPassword(password);
        });
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
                    postId -> SystemUserPostDraft.$.produce(SystemUserPost->{
                        SystemUserPost.setUserId(userId).setPostId(postId);
                    }))
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
        if (!user.isPresent()) {
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
        List<UserPageOutput> userList = UserConvert.INSTANCE.pagePageOutputConvert(pageResult);
        return new PageResult<>(userList, pageResult.getTotalElements());
    }

    @Override
    public List<UserListAllSimpleOutput> listAllSimple() {
        List<SystemUser> systemUsers = systemUserRepository.GetUserListByStatus(CommonStatusEnum.ENABLE.getStatus());
        // 排序后，返回给前端
        return UserConvert.INSTANCE.convertSimpleListUser(systemUsers);
    }

    @Override
    public UserGetOutput get(Long id) {
         Optional<SystemUser> opUser = systemUserRepository.GetUser(id);
         if(!opUser.isPresent())
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
        // 手动创建导出 demo
        List<UserImportExcelVO> list = Arrays.asList(
                UserImportExcelVO.builder().username("yunai").deptId(1L).email("yunai@iocoder.cn").mobile("15601691300")
                        .nickname("芋道").status(CommonStatusEnum.ENABLE.getStatus()).sex(CommonSexEnum.MALE.getValue()).build(),
                UserImportExcelVO.builder().username("yuanma").deptId(2L).email("yuanma@iocoder.cn").mobile("15601701300")
                        .nickname("源码").status(CommonStatusEnum.DISABLE.getStatus()).sex(CommonSexEnum.FEMALE.getValue()).build()
        );

        // 输出
        ExcelUtils.write(response, "用户导入模板.xls", "用户列表", UserImportExcelVO.class, list);
    }

    @Override
    public UserImportRespVO importUserList(List<UserImportExcelVO> list, Boolean updateSupport) {
        if (CollUtil.isEmpty(list)) {
            throw exception(USER_IMPORT_LIST_IS_EMPTY);
        }
        UserImportRespVO respVO = UserImportRespVO.builder().createUsernames(new ArrayList<>())
                .updateUsernames(new ArrayList<>()).failureUsernames(new LinkedHashMap<>()).build();
        list.forEach(importUser -> {
            // 校验，判断是否有不符合的原因
            try {
                validateUserForCreateOrUpdate(null, null, importUser.getMobile(), importUser.getEmail(),
                        importUser.getDeptId(), null);
            } catch (ServiceException ex) {
                respVO.getFailureUsernames().put(importUser.getUsername(), ex.getMessage());
                return;
            }
            // 判断如果不存在，在进行插入
            Optional<SystemUser> existUser = systemUserRepository.findByUsername(importUser.getUsername());
            if (!existUser.isPresent()) {
                SystemUser newUserConvert = UserConvert.INSTANCE.convertUser(importUser);
                newUserConvert = SystemUserDraft.$.produce(newUserConvert, SystemUsers ->{
                    SystemUsers.setPassword(userInitPassword);
                });
                systemUserRepository.insert(newUserConvert);
                respVO.getCreateUsernames().add(importUser.getUsername());
                return;
            }
            // 如果存在，判断是否允许更新
            if (!updateSupport) {
                respVO.getFailureUsernames().put(importUser.getUsername(), USER_USERNAME_EXISTS.getMsg());
                return;
            }
            SystemUser updateUser = UserConvert.INSTANCE.convertUser(importUser);
            systemUserRepository.update(updateUser);

            respVO.getUpdateUsernames().add(importUser.getUsername());
        });
        return respVO;
    }

    private void validateUserForCreateOrUpdate(Long id, String username, String mobile, String email,
                                               Long deptId, List<Long> postIds) {
        // 关闭数据权限，避免因为没有数据权限，查询不到数据，进而导致唯一校验不正确
        DataPermissionUtils.executeIgnore(() -> {
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
        });
    }

    @VisibleForTesting
    void validateUserExists(Long id) {
        if (id == null) {
            return;
        }
        Optional<SystemUser> opUser = systemUserRepository.findById(id);
        if (!opUser.isPresent()) {
            throw exception(USER_NOT_EXISTS);
        }
    }

    @VisibleForTesting
    void validateUsernameUnique(Long id, String username) {
        if (StrUtil.isBlank(username)) {
            return;
        }
        Optional<SystemUser> opUser = systemUserRepository.findByUsername(username);
        if (!opUser.isPresent()) {
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
        if (!opUser.isPresent()) {
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
        if (!opUser.isPresent()) {
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
        updateUser = SystemUserDraft.$.produce(updateUser, SystemUsers ->{
            SystemUsers
                    .setId(id);
        });
        systemUserRepository.update(updateUser);
    }

    @Override
    public void updateUserPassword(Long id, UserProfileUpdatePasswordReqVO reqVO) {
        // 校验旧密码密码
        validateOldPassword(id, reqVO.getOldPassword());
        systemUserRepository.UpdateUserPassword(id, encodePassword(reqVO.getNewPassword()));
    }

    @Override
    public String updateUserAvatar(Long id, InputStream avatarFile) throws Exception {
        validateUserExists(id);
        // 存储文件
        String avatar = fileApi.createFile(IoUtil.readBytes(avatarFile));
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
            if (!CommonStatusEnum.ENABLE.getStatus().equals(user.status())) {
                throw exception(USER_IS_DISABLE, user.nickname());
            }
        });
    }


}
