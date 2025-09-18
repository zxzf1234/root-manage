package com.xiyu.service.enums.system.login;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Arrays;
import com.xiyu.service.enums.common.IntArrayValuable;

/**
* 登陆结果
*/
@Getter
@AllArgsConstructor
public enum SystemLoginResultEnum implements IntArrayValuable {

    /**
    * 成功
    */
    SUCCESS(0, "成功"),
    /**
    * 账号或密码不正确
    */
    BAD_CREDENTIALS(10, "账号或密码不正确"),
    /**
    * 用户被禁用
    */
    USER_DISABLED(20, "用户被禁用"),
    /**
    * 验证码不存在
    */
    CAPTCHA_NOT_FOUND(30, "验证码不存在"),
    /**
    * 验证码不正确
    */
    CAPTCHA_CODE_ERROR(31, "验证码不正确"),
    /**
    * 未知异常
    */
    UNKNOWN_EXCEPTION(100, "未知异常");

    private final Integer value;

    private final String label;

    public static final int[] VALUES = Arrays.stream(values()).mapToInt(SystemLoginResultEnum::getValue).toArray();

    @Override
    public int[] getValues() { return VALUES;}

    public static final String[] LABELS = Arrays.stream(values()).map(SystemLoginResultEnum::getLabel).toArray(String[]::new);

    @Override
    public String[] getLabels() { return LABELS; }

}
