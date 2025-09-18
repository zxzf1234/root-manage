package com.xiyu.service.repository.infra.oauth2;

import com.xiyu.service.vo.infra.oauth2.token.OAuth2AccessTokenPageReqVO;
import com.xiyu.service.model.infra.oauth2.SystemOauth2AccessToken;
import com.xiyu.service.model.infra.oauth2.SystemOauth2AccessTokenTable;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.babyfish.jimmer.Page;

import java.time.LocalDateTime;
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

    default List<SystemOauth2AccessToken> findByIsExpired(Boolean isExpired){
        return sql().createQuery(systemOauth2AccessTokenTable)
                .whereIf(isExpired, systemOauth2AccessTokenTable.expiresTime().lt(LocalDateTime.now()))
                .whereIf(!isExpired, systemOauth2AccessTokenTable.expiresTime().gt(LocalDateTime.now()))
                .select(systemOauth2AccessTokenTable)
                .execute();
    }

    List<SystemOauth2AccessToken> findByRefreshToken(String refreshToken);

    Optional<SystemOauth2AccessToken> findByAccessToken(String accessToken);
}
