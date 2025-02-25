package cn.iocoder.yudao.service.vo.system.user.user;

import cn.iocoder.yudao.service.enums.common.CommonSexEnum;
import cn.iocoder.yudao.service.enums.common.CommonStatusEnum;
import cn.iocoder.yudao.service.framework.excel.core.annotations.DictFormat;
import cn.iocoder.yudao.service.framework.excel.core.convert.DictConvert;
import com.alibaba.excel.annotation.ExcelProperty;
import com.alibaba.excel.annotation.write.style.HeadStyle;
import com.alibaba.excel.enums.poi.FillPatternTypeEnum;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

/**
 * 用户 Excel 导入 VO
 */
@Data
@Accessors(chain = false) // 设置 chain = false，避免用户导入有问题
public class UserImportExcelVO {

    @ExcelProperty("用户名称")
    @HeadStyle(fillPatternType = FillPatternTypeEnum.SOLID_FOREGROUND, fillForegroundColor = 10)
    private String username;

    @ExcelProperty("用户昵称")
    @HeadStyle(fillPatternType = FillPatternTypeEnum.SOLID_FOREGROUND, fillForegroundColor = 10)
    private String nickname;

    @ExcelProperty("用户密码")
    @HeadStyle(fillPatternType = FillPatternTypeEnum.SOLID_FOREGROUND, fillForegroundColor = 10)
    private String password;

    @ExcelProperty("部门")
    private String deptName;

    @ExcelProperty("用户邮箱")
    private String email;

    @ExcelProperty("手机号码")
    private String mobile;

    @ExcelProperty("岗位")
    private String postName;

    @ExcelProperty(value = "用户性别")
    private String sexStr;

    @ExcelProperty(value = "账号状态")
    private String statusStr;

    @ExcelProperty(value = "备注")
    private String remark;

}
