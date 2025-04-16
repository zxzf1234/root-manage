/**
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
 * 社交媒体类型
 * @param WECHAT WeChat
 * @param QQ QQ
 * @param FACEBOOK FaceBook
 * @param INSTAGRAM Instagram
 * @param YOUTUBE YouTube
 * @param TELEGRAM Telegram
 * @param TWITTER Twitter
 * @param SKYPE Skype
 * @param LINKEDIN LinkedIn
 * @param ZALO ZALO
 * @param VIBER Viber
 * @param WANGWANG 旺旺
 * @param DINGDING 钉钉
 * @param TIKTOK Tiktok
 * @param LINE Line
 * @param VK VK
 */
export const CommonSocialMediaTypeEnum = {
  //WeChat
  WECHAT: 1,
  //QQ
  QQ: 2,
  //FaceBook
  FACEBOOK: 3,
  //Instagram
  INSTAGRAM: 4,
  //YouTube
  YOUTUBE: 5,
  //Telegram
  TELEGRAM: 6,
  //Twitter
  TWITTER: 7,
  //Skype
  SKYPE: 8,
  //LinkedIn
  LINKEDIN: 9,
  //ZALO
  ZALO: 10,
  //Viber
  VIBER: 11,
  //旺旺
  WANGWANG: 12,
  //钉钉
  DINGDING: 13,
  //Tiktok
  TIKTOK: 14,
  //Line
  LINE: 15,
  //VK
  VK: 16
}

/**
 * 用户类型
 * @param MEMBER 会员
 * @param ADMIN 管理员
 */
