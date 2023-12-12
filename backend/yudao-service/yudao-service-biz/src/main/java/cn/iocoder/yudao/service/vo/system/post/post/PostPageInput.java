package cn.iocoder.yudao.service.vo.system.post.post;

import cn.iocoder.yudao.framework.common.pojo.PageParam;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;
import javax.validation.constraints.*;
import org.hibernate.validator.constraints.Length;
import javax.validation.Valid;
import cn.iocoder.yudao.framework.common.enums.CommonStatusEnum;
import cn.iocoder.yudao.framework.common.validation.InEnum;

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