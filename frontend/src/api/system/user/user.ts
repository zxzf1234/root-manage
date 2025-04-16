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
  return request.delete({ url: '/system/user/user/deleted?id=' + id })
}

/**
 * 获取用户精简信息列表
 */
export const listAllSimple = () => {
  return request.get({ url: '/system/user/user/list-all-simple' })
}

/**
 * 用户分页列表
 */
export const page = (params) => {
  return request.get({ url: '/system/user/user/page', params })
}

/**
 * 获得导入用户模板
 */
export const getImportTemplate = () => {
  return request.download({ url: '/system/useruser/get-import-template' })
}

/**
 * 导入用户
 */
export const importExcel = (data) => {
  return request.upload({ url: '/system/user/user/import', data })
}

/**
 * 获得用户详情
 */
export const get = (id) => {
  return request.get({ url: '/system/user/user/get?id=' + id })
}

/**
 * 重置用户密码
 */
export const updatePassword = (data) => {
  return request.put({ url: '/system/user/user/update-password', data })
}

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
 * 修改用户状态
 */
export const updateStatus = (data) => {
  return request.put({ url: '/system/user/user/update-status', data })
}

/**
 * 导出用户
 */
export const exported = (params) => {
  return request.download({ url: '/system/user/user/exported', params })
}

/**
 * 根据部门获取员工
 */
export const getByDept = (deptId) => {
  return request.get({ url: '/system/user/user/get-by-dept?deptId=' + deptId })
}

/**
 * 获取当前用户有权限的员工
 */
export const getOwnerUser = () => {
  return request.get({ url: '/system/user/user/get-owner-user' })
}
