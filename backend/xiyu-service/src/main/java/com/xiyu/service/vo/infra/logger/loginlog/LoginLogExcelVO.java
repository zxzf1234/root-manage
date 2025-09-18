package com.xiyu.service.vo.infra.logger.loginlog;

import com.xiyu.service.enums.system.login.SystemLoginResultEnum;
import com.xiyu.service.enums.system.login.SystemLoginTypeEnum;
import com.xiyu.service.framework.excel.core.annotations.DictFormat;
import com.xiyu.service.framework.excel.core.convert.DictConvert;
import com.alibaba.excel.annotation.ExcelProperty;
import lombok.Data;

import java.time.LocalDateTime;

/**
 * 登录日志 Excel 导出响应 VO
 */
@Data
public class LoginLogExcelVO {

    @ExcelProperty("日志主键")
    private Long id;

    @ExcelProperty("用户账号")
    private String username;

    @ExcelProperty(value = "日志类型", converter = DictConvert.class)
    @DictFormat(SystemLoginTypeEnum.class)
    private Integer logType;

    @ExcelProperty(value = "登录结果", converter = DictConvert.class)
    @DictFormat(SystemLoginResultEnum.class)
    private Integer result;

    @ExcelProperty("登录 IP")
    private String userIp;

    @ExcelProperty("浏览器 UA")
    private String userAgent;

    @ExcelProperty("登录时间")
    private LocalDateTime createTime;

}
