package cn.iocoder.yudao.service.enums.system.sms;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Arrays;
import cn.iocoder.yudao.service.enums.common.IntArrayValuable;

/**
* 短信模板的类型
*/
@Getter
@AllArgsConstructor
public enum SystemSmsTemplateTypeEnum implements IntArrayValuable {

    /**
    * 验证码
    */
    VERIFICATION_CODE(1),
    /**
    * 通知
    */
    NOTICE(2),
    /**
    * 营销
    */
    PROMOTION(3);

    private final Integer value;

    public static final int[] ARRAYS = Arrays.stream(values()).mapToInt(SystemSmsTemplateTypeEnum::getValue).toArray();

    @Override
    public int[] array() { return ARRAYS;}

}
