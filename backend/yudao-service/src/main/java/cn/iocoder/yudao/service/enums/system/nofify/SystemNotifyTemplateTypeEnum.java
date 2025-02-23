package cn.iocoder.yudao.service.enums.system.nofify;

import cn.iocoder.yudao.service.enums.system.social.SocialTypeEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Arrays;
import cn.iocoder.yudao.service.enums.common.IntArrayValuable;

/**
* 站内信模版的类型
*/
@Getter
@AllArgsConstructor
public enum SystemNotifyTemplateTypeEnum implements IntArrayValuable {

    /**
    * 通知公告
    */
    ANNOUNCEMENT(1, "通知公告"),
    /**
    * 系统消息
    */
    SYSTEM(2, "系统消息");

    private final Integer value;

    private final String label;

    public static final int[] VALUES = Arrays.stream(values()).mapToInt(SystemNotifyTemplateTypeEnum::getValue).toArray();

    @Override
    public int[] getValues() { return VALUES;}

    public static final String[] LABELS = Arrays.stream(values()).map(SystemNotifyTemplateTypeEnum::getLabel).toArray(String[]::new);

    @Override
    public String[] getLabels() { return LABELS; }

}
