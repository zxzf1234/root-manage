package cn.iocoder.yudao.service.framework.excel.core.vo;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder
public class ImportRespVO {
    @Schema(description = "行数")
    private Integer columnIndex;

    @Schema(description = "错误原因")
    private String errorMessage;
}
