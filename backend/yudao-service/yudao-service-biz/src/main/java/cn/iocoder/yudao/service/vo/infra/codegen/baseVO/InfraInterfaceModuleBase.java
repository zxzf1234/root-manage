package cn.iocoder.yudao.service.vo.infra.codegen.baseVO;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import java.util.*;
import javax.validation.constraints.*;
import javax.validation.constraints.NotEmpty;

import org.hibernate.validator.constraints.*;

/**
 * 接口模块 Base VO，提供给添加、修改、详细的子 VO 使用
 * 如果子 VO 存在差异的字段，请不要添加到这里，影响 Swagger 文档生成
 */
@Data
public class InfraInterfaceModuleBase {

    @Schema(description = "模块名称", example = "user")
    @NotEmpty(message = "模块名称不能为空")
    @Pattern(regexp = "^[A-Za-z0-9]+$", message = "模块名称只能是英文和数字")
    private String name;

    @Schema(description = "模块描述", example = "用户")
    @NotEmpty(message = "模块描述不能为空")
    private String comment;

    @Schema(description = "父ID", example = "3242")
    private String parentId;

    @Schema(description = "模块类型", example = "0 分组 1 模块")
    private Integer type;

    @Schema(description = "排序")
    @Range(max = 100000000, message = "排序最大不能超过100000000")
    private Integer sort;

}
