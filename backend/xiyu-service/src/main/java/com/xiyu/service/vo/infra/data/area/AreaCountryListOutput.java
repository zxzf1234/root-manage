package com.xiyu.service.vo.infra.data.area;

import com.xiyu.service.vo.infra.data.baseVO.DictCountryBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Schema(description = "查询国家")
@Data
@AllArgsConstructor
public class AreaCountryListOutput extends DictCountryBase {

    @Schema(description = "字典-国家主键ID")
    private Long id;
}