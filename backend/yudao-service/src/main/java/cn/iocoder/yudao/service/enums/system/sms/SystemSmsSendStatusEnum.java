package cn.iocoder.yudao.service.enums.system.sms;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Arrays;
import cn.iocoder.yudao.service.enums.common.IntArrayValuable;

/**
* 短信发送状态
*/
@Getter
@AllArgsConstructor
public enum SystemSmsSendStatusEnum implements IntArrayValuable {

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

    public static final int[] ARRAYS = Arrays.stream(values()).mapToInt(SystemSmsSendStatusEnum::getValue).toArray();

    @Override
    public int[] array() { return ARRAYS;}

}
