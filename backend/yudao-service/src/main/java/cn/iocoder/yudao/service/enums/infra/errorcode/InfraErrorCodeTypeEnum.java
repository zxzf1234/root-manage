package cn.iocoder.yudao.service.enums.infra.errorcode;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Arrays;
import cn.iocoder.yudao.service.enums.common.IntArrayValuable;

/**
* 错误码的类型
*/
@Getter
@AllArgsConstructor
public enum InfraErrorCodeTypeEnum implements IntArrayValuable {

    /**
    * 自动生成
    */
    AUTO_GENERATION(1, "自动生成"),
    /**
    * 手动编辑
    */
    MANUAL_OPERATION(2, "手动编辑");

    private final Integer value;

    private final String label;

    public static final int[] VALUES = Arrays.stream(values()).mapToInt(InfraErrorCodeTypeEnum::getValue).toArray();

    @Override
    public int[] getValues() { return VALUES;}

    public static final String[] LABELS = Arrays.stream(values()).map(InfraErrorCodeTypeEnum::getLabel).toArray(String[]::new);

    @Override
    public String[] getLabels() { return LABELS; }

}
