package com.xiyu.service.convert.infra.oauth2;

import com.xiyu.service.vo.infra.oauth2.user.OAuth2UserInfoRespVO;
import com.xiyu.service.vo.infra.oauth2.user.OAuth2UserUpdateReqVO;
import com.xiyu.service.vo.system.user.profile.UserProfileUpdateReqVO;
import com.xiyu.service.model.system.dept.SystemDept;
import com.xiyu.service.model.system.dept.SystemPost;
import com.xiyu.service.model.system.user.SystemUser;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface OAuth2UserConvert {

    OAuth2UserConvert INSTANCE = Mappers.getMapper(OAuth2UserConvert.class);

    OAuth2UserInfoRespVO convert(SystemUser bean);
    OAuth2UserInfoRespVO.Dept convert(SystemDept dept);
    List<OAuth2UserInfoRespVO.Post> convertList(List<SystemPost> list);

    UserProfileUpdateReqVO convert(OAuth2UserUpdateReqVO bean);

}
