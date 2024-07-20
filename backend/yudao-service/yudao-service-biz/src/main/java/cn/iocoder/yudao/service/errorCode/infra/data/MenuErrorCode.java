package cn.iocoder.yudao.service.errorCode.infra.data;

import cn.iocoder.yudao.framework.common.exception.ErrorCode;

/**
* menu 错误码枚举类
*
* menu 菜单管理，使用 1002004000段
*/
public interface MenuErrorCode {
    Integer ERROR_CODE_START_CODE = 1002004000;

    ErrorCode MENU_NAME_DUPLICATE = new ErrorCode(ERROR_CODE_START_CODE, "已经存在该名字的菜单");
    ErrorCode MENU_PARENT_NOT_EXISTS = new ErrorCode(ERROR_CODE_START_CODE + 1, "父菜单不存在");
    ErrorCode MENU_PARENT_ERROR = new ErrorCode(ERROR_CODE_START_CODE + 2, "不能设置自己为父菜单");
    ErrorCode MENU_NOT_EXISTS = new ErrorCode(ERROR_CODE_START_CODE + 3, "菜单不存在");
    ErrorCode MENU_EXISTS_CHILDREN = new ErrorCode(ERROR_CODE_START_CODE + 4, "存在子菜单，无法删除");
    ErrorCode MENU_PARENT_NOT_DIR_OR_MENU = new ErrorCode(ERROR_CODE_START_CODE + 5, "父菜单的类型必须是目录或者菜单");
}