package com.xiyu.service.repository.infra.oauth2;

import com.xiyu.service.model.infra.oauth2.SystemOauth2RefreshToken;
import org.babyfish.jimmer.spring.repository.JRepository;

import java.util.Optional;

public interface SystemOauth2RefreshTokenRepository extends JRepository<SystemOauth2RefreshToken, Long> {
    Optional<SystemOauth2RefreshToken> findByRefreshToken(String refreshToken);

    int deleteByRefreshToken(String refreshToken);
}
