package cn.iocoder.yudao.service.errorCode.infra.data;

import cn.iocoder.yudao.service.framework.exception.ErrorCode;

/**
* config 错误码枚举类
*
* config 配置管理，使用 1002001000段
*/
public interface ConfigErrorCode {
    Integer ERROR_CODE_START_CODE = 1002001000;

    ErrorCode CONFIG_NOT_EXISTS = new ErrorCode(ERROR_CODE_START_CODE, "参数配置不存在");
    ErrorCode CONFIG_KEY_DUPLICATE = new ErrorCode(ERROR_CODE_START_CODE + 1, "参数配置 key 重复");
    ErrorCode CONFIG_CAN_NOT_DELETE_SYSTEM_TYPE = new ErrorCode(ERROR_CODE_START_CODE + 2, "不能删除类型为系统内置的参数配置");
    ErrorCode CONFIG_GET_VALUE_ERROR_IF_VISIBLE = new ErrorCode(ERROR_CODE_START_CODE + 3, "获取参数配置失败，原因：不允许获取不可见配置");
}