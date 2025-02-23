package cn.iocoder.yudao.service.enums.infra.config;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Arrays;
import cn.iocoder.yudao.service.enums.common.IntArrayValuable;

/**
* 参数类型
*/
@Getter
@AllArgsConstructor
public enum InfraConfigTypeEnum implements IntArrayValuable {

    /**
    * 系统内置
    */
    SYSTEM(1, "系统内置"),
    /**
    * 自定义
    */
    CUSTOM(2, "自定义");

    private final Integer value;

    private final String label;

    public static final int[] VALUES = Arrays.stream(values()).mapToInt(InfraConfigTypeEnum::getValue).toArray();

    @Override
    public int[] getValues() { return VALUES;}

    public static final String[] LABELS = Arrays.stream(values()).map(InfraConfigTypeEnum::getLabel).toArray(String[]::new);

    @Override
    public String[] getLabels() { return LABELS; }

}
