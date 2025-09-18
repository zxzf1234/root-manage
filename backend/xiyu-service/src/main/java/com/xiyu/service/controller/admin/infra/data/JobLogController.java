package com.xiyu.service.controller.admin.infra.data;

import com.xiyu.service.framework.web.web.core.pojo.CommonResult;
import com.xiyu.service.framework.web.web.core.pojo.PageResult;
import com.xiyu.service.framework.excel.core.util.ExcelUtils;
import com.xiyu.service.framework.operateLog.core.annotations.OperateLog;
import com.xiyu.service.vo.infra.data.job.log.JobLogExcelVO;
import com.xiyu.service.vo.infra.data.job.log.JobLogExportReqVO;
import com.xiyu.service.vo.infra.data.job.log.JobLogPageReqVO;
import com.xiyu.service.vo.infra.data.job.log.JobLogRespVO;
import com.xiyu.service.convert.infra.data.JobLogConvert;
import com.xiyu.service.model.infra.job.InfraJobLog;
import com.xiyu.service.service.infra.data.JobLogService;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import java.io.IOException;
import java.util.Collection;
import java.util.List;

import static com.xiyu.service.framework.web.web.core.pojo.CommonResult.success;
import static com.xiyu.service.framework.operateLog.core.enums.OperateTypeEnum.EXPORT;

@Tag(name = "管理后台 - 定时任务日志")
@RestController
@RequestMapping("/infra/data/job-log")
@Validated
public class JobLogController {

    @Resource
    private JobLogService jobLogService;

    @GetMapping("/get")
    @Operation(summary = "获得定时任务日志")
    @Parameter(name = "id", description = "编号", required = true, example = "1024")
    @PreAuthorize("@ss.hasPermission('infra:data:job:query')")
    public CommonResult<JobLogRespVO> getJobLog(@RequestParam("id") Long id) {
        InfraJobLog jobLog = jobLogService.getJobLog(id);
        return success(JobLogConvert.INSTANCE.convert(jobLog));
    }

    @GetMapping("/list")
    @Operation(summary = "获得定时任务日志列表")
    @Parameter(name = "ids", description = "编号列表", required = true, example = "1024,2048")
    @PreAuthorize("@ss.hasPermission('infra:data:job:query')")
    public CommonResult<List<JobLogRespVO>> getJobLogList(@RequestParam("ids") Collection<Long> ids) {
        List<InfraJobLog> list = jobLogService.getJobLogList(ids);
        return success(JobLogConvert.INSTANCE.convertList(list));
    }

    @GetMapping("/page")
    @Operation(summary = "获得定时任务日志分页")
    @PreAuthorize("@ss.hasPermission('infra:data:job:query')")
    public CommonResult<PageResult<JobLogRespVO>> getJobLogPage(@Valid JobLogPageReqVO pageVO) {
        PageResult<InfraJobLog> pageResult = jobLogService.getJobLogPage(pageVO);
        return success(JobLogConvert.INSTANCE.convertPage(pageResult));
    }

    @GetMapping("/export-excel")
    @Operation(summary = "导出定时任务日志 Excel")
    @PreAuthorize("@ss.hasPermission('infra:data:job:export')")
    @OperateLog(type = EXPORT)
    public void exportJobLogExcel(@Valid JobLogExportReqVO exportReqVO,
                                  HttpServletResponse response) throws IOException {
        List<InfraJobLog> list = jobLogService.getJobLogList(exportReqVO);
        // 导出 Excel
        List<JobLogExcelVO> datas = JobLogConvert.INSTANCE.convertList02(list);
        ExcelUtils.write(response, "任务日志.xls", "数据", JobLogExcelVO.class, datas);
    }

}
