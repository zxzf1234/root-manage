package cn.iocoder.yudao.service.vo.system.user.user;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.util.List;
import java.util.Map;

@Schema(description = "管理后台 - 用户导入 Response VO")
@Data
@AllArgsConstructor
public class UserImportRespVO {

    @Schema(description = "行数")
    private Integer columnIndex;

    @Schema(description = "错误原因")
    private String errorMessage;

}
