package com.xiyu.service.convert.system.user;

import com.xiyu.service.vo.system.user.user.UserGetOwnerUserOutput;
import com.xiyu.service.vo.system.user.user.UserGetByDeptOutput;
import com.xiyu.service.model.infra.social.SystemSocialUser;
import com.xiyu.service.model.system.dept.SystemDept;
import com.xiyu.service.model.system.dept.SystemPost;
import com.xiyu.service.model.system.role.SystemRole;
import com.xiyu.service.vo.system.user.profile.UserProfileResp;
import com.xiyu.service.vo.system.user.profile.UserProfileUpdateReqVO;
import com.xiyu.service.vo.system.user.user.UserGetOutput;
import com.xiyu.service.vo.system.user.user.UserListAllSimpleOutput;
import com.xiyu.service.vo.system.user.user.UserPageOutput;
import com.xiyu.service.vo.system.user.user.UserUpdateInput;
import com.xiyu.service.vo.system.user.user.UserCreateInput;
import com.xiyu.service.model.system.user.SystemUser;
import java.util.*;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;
import com.xiyu.service.vo.system.user.user.*;

/**
 * 用户管理 Convert
 */
@Mapper
public interface UserConvert {
    UserConvert INSTANCE = Mappers.getMapper(UserConvert.class);


    SystemUser createInputConvert(UserCreateInput input);

    SystemUser updateInputConvert(UserUpdateInput input);

    List<UserPageOutput> pagePageOutputConvert(List<SystemUser> output);

    UserGetOutput getOutputConvert(SystemUser output);

    @Mapping(source = "dept.name", target = "deptName")
    UserExcelVO convertExcelUser(SystemUser bean);

    List<UserExcelVO> convertExcelListUser(List<SystemUser> bean);

    List<UserListAllSimpleOutput> convertSimpleListUser(List<SystemUser> list);

    SystemUser convertUser(UserImportExcelVO bean);

    SystemUser convertUser(UserProfileUpdateReqVO bean);

    UserProfileResp convert03(SystemUser bean);

    List<UserProfileResp.Role> convertList(List<SystemRole> list);

    UserProfileResp.Dept convert02(SystemDept bean);


    List<UserProfileResp.Post> convertList02(List<SystemPost> list);

    List<UserProfileResp.SocialUser> convertList03(List<SystemSocialUser> list);


    List<UserGetByDeptOutput> getByDeptOutputConvert(List<SystemUser> output);

    List<UserGetOwnerUserOutput> getOwnerUserOutputConvert(List<SystemUser> output);

}
