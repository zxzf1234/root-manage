package com.xiyu.service.vo.system.post.post;

import com.xiyu.service.framework.excel.core.vo.ImportRespVO;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Schema(description = "岗位导入")
@Data
@SuperBuilder
public class PostImportExcelOutput extends ImportRespVO {
}