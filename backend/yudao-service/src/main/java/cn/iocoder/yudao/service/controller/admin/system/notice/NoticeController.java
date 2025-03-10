package cn.iocoder.yudao.service.controller.admin.system.notice;
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

}
