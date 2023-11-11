package cn.iocoder.yudao.service.enums.common;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Arrays;
import cn.iocoder.yudao.framework.common.core.IntArrayValuable;

/**
* 用户性别
*/
@Getter
@AllArgsConstructor
public enum CommonSexEnum implements IntArrayValuable {

    /**
    * 男
    */
    MALE(1),
    /**
    * 女
    */
    FEMALE(2);

    private final Integer value;

    public static final int[] ARRAYS = Arrays.stream(values()).mapToInt(CommonSexEnum::getValue).toArray();

    @Override
    public int[] array() { return ARRAYS;}
}
