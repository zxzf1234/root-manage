package cn.iocoder.yudao.service.enums.infra.errorcode;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Arrays;
import cn.iocoder.yudao.framework.common.core.IntArrayValuable;

/**
* 错误码的类型
*/
@Getter
@AllArgsConstructor
public enum InfraErrorCodeTypeEnum implements IntArrayValuable {

    /**
    * 自动生成
    */
    AUTO_GENERATION(1),
    /**
    * 手动编辑
    */
    MANUAL_OPERATION(2);

    private final Integer value;

    public static final int[] ARRAYS = Arrays.stream(values()).mapToInt(InfraErrorCodeTypeEnum::getValue).toArray();

    @Override
    public int[] array() { return ARRAYS;}

}
