package cn.iocoder.yudao.service.vo.system.post.post;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;
import javax.validation.constraints.*;
import org.hibernate.validator.constraints.Length;
import javax.validation.Valid;
import cn.iocoder.yudao.framework.common.enums.CommonStatusEnum;
import cn.iocoder.yudao.framework.common.validation.InEnum;

@Schema(description = "获取岗位精简信息列表")
@Data
public class PostListAllSimpleOutput  {

    @Schema(description = "岗位名称", example = "小博主")
    private String name;

    @Schema(description = "主键ID")
    private Long id;
}