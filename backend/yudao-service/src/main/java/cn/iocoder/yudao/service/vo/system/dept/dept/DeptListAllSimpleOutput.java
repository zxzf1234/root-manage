package cn.iocoder.yudao.service.vo.system.dept.dept;

import cn.iocoder.yudao.service.vo.system.dept.baseVO.SystemDeptBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;
import jakarta.validation.constraints.*;
import org.hibernate.validator.constraints.Length;
import jakarta.validation.Valid;

@Schema(description = "获取部门精简信息列表")
@Data
public class DeptListAllSimpleOutput extends SystemDeptBase {

    @Schema(description = "部门编号", requiredMode = Schema.RequiredMode.REQUIRED, example = "1024")
    private Long id;
}