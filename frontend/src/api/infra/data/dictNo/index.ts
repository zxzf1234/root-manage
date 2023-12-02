import request from '@/config/axios'
/**
 * 获取单个字典编号
 */
export const get = (id) => {
  return request.get({ url: '/infra/data/dict-no/get?id=' + id })
}
