package cn.iocoder.yudao.service.errorCode.infra;

import cn.iocoder.yudao.service.framework.exception.ErrorCode;

/**
 * infra 错误码枚举类
 *
 * infra 基础设施，使用 1002700000段  从700000开始
 */
public interface ErrorCodeConstants {
    Integer ERROR_CODE_START_CODE = 1002700000;

    // ========== API 错误日志 ==========
    Integer ERROR_CODE_API_START_CODE = ERROR_CODE_START_CODE;

    ErrorCode API_ERROR_LOG_NOT_FOUND = new ErrorCode(ERROR_CODE_API_START_CODE, "API 错误日志不存在");
    ErrorCode API_ERROR_LOG_PROCESSED = new ErrorCode(ERROR_CODE_API_START_CODE + 1, "API 错误日志已处理");

    // ========== 文件相关 =================
    Integer ERROR_CODE_FILE_START_CODE = ERROR_CODE_START_CODE + 1000;

    ErrorCode FILE_NOT_EXISTS = new ErrorCode(ERROR_CODE_FILE_START_CODE, "文件不存在");
    ErrorCode FILE_IS_EMPTY = new ErrorCode(ERROR_CODE_FILE_START_CODE + 1, "文件为空");
    ErrorCode FILE_CONFIG_NOT_EXISTS = new ErrorCode(ERROR_CODE_FILE_START_CODE + 2, "文件配置不存在");
    ErrorCode FILE_CONFIG_DELETE_FAIL_MASTER = new ErrorCode(ERROR_CODE_FILE_START_CODE + 3, "该文件配置不允许删除，原因：它是主配置，删除会导致无法上传文件");

    // ========== 代码生成器 ==========
    Integer ERROR_CODE_CODEGEN_START_CODE = ERROR_CODE_START_CODE + 2000;

    ErrorCode CODEGEN_DATABASE_TABLE_EXISTS = new ErrorCode(ERROR_CODE_CODEGEN_START_CODE, "表名称已存在");
    ErrorCode CODEGEN_DATABASE_TABLE_NOT_EXISTS = new ErrorCode(ERROR_CODE_CODEGEN_START_CODE + 1, "数据库表不存在");
    ErrorCode CODEGEN_INTERFACE_MODULE_CHILD_NODE_EXITS = new ErrorCode(ERROR_CODE_CODEGEN_START_CODE + 2, "接口模块存在子节点");
    ErrorCode CODEGEN_INTERFACE_MODULE_NOT_EXITS = new ErrorCode(ERROR_CODE_CODEGEN_START_CODE + 3, "接口模块不存在");
    ErrorCode CODEGEN_INTERFACE_NOT_EXITS = new ErrorCode(ERROR_CODE_CODEGEN_START_CODE + 4, "接口不存在");
    ErrorCode CODEGEN_INTERFACE_EXITS = new ErrorCode(ERROR_CODE_CODEGEN_START_CODE + 5, "接口已存在");
    ErrorCode CODEGEN_INTERFACE_VALIDATION_NOT_EXITS = new ErrorCode(ERROR_CODE_CODEGEN_START_CODE + 6, "接口校验不存在");
    ErrorCode CODEGEN_INTERFACE_PARAM_NOT_EXITS = new ErrorCode(ERROR_CODE_CODEGEN_START_CODE + 7, "接口参数不存在");
    ErrorCode CODEGEN_INTERFACE_SUBCLASS_NOT_EXITS = new ErrorCode(ERROR_CODE_CODEGEN_START_CODE + 8, "接口子类不存在");
    ErrorCode CODEGEN_DATABASE_MAPPING_NOT_EXITS = new ErrorCode(ERROR_CODE_CODEGEN_START_CODE + 9, "数据库表映射不存在");
    ErrorCode CODEGEN_DATABASE_TABLE_COLUMN_DISTINCT = new ErrorCode(ERROR_CODE_CODEGEN_START_CODE + 10, "数据库表字段重复");
    ErrorCode CODEGEN_INTERFACE_MODULE_TYPE_NOT_CHANGE = new ErrorCode(ERROR_CODE_CODEGEN_START_CODE + 11, "接口模块的模块类型不能修改，请删除后重新添加");
    ErrorCode CODEGEN_INTERFACE_MODULE_RANGE_ILLEGALITY = new ErrorCode(ERROR_CODE_CODEGEN_START_CODE + 12, "此接口模块的排序范围必须在{}到{}之间");
    ErrorCode CODEGEN_INTERFACE_MODULE_RANGE_MOD = new ErrorCode(ERROR_CODE_CODEGEN_START_CODE + 13, "此接口模块的排序范围必须是{}的整数");

