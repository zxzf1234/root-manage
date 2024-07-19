package cn.iocoder.yudao.service.errorCode.infra;

import cn.iocoder.yudao.framework.common.exception.ErrorCode;

/**
 * Infra 错误码枚举类
 *
 * infra 系统，使用 1-001-000-000 段
 */
public interface ErrorCodeConstants {

    // ========== 参数配置 1001000000 ==========
    ErrorCode CONFIG_NOT_EXISTS = new ErrorCode(1001000001, "参数配置不存在");
    ErrorCode CONFIG_KEY_DUPLICATE = new ErrorCode(1001000002, "参数配置 key 重复");
    ErrorCode CONFIG_CAN_NOT_DELETE_SYSTEM_TYPE = new ErrorCode(1001000003, "不能删除类型为系统内置的参数配置");
    ErrorCode CONFIG_GET_VALUE_ERROR_IF_VISIBLE = new ErrorCode(1001000004, "获取参数配置失败，原因：不允许获取不可见配置");

    // ========== 定时任务 1001001000 ==========
    ErrorCode JOB_NOT_EXISTS = new ErrorCode(1001001000, "定时任务不存在");
    ErrorCode JOB_HANDLER_EXISTS = new ErrorCode(1001001001, "定时任务的处理器已经存在");
    ErrorCode JOB_CHANGE_STATUS_INVALID = new ErrorCode(1001001002, "只允许修改为开启或者关闭状态");
    ErrorCode JOB_CHANGE_STATUS_EQUALS = new ErrorCode(1001001003, "定时任务已经处于该状态，无需修改");
    ErrorCode JOB_UPDATE_ONLY_NORMAL_STATUS = new ErrorCode(1001001004, "只有开启状态的任务，才可以修改");
    ErrorCode JOB_CRON_EXPRESSION_VALID = new ErrorCode(1001001005, "CRON 表达式不正确");

    // ========== API 错误日志 1001002000 ==========
    ErrorCode API_ERROR_LOG_NOT_FOUND = new ErrorCode(1001002000, "API 错误日志不存在");
    ErrorCode API_ERROR_LOG_PROCESSED = new ErrorCode(1001002001, "API 错误日志已处理");

    // ========== 文件相关 1001003000 =================
    ErrorCode FILE_PATH_EXISTS = new ErrorCode(1001003000, "文件路径已存在");
    ErrorCode FILE_NOT_EXISTS = new ErrorCode(1001003001, "文件不存在");
    ErrorCode FILE_IS_EMPTY = new ErrorCode(1001003002, "文件为空");

    // ========== 代码生成器 1001004000 ==========
    ErrorCode CODEGEN_DATABASE_TABLE_EXISTS = new ErrorCode(1001004010, "表名称已存在");
    ErrorCode CODEGEN_DATABASE_TABLE_NOT_EXISTS = new ErrorCode(1001004011, "数据库表不存在");
    ErrorCode CODEGEN_INTERFACE_MODULE_CHILD_NODE_EXITS = new ErrorCode(1001004012, "接口模块存在子节点");
    ErrorCode CODEGEN_INTERFACE_MODULE_NOT_EXITS = new ErrorCode(1001004013, "接口模块不存在");
    ErrorCode CODEGEN_INTERFACE_NOT_EXITS = new ErrorCode(1001004014, "接口不存在");
    ErrorCode CODEGEN_INTERFACE_EXITS = new ErrorCode(1001004015, "接口已存在");
    ErrorCode CODEGEN_INTERFACE_VALIDATION_NOT_EXITS = new ErrorCode(1001004016, "接口校验不存在");
    ErrorCode CODEGEN_INTERFACE_PARAM_NOT_EXITS = new ErrorCode(1001004017, "接口参数不存在");
    ErrorCode CODEGEN_INTERFACE_SUBCLASS_NOT_EXITS = new ErrorCode(1001004018, "接口子类不存在");
    ErrorCode CODEGEN_DATABASE_MAPPING_NOT_EXITS = new ErrorCode(1001004019, "数据库表映射不存在");
    ErrorCode CODEGEN_DATABASE_TABLE_COLUMN_DISTINCT = new ErrorCode(1001004020, "数据库表字段重复");
    ErrorCode CODEGEN_INTERFACE_MODULE_TYPE_NOT_CHANGE = new ErrorCode(1001004013, "接口模块的模块类型不能修改，请删除后重新添加");
    ErrorCode CODEGEN_INTERFACE_MODULE_RANGE_ILLEGALITY = new ErrorCode(1001004014, "此接口模块的排序范围必须在{}到{}之间");
    ErrorCode CODEGEN_INTERFACE_MODULE_RANGE_MOD = new ErrorCode(1001004015, "此接口模块的排序范围必须是{}的整数");

