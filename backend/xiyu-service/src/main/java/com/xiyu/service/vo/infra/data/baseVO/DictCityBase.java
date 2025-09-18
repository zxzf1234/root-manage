package com.xiyu.service.vo.infra.data.baseVO;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import jakarta.validation.constraints.*;

/**
 * 字典-城市 Base VO，提供给添加、修改、详细的子 VO 使用
 * 如果子 VO 存在差异的字段，请不要添加到这里，影响 Swagger 文档生成
 */
@Data
public class DictCityBase {

    @Schema(description = "省ID")
    private Long provinceId;

    @Schema(description = "市名称")
    @Size(max = 50, message = "市名称长度不能超过50")
    private String name;

    @Schema(description = "拼音")
    @Size(max = 50, message = "拼音长度不能超过50")
    private String pinyin;

    @Schema(description = "市代码")
    @Size(max = 50, message = "市代码长度不能超过50")
    private String cityCode;

}
