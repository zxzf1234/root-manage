package com.xiyu.service.controller.admin.infra.oauth2;

import com.xiyu.service.framework.web.web.core.pojo.CommonResult;
import com.xiyu.service.framework.web.web.core.pojo.PageResult;
import com.xiyu.service.vo.infra.oauth2.token.OAuth2AccessTokenPageReqVO;
import com.xiyu.service.vo.infra.oauth2.token.OAuth2AccessTokenRespVO;
import com.xiyu.service.enums.system.login.SystemLoginTypeEnum;
import com.xiyu.service.service.infra.auth.AdminAuthService;
import com.xiyu.service.service.infra.oauth2.Oauth2TokenService;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import jakarta.annotation.Resource;
import jakarta.validation.Valid;

import static com.xiyu.service.framework.web.web.core.pojo.CommonResult.success;

@Tag(name = "管理后台 - OAuth2.0 令牌")
@RestController
@RequestMapping("/infra/oauth2-token")
public class OAuth2TokenController {

    @Resource
    private Oauth2TokenService oauth2TokenService;
    @Resource
    private AdminAuthService authService;

    @GetMapping("/page")
    @Operation(summary = "获得访问令牌分页", description = "只返回有效期内的")
    @PreAuthorize("@ss.hasPermission('system:oauth2-token:page')")
    public CommonResult<PageResult<OAuth2AccessTokenRespVO>> getAccessTokenPage(@Valid OAuth2AccessTokenPageReqVO reqVO) {
        return success(oauth2TokenService.getAccessTokenPage(reqVO));
    }

    @DeleteMapping("/delete")
    @Operation(summary = "删除访问令牌")
    @Parameter(name = "accessToken", description = "访问令牌", required = true, example = "tudou")
    @PreAuthorize("@ss.hasPermission('system:oauth2-token:delete')")
    public CommonResult<Boolean> deleteAccessToken(@RequestParam("accessToken") String accessToken) {
        authService.logout(accessToken, SystemLoginTypeEnum.LOGOUT_DELETE.getValue());
        return success(true);
    }

}
