package com.xiyu.service.vo.infra.data.dictType;

import com.xiyu.service.vo.infra.data.baseVO.InfraDictTypeBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;

@Schema(description = "获得全部字典类型列表")
@Data
public class DictTypeListAllSimpleOutput extends InfraDictTypeBase {

    @Schema(description = "字典类型编号", requiredMode = Schema.RequiredMode.REQUIRED, example = "1024")
    private UUID id;
}