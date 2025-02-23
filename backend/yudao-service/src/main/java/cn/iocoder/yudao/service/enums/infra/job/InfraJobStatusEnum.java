package cn.iocoder.yudao.service.enums.infra.job;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Arrays;
import cn.iocoder.yudao.service.enums.common.IntArrayValuable;

/**
* 定时任务状态
*/
@Getter
@AllArgsConstructor
public enum InfraJobStatusEnum implements IntArrayValuable {

    /**
    * 初始化中
    */
    INIT(0, "初始化中"),
    /**
    * 正常
    */
    NORMAL(1, "正常"),
    /**
    * 暂停
    */
    STOP(2, "暂停");

    private final Integer value;

    private final String label;

    public static final int[] VALUES = Arrays.stream(values()).mapToInt(InfraJobStatusEnum::getValue).toArray();

    @Override
    public int[] getValues() { return VALUES;}

    public static final String[] LABELS = Arrays.stream(values()).map(InfraJobStatusEnum::getLabel).toArray(String[]::new);

    @Override
    public String[] getLabels() { return LABELS; }

}
