package cn.iocoder.yudao.service.enums.infra.config;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Arrays;
import cn.iocoder.yudao.framework.common.core.IntArrayValuable;

/**
* 参数类型
*/
@Getter
@AllArgsConstructor
public enum InfraConfigTypeEnum implements IntArrayValuable {

    /**
    * 系统内置
    */
    SYSTEM(1),
    /**
    * 自定义
    */
    CUSTOM(2);

    private final Integer value;

    public static final int[] ARRAYS = Arrays.stream(values()).mapToInt(InfraConfigTypeEnum::getValue).toArray();

    @Override
    public int[] array() { return ARRAYS;}

}
