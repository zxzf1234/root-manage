package com.xiyu.service.vo.infra.data.dictNo;

import com.xiyu.service.vo.infra.data.baseVO.InfraDictNoBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Schema(description = "获取单个字典编号")
@Data
public class DictNoGetOutput extends InfraDictNoBase {

    @Schema(description = "字典ID")
    private String id;
}