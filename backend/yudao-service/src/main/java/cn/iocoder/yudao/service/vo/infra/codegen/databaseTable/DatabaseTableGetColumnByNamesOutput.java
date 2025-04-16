package cn.iocoder.yudao.service.vo.infra.codegen.databaseTable;

import cn.iocoder.yudao.service.vo.infra.codegen.baseVO.InfraDatabaseColumnBase;
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
@AllArgsConstructor
public class DatabaseTableGetColumnByNamesOutput extends InfraDatabaseColumnBase {

    @Schema(description = "数据库表字段主键ID")
    private UUID id;
}