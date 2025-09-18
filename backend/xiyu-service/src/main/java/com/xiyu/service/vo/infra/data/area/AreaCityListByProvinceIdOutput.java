package com.xiyu.service.vo.infra.data.area;

import com.xiyu.service.vo.infra.data.baseVO.DictCityBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Schema(description = "根据省份ID查询城市")
@Data
@AllArgsConstructor
public class AreaCityListByProvinceIdOutput extends DictCityBase {

    @Schema(description = "字典-城市主键ID")
    private Long id;
}