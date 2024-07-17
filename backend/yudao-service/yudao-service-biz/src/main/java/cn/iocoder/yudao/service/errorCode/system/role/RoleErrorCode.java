package cn.iocoder.yudao.service.errorCode.system.role;

import cn.iocoder.yudao.framework.common.exception.ErrorCode;

/**
 * role 角色管理 错误码枚举类
 */
public interface RoleErrorCode {
    public static final Integer ERROR_CODE_START_CODE = 1002001000;

    ErrorCode ROLE_NOT_EXISTS = new ErrorCode(ERROR_CODE_START_CODE, "角色不存在");
    ErrorCode ROLE_NAME_DUPLICATE = new ErrorCode(ERROR_CODE_START_CODE + 1, "已经存在名为【{}】的角色");
    ErrorCode ROLE_CODE_DUPLICATE = new ErrorCode(ERROR_CODE_START_CODE + 2, "已经存在编码为【{}】的角色");
    ErrorCode ROLE_CAN_NOT_UPDATE_SYSTEM_TYPE_ROLE = new ErrorCode(ERROR_CODE_START_CODE + 3, "不能操作类型为系统内置的角色");
    ErrorCode ROLE_IS_DISABLE = new ErrorCode(ERROR_CODE_START_CODE + 4, "名字为【{}】的角色已被禁用");
    ErrorCode ROLE_ADMIN_CODE_ERROR = new ErrorCode(ERROR_CODE_START_CODE  + 5, "编码【{}】不能使用");
}
