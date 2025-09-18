package com.xiyu.service.controller.admin.infra.oauth2;

import com.xiyu.service.framework.web.web.core.pojo.CommonResult;
import com.xiyu.service.framework.web.web.core.pojo.PageResult;
import com.xiyu.service.vo.infra.oauth2.client.OAuth2ClientCreateReqVO;
import com.xiyu.service.vo.infra.oauth2.client.OAuth2ClientPageReqVO;
import com.xiyu.service.vo.infra.oauth2.client.OAuth2ClientRespVO;
import com.xiyu.service.vo.infra.oauth2.client.OAuth2ClientUpdateReqVO;
import com.xiyu.service.convert.infra.auth.OAuth2ClientConvert;
import com.xiyu.service.model.infra.oauth2.SystemOauth2Client;
import com.xiyu.service.service.infra.oauth2.Oauth2ClientService;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import jakarta.annotation.Resource;
import jakarta.validation.Valid;

import static com.xiyu.service.framework.web.web.core.pojo.CommonResult.success;

@Tag(name = "管理后台 - OAuth2 客户端")
@RestController
@RequestMapping("/infra/oauth2-client")
@Validated
public class OAuth2ClientController {

    @Resource
    private Oauth2ClientService oAuth2ClientService;

    @PostMapping("/create")
    @Operation(summary = "创建 OAuth2 客户端")
    @PreAuthorize("@ss.hasPermission('system:oauth2-client:create')")
    public CommonResult<Long> createOAuth2Client(@Valid @RequestBody OAuth2ClientCreateReqVO createReqVO) {
        return success(oAuth2ClientService.createOAuth2Client(createReqVO));
    }

    @PutMapping("/update")
    @Operation(summary = "更新 OAuth2 客户端")
    @PreAuthorize("@ss.hasPermission('system:oauth2-client:update')")
    public CommonResult<Boolean> updateOAuth2Client(@Valid @RequestBody OAuth2ClientUpdateReqVO updateReqVO) {
        oAuth2ClientService.updateOAuth2Client(updateReqVO);
        return success(true);
    }

    @DeleteMapping("/delete")
    @Operation(summary = "删除 OAuth2 客户端")
    @Parameter(name = "id", description = "编号", required = true)
    @PreAuthorize("@ss.hasPermission('system:oauth2-client:delete')")
    public CommonResult<Boolean> deleteOAuth2Client(@RequestParam("id") Long id) {
        oAuth2ClientService.deleteOAuth2Client(id);
        return success(true);
    }

    @GetMapping("/get")
    @Operation(summary = "获得 OAuth2 客户端")
    @Parameter(name = "id", description = "编号", required = true, example = "1024")
    @PreAuthorize("@ss.hasPermission('system:oauth2-client:query')")
    public CommonResult<OAuth2ClientRespVO> getOAuth2Client(@RequestParam("id") Long id) {
        SystemOauth2Client oAuth2Client = oAuth2ClientService.getOAuth2Client(id);
        return success(OAuth2ClientConvert.INSTANCE.convert(oAuth2Client));
    }

    @GetMapping("/page")
    @Operation(summary = "获得OAuth2 客户端分页")
    @PreAuthorize("@ss.hasPermission('system:oauth2-client:query')")
    public CommonResult<PageResult<OAuth2ClientRespVO>> getOAuth2ClientPage(@Valid OAuth2ClientPageReqVO pageVO) {
        return success((oAuth2ClientService.getOAuth2ClientPage(pageVO)));
    }

}
