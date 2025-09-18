package com.xiyu.service.vo.system.dept.dept;

import com.xiyu.service.vo.system.dept.baseVO.SystemDeptBase;
import com.xiyu.service.vo.system.dept.baseVO.SystemDeptLeaderBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;

import jakarta.validation.Valid;
import org.springframework.format.annotation.DateTimeFormat;
    import static com.xiyu.service.util.date.DateUtils.FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND;
    import java.time.LocalDateTime;

@Schema(description = "获得单个部门信息")
@Data
@AllArgsConstructor
public class DeptGetOutput extends SystemDeptBase {

    @Schema(description = "部门ID")
    private Long id;

    @Schema(description = "创建时间")
    @DateTimeFormat(pattern = FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND)
    private LocalDateTime createTime;

    @Schema(description = "部门负责人")
    @Valid
    private List<leader> leaders;

    @Schema(description = "部门负责人")
    @Data
    public static class leader extends SystemDeptLeaderBase {
    }
}