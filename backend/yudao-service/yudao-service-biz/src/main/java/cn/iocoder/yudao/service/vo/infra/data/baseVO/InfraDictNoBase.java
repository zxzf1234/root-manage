package cn.iocoder.yudao.service.vo.infra.data.baseVO;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;
import javax.validation.constraints.*;
import org.hibernate.validator.constraints.Length;
import org.springframework.format.annotation.DateTimeFormat;
import static cn.iocoder.yudao.framework.common.util.date.DateUtils.FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND;
import java.time.LocalDateTime;

/**
 * 编号管理 Base VO，提供给添加、修改、详细的子 VO 使用
 * 如果子 VO 存在差异的字段，请不要添加到这里，影响 Swagger 文档生成
 */
@Data
public class InfraDictNoBase {

    @Schema(description = "编码名称")
    @Size(max = 50, message = "编码名称最大长度为50")
    private String keyName;

    @Schema(description = "前缀")
    private String prefix;

    @Schema(description = "日期格式")
    private Integer dateForm;

    @Schema(description = "日期计算方式")
    private Integer dateBase;

    @Schema(description = "最后日期")
    @DateTimeFormat(pattern = FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND)
    private LocalDateTime lastDate;

    @Schema(description = "后缀长度")
    private Integer postfixLen;

    @Schema(description = "后缀值")
    private Integer postfixVal;

    @Schema(description = "备注")
    private String remark;

}
