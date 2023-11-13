package cn.iocoder.yudao.service.enums.infra.redis;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Arrays;
import cn.iocoder.yudao.framework.common.core.IntArrayValuable;

/**
* Redis 超时类型
*/
@Getter
@AllArgsConstructor
public enum InfraRedisTimeoutTypeEnum implements IntArrayValuable {

    /**
    * 永不超时
    */
    NEVER(1),
    /**
    * 动态超时
    */
    DYNAMIC(2),
    /**
    * 固定超时
    */
    FIX(3);

    private final Integer value;

    public static final int[] ARRAYS = Arrays.stream(values()).mapToInt(InfraRedisTimeoutTypeEnum::getValue).toArray();

    @Override
    public int[] array() { return ARRAYS;}

}
