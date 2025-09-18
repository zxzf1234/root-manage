package com.xiyu.service.vo.infra.data.dictType;

import com.xiyu.service.enums.common.CommonStatusEnum;
import com.xiyu.service.framework.excel.core.annotations.DictFormat;
import com.xiyu.service.framework.excel.core.convert.DictConvert;
import com.alibaba.excel.annotation.ExcelProperty;
import lombok.Data;

/**
 * 字典类型 Excel 导出响应 VO
 */
@Data
public class DictTypeExcelOutput {

    @ExcelProperty("字典名称")
    private String name;

    @ExcelProperty("字典类型")
    private String type;

    @ExcelProperty(value = "状态", converter = DictConvert.class)
    @DictFormat(CommonStatusEnum.class)
    private Integer status;
}
