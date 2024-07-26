package cn.iocoder.yudao.service.enums.system.nofify;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Arrays;
import cn.iocoder.yudao.service.enums.common.IntArrayValuable;

/**
* 站内信模版的类型
*/
@Getter
@AllArgsConstructor
public enum SystemNotifyTemplateTypeEnum implements IntArrayValuable {

    /**
    * 通知公告
    */
    ANNOUNCEMENT(1),
    /**
    * 系统消息
    */
    SYSTEM(2);

    private final Integer value;

    public static final int[] ARRAYS = Arrays.stream(values()).mapToInt(SystemNotifyTemplateTypeEnum::getValue).toArray();

    @Override
    public int[] array() { return ARRAYS;}

}
