package cn.iocoder.yudao.service.enums.infra.api;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Arrays;
import cn.iocoder.yudao.service.enums.common.IntArrayValuable;

/**
* API 异常数据的处理状态
*/
@Getter
@AllArgsConstructor
public enum InfraApiErrorLogProcessStatusEnum implements IntArrayValuable {

    /**
    * 未处理
    */
    INIT(0),
    /**
    * 已处理
    */
    DONE(1),
    /**
    * 已忽略
    */
    IGNORE(2);

    private final Integer value;

    public static final int[] ARRAYS = Arrays.stream(values()).mapToInt(InfraApiErrorLogProcessStatusEnum::getValue).toArray();

    @Override
    public int[] array() { return ARRAYS;}

}
