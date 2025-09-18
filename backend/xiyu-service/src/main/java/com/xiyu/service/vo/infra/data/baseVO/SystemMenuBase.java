package com.xiyu.service.vo.infra.data.baseVO;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

import jakarta.validation.constraints.*;
import org.hibernate.validator.constraints.*;

/**
 * 系统菜单 Base VO，提供给添加、修改、详细的子 VO 使用
 * 如果子 VO 存在差异的字段，请不要添加到这里，影响 Swagger 文档生成
 */
@Data
public class SystemMenuBase {

    @Schema(description = "菜单名称")
    @Size(max = 50, message = "菜单名称长度不能超过50")
    private String name;

    @Schema(description = "权限标识")
    @Size(max = 255, message = "权限标识长度不能超过255")
    private String permission;

    @Schema(description = "菜单类型")
    @Range(max = 127, message = "菜单类型最大不能超过127")
    private Integer type;

    @Schema(description = "显示顺序")
    @Range(max = 100000000, message = "显示顺序最大不能超过100000000")
    private Integer sort;

    @Schema(description = "父菜单ID")
    @Size(max = 50, message = "父菜单ID长度不能超过50")
    private String parentId;

    @Schema(description = "路由地址")
    @Size(max = 255, message = "路由地址长度不能超过255")
    private String path;

    @Schema(description = "菜单图标")
    @Size(max = 255, message = "菜单图标长度不能超过255")
    private String icon;

    @Schema(description = "组件路径")
    @Size(max = 255, message = "组件路径长度不能超过255")
    private String component;

    @Schema(description = "组件名")
    @Size(max = 255, message = "组件名长度不能超过255")
    private String componentName;

    @Schema(description = "菜单状态")
    @Range(max = 127, message = "菜单状态最大不能超过127")
    private Integer status;

    @Schema(description = "是否可见")
    private Boolean visible;

    @Schema(description = "是否缓存")
    private Boolean keepAlive;

    @Schema(description = "是否总是显示")
    private Boolean alwaysShow;

    @Schema(description = "是否后台显示")
    @Range(max = 127, message = "是否后台显示最大不能超过127")
    private Boolean backShow;

}
