package com.xiyu.service.vo.system.dept.dept;

import com.xiyu.service.vo.system.dept.baseVO.SystemDeptBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;
import jakarta.validation.constraints.*;

@Schema(description = "更新部门")
@Data
public class DeptUpdateInput extends SystemDeptBase {

    @Schema(description = "部门编号", requiredMode = Schema.RequiredMode.REQUIRED, example = "1024")
    @NotNull(message = "部门编号不能为空")
    private Long id;

    @Schema(description = "部门负责人")
    private List<Long> leaderUserIds;

}