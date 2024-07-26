package cn.iocoder.yudao.service.enums.system.sms;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Arrays;
import cn.iocoder.yudao.service.enums.common.IntArrayValuable;

/**
* 短信接收状态
*/
@Getter
@AllArgsConstructor
public enum SystemSmsReceiveStatusEnum implements IntArrayValuable {

    /**
    * 初始化
    */
    INIT(0),
    /**
    * 接收成功
    */
    SUCCESS(10),
    /**
    * 接收失败
    */
    FAILURE(20);

    private final Integer value;

    public static final int[] ARRAYS = Arrays.stream(values()).mapToInt(SystemSmsReceiveStatusEnum::getValue).toArray();

    @Override
    public int[] array() { return ARRAYS;}

}