    // ========== 数据源配置 ==========
    Integer ERROR_CODE_DATA_SOURCE_START_CODE = ERROR_CODE_START_CODE + 3000;

    ErrorCode DATA_SOURCE_CONFIG_NOT_EXISTS = new ErrorCode(ERROR_CODE_DATA_SOURCE_START_CODE, "数据源配置不存在");

    // ========== OAuth2 客户端 =========
    Integer ERROR_CODE_OAUTH2_START_CODE = ERROR_CODE_START_CODE + 4000;

    ErrorCode OAUTH2_CLIENT_NOT_EXISTS = new ErrorCode(ERROR_CODE_OAUTH2_START_CODE, "OAuth2 客户端不存在");
    ErrorCode OAUTH2_CLIENT_EXISTS = new ErrorCode(ERROR_CODE_OAUTH2_START_CODE + 1, "OAuth2 客户端编号已存在");
    ErrorCode OAUTH2_CLIENT_DISABLE = new ErrorCode(ERROR_CODE_OAUTH2_START_CODE + 2, "OAuth2 客户端已禁用");
    ErrorCode OAUTH2_CLIENT_AUTHORIZED_GRANT_TYPE_NOT_EXISTS = new ErrorCode(ERROR_CODE_OAUTH2_START_CODE + 3, "不支持该授权类型");
    ErrorCode OAUTH2_CLIENT_SCOPE_OVER = new ErrorCode(ERROR_CODE_OAUTH2_START_CODE + 4, "授权范围过大");
    ErrorCode OAUTH2_CLIENT_REDIRECT_URI_NOT_MATCH = new ErrorCode(ERROR_CODE_OAUTH2_START_CODE + 5, "无效 redirect_uri: {}");
    ErrorCode OAUTH2_CLIENT_CLIENT_SECRET_ERROR = new ErrorCode(ERROR_CODE_OAUTH2_START_CODE + 6, "无效 client_secret: {}");
    ErrorCode OAUTH2_GRANT_CLIENT_ID_MISMATCH = new ErrorCode(ERROR_CODE_OAUTH2_START_CODE + 7, "client_id 不匹配");
    ErrorCode OAUTH2_GRANT_REDIRECT_URI_MISMATCH = new ErrorCode(ERROR_CODE_OAUTH2_START_CODE + 8, "redirect_uri 不匹配");
    ErrorCode OAUTH2_GRANT_STATE_MISMATCH = new ErrorCode(ERROR_CODE_OAUTH2_START_CODE + 9, "state 不匹配");
    ErrorCode OAUTH2_CODE_NOT_EXISTS = new ErrorCode(ERROR_CODE_OAUTH2_START_CODE + 10, "code 不存在");
    ErrorCode OAUTH2_CODE_EXPIRE = new ErrorCode(ERROR_CODE_OAUTH2_START_CODE + 11, "code 已过期");

    // ========== AUTH 模块 ==========
    Integer ERROR_CODE_AUTH_START_CODE = ERROR_CODE_START_CODE + 5000;

    ErrorCode AUTH_LOGIN_BAD_CREDENTIALS = new ErrorCode(ERROR_CODE_AUTH_START_CODE, "登录失败，账号密码不正确");
    ErrorCode AUTH_LOGIN_USER_DISABLED = new ErrorCode(ERROR_CODE_AUTH_START_CODE + 1, "登录失败，账号被禁用");
    ErrorCode AUTH_LOGIN_CAPTCHA_CODE_ERROR = new ErrorCode(ERROR_CODE_AUTH_START_CODE + 2, "验证码不正确，原因：{}");

    // ========== IMPORT 模块 ==========
    Integer ERROR_CODE_IMPORT = ERROR_CODE_START_CODE + 6000;
    ErrorCode ERROR_CODE_IMPORT_DICT = new ErrorCode(ERROR_CODE_IMPORT, "{}类型不正确");




}
