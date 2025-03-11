import request from '@/config/axios'
/**
 * 分页查询消息通知
 */
export const pageQuery = (params) => {
  return request.get({ url: '/system/notice/notice/page-query', params })
}

/**
 * 获取未读通知数量
 */
export const getUnreadCount = (data) => {
  return request.post({ url: '/system/notice/notice/get-unread-count', data })
}

/**
 * 将通知消息标记未已读
 */
export const setRead = (data) => {
  return request.post({ url: '/system/notice/notice/set-read', data })
}

/**
 * 将消息全部标记为已读
 */
export const allSetRead = (notifierId) => {
  return request.post({ url: '/system/notice/notice/all-set-read?notifierId=' + notifierId })
}
