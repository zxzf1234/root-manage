package cn.iocoder.yudao.service.vo.system.post.post;

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
import com.alibaba.excel.annotation.ExcelProperty;
import com.alibaba.excel.annotation.write.style.HeadStyle;
import com.alibaba.excel.enums.poi.FillPatternTypeEnum;
import lombok.experimental.Accessors;

@Schema(description = "岗位导入")
@Data
@Accessors(chain = false) // 设置 chain = false，避免用户导入有问题
public class PostImportExcelInput  {

    @ExcelProperty("岗位名称")
    @HeadStyle(fillPatternType = FillPatternTypeEnum.SOLID_FOREGROUND, fillForegroundColor = 10)
    private String name;

    @ExcelProperty("显示顺序")
    @HeadStyle(fillPatternType = FillPatternTypeEnum.SOLID_FOREGROUND, fillForegroundColor = 10)
    private Integer sort;

    @ExcelProperty("状态")
    private String statusStr;

    @ExcelProperty("备注")
    private String remark;

}