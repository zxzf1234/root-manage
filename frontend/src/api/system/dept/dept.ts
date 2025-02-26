import request from '@/config/axios'

export interface DeptVO {
  id?: number
  name: string
  parentId: number
  status: number
  sort: number
  leaderUserId: number
  phone: string
  email: string
  createTime: Date
}

/**
 * 获取部门列表
 */
export const list = (params) => {
  return request.get({ url: '/system/dept/dept/list', params })
}

/**
 * 获取部门精简信息列表
 */
export const listAllSimple = () => {
  return request.get({ url: '/system/dept/dept/list-all-simple' })
}

/**
 * 更新部门
 */
export const update = (data) => {
  return request.put({ url: '/system/dept/dept/update', data })
}

/**
 * 创建部门
 */
export const create = (data) => {
  return request.post({ url: '/system/dept/dept/create', data })
}

/**
 * 获得单个部门信息
 */
export const get = (id) => {
  return request.get({ url: '/system/dept/dept/get?id=' + id })
}

/**
 * 删除部门
 */
export const deleted = (id) => {
  return request.delete({ url: '/system/dept/dept/deleted?id=' + id })
}
