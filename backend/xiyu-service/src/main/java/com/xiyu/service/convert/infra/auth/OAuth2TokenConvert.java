package com.xiyu.service.convert.infra.auth;

import com.xiyu.service.vo.infra.oauth2.token.OAuth2AccessTokenRespVO;
import com.xiyu.service.model.infra.oauth2.SystemOauth2AccessToken;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface OAuth2TokenConvert {

    OAuth2TokenConvert INSTANCE = Mappers.getMapper(OAuth2TokenConvert.class);


    List<OAuth2AccessTokenRespVO> convert(List<SystemOauth2AccessToken> page);


}
