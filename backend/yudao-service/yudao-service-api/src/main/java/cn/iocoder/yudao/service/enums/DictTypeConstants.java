package cn.iocoder.yudao.service.enums;

/**
 * System 字典类型的枚举类
 *
 * @author 芋道源码
 */
public interface DictTypeConstants {

    // ========== COMMON 模块 ==========
    String USER_TYPE = "user_type"; // 用户类型
    String COMMON_SEX = "common_sex"; // 用户性别
    String COMMON_STATUS = "common_status"; // 系统状态

    // ========== SYSTEM 模块 ==========
    String SYSTEM_MENU_TYPE = "system_menu_type"; // 菜单类型
    String SYSTEM_NOTIFY_TEMPLATE_TYPE = "system_notify_template_type"; // 站内信模版的类型
    String SYSTEM_NOTICE_TYPE = "system_notice_type"; // 通知类型
    String SYSTEM_OPERATE_TYPE = "system_operate_type"; // 操作类型
    String SYSTEM_LOGIN_RESULT = "system_login_result"; // 登陆结果
    String SYSTEM_LOGIN_TYPE = "system_login_type"; // 登陆日志的类型
    String SYSTEM_DATA_SCOPE = "system_data_scope"; // 数据权限类型
    String SYSTEM_SMS_TEMPLATE_TYPE = "system_sms_template_type"; // 短信模板的类型
    String SYSTEM_SMS_CHANNEL_CODE = "system_sms_channel_code"; // 短信渠道编码
    String SYSTEM_SMS_RECEIVE_STATUS = "system_sms_receive_status"; // 短信接收状态
    String SYSTEM_SMS_SEND_STATUS = "system_sms_send_status"; // 短信发送状态
    String SYSTEM_MAIL_SEND_STATUS = "system_mail_send_status"; // 邮件发送状态
    String SYSTEM_ROLE_CODE = "system_role_code"; // 角色标识
    String SYSTEM_ROLE_TYPE = "system_role_type"; // 角色类型
    String ERROR_CODE_TYPE = "system_error_code_type"; // 错误码的类型枚举

    // ========== INFRA 模块 ==========
    String INFRA_CODEGEN_EXCLUDE_FUNCTION = "infra_codegen_exclude_function"; // 不需要代码生成的函数
    String INFRA_CODEGEN_TABLE = "infra_codegen_table"; // 升级时需要代码生成的数据库表
    String INFRA_ERROR_CODE_TYPE = "infra_error_code_type"; // 错误码的类型
    String INFRA_JOB_STATUS = "infra_job_status"; // 定时任务状态
    String INFRA_JOB_LOG_STATUS = "infra_job_log_status"; // 定时任务日志状态
    String INFRA_OAUTH2_GRANT_TYPE = "infra_oauth2_grant_type"; // OAuth 2.0 授权类型
    String INFRA_API_ERROR_LOG_PROCESS_STATUS = "infra_api_error_log_process_status"; // API 异常数据的处理状态
    String INFRA_REDIS_TIMEOUT_TYPE = "infra_redis_timeout_type"; // Redis 超时类型
    String INFRA_CONFIG_TYPE = "infra_config_type"; // 参数类型
    String INFRA_BOOLEAN_STRING = "infra_boolean_string"; // Boolean 是否类型
    String INFRA_FILE_STORAGE = "infra_file_storage"; // 文件存储器

}
