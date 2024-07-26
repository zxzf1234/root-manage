package cn.iocoder.yudao.service.vo.infra.data.config;

import cn.iocoder.yudao.service.framework.web.web.core.pojo.PageParam;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;
import static cn.iocoder.yudao.service.util.date.DateUtils.FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND;
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