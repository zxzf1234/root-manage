import request from '@/config/axios'

export interface NotifyMessageVO {
  id: number
  userId: number
  userType: number
  templateId: number
  templateCode: string
  templateNickname: string
  templateContent: string
  templateType: number
  templateParams: string
  readStatus: boolean
  readTime: Date
}

/**
 * 获得单个站内信消息
 */
export const get = (id) => {
  return request.get({ url: '/system/notify/notify-message/get?id=' + id })
}

/**
 * 获得站内信分页
 */
export const page = (params) => {
  return request.get({ url: '/system/notify/notify-message/page', params })
}

/**
 * 获得我的站内信分页
 */
export const myPage = (params) => {
  return request.get({ url: '/system/notify/notify-message/my-page', params })
}

/**
 * 标记站内信为已读
 */
export const updateRead = (ids) => {
  return request.put({ url: '/system/notify/notify-message/update-read?ids=' + ids })
}

/**
 * 标记所有站内信为已读
 */
export const updateAllRead = () => {
  return request.put({ url: '/system/notify/notify-message/update-all-read' })
}

/**
 * 获取当前用户的最新站内信列表，默认 10 条
 */
export const getUnreadList = (size) => {
  return request.get({ url: '/system/notify/notify-message/get-unread-list?size=' + size })
}

/**
 * 获得当前用户的未读站内信数量
 */
export const getUnreadCount = () => {
  return request.get({ url: '/system/notify/notify-message/get-unread-count' })
}
