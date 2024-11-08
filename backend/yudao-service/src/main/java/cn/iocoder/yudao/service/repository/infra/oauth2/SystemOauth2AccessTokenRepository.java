package cn.iocoder.yudao.service.repository.infra.oauth2;

import cn.iocoder.yudao.service.vo.infra.oauth2.token.OAuth2AccessTokenPageReqVO;
import cn.iocoder.yudao.service.model.infra.oauth2.SystemOauth2AccessToken;
import cn.iocoder.yudao.service.model.infra.oauth2.SystemOauth2AccessTokenTable;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.babyfish.jimmer.Page;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.Optional;

public interface SystemOauth2AccessTokenRepository extends JRepository<SystemOauth2AccessToken, Long> {
    SystemOauth2AccessTokenTable systemOauth2AccessTokenTable = SystemOauth2AccessTokenTable.$;

    default Page<SystemOauth2AccessToken> selectPage(OAuth2AccessTokenPageReqVO reqVO){
        return sql().createQuery(systemOauth2AccessTokenTable)
                .where(systemOauth2AccessTokenTable.userId().eqIf(reqVO.getUserId()))
                .where(systemOauth2AccessTokenTable.userType().eqIf(reqVO.getUserType()))
                .where(systemOauth2AccessTokenTable.clientId().eqIf(reqVO.getClientId()))
                .select(systemOauth2AccessTokenTable)
                .fetchPage(reqVO.getPageNo() - 1, reqVO.getPageSize());
    }

    List<SystemOauth2AccessToken> findByRefreshToken(String refreshToken);

    Optional<SystemOauth2AccessToken> findByAccessToken(String accessToken);
}
