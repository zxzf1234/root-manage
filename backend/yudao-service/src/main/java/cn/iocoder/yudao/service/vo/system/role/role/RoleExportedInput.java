package cn.iocoder.yudao.service.vo.system.role.role;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;
import static cn.iocoder.yudao.service.util.date.DateUtils.FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND;
import java.time.LocalDateTime;

@Schema(description = "导出角色信息")
@Data
public class RoleExportedInput  {

    @Schema(description = "创建时间")
    @DateTimeFormat(pattern = FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND)
    private LocalDateTime[] createTime;

    @Schema(description = "主键ID")
    private Long id;

    @Schema(description = "角色权限字符串")
    private String code;

    @Schema(description = "角色状态（0正常 1停用）")
    private Integer status;

}