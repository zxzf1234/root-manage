package cn.iocoder.yudao.service.vo.infra.data.area;

import cn.iocoder.yudao.service.vo.infra.data.baseVO.DictCityBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;
import jakarta.validation.constraints.*;
import org.hibernate.validator.constraints.Length;
import jakarta.validation.Valid;
import cn.iocoder.yudao.service.enums.common.CommonStatusEnum;
import cn.iocoder.yudao.service.framework.validation.InEnum;
import java.math.BigDecimal;

@Schema(description = "根据省份ID查询城市")
@Data
@AllArgsConstructor
public class AreaCityListByProvinceIdOutput extends DictCityBase {

    @Schema(description = "字典-城市主键ID")
    private Long id;
}