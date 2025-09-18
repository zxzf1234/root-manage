package com.xiyu.service.vo.infra.data.dictNo;

import com.xiyu.service.vo.infra.data.baseVO.InfraDictNoBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;

@Schema(description = "更新字典编号")
@Data
public class DictNoUpdateInput extends InfraDictNoBase {

    @Schema(description = "字典ID")
    private UUID id;

}