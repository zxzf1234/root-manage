package cn.iocoder.yudao.service.enums.system.login;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Arrays;
import cn.iocoder.yudao.framework.common.core.IntArrayValuable;

/**
* 登陆日志的类型
*/
@Getter
@AllArgsConstructor
public enum SystemLoginTypeEnum implements IntArrayValuable {

    /**
    * 账号登录
    */
    LOGIN_USERNAME(100),
    /**
    * 社交登录
    */
    LOGIN_SOCIAL(101),
    /**
    * 手机登录
    */
    LOGIN_MOBILE(103),
    /**
    * 短信登陆
    */
    LOGIN_SMS(104),
    /**
    * 主动登出
    */
    LOGOUT_SELF(200),
    /**
    * 强制登出
    */
    LOGOUT_DELETE(202);

    private final Integer value;

    public static final int[] ARRAYS = Arrays.stream(values()).mapToInt(SystemLoginTypeEnum::getValue).toArray();

    @Override
    public int[] array() { return ARRAYS;}

}
