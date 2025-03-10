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
