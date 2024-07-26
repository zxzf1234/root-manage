package cn.iocoder.yudao.service.enums.infra.job;

import lombok.AllArgsConstructor;
import lombok.Getter;
import java.util.Arrays;
import cn.iocoder.yudao.service.enums.common.IntArrayValuable;

/**
* 定时任务日志状态
*/
@Getter
@AllArgsConstructor
public enum InfraJobLogStatusEnum implements IntArrayValuable {

    /**
    * 运行中
    */
    RUNNING(0),
    /**
    * 成功
    */
    SUCCESS(1),
    /**
    * 失败
    */
    FAILURE(2);

    private final Integer value;

    public static final int[] ARRAYS = Arrays.stream(values()).mapToInt(InfraJobLogStatusEnum::getValue).toArray();

    @Override
    public int[] array() { return ARRAYS;}

}
