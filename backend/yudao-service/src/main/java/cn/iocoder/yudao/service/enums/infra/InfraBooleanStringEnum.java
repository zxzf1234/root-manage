package cn.iocoder.yudao.service.enums.infra;

import cn.iocoder.yudao.service.enums.common.IntArrayValuable;
import cn.iocoder.yudao.service.enums.infra.job.InfraJobStatusEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Arrays;

/**
* Boolean 是否类型
*/
@Getter
@AllArgsConstructor
public enum InfraBooleanStringEnum implements IntArrayValuable {

    /**
    * 否
    */
    FALSE(0, "否"),
    /**
    * 是
    */
    TRUE(1, "是");

    private final Integer value;

    private final String label;

    public static final int[] VALUES = Arrays.stream(values()).mapToInt(InfraBooleanStringEnum::getValue).toArray();

    @Override
    public int[] getValues() { return VALUES;}

    public static final String[] LABELS = Arrays.stream(values()).map(InfraBooleanStringEnum::getLabel).toArray(String[]::new);

    @Override
    public String[] getLabels() { return LABELS; }

}
