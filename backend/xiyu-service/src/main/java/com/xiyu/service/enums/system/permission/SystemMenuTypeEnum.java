package com.xiyu.service.enums.system.permission;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Arrays;
import com.xiyu.service.enums.common.IntArrayValuable;

/**
* 菜单类型
*/
@Getter
@AllArgsConstructor
public enum SystemMenuTypeEnum implements IntArrayValuable {

    /**
    * 目录
    */
    DIR(1, "目录"),
    /**
    * 菜单
    */
    MENU(2, "菜单"),
    /**
    * 按钮
    */
    BUTTON(3, "按钮");

    private final Integer value;

    private final String label;

    public static final int[] VALUES = Arrays.stream(values()).mapToInt(SystemMenuTypeEnum::getValue).toArray();

    @Override
    public int[] getValues() { return VALUES;}

    public static final String[] LABELS = Arrays.stream(values()).map(SystemMenuTypeEnum::getLabel).toArray(String[]::new);

    @Override
    public String[] getLabels() { return LABELS; }

}
