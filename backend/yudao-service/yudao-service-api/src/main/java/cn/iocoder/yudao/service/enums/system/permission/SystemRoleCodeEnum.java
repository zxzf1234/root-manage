package cn.iocoder.yudao.service.enums.system.permission;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
* 角色标识
*/
@Getter
@AllArgsConstructor
public enum SystemRoleCodeEnum {

    /**
    * 超级管理员
    */
    SUPER_ADMIN("super_admin"),
    /**
    * 租户管理员
    */
    TENANT_ADMIN("tenant_admin");

    private final String value;

}
