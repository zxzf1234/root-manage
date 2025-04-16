package cn.iocoder.yudao.service.vo.infra.codegen.baseVO;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;
import jakarta.validation.constraints.*;
import org.hibernate.validator.constraints.*;
import jakarta.validation.constraints.NotEmpty;
import org.springframework.format.annotation.DateTimeFormat;
import static cn.iocoder.yudao.service.util.date.DateUtils.FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND;
import java.time.LocalDateTime;
import java.util.UUID;

/**
 * 数据库表字段 Base VO，提供给添加、修改、详细的子 VO 使用
 * 如果子 VO 存在差异的字段，请不要添加到这里，影响 Swagger 文档生成
 */
@Data
public class InfraDatabaseColumnBase {

    @Schema(description = "表编号", requiredMode = Schema.RequiredMode.REQUIRED, example = "2342533242")
    private UUID tableId;

    @Schema(description = "字段名", requiredMode = Schema.RequiredMode.REQUIRED, example = "user_age")
    @NotEmpty(message = "字段名不能为空")
    @Pattern(regexp = "^[a-z_0-9]+$", message = "字段名只能是小写英文和_")
    private String columnName;

    @Schema(description = "字段类型", requiredMode = Schema.RequiredMode.REQUIRED, example = "int(11)")
    @NotEmpty(message = "物理类型不能为空")
    @Pattern(regexp = "^(BIT|TINYINT|SMALLINT|MEDIUMINT|INT|BIGINT|FLOAT|DOUBLE|DECIMAL|DATE|TIME|YEAR|DATETIME|TIMESTAMP|VARCHAR|CHAR|TEXT|LONGTEXT)[0-9(),]*$", message = "物理类型不合法")
    private String dataType;

    @Schema(description = "字段描述", requiredMode = Schema.RequiredMode.REQUIRED, example = "年龄")
    @NotEmpty(message = "字段描述不能为空")
    private String columnComment;

    @Schema(description = "是否允许为空", requiredMode = Schema.RequiredMode.REQUIRED, example = "true")
    @NotNull(message = "是否允许为空不能为空")
    private Boolean nullable;

    @Schema(description = "默认值", requiredMode = Schema.RequiredMode.REQUIRED, example = "年龄")
    @NotNull(message = "默认值不能为空")
    @Pattern(regexp = "^[\\x00-\\xff]*$", message = "默认值不合法")
    private String defaultValue;

    @Schema(description = "Java 属性类型", requiredMode = Schema.RequiredMode.REQUIRED, example = "userAge")
    @NotEmpty(message = "Java 属性类型不能为空")
    private String javaType;

    @Schema(description = "字典类型", example = "sys_gender")
    private String dictType;

    @Schema(description = "数据示例", example = "1024")
    private String example;

    @Schema(description = "前端必传", requiredMode = Schema.RequiredMode.REQUIRED, example = "true")
    @NotNull(message = "是否允许前端必传不能为空")
    private Boolean required;

    @Schema(description = "关联表", requiredMode = Schema.RequiredMode.REQUIRED, example = "system_user")
    @NotNull(message = "关联表不能为空")
    private String relatedTable;

    @Schema(description = "排序", requiredMode = Schema.RequiredMode.REQUIRED, example = "1")
    @NotNull(message = "排序不能为空")
    private Integer sort;

    @Schema(description = "关联表类型", requiredMode = Schema.RequiredMode.REQUIRED, example = "1")
    private Integer relatedTableType;

}
