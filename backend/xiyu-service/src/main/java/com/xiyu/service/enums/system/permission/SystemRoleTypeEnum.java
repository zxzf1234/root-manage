package com.xiyu.service.enums.system.permission;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Arrays;
import com.xiyu.service.enums.common.IntArrayValuable;

/**
* 角色类型
*/
@Getter
@AllArgsConstructor
public enum SystemRoleTypeEnum implements IntArrayValuable {

    /**
    * 内置
    */
    SYSTEM(1, "内置"),
    /**
    * 自定义
    */
    CUSTOM(2, "自定义");

    private final Integer value;

    private final String label;

    public static final int[] VALUES = Arrays.stream(values()).mapToInt(SystemRoleTypeEnum::getValue).toArray();

    @Override
    public int[] getValues() { return VALUES;}

    public static final String[] LABELS = Arrays.stream(values()).map(SystemRoleTypeEnum::getLabel).toArray(String[]::new);

    @Override
    public String[] getLabels() { return LABELS; }

}
