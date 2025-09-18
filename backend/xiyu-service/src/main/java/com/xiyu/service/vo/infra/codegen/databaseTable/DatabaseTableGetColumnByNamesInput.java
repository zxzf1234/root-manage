package com.xiyu.service.vo.infra.codegen.databaseTable;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;

@Schema(description = "根据名称获取字段信息")
@Data
public class DatabaseTableGetColumnByNamesInput  {

    @Schema(description = "字段名", example = "user_age")
    private List<String> columnNames;

    @Schema(description = "表名称", example = "infra_database")
    private String tableName;

}