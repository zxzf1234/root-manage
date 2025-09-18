package com.xiyu.service.controller.admin.system.notice;
import com.xiyu.service.vo.system.notice.notice.NoticeSetReadInput;
import com.xiyu.service.vo.system.notice.notice.NoticeGetUnreadInfoOutput;
import com.xiyu.service.vo.system.notice.notice.NoticeGetUnreadInfoInput;
import com.xiyu.service.vo.system.notice.notice.NoticePageQueryOutput;
import com.xiyu.service.vo.system.notice.notice.NoticePageQueryInput;
import org.springframework.web.bind.annotation.*;
import jakarta.annotation.Resource;
import org.springframework.validation.annotation.Validated;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.Operation;

import jakarta.validation.*;

import com.xiyu.service.framework.web.web.core.pojo.PageResult;
import com.xiyu.service.framework.web.web.core.pojo.CommonResult;
import static com.xiyu.service.framework.web.web.core.pojo.CommonResult.success;

import com.xiyu.service.service.system.notice.NoticeService;

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

    @PostMapping("/get-unread-info")
    @Operation(summary = "获取未读通知信息")
    public CommonResult<NoticeGetUnreadInfoOutput> getUnreadInfo(@Valid @RequestBody NoticeGetUnreadInfoInput inputVO) {
        return success(noticeService.getUnreadInfo(inputVO));
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
