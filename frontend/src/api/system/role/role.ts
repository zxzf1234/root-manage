import request from '@/config/axios'

export interface RoleVO {
  id: number
  name: string
  code: string
  sort: number
  status: number
  type: number
  dataScope: number
  dataScopeDeptIds: number[]
  createTime: Date
}

/**
 * 创建角色
 */
export const create = (data) => {
  return request.post({ url: '/system/role/create', data })
}

/**
 * 修改角色
 */
export const update = (data) => {
  return request.put({ url: '/system/role/update', data })
}

/**
 * 修改角色状态
 */
export const updateStatus = (data) => {
  return request.put({ url: '/system/role/update-status', data })
}

/**
 * 删除角色
 */
export const deleted = (id) => {
  return request.delete({ url: '/system/role/deleted?id=' + id })
}

/**
 * 获得单个角色信息
 */
export const get = (id) => {
  return request.get({ url: '/system/role/get?id=' + id })
}

/**
 * 获取角色信息-分页
 */
export const page = (params) => {
  return request.get({ url: '/system/role/page', params })
}

/**
 * 获取角色精简信息列表
 */
export const listAllSimple = () => {
  return request.get({ url: '/system/role/list-all-simple' })
}

/**
 * 导出角色信息
 */
export const exported = (params) => {
  return request.download({ url: '/system/role/exported', params })
}
