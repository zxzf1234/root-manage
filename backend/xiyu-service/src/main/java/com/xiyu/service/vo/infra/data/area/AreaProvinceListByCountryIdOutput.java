package com.xiyu.service.vo.infra.data.area;

import com.xiyu.service.vo.infra.data.baseVO.DictProvinceBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Schema(description = "根据国家ID查询省份")
@Data
@AllArgsConstructor
public class AreaProvinceListByCountryIdOutput extends DictProvinceBase {

    @Schema(description = "字典-国家主键ID")
    private Long id;
}