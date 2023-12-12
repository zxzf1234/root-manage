package cn.iocoder.yudao.service.controller.admin.system.post;
import cn.iocoder.yudao.service.vo.system.post.post.PostPageOutput;
import cn.iocoder.yudao.service.vo.system.post.post.PostPageInput;
import cn.iocoder.yudao.service.vo.system.post.post.PostExportedOutput;
import cn.iocoder.yudao.service.vo.system.post.post.PostExportedInput;
import cn.iocoder.yudao.service.vo.system.post.post.PostListAllSimpleOutput;
import cn.iocoder.yudao.service.vo.system.post.post.PostGetOutput;
import cn.iocoder.yudao.service.vo.system.post.post.PostUpdateInput;
import cn.iocoder.yudao.service.vo.system.post.post.PostCreateInput;
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

import cn.iocoder.yudao.service.service.system.post.PostService;
import cn.iocoder.yudao.service.vo.system.post.post.*;

@Tag(name = "岗位管理")
@RestController
@RequestMapping("/system/post")
@Validated
public class PostController {

    @Resource
    private PostService postService;

    @PostMapping("/create")
    @Operation(summary = "创建岗位")
    @PreAuthorize("@ss.hasPermission('system:post:create')")
    public CommonResult<Long> create(@Valid @RequestBody PostCreateInput inputVO) {
        return success(postService.create(inputVO));
    }

    @PutMapping("/update")
    @Operation(summary = "修改岗位")
    @PreAuthorize("@ss.hasPermission('system:post:update')")
    public CommonResult<Boolean> update(@Valid @RequestBody PostUpdateInput inputVO) {
        return success(postService.update(inputVO));
    }

    @DeleteMapping("/deleted")
    @Operation(summary = "删除岗位")
    @PreAuthorize("@ss.hasPermission('system:post:delete')")
    @Parameter(name = "id", description = "岗位ID", required = true, example = "")
    public CommonResult<Boolean> deleted(@RequestParam("id") Long id) {
        return success(postService.deleted(id));
    }

    @GetMapping("/get")
    @Operation(summary = "获得单个岗位信息")
    @PreAuthorize("@ss.hasPermission('system:post:query')")
    @Parameter(name = "id", description = "岗位ID", required = true, example = "")
    public CommonResult<PostGetOutput> get(@RequestParam("id") Long id) {
        return success(postService.get(id));
    }

    @GetMapping("/list-all-simple")
    @Operation(summary = "获取岗位精简信息列表")
    public CommonResult<List<PostListAllSimpleOutput>> listAllSimple() {
        return success(postService.listAllSimple());
    }

    @GetMapping("/exported")
    @Operation(summary = "导出岗位信息")
    @PreAuthorize("@ss.hasPermission('system:post:export')")
    public void exported(@Valid PostExportedInput inputVO, HttpServletResponse response) throws IOException {
        postService.exported(response, inputVO);
    }

    @GetMapping("/page")
    @Operation(summary = "获得岗位分页列表")
    @PreAuthorize("@ss.hasPermission('system:post:query')")
    public CommonResult<PageResult<PostPageOutput>> page(@Valid PostPageInput inputVO) {
        return success(postService.page(inputVO));
    }

}
