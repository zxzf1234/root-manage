package com.xiyu.service.vo.system.role.role;

import com.xiyu.service.vo.system.role.baseVO.SystemRoleBase;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;
import static com.xiyu.service.util.date.DateUtils.FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND;
import java.time.LocalDateTime;

@Schema(description = "获取角色信息-分页")
@Data
public class RolePageOutput extends SystemRoleBase {

    @Schema(description = "创建时间")
    @DateTimeFormat(pattern = FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND)
    private LocalDateTime createTime;

    @Schema(description = "主键ID")
    private Long id;
}