    // ========== 字典类型 1001005000 ==========
    ErrorCode DICT_TYPE_NOT_EXISTS = new ErrorCode(1001005000, "当前字典类型不存在");
    ErrorCode DICT_TYPE_NOT_ENABLE = new ErrorCode(1001005001, "字典类型不处于开启状态，不允许选择");
    ErrorCode DICT_TYPE_NAME_DUPLICATE = new ErrorCode(1001005002, "已经存在该名字的字典类型");
    ErrorCode DICT_TYPE_TYPE_DUPLICATE = new ErrorCode(1001005003, "已经存在该类型的字典类型");
    ErrorCode DICT_TYPE_HAS_CHILDREN = new ErrorCode(1001005004, "无法删除，该字典类型还有字典数据");
    ErrorCode DICT_TYPE_EXPORT_EXCEPTION = new ErrorCode(1001005005, "无法删除，该字典类型还有字典数据");
    ErrorCode DICT_DATA_NOT_EXISTS = new ErrorCode(1001005006, "当前字典数据不存在");
    ErrorCode DICT_DATA_NOT_ENABLE = new ErrorCode(1001005007, "字典数据({})不处于开启状态，不允许选择");
    ErrorCode DICT_DATA_VALUE_DUPLICATE= new ErrorCode(1001005008, "已经存在该值的字典数据");
    ErrorCode DICT_DATA_EXPORT_EXCEPTION = new ErrorCode(1001005009, "字段导出异常");

    // ========== 文件配置 1001006000 ==========
    ErrorCode FILE_CONFIG_NOT_EXISTS = new ErrorCode(1001006000, "文件配置不存在");
    ErrorCode FILE_CONFIG_DELETE_FAIL_MASTER = new ErrorCode(1001006001, "该文件配置不允许删除，原因：它是主配置，删除会导致无法上传文件");

    // ========== 数据源配置 1001007000 ==========
    ErrorCode DATA_SOURCE_CONFIG_NOT_EXISTS = new ErrorCode(1001007000, "数据源配置不存在");
    ErrorCode DATA_SOURCE_CONFIG_NOT_OK = new ErrorCode(1001007001, "数据源配置不正确，无法进行连接");

    // ========== 字典编号 1001008000 ==========
    ErrorCode DICT_NO_EXISTS = new ErrorCode(1001008000, "当前字典编号不存在");
    ErrorCode DICT_NO_NOT_EXISTS = new ErrorCode(1001008001, "当前字典编号已存在");

    // ========== OAuth2 客户端 1001009000 =========
    ErrorCode OAUTH2_CLIENT_NOT_EXISTS = new ErrorCode(1001016000, "OAuth2 客户端不存在");
    ErrorCode OAUTH2_CLIENT_EXISTS = new ErrorCode(1001016001, "OAuth2 客户端编号已存在");
    ErrorCode OAUTH2_CLIENT_DISABLE = new ErrorCode(1001016002, "OAuth2 客户端已禁用");
    ErrorCode OAUTH2_CLIENT_AUTHORIZED_GRANT_TYPE_NOT_EXISTS = new ErrorCode(1001016003, "不支持该授权类型");
    ErrorCode OAUTH2_CLIENT_SCOPE_OVER = new ErrorCode(1001016004, "授权范围过大");
    ErrorCode OAUTH2_CLIENT_REDIRECT_URI_NOT_MATCH = new ErrorCode(1001016005, "无效 redirect_uri: {}");
    ErrorCode OAUTH2_CLIENT_CLIENT_SECRET_ERROR = new ErrorCode(1001016006, "无效 client_secret: {}");

    // ========== 菜单模块 1001010000 ==========
    ErrorCode MENU_NAME_DUPLICATE = new ErrorCode(1001022000, "已经存在该名字的菜单");
    ErrorCode MENU_PARENT_NOT_EXISTS = new ErrorCode(1001022001, "父菜单不存在");
    ErrorCode MENU_PARENT_ERROR = new ErrorCode(1001022002, "不能设置自己为父菜单");
    ErrorCode MENU_NOT_EXISTS = new ErrorCode(1001022003, "菜单不存在");
    ErrorCode MENU_EXISTS_CHILDREN = new ErrorCode(1001022004, "存在子菜单，无法删除");
    ErrorCode MENU_PARENT_NOT_DIR_OR_MENU = new ErrorCode(1001022005, "父菜单的类型必须是目录或者菜单");

    // ========== OAuth2 授权 1001011000 =========
    ErrorCode OAUTH2_GRANT_CLIENT_ID_MISMATCH = new ErrorCode(1001017000, "client_id 不匹配");
    ErrorCode OAUTH2_GRANT_REDIRECT_URI_MISMATCH = new ErrorCode(1001017001, "redirect_uri 不匹配");
    ErrorCode OAUTH2_GRANT_STATE_MISMATCH = new ErrorCode(1001017002, "state 不匹配");
    ErrorCode OAUTH2_GRANT_CODE_NOT_EXISTS = new ErrorCode(1001017003, "code 不存在");

    // ========== OAuth2 授权 1001012000 =========
    ErrorCode OAUTH2_CODE_NOT_EXISTS = new ErrorCode(1001018000, "code 不存在");
    ErrorCode OAUTH2_CODE_EXPIRE = new ErrorCode(1001018001, "code 已过期");

    // ========== AUTH 模块 1001300000 ==========
    ErrorCode AUTH_LOGIN_BAD_CREDENTIALS = new ErrorCode(1001900000, "登录失败，账号密码不正确");
    ErrorCode AUTH_LOGIN_USER_DISABLED = new ErrorCode(1001900001, "登录失败，账号被禁用");
    ErrorCode AUTH_LOGIN_CAPTCHA_CODE_ERROR = new ErrorCode(1001900004, "验证码不正确，原因：{}");




}
