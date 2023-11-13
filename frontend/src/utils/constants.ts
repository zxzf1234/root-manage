/**
 * Created by 芋道源码
 *
 * 枚举类
 */

/**
 * 用户的社交平台的类型枚举
 */
export const SystemUserSocialTypeEnum = {
  DINGTALK: {
    title: '钉钉',
    type: 20,
    source: 'dingtalk',
    img: 'https://s1.ax1x.com/2022/05/22/OzMDRs.png'
  },
  WECHAT_ENTERPRISE: {
    title: '企业微信',
    type: 30,
    source: 'wechat_enterprise',
    img: 'https://s1.ax1x.com/2022/05/22/OzMrzn.png'
  }
}

// ========== COMMON 模块 ==========

/**
 * 用户类型
 * @param MENBER 会员
 * @param ADMIN 管理员
 */
export const UserTypeEnum = {
  //会员
  MENBER: 1,
  //管理员
  ADMIN: 2
}

/**
 * 用户性别
 * @param MALE 男
 * @param FEMALE 女
 */
export const CommonSexEnum = {
  //男
  MALE: 1,
  //女
  FEMALE: 2
}

/**
 * 系统状态
 * @param ENABLE 开启
 * @param DISABLED 关闭
 */
export const CommonStatusEnum = {
  //开启
  ENABLE: 0,
  //关闭
  DISABLED: 1
}

// ========== SYSTEM 模块 ==========

/**
 * 菜单类型
 * @param DIR 目录
 * @param MENU 菜单
 * @param BUTTON 按钮
 */
export const SystemMenuTypeEnum = {
  //目录
  DIR: 1,
  //菜单
  MENU: 2,
  //按钮
  BUTTON: 3
}

/**
 * 站内信模版的类型
 * @param ANNOUNCEMENT 通知公告
 * @param SYSTEM 系统消息
 */
export const SystemNotifyTemplateTypeEnum = {
  //通知公告
  ANNOUNCEMENT: 1,
  //系统消息
  SYSTEM: 2
}

/**
 * 通知类型
 * @param NOTICE 通知
 * @param ANNOUNCEMENT 公告
 */
export const SystemNoticeTypeEnum = {
  //通知
  NOTICE: 1,
  //公告
  ANNOUNCEMENT: 2
}

/**
 * 操作类型
 * @param OTHER 其它
 * @param QUERY 查询
 * @param INSERT 新增
 * @param MODIFY 修改
 * @param DELETE 删除
 * @param EXPORT 导出
 * @param IMPORT 导入
 */
export const SystemOperateTypeEnum = {
  //其它
  OTHER: 0,
  //查询
  QUERY: 1,
  //新增
  INSERT: 2,
  //修改
  MODIFY: 3,
  //删除
  DELETE: 4,
  //导出
  EXPORT: 5,
  //导入
  IMPORT: 6
}

/**
 * 登陆结果
 * @param SUCCESS 成功
 * @param BAD_CREDENTIALS 账号或密码不正确
 * @param UNKNOWN_EXCEPTION 未知异常
 * @param USER_DISABLED 用户被禁用
 * @param CAPTCHA_NOT_FOUND 验证码不存在
 * @param CAPTCHA_CODE_ERROR 验证码不正确
 */
export const SystemLoginResultEnum = {
  //成功
  SUCCESS: 0,
  //账号或密码不正确
  BAD_CREDENTIALS: 10,
  //未知异常
  UNKNOWN_EXCEPTION: 100,
  //用户被禁用
  USER_DISABLED: 20,
  //验证码不存在
  CAPTCHA_NOT_FOUND: 30,
  //验证码不正确
  CAPTCHA_CODE_ERROR: 31
}

/**
 * 登陆日志的类型
 * @param LOGIN_USERNAME 账号登录
 * @param LOGIN_SOCIAL 社交登录
 * @param LOGIN_MOBILE 手机登录
 * @param LOGIN_SMS 短信登陆
 * @param LOGOUT_SELF 主动登出
 * @param LOGOUT_DELETE 强制登出
 */
export const SystemLoginTypeEnum = {
  //账号登录
  LOGIN_USERNAME: 100,
  //社交登录
  LOGIN_SOCIAL: 101,
  //手机登录
  LOGIN_MOBILE: 103,
  //短信登陆
  LOGIN_SMS: 104,
  //主动登出
  LOGOUT_SELF: 200,
  //强制登出
  LOGOUT_DELETE: 202
}

/**
 * 数据权限类型
 * @param ALL 全部数据权限
 * @param DEPT_CUSTOM 指定部门数据权限
 * @param DEPT_ONLY 本部门数据权限
 * @param DEPT_AND_CHILD 本部门及以下数据权限
 * @param SELF 仅本人数据权限
 */
export const SystemDataScopeEnum = {
  //全部数据权限
  ALL: 1,
  //指定部门数据权限
  DEPT_CUSTOM: 2,
  //本部门数据权限
  DEPT_ONLY: 3,
  //本部门及以下数据权限
  DEPT_AND_CHILD: 4,
  //仅本人数据权限
  SELF: 5
}

/**
 * 短信模板的类型
 * @param VERIFICATION_CODE 验证码
 * @param NOTICE 通知
 * @param PROMOTION 营销
 */
export const SystemSmsTemplateTypeEnum = {
  //验证码
  VERIFICATION_CODE: 1,
  //通知
  NOTICE: 2,
  //营销
  PROMOTION: 3
}

