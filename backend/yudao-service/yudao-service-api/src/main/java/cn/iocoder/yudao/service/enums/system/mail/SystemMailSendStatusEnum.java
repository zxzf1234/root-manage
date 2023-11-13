package cn.iocoder.yudao.service.enums.system.mail;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Arrays;
import cn.iocoder.yudao.framework.common.core.IntArrayValuable;

/**
* 邮件发送状态
*/
@Getter
@AllArgsConstructor
public enum SystemMailSendStatusEnum implements IntArrayValuable {

    /**
    * 初始化
    */
    INIT(0),
    /**
    * 发送成功
    */
    SUCCESS(10),
    /**
    * 发送失败
    */
    FAILURE(20),
    /**
    * 不发送
    */
    IGNORE(30);

    private final Integer value;

    public static final int[] ARRAYS = Arrays.stream(values()).mapToInt(SystemMailSendStatusEnum::getValue).toArray();

    @Override
    public int[] array() { return ARRAYS;}

}
