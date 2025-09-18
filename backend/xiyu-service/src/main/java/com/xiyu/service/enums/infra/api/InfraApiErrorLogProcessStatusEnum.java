package com.xiyu.service.enums.infra.api;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Arrays;
import com.xiyu.service.enums.common.IntArrayValuable;

/**
* API 异常数据的处理状态
*/
@Getter
@AllArgsConstructor
public enum InfraApiErrorLogProcessStatusEnum implements IntArrayValuable {

    /**
    * 未处理
    */
    INIT(0, "未处理"),
    /**
    * 已处理
    */
    DONE(1, "已处理"),
    /**
    * 已忽略
    */
    IGNORE(2, "已忽略");

    private final Integer value;

    private final String label;

    public static final int[] VALUES = Arrays.stream(values()).mapToInt(InfraApiErrorLogProcessStatusEnum::getValue).toArray();

    @Override
    public int[] getValues() { return VALUES;}

    public static final String[] LABELS = Arrays.stream(values()).map(InfraApiErrorLogProcessStatusEnum::getLabel).toArray(String[]::new);

    @Override
    public String[] getLabels() { return LABELS; }

}