export const UserTypeEnum = {
  //会员
  MEMBER: 1,
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
 * 角色指定字段类型
 * @param CUSTOMER 客户
 * @param CUSTOMER_CONTACT 客户联系人
 */
export const SystemRoleColumnTypeEnum = {
  //客户
  CUSTOMER: 1,
  //客户联系人
  CUSTOMER_CONTACT: 2
}

/**
 * 角色标识
 * @param ROOT root
 * @param SUPER_ADMIN 超级管理员
 */
export const SystemRoleCodeEnum = {
  //root
  ROOT: 'root',
  //超级管理员
  SUPER_ADMIN: 'super_admin'
}

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
 * 升级时需要代码生成的数据库表
 * @param SYSTEM_MENU 菜单
 * @param INFRA_DATABASE_COLUMN 数据库表字段
 * @param INFRA_DATABASE_TABLE 数据库表
 * @param INFRA_DATABASE_INDEX 数据库表索引
 * @param INFRA_DATABASE_MAPPING 数据库表映射
 * @param INFRA_INTERFACE_VALIDATION 接口校验
 * @param INFRA_INTERFACE_VO_CLASS 接口子类
 * @param INFRA_INTERFACE_MODULE 接口模块
 * @param INFRA_INTERFACE 接口VO类
 * @param INFRA_INTERFACE_PARAM 接口参数
 * @param INFRA_INTERFACE_SUBCLASS 接口子类
 * @param INFRA_JOB 定时任务
 * @param INFRA_DICT_TYPE 字典类型
 * @param INFRA_DICT_DATA 字典数据
 * @param QRTZ_BLOB_TRIGGERS blog类型triggers
 * @param QRTZ_CALENDARS 以 Blob 类型存储 Quartz 的 Calendar 信息
 * @param QRTZ_CRON_TRIGGERS 存放cron类型的触发器
 * @param QRTZ_FIRED_TRIGGERS 存储已经触发的trigger相关信息
 * @param QRTZ_JOB_DETAILS 记录每个任务的详细信息
 * @param QRTZ_LOCKS 记录程序的悲观锁
 * @param QRTZ_PAUSED_TRIGGER_GRPS 存储已暂停的 Trigger 组的信息
 * @param QRTZ_SCHEDULER_STATE 记录 调度器（每个机器节点）的生命状态
 * @param QRTZ_SIMPLE_TRIGGERS 存储简单的trigger，包括重复次数，间隔，以及触发次数
 * @param QRTZ_SIMPROP_TRIGGERS 存储CalendarIntervalTrigger和DailyTimeIntervalTrigger两种类型的触发器
 * @param QRTZ_TRIGGERS 记录每个触发器的详细信息
 * @param INFRA_DICT_NO 字典编号
 */
export const InfraCodegenTableEnum = {
  //菜单
  SYSTEM_MENU: 'SYSTEM_MENU',
  //数据库表字段
  INFRA_DATABASE_COLUMN: 'INFRA_DATABASE_COLUMN',
  //数据库表
  INFRA_DATABASE_TABLE: 'INFRA_DATABASE_TABLE',
  //数据库表索引
  INFRA_DATABASE_INDEX: 'INFRA_DATABASE_INDEX',
  //数据库表映射
  INFRA_DATABASE_MAPPING: 'INFRA_DATABASE_MAPPING',
  //接口校验
  INFRA_INTERFACE_VALIDATION: 'INFRA_INTERFACE_VALIDATION',
  //接口子类
  INFRA_INTERFACE_VO_CLASS: 'INFRA_INTERFACE_VO_CLASS',
  //接口模块
  INFRA_INTERFACE_MODULE: 'INFRA_INTERFACE_MODULE',
  //接口VO类
  INFRA_INTERFACE: 'INFRA_INTERFACE',
  //接口参数
  INFRA_INTERFACE_PARAM: 'INFRA_INTERFACE_PARAM',
  //接口子类
  INFRA_INTERFACE_SUBCLASS: 'INFRA_INTERFACE_SUBCLASS',
  //定时任务
  INFRA_JOB: 'INFRA_JOB',
  //字典类型
  INFRA_DICT_TYPE: 'INFRA_DICT_TYPE',
  //字典数据
  INFRA_DICT_DATA: 'INFRA_DICT_DATA',
  //blog类型triggers
  QRTZ_BLOB_TRIGGERS: 'QRTZ_BLOB_TRIGGERS',
  //以 Blob 类型存储 Quartz 的 Calendar 信息
  QRTZ_CALENDARS: 'QRTZ_CALENDARS',
  //存放cron类型的触发器
  QRTZ_CRON_TRIGGERS: 'QRTZ_CRON_TRIGGERS',
  //存储已经触发的trigger相关信息
  QRTZ_FIRED_TRIGGERS: 'QRTZ_FIRED_TRIGGERS',
  //记录每个任务的详细信息
  QRTZ_JOB_DETAILS: 'QRTZ_JOB_DETAILS',
  //记录程序的悲观锁
  QRTZ_LOCKS: 'QRTZ_LOCKS',
  //存储已暂停的 Trigger 组的信息
  QRTZ_PAUSED_TRIGGER_GRPS: 'QRTZ_PAUSED_TRIGGER_GRPS',
  //记录 调度器（每个机器节点）的生命状态
  QRTZ_SCHEDULER_STATE: 'QRTZ_SCHEDULER_STATE',
  //存储简单的trigger，包括重复次数，间隔，以及触发次数
  QRTZ_SIMPLE_TRIGGERS: 'QRTZ_SIMPLE_TRIGGERS',
  //存储CalendarIntervalTrigger和DailyTimeIntervalTrigger两种类型的触发器
  QRTZ_SIMPROP_TRIGGERS: 'QRTZ_SIMPROP_TRIGGERS',
  //记录每个触发器的详细信息
  QRTZ_TRIGGERS: 'QRTZ_TRIGGERS',
  //字典编号
  INFRA_DICT_NO: 'INFRA_DICT_NO'
}

/**
 * 不需要代码生成的函数
 * @param DICTNOSERVICEIMPLPRODUCENO 字典编号生成编号
 */
export const InfraCodegenExcludeFunctionEnum = {
  //字典编号生成编号
  DICTNOSERVICEIMPLPRODUCENO: 'DictNoServiceImpl.produceNo'
}

/**
 * API 异常数据的处理状态
 * @param INIT 未处理
 * @param DONE 已处理
 * @param IGNORE 已忽略
 */
export const InfraApiErrorLogProcessStatusEnum = {
  //未处理
  INIT: 0,
  //已处理
  DONE: 1,
  //已忽略
  IGNORE: 2
}

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

// ========== MAILBOX 模块 ==========

/**
 * 邮件状态
 * @param RECEIVED 已收件
 * @param SEND 已发送
 * @param DRAFT 草稿
 * @param JUNK 垃圾
 * @param DELETED 已删除
 */
export const MailboxMailStatusEnum = {
  //已收件
  RECEIVED: 1,
  //已发送
  SEND: 2,
  //草稿
  DRAFT: 3,
  //垃圾
  JUNK: 4,
  //已删除
  DELETED: 5
}

/**
 * 邮件资源类型
 * @param ATTACHMENT 附件
 * @param INLINE 内联
 */
export const MailboxMailResourceTypeEnum = {
  //附件
  ATTACHMENT: 1,
  //内联
  INLINE: 2
}

/**
 * 邮件类型
 * @param SEND 发送
 * @param RECEIVE 接收
 * @param DRAFT 草稿
 */
export const MailboxMailTypeEnum = {
  //发送
  SEND: 1,
  //接收
  RECEIVE: 2,
  //草稿
  DRAFT: 3
}

/**
 * 邮件文件夹分类
 * @param ACCOUNT 账号
 * @param RECEIVE 收件
 * @param DRAFT 草稿
 * @param SEND 发件
 * @param DELETED 已删除
 * @param JUNK 垃圾
 * @param LABEL 标签
 * @param OTHER 其它
 */
export const MailboxFolderClassEnum = {
  //账号
  ACCOUNT: 1,
  //收件
  RECEIVE: 2,
  //草稿
  DRAFT: 3,
  //发件
  SEND: 4,
  //已删除
  DELETED: 5,
  //垃圾
  JUNK: 6,
  //标签
  LABEL: 7,
  //其它
  OTHER: 8
}

/**
 * 邮件文件夹类型
 * @param ACCOUNT 账号文件夹
 * @param INTERNAL 内置文件夹
 * @param EDIT 可编辑文件夹
 * @param LABEL 标签文件夹
 */
export const MailboxFolderTypeEnum = {
  //账号文件夹
  ACCOUNT: 1,
  //内置文件夹
  INTERNAL: 2,
  //可编辑文件夹
  EDIT: 3,
  //标签文件夹
  LABEL: 4
}

/**
 * 邮箱协议类型
 * @param IMAP IMAP
 * @param POP POP
 */
export const MailboxProtocolEnum = {
  //IMAP
  IMAP: 2,
  //POP
  POP: 3
}

// ========== SETTING 模块 ==========

/**
 * 业务模块
 * @param CUSTOMER 客户
 * @param CUSTOMER_CONTACT 客户联系人
 * @param CUSTOMER_FOLLOW 客户跟进
 */
export const SettingBusinessModuleEnum = {
  //客户
  CUSTOMER: 1,
  //客户联系人
  CUSTOMER_CONTACT: 2,
  //客户跟进
  CUSTOMER_FOLLOW: 3
}

// ========== CUSTOMER 模块 ==========

/**
 * 客户跟进资源类型
 * @param IMAGE 图片
 * @param ATTACHMENT 附件
 * @param POSITION_IMAGE 定位图片
 */
export const CustomerFollowResourceTypeEnum = {
  //图片
  IMAGE: 1,
  //附件
  ATTACHMENT: 2,
  //定位图片
  POSITION_IMAGE: 3
}

/**
 * 放入公海原因
 * @param NO_PROGRESS 开发长期无进展
 * @param RESOURCE_INTEGRATION 内部资源整合
 * @param CONTACT_INVALID 联系方式无效
 * @param NO_POTENTIAL 潜力太小，达不到MOQ
 * @param FACTORY_AGENT 该公司为工厂代理
 * @param NO_CHINA 目前不从中国采购
 * @param NO_INDUSTRY 非本行业内客户
 * @param BANKRUPTCY 公司破产
 * @param CHANGE_CAREERS 公司转行
 * @param INFORMATION 资讯类公司
 * @param INQUIRY_INVALID 询盘无效
 * @param OTHER 其他
 */
export const CustomerPutInReasonEnum = {
  //开发长期无进展
  NO_PROGRESS: 1,
  //内部资源整合
  RESOURCE_INTEGRATION: 2,
  //联系方式无效
  CONTACT_INVALID: 3,
  //潜力太小，达不到MOQ
  NO_POTENTIAL: 4,
  //该公司为工厂代理
  FACTORY_AGENT: 5,
  //目前不从中国采购
  NO_CHINA: 6,
  //非本行业内客户
  NO_INDUSTRY: 7,
  //公司破产
  BANKRUPTCY: 8,
  //公司转行
  CHANGE_CAREERS: 9,
  //资讯类公司
  INFORMATION: 10,
  //询盘无效
  INQUIRY_INVALID: 11,
  //其他
  OTHER: 12
}

// ========== ORDER 模块 ==========

/**
 * 销售订单状态
 * @param UNCHECK 待审核
 * @param DONE 通过
 * @param CANCEL 取消
 */
export const SalesOrderStatusEnum = {
  //待审核
  UNCHECK: 1,
  //通过
  DONE: 2,
  //取消
  CANCEL: 3
}

// ========== MARKET 模块 ==========

/**
 * 营销邮件无效类型
 * @param HARD 硬退信
 * @param SORT 硬退信
 */
export const MarketTaskMailInvalidTypeEnum = {
  //硬退信
  HARD: 1,
  //硬退信
  SORT: 2
}

/**
 * 邮件营销任务状态
 * @param DRAFT 草稿
 * @param UNEXECUTED 待执行
 * @param EXECUTING 执行中
 * @param DONE 完成
 * @param FAIL 发送失败
 * @param CANCEL 已取消
 */
export const MarketTaskStatusEnum = {
  //草稿
  DRAFT: 6,
  //待执行
  UNEXECUTED: 1,
  //执行中
  EXECUTING: 2,
  //完成
  DONE: 3,
  //发送失败
  FAIL: 4,
  //已取消
  CANCEL: 5
}

/**
 * 营销模板类型
 * @param PERSON 个人
 * @param PUBLIC 公共
 */
export const MarketTemplateTypeEnum = {
  //个人
  PERSON: 1,
  //公共
  PUBLIC: 2
}
