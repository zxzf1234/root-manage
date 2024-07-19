package cn.iocoder.yudao.service.vo.infra.data.config;

import cn.iocoder.yudao.framework.common.pojo.PageParam;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;
import javax.validation.constraints.*;
import org.hibernate.validator.constraints.Length;
import javax.validation.Valid;
import cn.iocoder.yudao.framework.common.enums.CommonStatusEnum;
import cn.iocoder.yudao.framework.common.validation.InEnum;
import java.math.BigDecimal;
import org.springframework.format.annotation.DateTimeFormat;
import static cn.iocoder.yudao.framework.common.util.date.DateUtils.FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND;
import java.time.LocalDateTime;

@Schema(description = "分页查询配置")
@Data
public class ConfigPageInput extends PageParam {

    @Schema(description = "参数名称")
    private String name;

    @Schema(description = "参数键名")
    private String configKey;

    @Schema(description = "创建时间")
    @DateTimeFormat(pattern = FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND)
    private LocalDateTime[] createTime;

    @Schema(description = "参数类型")
    private Integer type;

}