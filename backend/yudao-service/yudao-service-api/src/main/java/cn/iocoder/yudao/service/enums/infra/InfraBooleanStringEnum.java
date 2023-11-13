package cn.iocoder.yudao.service.enums.infra;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
* Boolean 是否类型
*/
@Getter
@AllArgsConstructor
public enum InfraBooleanStringEnum {

    /**
    * 否
    */
    FALSE("false"),
    /**
    * 是
    */
    TRUE("true");

    private final String value;

}
