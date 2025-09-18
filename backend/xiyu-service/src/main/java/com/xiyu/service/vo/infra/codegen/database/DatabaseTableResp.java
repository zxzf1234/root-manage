package com.xiyu.service.vo.infra.codegen.database;

import com.xiyu.service.vo.infra.codegen.baseVO.InfraDatabaseTableBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.UUID;

@Schema(description = "管理后台 - 数据库的表定义 Response VO")
@Data
public class DatabaseTableResp extends InfraDatabaseTableBase {

    @Schema(description = "表id", required = true, example = "1")
    private UUID id;

    @Schema(description = "创建时间", required = true, example = "时间戳格式")
    private LocalDateTime createTime;

}
