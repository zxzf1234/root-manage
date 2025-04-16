package cn.iocoder.yudao.service.vo.infra.codegen.databaseTable;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;
import jakarta.validation.constraints.*;
import jakarta.validation.constraints.NotBlank;
import org.hibernate.validator.constraints.Length;
import jakarta.validation.Valid;
import cn.iocoder.yudao.service.enums.common.CommonStatusEnum;
import cn.iocoder.yudao.service.framework.validation.InEnum;
import java.math.BigDecimal;

@Schema(description = "根据名称获取字段信息")
@Data
public class DatabaseTableGetColumnByNamesInput  {

    @Schema(description = "字段名", example = "user_age")
    private List<String> columnNames;

    @Schema(description = "表名称", example = "infra_database")
    private String tableName;

}