import request from '@/config/axios'
import { InfraDictNo } from '@/model/infra/data/InfraDictNo'

export interface InfraDictNoVo extends InfraDictNo {
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
export const create = (params) => {
  return request.post({ url: '/infra/data/dict-no/create', params })
}

/**
 * 更新字典编号
 */
export const update = (params) => {
  return request.post({ url: '/infra/data/dict-no/update', params })
}
