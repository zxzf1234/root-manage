package cn.iocoder.yudao.service.enums.system.notice;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Arrays;
import cn.iocoder.yudao.framework.common.core.IntArrayValuable;

/**
* 通知类型
*/
@Getter
@AllArgsConstructor
public enum SystemNoticeTypeEnum implements IntArrayValuable {

    /**
    * 通知
    */
    NOTICE(1),
    /**
    * 公告
    */
    ANNOUNCEMENT(2);

    private final Integer value;

    public static final int[] ARRAYS = Arrays.stream(values()).mapToInt(SystemNoticeTypeEnum::getValue).toArray();

    @Override
    public int[] array() { return ARRAYS;}

}
