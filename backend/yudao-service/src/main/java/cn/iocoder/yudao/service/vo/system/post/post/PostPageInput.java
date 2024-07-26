package cn.iocoder.yudao.service.vo.system.post.post;

import cn.iocoder.yudao.service.framework.web.web.core.pojo.PageParam;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Schema(description = "获得岗位分页列表")
@Data
public class PostPageInput extends PageParam {

    @Schema(description = "岗位名称", example = "小博主")
    private String name;

    @Schema(description = "岗位编码", example = "yudao")
    private String code;

    @Schema(description = "状态,参见 CommonStatusEnum 枚举类", example = "1")
    private Integer status;

}