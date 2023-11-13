/**
 * hfz 数据字典工具类
 */
import { useDictStoreWithOut } from '@/store/modules/dict'
import { ElementPlusInfoType } from '@/types/elementPlus'

const dictStore = useDictStoreWithOut()

/**
 * 获取 dictType 对应的数据字典数组
 *
 * @param dictType 数据类型
 * @returns {*|Array} 数据字典数组
 */
export interface DictDataType {
  dictType: string
  label: string
  value: string | number | boolean
  colorType: ElementPlusInfoType | ''
  cssClass: string
}

export const getDictOptions = (dictType: string) => {
  return dictStore.getDictByType(dictType) || []
}

export const getIntDictOptions = (dictType: string) => {
  const dictOption: DictDataType[] = []
  const dictOptions: DictDataType[] = getDictOptions(dictType)
  dictOptions.forEach((dict: DictDataType) => {
    dictOption.push({
      ...dict,
      value: parseInt(dict.value + '')
    })
  })

  return dictOption
}

export const getStrDictOptions = (dictType: string) => {
  const dictOption: DictDataType[] = []
  const dictOptions: DictDataType[] = getDictOptions(dictType)
  dictOptions.forEach((dict: DictDataType) => {
    dictOption.push({
      ...dict,
      value: dict.value + ''
    })
  })
  return dictOption
}

export const getBoolDictOptions = (dictType: string) => {
  const dictOption: DictDataType[] = []
  const dictOptions: DictDataType[] = getDictOptions(dictType)
  dictOptions.forEach((dict: DictDataType) => {
    dictOption.push({
      ...dict,
      value: dict.value + '' === 'true'
    })
  })
  return dictOption
}

export const getDictObj = (dictType: string, value: any) => {
  const dictOptions: DictDataType[] = getDictOptions(dictType)

  dictOptions.forEach((dict: DictDataType) => {
    if (dict.value === value.toString()) {
      return dict
    }
  })
}

/**
 * 获得字典数据的文本展示
 *
 * @param dictType 字典类型
 * @param value 字典数据的值
 */
export const getDictLabel = (dictType: string, value: any) => {
  const dictOptions: DictDataType[] = getDictOptions(dictType)
  const dictLabel = ref('')
  dictOptions.forEach((dict: DictDataType) => {
    if (dict.value === value) {
      dictLabel.value = dict.label
    }
  })
  return dictLabel.value
}

export enum DICT_TYPE {
  // ========== COMMON 模块 ==========
  USER_TYPE = 'user_type', // 用户类型
  COMMON_SEX = 'common_sex', // 用户性别
  COMMON_STATUS = 'common_status', // 系统状态

  // ========== SYSTEM 模块 ==========
  SYSTEM_MENU_TYPE = 'system_menu_type', // 菜单类型
  SYSTEM_NOTIFY_TEMPLATE_TYPE = 'system_notify_template_type', // 站内信模版的类型
  SYSTEM_NOTICE_TYPE = 'system_notice_type', // 通知类型
  SYSTEM_OPERATE_TYPE = 'system_operate_type', // 操作类型
  SYSTEM_LOGIN_RESULT = 'system_login_result', // 登陆结果
  SYSTEM_LOGIN_TYPE = 'system_login_type', // 登陆日志的类型
  SYSTEM_DATA_SCOPE = 'system_data_scope', // 数据权限类型
  SYSTEM_SMS_TEMPLATE_TYPE = 'system_sms_template_type', // 短信模板的类型
  SYSTEM_SMS_CHANNEL_CODE = 'system_sms_channel_code', // 短信渠道编码
  SYSTEM_SMS_RECEIVE_STATUS = 'system_sms_receive_status', // 短信接收状态
  SYSTEM_SMS_SEND_STATUS = 'system_sms_send_status', // 短信发送状态
  SYSTEM_MAIL_SEND_STATUS = 'system_mail_send_status', // 邮件发送状态
  SYSTEM_ROLE_CODE = 'system_role_code', // 角色标识
  SYSTEM_ROLE_TYPE = 'system_role_type', // 角色类型

  // ========== INFRA 模块 ==========
  INFRA_CODEGEN_TABLE = 'infra_codegen_table', // 升级时需要代码生成的数据库表
  INFRA_ERROR_CODE_TYPE = 'infra_error_code_type', // 错误码的类型
  INFRA_JOB_STATUS = 'infra_job_status', // 定时任务状态
  INFRA_JOB_LOG_STATUS = 'infra_job_log_status', // 定时任务日志状态
  INFRA_OAUTH2_GRANT_TYPE = 'infra_oauth2_grant_type', // OAuth 2.0 授权类型
  INFRA_API_ERROR_LOG_PROCESS_STATUS = 'infra_api_error_log_process_status', // API 异常数据的处理状态
  INFRA_REDIS_TIMEOUT_TYPE = 'infra_redis_timeout_type', // Redis 超时类型
  INFRA_CONFIG_TYPE = 'infra_config_type', // 参数类型
  INFRA_BOOLEAN_STRING = 'infra_boolean_string', // Boolean 是否类型
  INFRA_FILE_STORAGE = 'infra_file_storage' // 文件存储器
}
