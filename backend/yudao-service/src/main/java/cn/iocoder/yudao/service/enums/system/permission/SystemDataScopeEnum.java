package cn.iocoder.yudao.service.enums.system.permission;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Arrays;
import cn.iocoder.yudao.service.enums.common.IntArrayValuable;

/**
* 数据权限类型
*/
@Getter
@AllArgsConstructor
public enum SystemDataScopeEnum implements IntArrayValuable {

    /**
    * 全部数据权限
    */
    ALL(1),
    /**
    * 指定部门数据权限
    */
    DEPT_CUSTOM(2),
    /**
    * 本部门数据权限
    */
    DEPT_ONLY(3),
    /**
    * 本部门及以下数据权限
    */
    DEPT_AND_CHILD(4),
    /**
    * 仅本人数据权限
    */
    SELF(5);

    private final Integer value;

    public static final int[] ARRAYS = Arrays.stream(values()).mapToInt(SystemDataScopeEnum::getValue).toArray();

    @Override
    public int[] array() { return ARRAYS;}

}
