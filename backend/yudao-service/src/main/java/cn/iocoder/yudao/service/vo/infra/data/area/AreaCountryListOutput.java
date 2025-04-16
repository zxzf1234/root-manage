package cn.iocoder.yudao.service.vo.infra.data.area;

import cn.iocoder.yudao.service.vo.infra.data.baseVO.DictCountryBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;
import jakarta.validation.constraints.*;
import org.hibernate.validator.constraints.Length;
import jakarta.validation.Valid;
import cn.iocoder.yudao.service.enums.common.CommonStatusEnum;
import cn.iocoder.yudao.service.framework.validation.InEnum;
import java.math.BigDecimal;

@Schema(description = "查询国家")
@Data
@AllArgsConstructor
public class AreaCountryListOutput extends DictCountryBase {

    @Schema(description = "字典-国家主键ID")
    private Long id;
}