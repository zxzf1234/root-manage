import request from '@/config/axios'
import { InfraDictNo } from '@/model/infra/data/InfraDictNo'

export type InfraDictNoVo = InfraDictNo & {
  id: string
}

/**
 * 获取单个字典编号
 */
export const get = (id) => {
  return request.get({ url: '/infra/data/dict-no/get?id=' + id })
}

/**
 * 新建字段编号
 */
export const create = (data: InfraDictNoVo) => {
  return request.post({ url: '/infra/data/dict-no/create', data })
}

/**
 * 字典编号查询
 */
export const query = (params) => {
  return request.get({ url: '/infra/data/dict-no/query', params })
}

/**
 * 更新字典编号
 */
export const update = (data) => {
  return request.post({ url: '/infra/data/dict-no/update', data })
}
