package cn.iocoder.yudao.service.enums;

/**
 * System 字典类型的枚举类
 *
 * @author 芋道源码
 */
public interface DictTypeConstants {

    // ========== COMMON 模块 ==========
    String COMMON_SEX = "common_sex"; // 用户性别
    String COMMON_STATUS = "common_status"; // 系统状态
    String USER_TYPE = "user_type"; // 用户类型

    // ========== SYSTEM 模块 ==========
    String SYSTEM_ROLE_CODE = "system_role_code"; // 角色标识
    String SYSTEM_ROLE_TYPE = "system_role_type"; // 角色类型
    String SYSTEM_OPERATE_TYPE = "system_operate_type"; // 操作类型
    String SYSTEM_LOGIN_TYPE = "system_login_type"; // 登录日志的类型
    String SYSTEM_LOGIN_RESULT = "system_login_result"; // 登录结果
    String ERROR_CODE_TYPE = "system_error_code_type"; // 错误码的类型枚举
    String SYSTEM_SMS_CHANNEL_CODE = "system_sms_channel_code"; // 短信渠道编码
    String SYSTEM_SMS_TEMPLATE_TYPE = "system_sms_template_type"; // 短信模板类型
    String SYSTEM_SMS_SEND_STATUS = "system_sms_send_status"; // 短信发送状态
    String SYSTEM_SMS_RECEIVE_STATUS = "system_sms_receive_status"; // 短信接收状态

    // ========== INFRA 模块 ==========
    String INFRA_FILE_STORAGE = "infra_file_storage"; // 文件存储器
    String INFRA_REDIS_TIMEOUT_TYPE = "infra_redis_timeout_type"; // Redis 超时类型
    String INFRA_JOB_STATUS = "infra_job_status"; // 定时任务状态的枚举
    String INFRA_JOB_LOG_STATUS = "infra_job_log_status"; // 定时任务日志状态的枚举
    String INFRA_API_ERROR_LOG_PROCESS_STATUS = "infra_api_error_log_process_status"; // API 错误日志的处理状态的枚举
    String INFRA_CONFIG_TYPE = "infra_config_type"; // 参数配置类型
    String INFRA_BOOLEAN_STRING = "infra_boolean_string"; // Boolean 是否类型

}
