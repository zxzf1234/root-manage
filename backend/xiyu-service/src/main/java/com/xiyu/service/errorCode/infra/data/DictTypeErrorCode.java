package com.xiyu.service.errorCode.infra.data;

import com.xiyu.service.framework.exception.ErrorCode;

/**
 * dictType 错误码枚举类
 *
 * dictType 字典管理，使用 1002002000段
 */
public interface DictTypeErrorCode {
    Integer ERROR_CODE_START_CODE = 1002002000;

    ErrorCode DICT_TYPE_NOT_EXISTS = new ErrorCode(ERROR_CODE_START_CODE, "当前字典类型不存在");
    ErrorCode DICT_TYPE_NAME_DUPLICATE = new ErrorCode(ERROR_CODE_START_CODE + 1, "已经存在该名字的字典类型");
    ErrorCode DICT_TYPE_TYPE_DUPLICATE = new ErrorCode(ERROR_CODE_START_CODE + 2, "已经存在该类型的字典类型");
    ErrorCode DICT_DATA_NOT_EXISTS = new ErrorCode(ERROR_CODE_START_CODE + 3, "当前字典数据不存在");
    ErrorCode DICT_DATA_VALUE_DUPLICATE= new ErrorCode(ERROR_CODE_START_CODE + 4, "已经存在该值的字典数据");
}