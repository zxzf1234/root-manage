package com.xiyu.service.enums.system.notice;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Arrays;
import com.xiyu.service.enums.common.IntArrayValuable;

/**
* 通知类型
*/
@Getter
@AllArgsConstructor
public enum SystemNoticeTypeEnum implements IntArrayValuable {

    /**
    * 通知
    */
    NOTICE(1, "通知"),
    /**
    * 公告
    */
    ANNOUNCEMENT(2, "公告");

    private final Integer value;

    private final String label;

    public static final int[] VALUES = Arrays.stream(values()).mapToInt(SystemNoticeTypeEnum::getValue).toArray();

    @Override
    public int[] getValues() { return VALUES;}

    public static final String[] LABELS = Arrays.stream(values()).map(SystemNoticeTypeEnum::getLabel).toArray(String[]::new);

    @Override
    public String[] getLabels() { return LABELS; }

}
