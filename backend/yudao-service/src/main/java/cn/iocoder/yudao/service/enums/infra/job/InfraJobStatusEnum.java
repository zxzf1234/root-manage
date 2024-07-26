package cn.iocoder.yudao.service.enums.infra.job;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Arrays;
import cn.iocoder.yudao.service.enums.common.IntArrayValuable;

/**
* 定时任务状态
*/
@Getter
@AllArgsConstructor
public enum InfraJobStatusEnum implements IntArrayValuable {

    /**
    * 初始化中
    */
    INIT(0),
    /**
    * 正常
    */
    NORMAL(1),
    /**
    * 暂停
    */
    STOP(2);

    private final Integer value;

    public static final int[] ARRAYS = Arrays.stream(values()).mapToInt(InfraJobStatusEnum::getValue).toArray();

    @Override
    public int[] array() { return ARRAYS;}

}
