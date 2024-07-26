package cn.iocoder.yudao.service.vo.system.post.post;

import cn.iocoder.yudao.service.vo.system.dept.baseVO.SystemPostBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

import javax.validation.constraints.*;

import cn.iocoder.yudao.service.framework.validation.InEnum;

@Schema(description = "修改岗位")
@Data
public class PostUpdateInput extends SystemPostBase {

    @Schema(description = "岗位ID", requiredMode = Schema.RequiredMode.REQUIRED)
    @NotNull(message = "岗位编号不能为空")
    private Long id;

}