package cn.iocoder.yudao.service.vo.infra.data.dictType;

import cn.iocoder.yudao.service.vo.infra.data.baseVO.InfraDictTypeBase;
import cn.iocoder.yudao.service.vo.infra.data.baseVO.InfraDictDataBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;
import javax.validation.constraints.*;
import org.hibernate.validator.constraints.Length;
import javax.validation.Valid;

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
    }

}