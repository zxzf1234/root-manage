package com.xiyu.service.vo.infra.data.dictNo;

import com.xiyu.service.vo.infra.data.baseVO.InfraDictNoBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;

import org.springframework.format.annotation.DateTimeFormat;
import static com.xiyu.service.util.date.DateUtils.FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND;
import java.time.LocalDateTime;

@Schema(description = "字典编号查询")
@Data
public class DictNoQueryOutput extends InfraDictNoBase {

    @Schema(description = "创建时间")
    @DateTimeFormat(pattern = FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND)
    private LocalDateTime createTime;

    @Schema(description = "编号ID")
    private UUID id;
}