/**
 * Created by 芋道源码
 *
 * 枚举类
 */

/**
 * 菜单的类型枚举
 */
export const SystemMenuTypeEnum = {
  DIR: 1, // 目录
  MENU: 2, // 菜单
  BUTTON: 3 // 按钮
}

/**
 * 数据权限的范围枚举
 */
export const SystemDataScopeEnum = {
  ALL: 1, // 全部数据权限
  DEPT_CUSTOM: 2, // 指定部门数据权限
  DEPT_ONLY: 3, // 部门数据权限
  DEPT_AND_CHILD: 4, // 部门及以下数据权限
  DEPT_SELF: 5 // 仅本人数据权限
}

/**
 * 任务状态的枚举
 */
export const InfraJobStatusEnum = {
  INIT: 0, // 初始化中
  NORMAL: 1, // 运行中
  STOP: 2 // 暂停运行
}

/**
 * API 异常数据的处理状态
 */
export const InfraApiErrorLogProcessStatusEnum = {
  INIT: 0, // 未处理
  DONE: 1, // 已处理
  IGNORE: 2 // 已忽略
}

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
