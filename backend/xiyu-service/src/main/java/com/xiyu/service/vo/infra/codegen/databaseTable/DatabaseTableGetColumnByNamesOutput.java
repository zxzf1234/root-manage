package com.xiyu.service.vo.infra.codegen.databaseTable;

import com.xiyu.service.vo.infra.codegen.baseVO.InfraDatabaseColumnBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;

@Schema(description = "根据名称获取字段信息")
@Data
@AllArgsConstructor
public class DatabaseTableGetColumnByNamesOutput extends InfraDatabaseColumnBase {

    @Schema(description = "数据库表字段主键ID")
    private UUID id;
}