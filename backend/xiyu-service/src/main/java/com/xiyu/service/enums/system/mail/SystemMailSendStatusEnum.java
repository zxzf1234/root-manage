package com.xiyu.service.enums.system.mail;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Arrays;
import com.xiyu.service.enums.common.IntArrayValuable;

/**
* 邮件发送状态
*/
@Getter
@AllArgsConstructor
public enum SystemMailSendStatusEnum implements IntArrayValuable {

    /**
    * 初始化
    */
    INIT(0, "初始化"),
    /**
    * 发送成功
    */
    SUCCESS(10, "发送成功"),
    /**
    * 发送失败
    */
    FAILURE(20, "发送失败"),
    /**
    * 不发送
    */
    IGNORE(30, "不发送");

    private final Integer value;

    private final String label;

    public static final int[] VALUES = Arrays.stream(values()).mapToInt(SystemMailSendStatusEnum::getValue).toArray();

    @Override
    public int[] getValues() { return VALUES;}

    public static final String[] LABELS = Arrays.stream(values()).map(SystemMailSendStatusEnum::getLabel).toArray(String[]::new);

    @Override
    public String[] getLabels() { return LABELS; }

}
