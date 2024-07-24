package cn.iocoder.yudao.service.enums.common;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Arrays;
import cn.iocoder.yudao.framework.common.core.IntArrayValuable;

/**
* 用户类型
*/
@Getter
@AllArgsConstructor
public enum UserTypeEnum implements IntArrayValuable {

    /**
    * 会员
    */
    MENBER(1),
    /**
    * 管理员
    */
    ADMIN(2);

    private final Integer value;

    public static final int[] ARRAYS = Arrays.stream(values()).mapToInt(UserTypeEnum::getValue).toArray();

    @Override
    public int[] array() { return ARRAYS;}

}
