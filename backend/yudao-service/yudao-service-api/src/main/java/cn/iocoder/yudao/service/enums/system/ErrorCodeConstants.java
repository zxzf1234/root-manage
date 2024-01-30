package cn.iocoder.yudao.service.enums.system;

import cn.iocoder.yudao.framework.common.exception.ErrorCode;

/**
 * System 错误码枚举类
 *
 * system 系统，使用 1-002-000-000 段
 */
public interface ErrorCodeConstants {

    // ========== AUTH 模块 1002000000 ==========
    ErrorCode AUTH_LOGIN_BAD_CREDENTIALS = new ErrorCode(1002000000, "登录失败，账号密码不正确");
    ErrorCode AUTH_LOGIN_USER_DISABLED = new ErrorCode(1002000001, "登录失败，账号被禁用");
    ErrorCode AUTH_LOGIN_CAPTCHA_CODE_ERROR = new ErrorCode(1002000004, "验证码不正确，原因：{}");
    ErrorCode AUTH_THIRD_LOGIN_NOT_BIND = new ErrorCode(1002000005, "未绑定账号，需要进行绑定");
    ErrorCode AUTH_TOKEN_EXPIRED = new ErrorCode(1002000006, "Token 已经过期");
    ErrorCode AUTH_MOBILE_NOT_EXISTS = new ErrorCode(1002000007, "手机号不存在");

    // ========== 角色管理 1002001000 ==========
    ErrorCode ROLE_NOT_EXISTS = new ErrorCode(1002001000, "角色不存在");
    ErrorCode ROLE_NAME_DUPLICATE = new ErrorCode(1002001001, "已经存在名为【{}】的角色");
    ErrorCode ROLE_CODE_DUPLICATE = new ErrorCode(1002001002, "已经存在编码为【{}】的角色");
    ErrorCode ROLE_CAN_NOT_UPDATE_SYSTEM_TYPE_ROLE = new ErrorCode(1002001003, "不能操作类型为系统内置的角色");
    ErrorCode ROLE_IS_DISABLE = new ErrorCode(1002001004, "名字为【{}】的角色已被禁用");
    ErrorCode ROLE_ADMIN_CODE_ERROR = new ErrorCode(1002001005, "编码【{}】不能使用");

    // ========== 用户管理 1002002000 ==========
    ErrorCode USER_USERNAME_EXISTS = new ErrorCode(1002002000, "用户账号已经存在");
    ErrorCode USER_MOBILE_EXISTS = new ErrorCode(1002002001, "手机号已经存在");
    ErrorCode USER_EMAIL_EXISTS = new ErrorCode(1002002002, "邮箱已经存在");
    ErrorCode USER_NOT_EXISTS = new ErrorCode(1002002003, "用户不存在");
    ErrorCode USER_IMPORT_LIST_IS_EMPTY = new ErrorCode(1002002004, "导入用户数据不能为空！");
    ErrorCode USER_PASSWORD_FAILED = new ErrorCode(1002002005, "用户密码校验失败");
    ErrorCode USER_IS_DISABLE = new ErrorCode(1002002006, "名字为【{}】的用户已被禁用");
    ErrorCode USER_COUNT_MAX = new ErrorCode(1002002008, "创建用户失败，原因：超过租户最大租户配额({})！");

    // ========== 部门管理 1002003000 ==========
    ErrorCode DEPT_NAME_DUPLICATE = new ErrorCode(1002003000, "已经存在该名字的部门");
    ErrorCode DEPT_PARENT_NOT_EXITS = new ErrorCode(1002003001,"父级部门不存在");
    ErrorCode DEPT_NOT_FOUND = new ErrorCode(1002003002, "当前部门不存在");
    ErrorCode DEPT_EXITS_CHILDREN = new ErrorCode(1002003003, "存在子部门，无法删除");
    ErrorCode DEPT_PARENT_ERROR = new ErrorCode(1002003004, "不能设置自己为父部门");
    ErrorCode DEPT_EXISTS_USER = new ErrorCode(1002003005, "部门中存在员工，无法删除");
    ErrorCode DEPT_NOT_ENABLE = new ErrorCode(1002003006, "部门({})不处于开启状态，不允许选择");
    ErrorCode DEPT_PARENT_IS_CHILD = new ErrorCode(1002003007, "不能设置自己的子部门为父部门");

    // ========== 岗位管理 1002004000 ==========
    ErrorCode POST_NOT_FOUND = new ErrorCode(1002004000, "当前岗位不存在");
    ErrorCode POST_NOT_ENABLE = new ErrorCode(1002004001, "岗位({}) 不处于开启状态，不允许选择");
    ErrorCode POST_NAME_DUPLICATE = new ErrorCode(1002004002, "已经存在该名字的岗位");
    ErrorCode POST_CODE_DUPLICATE = new ErrorCode(1002004003, "已经存在该标识的岗位");

    // ========== 通知公告 1002006000 ==========
    ErrorCode NOTICE_NOT_FOUND = new ErrorCode(1002006001, "当前通知公告不存在");

    // ========== 站内信模版管理 1001024000 ==========
    ErrorCode NOTIFY_TEMPLATE_NOT_EXISTS = new ErrorCode(1001024000, "站内信模版不存在");
    ErrorCode NOTIFY_TEMPLATE_CODE_DUPLICATE = new ErrorCode(1001024001, "已经存在编码为【{}】的站内信模板");

    // ========== 站内信消息记录 1001025000 ==========
    ErrorCode NOTIFY_MESSAGE_NOT_EXISTS = new ErrorCode(1001025000, "站内信消息不存在");
    ErrorCode NOTIFY_SEND_TEMPLATE_PARAM_MISS = new ErrorCode(1001025001, "模板参数({})缺失");

}
