package cn.iocoder.yudao.service.enums.system.login;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Arrays;
import cn.iocoder.yudao.service.enums.common.IntArrayValuable;

/**
* 登陆结果
*/
@Getter
@AllArgsConstructor
public enum SystemLoginResultEnum implements IntArrayValuable {

    /**
    * 成功
    */
    SUCCESS(0),
    /**
    * 账号或密码不正确
    */
    BAD_CREDENTIALS(10),
    /**
    * 用户被禁用
    */
    USER_DISABLED(20),
    /**
    * 验证码不存在
    */
    CAPTCHA_NOT_FOUND(30),
    /**
    * 验证码不正确
    */
    CAPTCHA_CODE_ERROR(31),
    /**
     * 未知异常
     */
    UNKNOWN_EXCEPTION(100);

    private final Integer value;

    public static final int[] ARRAYS = Arrays.stream(values()).mapToInt(SystemLoginResultEnum::getValue).toArray();

    @Override
    public int[] array() { return ARRAYS;}

}
