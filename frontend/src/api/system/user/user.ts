import request from '@/config/axios'

export interface UserVO {
  id: number
  username: string
  nickname: string
  deptId: number
  postIds: string[]
  email: string
  mobile: string
  sex: number
  avatar: string
  loginIp: string
  status: number
  remark: string
  loginDate: Date
  createTime: Date
}

/**
 * 删除用户
 */
export const deleted = (id) => {
  return request.delete({ url: '/system/user/deleted?id=' + id })
}

/**
 * 获取用户精简信息列表
 */
export const listAllSimple = () => {
  return request.get({ url: '/system/user/list-all-simple' })
}

/**
 * 用户分页列表
 */
export const page = (params) => {
  return request.get({ url: '/system/user/page', params })
}

/**
 * 获得导入用户模板
 */
export const getImportTemplate = () => {
  return request.download({ url: '/system/user/get-import-template' })
}

/**
 * 获得用户详情
 */
export const get = (id) => {
  return request.get({ url: '/system/user/get?id=' + id })
}

/**
 * 重置用户密码
 */
export const updatePassword = (data) => {
  return request.put({ url: '/system/user/update-password', data })
}

/**
 * 新建用户
 */
export const create = (data) => {
  return request.post({ url: '/system/user/create', data })
}

/**
 * 修改用户
 */
export const update = (data) => {
  return request.put({ url: '/system/user/update', data })
}

/**
 * 修改用户状态
 */
export const updateStatus = (data) => {
  return request.put({ url: '/system/user/update-status', data })
}

/**
 * 导出用户
 */
export const exported = (params) => {
  return request.download({ url: '/system/user/exported', params })
}
