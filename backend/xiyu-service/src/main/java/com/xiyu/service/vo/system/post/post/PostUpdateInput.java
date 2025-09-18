package com.xiyu.service.vo.system.post.post;

import com.xiyu.service.vo.system.dept.baseVO.SystemPostBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

import jakarta.validation.constraints.*;

@Schema(description = "修改岗位")
@Data
public class PostUpdateInput extends SystemPostBase {

    @Schema(description = "岗位ID", requiredMode = Schema.RequiredMode.REQUIRED)
    @NotNull(message = "岗位编号不能为空")
    private Long id;

}