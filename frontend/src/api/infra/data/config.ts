import request from '@/config/axios'
/**
 * 新增配置
 */
export const create = (data) => {
  return request.post({ url: '/infra/data/config/create', data })
}

/**
 * 更新配置
 */
export const update = (data) => {
  return request.put({ url: '/infra/data/config/update', data })
}

/**
 * 删除配置
 */
export const deleted = (id) => {
  return request.delete({ url: '/infra/data/config/deleted?id=' + id })
}

/**
 * 获取单个配置
 */
export const get = (id) => {
  return request.get({ url: '/infra/data/config/get?id=' + id })
}

/**
 * 根据参数键名查询参数值
 */
export const getValueByKey = (key) => {
  return request.get({ url: '/infra/data/config/get-value-by-key?key=' + key })
}

/**
 * 分页查询配置
 */
export const page = (params) => {
  return request.get({ url: '/infra/data/config/page', params })
}
