import request from '@/config/axios'
/**
 * 创建站内信模版
 */
export const create = (data) => {
  return request.post({ url: '/system/notify/notify-template/create', data })
}

/**
 * 更新站内信模版
 */
export const update = (data) => {
  return request.put({ url: '/system/notify/notify-template/update', data })
}

/**
 * 删除站内信模版
 */
export const deleted = (id) => {
  return request.delete({ url: '/system/notify/notify-template/deleted?id=' + id })
}

/**
 * 获得单个站内信模版
 */
export const get = (id) => {
  return request.get({ url: '/system/notify/notify-template/get?id=' + id })
}

/**
 * 获得站内信模版分页
 */
export const page = (params) => {
  return request.get({ url: '/system/notify/notify-template/page', params })
}

/**
 * 发送站内信
 */
export const sendNotify = (data) => {
  return request.post({ url: '/system/notify/notify-template/send-notify', data })
}
