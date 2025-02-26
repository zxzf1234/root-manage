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
  return request.post({ url: '/system/post/post/create', data })
}

/**
 * 修改岗位
 */
export const update = (data) => {
  return request.put({ url: '/system/post/post/update', data })
}

/**
 * 删除岗位
 */
export const deleted = (id) => {
  return request.delete({ url: '/system/post/post/deleted?id=' + id })
}

/**
 * 获得单个岗位信息
 */
export const get = (id) => {
  return request.get({ url: '/system/post/post/get?id=' + id })
}

/**
 * 获取岗位精简信息列表
 */
export const listAllSimple = () => {
  return request.get({ url: '/system/post/post/list-all-simple' })
}

/**
 * 导出岗位信息
 */
export const exported = (params) => {
  return request.download({ url: '/system/post/post/exported', params })
}

/**
 * 获得岗位分页列表
 */
export const page = (params) => {
  return request.get({ url: '/system/post/post/page', params })
}

/**
 * 获取岗位导入模板
 */
export const getImportExcelTemplate = () => {
  return request.download({ url: '/system/post/post/get-import-excel-template' })
}

/**
 * 岗位导入
 */
export const importExcel = (data) => {
  return request.upload({ url: '/system/post/post/import-excel', data })
}
