package cn.iocoder.yudao.service.vo.infra.data.config;

import cn.iocoder.yudao.service.vo.infra.data.baseVO.InfraConfigBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;

import org.springframework.format.annotation.DateTimeFormat;
import static cn.iocoder.yudao.service.util.date.DateUtils.FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND;
import java.time.LocalDateTime;

@Schema(description = "分页查询配置")
@Data
public class ConfigPageOutput extends InfraConfigBase {

    @Schema(description = "创建时间")
    @DateTimeFormat(pattern = FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND)
    private LocalDateTime createTime;

    @Schema(description = "配置主键ID")
    private UUID id;
}