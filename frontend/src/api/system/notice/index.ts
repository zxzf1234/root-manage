import request from '@/config/axios'

export interface NoticeVO {
  id: number | undefined
  title: string
  type: number
  content: string
  status: number
  remark: string
  creator: string
  createTime: Date
}

/**
 * 创建通知公告
 */
export const create = (data) => {
  return request.post({ url: '/system/notice/create', data })
}

/**
 * 修改通知公告
 */
export const update = (data) => {
  return request.put({ url: '/system/notice/update', data })
}

/**
 * 删除通知公告
 */
export const deleted = (id) => {
  return request.delete({ url: '/system/notice/deleted?id=' + id })
}

/**
 * 分页获取通知公告列表
 */
export const page = (params) => {
  return request.get({ url: '/system/notice/page', params })
}

/**
 * 获得单个通知公告
 */
export const get = (id) => {
  return request.get({ url: '/system/notice/get?id=' + id })
}
