package cn.iocoder.yudao.service.enums.infra.redis;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Arrays;
import cn.iocoder.yudao.service.enums.common.IntArrayValuable;

/**
* Redis 超时类型
*/
@Getter
@AllArgsConstructor
public enum InfraRedisTimeoutTypeEnum implements IntArrayValuable {

    /**
    * 永不超时
    */
    NEVER(1, "永不超时"),
    /**
    * 动态超时
    */
    DYNAMIC(2, "动态超时"),
    /**
    * 固定超时
    */
    FIX(3, "固定超时");

    private final Integer value;

    private final String label;

    public static final int[] VALUES = Arrays.stream(values()).mapToInt(InfraRedisTimeoutTypeEnum::getValue).toArray();

    @Override
    public int[] getValues() { return VALUES;}

    public static final String[] LABELS = Arrays.stream(values()).map(InfraRedisTimeoutTypeEnum::getLabel).toArray(String[]::new);

    @Override
    public String[] getLabels() { return LABELS; }

}
