package com.xiyu.service.enums.system.permission;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Arrays;
import com.xiyu.service.enums.common.IntArrayValuable;

/**
* 数据权限类型
*/
@Getter
@AllArgsConstructor
public enum SystemDataScopeEnum implements IntArrayValuable {

    /**
    * 全部数据权限
    */
    ALL(1, "全部数据权限"),
    /**
    * 指定部门数据权限
    */
    DEPT_CUSTOM(2, "指定部门数据权限"),
    /**
    * 本部门数据权限
    */
    DEPT_ONLY(3, "本部门数据权限"),
    /**
    * 本部门及以下数据权限
    */
    DEPT_AND_CHILD(4, "本部门及以下数据权限"),
    /**
    * 仅本人数据权限
    */
    SELF(5, "仅本人数据权限");

    private final Integer value;

    private final String label;

    public static final int[] VALUES = Arrays.stream(values()).mapToInt(SystemDataScopeEnum::getValue).toArray();

    @Override
    public int[] getValues() { return VALUES;}

    public static final String[] LABELS = Arrays.stream(values()).map(SystemDataScopeEnum::getLabel).toArray(String[]::new);

    @Override
    public String[] getLabels() { return LABELS; }

}
