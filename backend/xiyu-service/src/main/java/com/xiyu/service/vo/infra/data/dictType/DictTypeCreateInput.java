package com.xiyu.service.vo.infra.data.dictType;

import com.xiyu.service.vo.infra.data.baseVO.InfraDictTypeBase;
import com.xiyu.service.vo.infra.data.baseVO.InfraDictDataBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;

import jakarta.validation.Valid;

@Schema(description = "创建字典类型")
@Data
public class DictTypeCreateInput extends InfraDictTypeBase {

    @Schema(description = "字典数据")
    private List<data> datas;

    @Schema(description = "字典数据")
    @Data
    @Valid
    public static class data extends InfraDictDataBase {
    }

}