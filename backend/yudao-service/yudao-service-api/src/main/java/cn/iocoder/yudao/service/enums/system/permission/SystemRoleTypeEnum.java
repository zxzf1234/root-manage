package cn.iocoder.yudao.service.enums.system.permission;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Arrays;
import cn.iocoder.yudao.framework.common.core.IntArrayValuable;

/**
* 角色类型
*/
@Getter
@AllArgsConstructor
public enum SystemRoleTypeEnum implements IntArrayValuable {

    /**
    * 内置
    */
    SYSTEM(1),
    /**
    * 自定义
    */
    CUSTOM(2);

    private final Integer value;

    public static final int[] ARRAYS = Arrays.stream(values()).mapToInt(SystemRoleTypeEnum::getValue).toArray();

    @Override
    public int[] array() { return ARRAYS;}
}
