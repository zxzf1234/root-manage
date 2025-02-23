package cn.iocoder.yudao.service.enums.common;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Arrays;
import cn.iocoder.yudao.service.enums.common.IntArrayValuable;

/**
* 用户类型
*/
@Getter
@AllArgsConstructor
public enum UserTypeEnum implements IntArrayValuable {

    /**
    * 会员
    */
    MEMBER(1, "会员"),
    /**
    * 管理员
    */
    ADMIN(2, "管理员");

    private final Integer value;

    private final String label;

    public static final int[] VALUES = Arrays.stream(values()).mapToInt(UserTypeEnum::getValue).toArray();

    @Override
    public int[] getValues() { return VALUES;}

    public static final String[] LABELS = Arrays.stream(values()).map(UserTypeEnum::getLabel).toArray(String[]::new);

    @Override
    public String[] getLabels() { return LABELS; }

}
