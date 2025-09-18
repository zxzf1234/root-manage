package com.xiyu.service.vo.infra.config;

import com.xiyu.service.enums.infra.config.InfraConfigTypeEnum;
import com.xiyu.service.framework.excel.core.annotations.DictFormat;
import com.xiyu.service.framework.excel.core.convert.DictConvert;
import com.alibaba.excel.annotation.ExcelProperty;
import lombok.Data;

import java.time.LocalDateTime;

/**
 * 参数配置 Excel 导出响应 VO
 */
@Data
public class ConfigExcelVO {

    @ExcelProperty("参数配置序号")
    private Long id;

    @ExcelProperty("参数键名")
    private String configKey;

    @ExcelProperty("参数分类")
    private String category;

    @ExcelProperty("参数名称")
    private String name;

    @ExcelProperty("参数键值")
    private String value;

    @ExcelProperty(value = "参数类型", converter = DictConvert.class)
    @DictFormat(InfraConfigTypeEnum.class)
    private Integer type;

    @ExcelProperty(value = "是否可见", converter = DictConvert.class)
    private Boolean visible;

    @ExcelProperty("备注")
    private String remark;

    @ExcelProperty("创建时间")
    private LocalDateTime createTime;

}
