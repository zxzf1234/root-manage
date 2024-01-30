package cn.iocoder.yudao.service.controller.admin.system.notify;
import cn.iocoder.yudao.service.service.system.notify.NotifyMessageService;
import cn.iocoder.yudao.service.service.system.notify.NotifySendService;
import cn.iocoder.yudao.service.vo.system.notify.notifyTemplate.NotifyTemplateSendNotifyInput;
import cn.iocoder.yudao.service.vo.system.notify.notifyTemplate.NotifyTemplatePageOutput;
import cn.iocoder.yudao.service.vo.system.notify.notifyTemplate.NotifyTemplatePageInput;
import cn.iocoder.yudao.service.vo.system.notify.notifyTemplate.NotifyTemplateGetOutput;
import cn.iocoder.yudao.service.vo.system.notify.notifyTemplate.NotifyTemplateUpdateInput;
import cn.iocoder.yudao.service.vo.system.notify.notifyTemplate.NotifyTemplateCreateInput;
import org.springframework.web.bind.annotation.*;
import javax.annotation.Resource;
import org.springframework.validation.annotation.Validated;
import org.springframework.security.access.prepost.PreAuthorize;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.Operation;

import javax.validation.constraints.*;
import javax.validation.*;
import javax.servlet.http.*;
import java.util.*;
import java.io.IOException;

import cn.iocoder.yudao.framework.common.pojo.PageResult;
import cn.iocoder.yudao.framework.common.pojo.CommonResult;
import static cn.iocoder.yudao.framework.common.pojo.CommonResult.success;

import cn.iocoder.yudao.framework.excel.core.util.ExcelUtils;

import cn.iocoder.yudao.framework.operatelog.core.annotations.OperateLog;
import static cn.iocoder.yudao.framework.operatelog.core.enums.OperateTypeEnum.*;

import cn.iocoder.yudao.service.service.system.notify.NotifyTemplateService;
import cn.iocoder.yudao.service.vo.system.notify.notifyTemplate.*;

@Tag(name = "模板管理")
@RestController
@RequestMapping("/system/notify/notify-template")
@Validated
public class NotifyTemplateController {

    @Resource
    private NotifyTemplateService notifyTemplateService;

    @Resource
    private NotifySendService notifySendService;

    @PostMapping("/create")
    @Operation(summary = "创建站内信模版")
    @PreAuthorize("@ss.hasPermission('system:notify-template:create')")
    public CommonResult<Long> create(@Valid @RequestBody NotifyTemplateCreateInput inputVO) {
        return success(notifyTemplateService.create(inputVO));
    }

    @PutMapping("/update")
    @Operation(summary = "更新站内信模版")
    @PreAuthorize("@ss.hasPermission('system:notify-template:update')")
    public CommonResult<Boolean> update(@Valid @RequestBody NotifyTemplateUpdateInput inputVO) {
        return success(notifyTemplateService.update(inputVO));
    }

    @DeleteMapping("/deleted")
    @Operation(summary = "删除站内信模版")
    @PreAuthorize("@ss.hasPermission('system:notify-template:delete')")
    @Parameter(name = "id", description = "模板ID", required = true, example = "")
    public CommonResult<Boolean> deleted(@RequestParam("id") Long id) {
        return success(notifyTemplateService.deleted(id));
    }

    @GetMapping("/get")
    @Operation(summary = "获得单个站内信模版")
    @PreAuthorize("@ss.hasPermission('system:notify-template:query')")
    @Parameter(name = "id", description = "主键ID", required = true, example = "")
    public CommonResult<NotifyTemplateGetOutput> get(@RequestParam("id") Long id) {
        return success(notifyTemplateService.get(id));
    }

    @GetMapping("/page")
    @Operation(summary = "获得站内信模版分页")
    @PreAuthorize("@ss.hasPermission('system:notify-template:query')")
    public CommonResult<PageResult<NotifyTemplatePageOutput>> page(@Valid NotifyTemplatePageInput inputVO) {
        return success(notifyTemplateService.page(inputVO));
    }

    @PostMapping("/send-notify")
    @Operation(summary = "发送站内信")
    @PreAuthorize("@ss.hasPermission('system:notify-template:send-notify')")
    public CommonResult<Long> sendNotify(@Valid @RequestBody NotifyTemplateSendNotifyInput inputVO) {
        return success(notifySendService.sendSingleNotifyToAdmin(inputVO.getUserId(), inputVO.getTemplateCode(), inputVO.getTemplateParams()));
    }

}
