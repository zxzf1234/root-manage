package cn.iocoder.yudao.service.controller.admin.system.notice;
import cn.iocoder.yudao.service.vo.system.notice.notice.NoticeSetReadInput;
import cn.iocoder.yudao.service.vo.system.notice.notice.NoticeGetUnreadCountInput;
import cn.iocoder.yudao.service.vo.system.notice.notice.NoticePageQueryOutput;
import cn.iocoder.yudao.service.vo.system.notice.notice.NoticePageQueryInput;
import org.springframework.web.bind.annotation.*;
import jakarta.annotation.Resource;
import org.springframework.validation.annotation.Validated;
import org.springframework.security.access.prepost.PreAuthorize;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.Operation;

import jakarta.validation.constraints.*;
import jakarta.validation.*;
import jakarta.servlet.http.*;
import java.util.*;
import java.io.IOException;

import cn.iocoder.yudao.service.framework.web.web.core.pojo.PageResult;
import cn.iocoder.yudao.service.framework.web.web.core.pojo.CommonResult;
import static cn.iocoder.yudao.service.framework.web.web.core.pojo.CommonResult.success;

import cn.iocoder.yudao.service.framework.excel.core.util.ExcelUtils;

import cn.iocoder.yudao.service.framework.operateLog.core.annotations.OperateLog;
import static cn.iocoder.yudao.service.framework.operateLog.core.enums.OperateTypeEnum.*;

import cn.iocoder.yudao.service.service.system.notice.NoticeService;

@Tag(name = "通知管理")
@RestController
@RequestMapping("/system/notice/notice")
@Validated
public class NoticeController {

    @Resource
    private NoticeService noticeService;

    @GetMapping("/page-query")
    @Operation(summary = "分页查询消息通知")
    public CommonResult<PageResult<NoticePageQueryOutput>> pageQuery(@Valid NoticePageQueryInput inputVO) {
        return success(noticeService.pageQuery(inputVO));
    }

    @PostMapping("/get-unread-count")
    @Operation(summary = "获取未读通知数量")
    public CommonResult<Long> getUnreadCount(@Valid @RequestBody NoticeGetUnreadCountInput inputVO) {
        return success(noticeService.getUnreadCount(inputVO));
    }

    @PostMapping("/set-read")
    @Operation(summary = "将通知消息标记未已读")
    public CommonResult<Boolean> setRead(@Valid @RequestBody NoticeSetReadInput inputVO) {
        return success(noticeService.setRead(inputVO));
    }

    @PostMapping("/all-set-read")
    @Operation(summary = "将消息全部标记为已读")
    @Parameter(name = "notifierId", description = "通知人", example = "")
    public CommonResult<Boolean> allSetRead(@RequestParam("notifierId") Long notifierId) {
        return success(noticeService.allSetRead(notifierId));
    }

}
