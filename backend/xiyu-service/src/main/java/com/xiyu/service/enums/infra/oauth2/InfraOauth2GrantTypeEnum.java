package com.xiyu.service.enums.infra.oauth2;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
* OAuth 2.0 授权类型
*/
@Getter
@AllArgsConstructor
public enum InfraOauth2GrantTypeEnum {

    /**
    * password
    */
    PASSWORD("password", "password"),
    /**
    * authorization_code
    */
    AUTHORIZATION_CODE("authorization_code", "authorization_code"),
    /**
    * implicit
    */
    IMPLICIT("implicit", "implicit"),
    /**
    * client_credentials
    */
    CLIENT_CREDENTIALS("client_credentials", "client_credentials"),
    /**
    * refresh_token
    */
    REFRESH_TOKEN("refresh_token", "refresh_token");

    private final String value;

    private final String label;

}
