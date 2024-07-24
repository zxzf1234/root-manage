package cn.iocoder.yudao.service.convert.infra.auth;

import cn.iocoder.yudao.service.vo.infra.oauth2.token.OAuth2AccessTokenRespVO;
import cn.iocoder.yudao.service.model.infra.oauth2.SystemOauth2AccessToken;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import org.springframework.data.domain.Page;

import java.util.List;

@Mapper
public interface OAuth2TokenConvert {

    OAuth2TokenConvert INSTANCE = Mappers.getMapper(OAuth2TokenConvert.class);


    List<OAuth2AccessTokenRespVO> convert(Page<SystemOauth2AccessToken> page);


}
