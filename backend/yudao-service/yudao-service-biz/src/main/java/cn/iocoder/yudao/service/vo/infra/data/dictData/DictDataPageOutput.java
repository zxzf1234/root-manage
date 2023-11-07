package cn.iocoder.yudao.service.vo.infra.data.dictData;

import cn.iocoder.yudao.service.vo.infra.data.baseVO.InfraDictDataBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;
import java.time.LocalDateTime;

@Schema(description = "获得字典类型的分页列表")
@Data
public class DictDataPageOutput extends InfraDictDataBase {

    @Schema(description = "创建时间", requiredMode = Schema.RequiredMode.REQUIRED, example = "时间戳格式")
    private LocalDateTime createTime;

    @Schema(description = "字典数据编号", requiredMode = Schema.RequiredMode.REQUIRED, example = "234332")
    private UUID id;
}