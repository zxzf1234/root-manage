package com.xiyu.service.controller.admin.infra.logger;

import com.xiyu.service.framework.web.web.core.pojo.CommonResult;
import com.xiyu.service.framework.web.web.core.pojo.PageResult;
import com.xiyu.service.framework.excel.core.util.ExcelUtils;
import com.xiyu.service.framework.operateLog.core.annotations.OperateLog;
import com.xiyu.service.vo.infra.logger.operatelog.OperateLogExcelVO;
import com.xiyu.service.vo.infra.logger.operatelog.OperateLogExportReqVO;
import com.xiyu.service.vo.infra.logger.operatelog.OperateLogPageReqVO;
import com.xiyu.service.vo.infra.logger.operatelog.OperateLogRespVO;
import com.xiyu.service.convert.infra.logger.OperateLogConvert;
import com.xiyu.service.model.infra.logger.SystemOperateLog;
import com.xiyu.service.service.infra.logger.OperateLogService;
import com.xiyu.service.service.system.user.UserService;
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

import static com.xiyu.service.framework.web.web.core.pojo.CommonResult.success;
import static com.xiyu.service.framework.operateLog.core.enums.OperateTypeEnum.EXPORT;

@Tag(name = "管理后台 - 操作日志")
@RestController
@RequestMapping("/system/operate-log")
@Validated
public class OperateLogController {

    @Resource
    private OperateLogService operateLogService;
    @Resource
    private UserService userService;

    @GetMapping("/page")
    @Operation(summary = "查看操作日志分页列表")
    @PreAuthorize("@ss.hasPermission('system:operate-log:query')")
    public CommonResult<PageResult<OperateLogRespVO>> pageOperateLog(@Valid OperateLogPageReqVO reqVO) {
        return success(operateLogService.getOperateLogPage(reqVO));

        /*// 获得拼接需要的数据
        Collection<Long> userIds = CollectionUtils.convertList(pageResult.getList(), OperateLogDO::getUserId);
        Map<Long, SystemUsers> userMap = userService.getUserMap(userIds);
        // 拼接数据
        List<OperateLogRespVO> list = new ArrayList<>(pageResult.getList().size());
        pageResult.getList().forEach(operateLog -> {
            OperateLogRespVO respVO = OperateLogConvert.INSTANCE.convert(operateLog);
            list.add(respVO);
            // 拼接用户信息
            MapUtils.findAndThen(userMap, operateLog.getUserId(), user -> respVO.setUserNickname(user.nickname()));
        });
        return success(new PageResult<>(list, pageResult.getTotal()));*/
    }

    @Operation(summary = "导出操作日志")
    @GetMapping("/export")
    @PreAuthorize("@ss.hasPermission('system:operate-log:export')")
    @OperateLog(type = EXPORT)
    public void exportOperateLog(HttpServletResponse response, @Valid OperateLogExportReqVO reqVO) throws IOException {
        List<SystemOperateLog> list = operateLogService.getOperateLogList(reqVO);

      /*  // 获得拼接需要的数据
        Collection<Long> userIds = CollectionUtils.convertList(list, OperateLogDO::getUserId);
        Map<Long, SystemUsers> userMap = userService.getUserMap(userIds);*/
        // 拼接数据
        List<OperateLogExcelVO> excelDataList = OperateLogConvert.INSTANCE.convertList(list);
        // 输出
        ExcelUtils.write(response, "操作日志.xls", "数据列表", OperateLogExcelVO.class, excelDataList);
    }

}
