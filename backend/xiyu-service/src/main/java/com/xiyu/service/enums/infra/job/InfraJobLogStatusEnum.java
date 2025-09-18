package com.xiyu.service.enums.infra.job;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Arrays;
import com.xiyu.service.enums.common.IntArrayValuable;

/**
* 定时任务日志状态
*/
@Getter
@AllArgsConstructor
public enum InfraJobLogStatusEnum implements IntArrayValuable {

    /**
    * 运行中
    */
    RUNNING(0, "运行中"),
    /**
    * 成功
    */
    SUCCESS(1, "成功"),
    /**
    * 失败
    */
    FAILURE(2, "失败");

    private final Integer value;

    private final String label;

    public static final int[] VALUES = Arrays.stream(values()).mapToInt(InfraJobLogStatusEnum::getValue).toArray();

    @Override
    public int[] getValues() { return VALUES;}

    public static final String[] LABELS = Arrays.stream(values()).map(InfraJobLogStatusEnum::getLabel).toArray(String[]::new);

    @Override
    public String[] getLabels() { return LABELS; }

}
