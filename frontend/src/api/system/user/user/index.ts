import request from '@/config/axios'
/**
 * 新建用户
 */
export const create = (data) => {
  return request.post({ url: '/system/user/user/create', data })
}

/**
 * 修改用户
 */
export const update = (data) => {
  return request.put({ url: '/system/user/user/update', data })
}

/**
 * 删除用户
 */
export const delete = (id) => {
  return request.delete({ url: '/system/user/user/delete?id=' + id })
}

/**
 * 重置用户密码
 */
export const updatePassword = (data) => {
  return request.put({ url: '/system/user/user/update-password', data })
}

/**
 * 修改用户状态
 */
export const updateStatus = (data) => {
  return request.put({ url: '/system/user/user/update-status', data })
}

/**
 * 用户分页列表
 */
export const page = (params) => {
  return request.get({ url: '/system/user/user/page', params })
}

/**
 * 获取用户精简信息列表
 */

export const listAllSimple = () => {
  return request.get({ url: '/system/user/user/list-all-simple' })
}

/**
 * 获得用户详情
 */
export const get = (id) => {
  return request.get({ url: '/system/user/user/get?id=' + id })
}

/**
 * 导出用户
 */
export const export = (params) => {
  return request.download({ url: '/system/user/user/export', params })
}

/**
 * 获得导入用户模板
 */

export const getImportTemplate = () => {
  return request.download({ url: '/system/user/user/get-import-template' })
}
