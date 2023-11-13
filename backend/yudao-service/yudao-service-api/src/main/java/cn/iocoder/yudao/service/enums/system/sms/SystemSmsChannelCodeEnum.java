package cn.iocoder.yudao.service.enums.system.sms;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
* 短信渠道编码
*/
@Getter
@AllArgsConstructor
public enum SystemSmsChannelCodeEnum {

    /**
    * 阿里云
    */
    ALIYUN("ALIYUN"),
    /**
    * 调试(钉钉)
    */
    DEBUG_DING_TALK("DEBUG_DING_TALK");

    private final String value;

}
