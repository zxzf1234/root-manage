package com.xiyu.service.enums.system.login;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Arrays;
import com.xiyu.service.enums.common.IntArrayValuable;

/**
* 登陆日志的类型
*/
@Getter
@AllArgsConstructor
public enum SystemLoginTypeEnum implements IntArrayValuable {

    /**
    * 账号登录
    */
    LOGIN_USERNAME(100, "账号登录"),
    /**
    * 社交登录
    */
    LOGIN_SOCIAL(101, "社交登录"),
    /**
    * 手机登录
    */
    LOGIN_MOBILE(103, "手机登录"),
    /**
    * 短信登陆
    */
    LOGIN_SMS(104, "短信登陆"),
    /**
    * 主动登出
    */
    LOGOUT_SELF(200, "主动登出"),
    /**
    * 强制登出
    */
    LOGOUT_DELETE(202, "强制登出");

    private final Integer value;

    private final String label;

    public static final int[] VALUES = Arrays.stream(values()).mapToInt(SystemLoginTypeEnum::getValue).toArray();

    @Override
    public int[] getValues() { return VALUES;}

    public static final String[] LABELS = Arrays.stream(values()).map(SystemLoginTypeEnum::getLabel).toArray(String[]::new);

    @Override
    public String[] getLabels() { return LABELS; }

}
