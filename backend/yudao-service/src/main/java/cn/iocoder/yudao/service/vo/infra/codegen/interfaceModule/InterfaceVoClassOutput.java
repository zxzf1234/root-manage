package cn.iocoder.yudao.service.vo.infra.codegen.interfaceModule;

import cn.iocoder.yudao.service.vo.infra.codegen.baseVO.InfraInterfaceVoClassBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import java.util.UUID;

@Schema(description = "接口VOClass VO")
@Data
public class InterfaceVoClassOutput extends InfraInterfaceVoClassBase {
    @Schema(description = "编号", required = true, example = "1")
    private UUID id;
}