/**
 * 短信渠道编码
 * @param ALIYUN 阿里云
 * @param DEBUG_DING_TALK 调试(钉钉)
 */
export const SystemSmsChannelCodeEnum = {
  //阿里云
  ALIYUN: 'ALIYUN',
  //调试(钉钉)
  DEBUG_DING_TALK: 'DEBUG_DING_TALK'
}

/**
 * 短信接收状态
 * @param INIT 初始化
 * @param SUCCESS 接收成功
 * @param FAILURE 接收失败
 */
export const SystemSmsReceiveStatusEnum = {
  //初始化
  INIT: 0,
  //接收成功
  SUCCESS: 10,
  //接收失败
  FAILURE: 20
}

/**
 * 短信发送状态
 * @param INIT 初始化
 * @param SUCCESS 发送成功
 * @param FAILURE 发送失败
 * @param IGNORE 不发送
 */
export const SystemSmsSendStatusEnum = {
  //初始化
  INIT: 0,
  //发送成功
  SUCCESS: 10,
  //发送失败
  FAILURE: 20,
  //不发送
  IGNORE: 30
}

/**
 * 邮件发送状态
 * @param INIT 初始化
 * @param SUCCESS 发送成功
 * @param FAILURE 发送失败
 * @param IGNORE 不发送
 */
export const SystemMailSendStatusEnum = {
  //初始化
  INIT: 0,
  //发送成功
  SUCCESS: 10,
  //发送失败
  FAILURE: 20,
  //不发送
  IGNORE: 30
}

/**
 * 角色标识
 * @param SUPER_ADMIN 超级管理员
 * @param TENANT_ADMIN 租户管理员
 */
export const SystemRoleCodeEnum = {
  //超级管理员
  SUPER_ADMIN: 'super_admin',
  //租户管理员
  TENANT_ADMIN: 'tenant_admin'
}

/**
 * 角色类型
 * @param SYSTEM 内置
 * @param CUSTOM 自定义
 */
export const SystemRoleTypeEnum = {
  //内置
  SYSTEM: 1,
  //自定义
  CUSTOM: 2
}

// ========== INFRA 模块 ==========

/**
 * 错误码的类型
 * @param AUTO_GENERATION 自动生成
 * @param MANUAL_OPERATION 手动编辑
 */
export const InfraErrorCodeTypeEnum = {
  //自动生成
  AUTO_GENERATION: 1,
  //手动编辑
  MANUAL_OPERATION: 2
}

/**
 * 定时任务状态
 * @param INIT 初始化中
 * @param NORMAL 正常
 * @param STOP 暂停
 */
export const InfraJobStatusEnum = {
  //初始化中
  INIT: 0,
  //正常
  NORMAL: 1,
  //暂停
  STOP: 2
}

/**
 * 定时任务日志状态
 * @param RUNNING 运行中
 * @param SUCCESS 成功
 * @param FAILURE 失败
 */
export const InfraJobLogStatusEnum = {
  //运行中
  RUNNING: 0,
  //成功
  SUCCESS: 1,
  //失败
  FAILURE: 2
}

/**
 * OAuth 2.0 授权类型
 * @param PASSWORD password
 * @param AUTHORIZATION_CODE authorization_code
 * @param IMPLICIT implicit
 * @param CLIENT_CREDENTIALS client_credentials
 * @param REFRESH_TOKEN refresh_token
 */
export const InfraOauth2GrantTypeEnum = {
  //password
  PASSWORD: 'password',
  //authorization_code
  AUTHORIZATION_CODE: 'authorization_code',
  //implicit
  IMPLICIT: 'implicit',
  //client_credentials
  CLIENT_CREDENTIALS: 'client_credentials',
  //refresh_token
  REFRESH_TOKEN: 'refresh_token'
}

/**
 * API 异常数据的处理状态
 * @param UNPROCESSED 未处理
 * @param PROCESSED 已处理
 * @param IGNORE 已忽略
 */
export const InfraApiErrorLogProcessStatusEnum = {
  //未处理
  UNPROCESSED: 0,
  //已处理
  PROCESSED: 1,
  //已忽略
  IGNORE: 2
}

/**
 * Redis 超时类型
 * @param NEVER 永不超时
 * @param DYNAMIC 动态超时
 * @param FIX 固定超时
 */
export const InfraRedisTimeoutTypeEnum = {
  //永不超时
  NEVER: 1,
  //动态超时
  DYNAMIC: 2,
  //固定超时
  FIX: 3
}

/**
 * 参数类型
 * @param SYSTEM 系统内置
 * @param CUSTOM 自定义
 */
export const InfraConfigTypeEnum = {
  //系统内置
  SYSTEM: 1,
  //自定义
  CUSTOM: 2
}

/**
 * Boolean 是否类型
 * @param FALSE 否
 * @param TRUE 是
 */
export const InfraBooleanStringEnum = {
  //否
  FALSE: 'false',
  //是
  TRUE: 'true'
}

/**
 * 文件存储器
 * @param DATABASE 数据库
 * @param LOCAL 本地磁盘
 * @param FTP FTP 服务器
 * @param SFTP SFTP 服务器
 * @param OBJECT S3 对象存储
 */
export const InfraFileStorageEnum = {
  //数据库
  DATABASE: 1,
  //本地磁盘
  LOCAL: 10,
  //FTP 服务器
  FTP: 11,
  //SFTP 服务器
  SFTP: 12,
  //S3 对象存储
  OBJECT: 20
}
