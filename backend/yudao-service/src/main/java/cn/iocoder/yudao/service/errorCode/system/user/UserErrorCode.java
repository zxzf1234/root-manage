package cn.iocoder.yudao.service.errorCode.system.user;

import cn.iocoder.yudao.service.framework.exception.ErrorCode;

/**
 * user 用户管理 错误码枚举类
 */
public interface UserErrorCode {
    Integer ERROR_CODE_START_CODE = 1002002000;

    ErrorCode USER_USERNAME_EXISTS = new ErrorCode(ERROR_CODE_START_CODE, "用户账号已经存在");
    ErrorCode USER_MOBILE_EXISTS = new ErrorCode(ERROR_CODE_START_CODE + 1, "手机号已经存在");
    ErrorCode USER_EMAIL_EXISTS = new ErrorCode(ERROR_CODE_START_CODE + 2, "邮箱已经存在");
    ErrorCode USER_NOT_EXISTS = new ErrorCode(ERROR_CODE_START_CODE + 3, "用户不存在");
    ErrorCode USER_IMPORT_LIST_IS_EMPTY = new ErrorCode(ERROR_CODE_START_CODE + 4, "导入用户数据不能为空！");
    ErrorCode USER_PASSWORD_FAILED = new ErrorCode(ERROR_CODE_START_CODE + 5, "用户密码校验失败");
    ErrorCode USER_IS_DISABLE = new ErrorCode(ERROR_CODE_START_CODE + 6, "名字为【{}】的用户已被禁用");
    ErrorCode USER_COUNT_MAX = new ErrorCode(ERROR_CODE_START_CODE + 7, "创建用户失败，原因：超过租户最大租户配额({})！");

}
