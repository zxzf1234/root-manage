package cn.iocoder.yudao.service.controller.admin.system.notify;
import cn.iocoder.yudao.service.vo.system.notify.notifyMessage.NotifyMessageGetUnreadListOutput;
import cn.iocoder.yudao.service.vo.system.notify.notifyMessage.NotifyMessageMyPageOutput;
import cn.iocoder.yudao.service.vo.system.notify.notifyMessage.NotifyMessageMyPageInput;
import cn.iocoder.yudao.service.vo.system.notify.notifyMessage.NotifyMessagePageOutput;
import cn.iocoder.yudao.service.vo.system.notify.notifyMessage.NotifyMessagePageInput;
import cn.iocoder.yudao.service.vo.system.notify.notifyMessage.NotifyMessageGetOutput;
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

import cn.iocoder.yudao.service.service.system.notify.NotifyMessageService;
import cn.iocoder.yudao.service.vo.system.notify.notifyMessage.*;

@Tag(name = "消息记录")
@RestController
@RequestMapping("/system/notify/notify-message")
@Validated
public class NotifyMessageController {

    @Resource
    private NotifyMessageService notifyMessageService;

    @GetMapping("/get")
    @Operation(summary = "获得单个站内信消息")
    @PreAuthorize("@ss.hasPermission('system:notify-message:query')")
    @Parameter(name = "id", description = "站内信消息ID", example = "")
    public CommonResult<NotifyMessageGetOutput> get(@RequestParam("id") Long id) {
        return success(notifyMessageService.get(id));
    }

    @GetMapping("/page")
    @Operation(summary = "获得站内信分页")
    @PreAuthorize("@ss.hasPermission('system:notify-message:query')")
    public CommonResult<PageResult<NotifyMessagePageOutput>> page(@Valid NotifyMessagePageInput inputVO) {
        return success(notifyMessageService.page(inputVO));
    }

    @GetMapping("/my-page")
    @Operation(summary = "获得我的站内信分页")
    public CommonResult<PageResult<NotifyMessageMyPageOutput>> myPage(@Valid NotifyMessageMyPageInput inputVO) {
        return success(notifyMessageService.myPage(inputVO));
    }

    @PutMapping("/update-read")
    @Operation(summary = "标记站内信为已读")
    @Parameter(name = "ids", description = "站内信信息ID列表", required = true, example = "")
    public CommonResult<Boolean> updateRead(@RequestParam("ids") List<Long> ids) {
        return success(notifyMessageService.updateRead(ids));
    }

    @PutMapping("/update-all-read")
    @Operation(summary = "标记所有站内信为已读")
    public CommonResult<Boolean> updateAllRead() {
        return success(notifyMessageService.updateAllRead());
    }

    @GetMapping("/get-unread-list")
    @Operation(summary = "获取当前用户的最新站内信列表，默认 10 条")
    @Parameter(name = "size", description = "条数", example = "")
    public CommonResult<List<NotifyMessageGetUnreadListOutput>> getUnreadList(@RequestParam("size") Integer size) {
        return success(notifyMessageService.getUnreadList(size));
    }

    @GetMapping("/get-unread-count")
    @Operation(summary = "获得当前用户的未读站内信数量")
    public CommonResult<Long> getUnreadCount() {
        return success(notifyMessageService.getUnreadCount());
    }

}
