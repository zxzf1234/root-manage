package cn.iocoder.yudao.service.enums.system.social;

import cn.hutool.core.util.ArrayUtil;
import cn.iocoder.yudao.service.enums.common.IntArrayValuable;
import cn.iocoder.yudao.service.enums.system.mail.SystemMailSendStatusEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Arrays;

/**
 * 社交平台的类型枚举
 *
 * @author 芋道源码
 */
@Getter
@AllArgsConstructor
public enum SocialTypeEnum implements IntArrayValuable {

    /**
     * Gitee
     * 文档链接：https://gitee.com/api/v5/oauth_doc#/
     */
    GITEE(10, "GITEE"),
    /**
     * 钉钉
     * 文档链接：https://developers.dingtalk.com/document/app/obtain-identity-credentials
     */
    DINGTALK(20, "DINGTALK"),

    /**
     * 企业微信
     * 文档链接：https://xkcoding.com/2019/08/06/use-justauth-integration-wechat-enterprise.html
     */
    WECHAT_ENTERPRISE(30, "WECHAT_ENTERPRISE"),
    /**
     * 微信公众平台 - 移动端 H5
     * 文档链接：https://www.cnblogs.com/juewuzhe/p/11905461.html
     */
    WECHAT_MP(31, "WECHAT_MP"),
    /**
     * 微信开放平台 - 网站应用 PC 端扫码授权登录
     * 文档链接：https://justauth.wiki/guide/oauth/wechat_open/#_2-申请开发者资质认证
     */
    WECHAT_OPEN(32, "WECHAT_OPEN"),
    /**
     * 微信小程序
     * 文档链接：https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html
     */
    WECHAT_MINI_APP(34, "WECHAT_MINI_APP");

    private final Integer value;

    private final String label;

    public static final int[] VALUES = Arrays.stream(values()).mapToInt(SocialTypeEnum::getValue).toArray();

    @Override
    public int[] getValues() { return VALUES;}

    public static final String[] LABELS = Arrays.stream(values()).map(SocialTypeEnum::getLabel).toArray(String[]::new);

    @Override
    public String[] getLabels() { return LABELS; }


}
