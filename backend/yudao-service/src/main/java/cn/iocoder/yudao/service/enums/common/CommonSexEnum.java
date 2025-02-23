package cn.iocoder.yudao.service.enums.common;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Arrays;
import cn.iocoder.yudao.service.enums.common.IntArrayValuable;

/**
* 用户性别
*/
@Getter
@AllArgsConstructor
public enum CommonSexEnum implements IntArrayValuable {

    /**
    * 男
    */
    MALE(1, "男"),
    /**
    * 女
    */
    FEMALE(2, "女");

    private final Integer value;

    private final String label;

    public static final int[] VALUES = Arrays.stream(values()).mapToInt(CommonSexEnum::getValue).toArray();

    @Override
    public int[] getValues() { return VALUES;}

    public static final String[] LABELS = Arrays.stream(values()).map(CommonSexEnum::getLabel).toArray(String[]::new);

    @Override
    public String[] getLabels() { return LABELS; }

}
