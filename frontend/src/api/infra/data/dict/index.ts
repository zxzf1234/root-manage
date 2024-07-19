import request from '@/config/axios'

export type DictDataVO = {
  id: string | undefined
  sort: number | undefined
  label: string
  value: string
  status: number
  colorType: string
  cssClass: string
  dataEnum: string
  remark: string
  typeId: string
}

export type DictTypeVO = {
  id: string
  name: string
  type: string
  status: number
  remark: string
  firstModule: string
  secondModule: string
  datas: DictDataVO[]
}

// 查询字典数据（精简)列表
export const listSimpleDictData = () => {
  return request.get({ url: '/infra/data/dict-type/list-all-data' })
}

// 查询字典数据列表
export const getDictDataByTypeId = (typeId: string) => {
  return request.get({ url: '/infra/data/dict-data/list?typeId=' + typeId })
}

// 查询字典（精简)列表
export const getSimpleDictTypeList = () => {
  return request.get({ url: '/infra/data/dict-type/list-all-simple' })
}

// 查询字典列表
export const getDictTypePage = (params: PageParam) => {
  return request.get({ url: '/infra/data/dict-type/page', params })
}

// 查询字典详情
export const getDictType = (id: string) => {
  return request.get({ url: '/infra/data/dict-type/get?id=' + id })
}

// 新增字典
export const createDictType = (data: DictTypeVO) => {
  return request.post({ url: '/infra/data/dict-type/create', data })
}

// 修改字典
export const updateDictType = (data: DictTypeVO) => {
  return request.put({ url: '/infra/data/dict-type/update', data })
}

// 删除字典
export const deleteDictType = (id: string) => {
  return request.delete({ url: '/infra/data/dict-type/delete?id=' + id })
}
