package cn.iocoder.yudao.service.controller.admin.system.notice;
import cn.iocoder.yudao.service.vo.system.notice.notice.NoticeGetOutput;
import cn.iocoder.yudao.service.vo.system.notice.notice.NoticePageOutput;
import cn.iocoder.yudao.service.vo.system.notice.notice.NoticePageInput;
import cn.iocoder.yudao.service.vo.system.notice.notice.NoticeUpdateInput;
import cn.iocoder.yudao.service.vo.system.notice.notice.NoticeCreateInput;
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

import cn.iocoder.yudao.service.service.system.notice.NoticeService;
import cn.iocoder.yudao.service.vo.system.notice.notice.*;

@Tag(name = "通知公告")
@RestController
@RequestMapping("/system/notice")
@Validated
public class NoticeController {

    @Resource
    private NoticeService noticeService;

    @PostMapping("/create")
    @Operation(summary = "创建通知公告")
    @PreAuthorize("@ss.hasPermission('system:notice:create')")
    public CommonResult<Long> create(@Valid @RequestBody NoticeCreateInput inputVO) {
        return success(noticeService.create(inputVO));
    }

    @PutMapping("/update")
    @Operation(summary = "修改通知公告")
    @PreAuthorize("@ss.hasPermission('system:notice:update')")
    public CommonResult<Boolean> update(@Valid @RequestBody NoticeUpdateInput inputVO) {
        return success(noticeService.update(inputVO));
    }

    @DeleteMapping("/deleted")
    @Operation(summary = "删除通知公告")
    @PreAuthorize("@ss.hasPermission('system:notice:delete')")
    @Parameter(name = "id", description = "公告ID", required = true, example = "")
    public CommonResult<Boolean> deleted(@RequestParam("id") Long id) {
        return success(noticeService.deleted(id));
    }

    @GetMapping("/page")
    @Operation(summary = "分页获取通知公告列表")
    @PreAuthorize("@ss.hasPermission('system:notice:query')")
    public CommonResult<PageResult<NoticePageOutput>> page(@Valid NoticePageInput inputVO) {
        return success(noticeService.page(inputVO));
    }

    @GetMapping("/get")
    @Operation(summary = "获得单个通知公告")
    @PreAuthorize("@ss.hasPermission('system:notice:query')")
    @Parameter(name = "id", description = "公告ID", required = true, example = "")
    public CommonResult<NoticeGetOutput> get(@RequestParam("id") Long id) {
        return success(noticeService.get(id));
    }

}
