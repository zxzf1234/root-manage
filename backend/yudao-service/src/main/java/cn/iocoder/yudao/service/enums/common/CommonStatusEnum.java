package cn.iocoder.yudao.service.enums.common;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Arrays;
import cn.iocoder.yudao.service.enums.common.IntArrayValuable;

/**
* 系统状态
*/
@Getter
@AllArgsConstructor
public enum CommonStatusEnum implements IntArrayValuable {

    /**
    * 开启
    */
    ENABLE(0, "开启"),
    /**
    * 关闭
    */
    DISABLED(1, "关闭");

    private final Integer value;

    private final String label;

    public static final int[] VALUES = Arrays.stream(values()).mapToInt(CommonStatusEnum::getValue).toArray();

    @Override
    public int[] getValues() { return VALUES;}

    public static final String[] LABELS = Arrays.stream(values()).map(CommonStatusEnum::getLabel).toArray(String[]::new);

    @Override
    public String[] getLabels() { return LABELS; }

}
