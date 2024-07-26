package cn.iocoder.yudao.service.vo.system.post.post;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import cn.iocoder.yudao.service.framework.validation.InEnum;

@Schema(description = "获取岗位精简信息列表")
@Data
public class PostListAllSimpleOutput  {

    @Schema(description = "岗位名称", example = "小博主")
    private String name;

    @Schema(description = "主键ID")
    private Long id;
}