package cn.iocoder.yudao.service.vo.infra.data.dictData;

import cn.iocoder.yudao.service.vo.infra.data.baseVO.InfraDictDataBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Schema(description = "新增字典数据")
@Data
public class DictDataCreateInput extends InfraDictDataBase {

    @Schema(description = "字典类型", requiredMode = Schema.RequiredMode.REQUIRED, example = "system_user_sex")
    private String dictType;

}