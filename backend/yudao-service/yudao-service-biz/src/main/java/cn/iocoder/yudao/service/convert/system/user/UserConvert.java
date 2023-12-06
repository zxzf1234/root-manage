package cn.iocoder.yudao.service.convert.system.user;

import cn.iocoder.yudao.service.api.system.user.dto.AdminUserRespDTO;
import cn.iocoder.yudao.service.model.infra.social.SystemSocialUser;
import cn.iocoder.yudao.service.model.system.dept.SystemDept;
import cn.iocoder.yudao.service.model.system.dept.SystemPost;
import cn.iocoder.yudao.service.model.system.permission.SystemRole;
import cn.iocoder.yudao.service.vo.system.user.profile.UserProfileResp;
import cn.iocoder.yudao.service.vo.system.user.profile.UserProfileUpdateReqVO;
import cn.iocoder.yudao.service.vo.system.user.user.UserExportInput;
import cn.iocoder.yudao.service.vo.system.user.user.UserGetOutput;
import cn.iocoder.yudao.service.vo.system.user.user.UserListAllSimpleOutput;
import cn.iocoder.yudao.service.vo.system.user.user.UserPageInput;
import cn.iocoder.yudao.service.vo.system.user.user.UserPageOutput;
import cn.iocoder.yudao.service.vo.system.user.user.UserUpdateStatusInput;
import cn.iocoder.yudao.service.vo.system.user.user.UserUpdatePasswordInput;
import cn.iocoder.yudao.service.vo.system.user.user.UserUpdateInput;
import cn.iocoder.yudao.service.vo.system.user.user.UserCreateInput;
import cn.iocoder.yudao.service.model.system.user.SystemUser;
import java.util.*;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;
import org.springframework.data.domain.Page;
import cn.iocoder.yudao.service.vo.system.user.user.*;

/**
 * 用户管理 Convert
 */
@Mapper
public interface UserConvert {
    UserConvert INSTANCE = Mappers.getMapper(UserConvert.class);


    SystemUser createInputConvert(UserCreateInput input);

    SystemUser updateInputConvert(UserUpdateInput input);

    List<UserPageOutput> pagePageOutputConvert(Page<SystemUser> output);

    UserGetOutput getOutputConvert(SystemUser output);

    UserResp convert(SystemUser bean);

    UserPageItemResp.dept convertDept(SystemDept bean);

    List<UserPageItemResp> convertPageUser(Page<SystemUser> bean);

    @Mapping(source = "dept.name", target = "deptName")
    @Mapping(source = "dept.leaderUser.nickname", target = "deptLeaderNickname")
    UserExcelVO convertExcelUser(SystemUser bean);

    List<UserExcelVO> convertExcelListUser(List<SystemUser> bean);

    List<UserListAllSimpleOutput> convertSimpleListUser(List<SystemUser> list);

    SystemUser convertUser(UserCreateReq bean);

    SystemUser convertUser(UserUpdateReq bean);

    SystemUser convertUser(UserImportExcelVO bean);

    SystemUser convertUser(UserProfileUpdateReqVO bean);

    List<AdminUserRespDTO> convertListUser(List<SystemUser> users);

    UserProfileResp convert03(SystemUser bean);

    List<UserProfileResp.Role> convertList(List<SystemRole> list);

    UserProfileResp.Dept convert02(SystemDept bean);


    List<UserProfileResp.Post> convertList02(List<SystemPost> list);

    List<UserProfileResp.SocialUser> convertList03(List<SystemSocialUser> list);


    AdminUserRespDTO convert4(SystemUser bean);

}
