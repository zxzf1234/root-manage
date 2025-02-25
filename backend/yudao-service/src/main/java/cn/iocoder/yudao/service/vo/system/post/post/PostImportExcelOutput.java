package cn.iocoder.yudao.service.vo.system.post.post;

import cn.iocoder.yudao.service.framework.excel.core.vo.ImportRespVO;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;
import jakarta.validation.constraints.*;
import jakarta.validation.constraints.NotBlank;
import org.hibernate.validator.constraints.Length;
import jakarta.validation.Valid;
import cn.iocoder.yudao.service.enums.common.CommonStatusEnum;
import cn.iocoder.yudao.service.framework.validation.InEnum;
import java.math.BigDecimal;
import lombok.experimental.SuperBuilder;

@Schema(description = "岗位导入")
@Data
@SuperBuilder
public class PostImportExcelOutput extends ImportRespVO {
}