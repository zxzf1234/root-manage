package cn.iocoder.yudao.service.errorCode.system.dept;

import cn.iocoder.yudao.service.framework.exception.ErrorCode;

/**
 * dept 部门管理 错误码枚举类
 */
public interface DeptErrorCode {
    Integer ERROR_CODE_START_CODE = 1002003000;

    ErrorCode DEPT_NAME_DUPLICATE = new ErrorCode(ERROR_CODE_START_CODE, "已经存在该名字的部门");
    ErrorCode DEPT_PARENT_NOT_EXITS = new ErrorCode(ERROR_CODE_START_CODE + 1,"父级部门不存在");
    ErrorCode DEPT_NOT_FOUND = new ErrorCode(ERROR_CODE_START_CODE + 2, "当前部门不存在");
    ErrorCode DEPT_EXITS_CHILDREN = new ErrorCode(ERROR_CODE_START_CODE + 3, "存在子部门，无法删除");
    ErrorCode DEPT_PARENT_ERROR = new ErrorCode(ERROR_CODE_START_CODE + 4, "不能设置自己为父部门");
    ErrorCode DEPT_EXISTS_USER = new ErrorCode(ERROR_CODE_START_CODE + 5, "部门中存在员工，无法删除");
    ErrorCode DEPT_NOT_ENABLE = new ErrorCode(ERROR_CODE_START_CODE + 6, "部门({})不处于开启状态，不允许选择");
    ErrorCode DEPT_PARENT_IS_CHILD = new ErrorCode(ERROR_CODE_START_CODE + 7, "不能设置自己的子部门为父部门");

}
