package cn.iocoder.yudao.service.errorCode.system.post;

import cn.iocoder.yudao.service.framework.exception.ErrorCode;

/**
 * post 岗位管理 错误码枚举类
 */
public interface PostErrorCode {
    Integer ERROR_CODE_START_CODE = 1002000000;

    ErrorCode POST_NOT_FOUND = new ErrorCode(ERROR_CODE_START_CODE, "当前岗位不存在");
    ErrorCode POST_NOT_ENABLE = new ErrorCode(ERROR_CODE_START_CODE + 1, "岗位({}) 不处于开启状态，不允许选择");
    ErrorCode POST_NAME_DUPLICATE = new ErrorCode(ERROR_CODE_START_CODE + 2, "已经存在该名字的岗位");
    ErrorCode POST_CODE_DUPLICATE = new ErrorCode(ERROR_CODE_START_CODE + 3, "已经存在该标识的岗位");
}
