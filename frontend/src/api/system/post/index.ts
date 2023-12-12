import request from '@/config/axios'

export interface PostVO {
  id?: number
  name: string
  code: string
  sort: number
  status: number
  remark: string
  createTime?: Date
}

/**
 * 创建岗位
 */
export const create = (data) => {
  return request.post({ url: '/system/post/create', data })
}

/**
 * 修改岗位
 */
export const update = (data) => {
  return request.put({ url: '/system/post/update', data })
}

/**
 * 删除岗位
 */
export const deleted = (id) => {
  return request.delete({ url: '/system/post/deleted?id=' + id })
}

/**
 * 获得单个岗位信息
 */
export const get = (id) => {
  return request.get({ url: '/system/post/get?id=' + id })
}

/**
 * 获取岗位精简信息列表
 */
export const listAllSimple = () => {
  return request.get({ url: '/system/post/list-all-simple' })
}

/**
 * 导出岗位信息
 */
export const exported = (params) => {
  return request.download({ url: '/system/post/exported', params })
}

/**
 * 获得岗位分页列表
 */
export const page = (params) => {
  return request.get({ url: '/system/post/page', params })
}
