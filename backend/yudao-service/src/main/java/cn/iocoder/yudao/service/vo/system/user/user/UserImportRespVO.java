package cn.iocoder.yudao.service.vo.system.user.user;

import cn.iocoder.yudao.service.framework.excel.core.vo.importRespVO;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.experimental.SuperBuilder;

import java.util.List;
import java.util.Map;

@Schema(description = "管理后台 - 用户导入 Response VO")
@Data
@SuperBuilder
public class UserImportRespVO extends importRespVO {

}
