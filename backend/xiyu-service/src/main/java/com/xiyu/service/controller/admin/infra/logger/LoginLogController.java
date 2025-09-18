package com.xiyu.service.controller.admin.infra.logger;

import com.xiyu.service.framework.web.web.core.pojo.CommonResult;
import com.xiyu.service.framework.web.web.core.pojo.PageResult;
import com.xiyu.service.framework.excel.core.util.ExcelUtils;
import com.xiyu.service.framework.operateLog.core.annotations.OperateLog;
import com.xiyu.service.vo.infra.logger.loginlog.LoginLogExcelVO;
import com.xiyu.service.vo.infra.logger.loginlog.LoginLogExportReqVO;
import com.xiyu.service.vo.infra.logger.loginlog.LoginLogPageReqVO;
import com.xiyu.service.vo.infra.logger.loginlog.LoginLogRespVO;
import com.xiyu.service.convert.infra.logger.LoginLogConvert;
import com.xiyu.service.model.infra.logger.SystemLoginLog;
import com.xiyu.service.service.infra.logger.LoginLogService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import java.io.IOException;
import java.util.List;

import static com.xiyu.service.framework.operateLog.core.enums.OperateTypeEnum.EXPORT;

@Tag(name = "管理后台 - 登录日志")
@RestController
@RequestMapping("/system/login-log")
@Validated
public class LoginLogController {

    @Resource
    private LoginLogService loginLogService;

    @GetMapping("/page")
    @Operation(summary = "获得登录日志分页列表")
    @PreAuthorize("@ss.hasPermission('system:login-log:query')")
    public CommonResult<PageResult<LoginLogRespVO>> getLoginLogPage(@Valid LoginLogPageReqVO reqVO) {
        return CommonResult.success(loginLogService.getLoginLogPage(reqVO));
    }

    @GetMapping("/export")
    @Operation(summary = "导出登录日志 Excel")
    @PreAuthorize("@ss.hasPermission('system:login-log:export')")
    @OperateLog(type = EXPORT)
    public void exportLoginLog(HttpServletResponse response, @Valid LoginLogExportReqVO reqVO) throws IOException {
        List<SystemLoginLog> list = loginLogService.getLoginLogList(reqVO);
        // 拼接数据
        List<LoginLogExcelVO> data = LoginLogConvert.INSTANCE.convertList(list);
        // 输出
        ExcelUtils.write(response, "登录日志.xls", "数据列表", LoginLogExcelVO.class, data);
    }

}
