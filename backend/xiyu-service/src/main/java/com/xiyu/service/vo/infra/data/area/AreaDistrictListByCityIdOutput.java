package com.xiyu.service.vo.infra.data.area;

import com.xiyu.service.vo.infra.data.baseVO.DictDistrictBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Schema(description = "根据城市ID查询区")
@Data
@AllArgsConstructor
public class AreaDistrictListByCityIdOutput extends DictDistrictBase {

    @Schema(description = "字典-区主键ID")
    private Long id;
}