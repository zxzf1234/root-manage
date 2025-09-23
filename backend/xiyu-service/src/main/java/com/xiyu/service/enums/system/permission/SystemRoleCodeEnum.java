package com.xiyu.service.enums.system.permission;

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
    SUPER_ADMIN("super_admin", "超级管理员");

    private final String value;

    private final String label;

}
