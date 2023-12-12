package cn.iocoder.yudao.service.vo.system.post.post;

import cn.iocoder.yudao.service.vo.system.dept.baseVO.SystemPostBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;
import javax.validation.constraints.*;
import org.hibernate.validator.constraints.Length;
import javax.validation.Valid;
import cn.iocoder.yudao.framework.common.enums.CommonStatusEnum;
import cn.iocoder.yudao.framework.common.validation.InEnum;

@Schema(description = "修改岗位")
@Data
public class PostUpdateInput extends SystemPostBase {

    @Schema(description = "岗位ID", requiredMode = Schema.RequiredMode.REQUIRED)
    @NotNull(message = "岗位编号不能为空")
    private Long id;

}