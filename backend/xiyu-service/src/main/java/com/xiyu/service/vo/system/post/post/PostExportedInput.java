package com.xiyu.service.vo.system.post.post;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Schema(description = "导出岗位信息")
@Data
public class PostExportedInput  {

    @Schema(description = "岗位名称", example = "小博主")
    private String name;

    @Schema(description = "状态,参见 CommonStatusEnum 枚举类", example = "1")
    private Integer status;

    @Schema(description = "岗位编码", example = "xiyu")
    private String code;

}