package cn.iocoder.yudao.service.vo.infra.data.dictData;

import cn.iocoder.yudao.service.vo.infra.data.baseVO.InfraDictDataBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Schema(description = "获得全部字典数据列表")
@Data
public class DictDataListAllSimpleOutput extends InfraDictDataBase {

    @Schema(description = "字典类型", requiredMode = Schema.RequiredMode.REQUIRED, example = "用户性别")
    private String dictType;
}