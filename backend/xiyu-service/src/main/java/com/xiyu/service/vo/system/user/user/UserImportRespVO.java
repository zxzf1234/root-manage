package com.xiyu.service.vo.system.user.user;

import com.xiyu.service.framework.excel.core.vo.ImportRespVO;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;
import lombok.experimental.SuperBuilder;

@Schema(description = "管理后台 - 用户导入 Response VO")
@Data
@SuperBuilder
public class UserImportRespVO extends ImportRespVO {

}
