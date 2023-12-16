package cn.iocoder.yudao.service.vo.system.notify.notifyMessage;

import cn.iocoder.yudao.framework.common.pojo.PageParam;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;
import javax.validation.constraints.*;
import org.hibernate.validator.constraints.Length;
import javax.validation.Valid;
import cn.iocoder.yudao.framework.common.enums.CommonStatusEnum;
import cn.iocoder.yudao.framework.common.validation.InEnum;
import org.springframework.format.annotation.DateTimeFormat;
import static cn.iocoder.yudao.framework.common.util.date.DateUtils.FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND;
import java.time.LocalDateTime;

@Schema(description = "获得站内信分页")
@Data
public class NotifyMessagePageInput extends PageParam {

    @Schema(description = "模板编码", example = "test_01")
    private String templateCode;

    @Schema(description = "用户类型", example = "1")
    private Integer userType;

    @Schema(description = "模版类型", example = "2")
    private Integer templateType;

    @Schema(description = "创建时间")
    @DateTimeFormat(pattern = FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND)
    private LocalDateTime[] createTime;

    @Schema(description = "用户id", example = "25025")
    private Long userId;

}