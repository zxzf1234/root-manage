package com.xiyu.service.vo.system.dept.baseVO;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

/**
 * 部门负责人 Base VO，提供给添加、修改、详细的子 VO 使用
 * 如果子 VO 存在差异的字段，请不要添加到这里，影响 Swagger 文档生成
 */
@Data
public class SystemDeptLeaderBase {

    @Schema(description = "部门ID")
    private Long deptId;

    @Schema(description = "负责人ID")
    private Long leaderId;

}
