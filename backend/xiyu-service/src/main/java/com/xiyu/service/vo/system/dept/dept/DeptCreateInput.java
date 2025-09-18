package com.xiyu.service.vo.system.dept.dept;

import com.xiyu.service.vo.system.dept.baseVO.SystemDeptBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;

@Schema(description = "创建部门")
@Data
public class DeptCreateInput extends SystemDeptBase {

    @Schema(description = "部门负责人")
    private List<Long> leaderUserIds;

}