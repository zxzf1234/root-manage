package com.xiyu.service.vo.infra.codegen.interfaceModule;

import com.xiyu.service.vo.infra.codegen.baseVO.InfraInterfaceBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import java.util.UUID;

@Schema(description = "管理后台 - 接口更新 response VO")
@Data
public class InterfaceUpdateReq extends InfraInterfaceBase {
    @Schema(description = "编号", required = true, example = "1")
    private UUID id;
}
