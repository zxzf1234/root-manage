package cn.iocoder.yudao.service.enums.system.permission;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Arrays;
import cn.iocoder.yudao.framework.common.core.IntArrayValuable;

/**
* 菜单类型
*/
@Getter
@AllArgsConstructor
public enum SystemMenuTypeEnum implements IntArrayValuable {

    /**
    * 目录
    */
    DIR(1),
    /**
    * 菜单
    */
    MENU(2),
    /**
    * 按钮
    */
    BUTTON(3);

    private final Integer value;

    public static final int[] ARRAYS = Arrays.stream(values()).mapToInt(SystemMenuTypeEnum::getValue).toArray();

    @Override
    public int[] array() { return ARRAYS;}

}
