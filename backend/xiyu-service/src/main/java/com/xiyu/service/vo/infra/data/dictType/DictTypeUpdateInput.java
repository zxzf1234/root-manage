package com.xiyu.service.vo.infra.data.dictType;

import com.xiyu.service.vo.infra.data.baseVO.InfraDictTypeBase;
import com.xiyu.service.vo.infra.data.baseVO.InfraDictDataBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;

@Schema(description = "修改字典类型")
@Data
public class DictTypeUpdateInput extends InfraDictTypeBase {

    @Schema(description = "字典数据")
    private List<data> datas;

    @Schema(description = "字典类型编号", example = "1024")
    @NotNull(message = "字典类型编号不能为空")
    private UUID id;

    @Schema(description = "字典数据")
    @Data
    @Valid
    public static class data extends InfraDictDataBase {

        @Schema(description = "id", requiredMode = Schema.RequiredMode.REQUIRED)
        private UUID id;

        @Schema(description = "操作类型")
        private String operateType;
    }

}