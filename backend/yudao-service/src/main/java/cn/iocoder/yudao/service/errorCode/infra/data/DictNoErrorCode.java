package cn.iocoder.yudao.service.errorCode.infra.data;

import cn.iocoder.yudao.service.framework.exception.ErrorCode;

/**
 * dictType 错误码枚举类
 *
 * dictType 字典管理，使用 1002003000段
 */
public interface DictNoErrorCode {
    Integer ERROR_CODE_START_CODE = 1002003000;

    ErrorCode DICT_NO_EXISTS = new ErrorCode(ERROR_CODE_START_CODE, "当前字典编号不存在");
    ErrorCode DICT_NO_NOT_EXISTS = new ErrorCode(ERROR_CODE_START_CODE + 1, "当前字典编号已存在");
}