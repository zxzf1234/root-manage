import request from '@/config/axios'

export interface ErrorCodeVO {
  id: number | undefined
  type: number
  applicationName: string
  code: number | undefined
  message: string
  memo: string
  createTime: Date
}

// 查询错误码列表
export const getErrorCodePage = (params: PageParam) => {
  return request.get({ url: '/infra/data/error-code/page', params })
}

// 查询错误码详情
export const getErrorCode = (id: number) => {
  return request.get({ url: '/infra/data/error-code/get?id=' + id })
}

// 新增错误码
export const createErrorCode = (data: ErrorCodeVO) => {
  return request.post({ url: '/infra/data/error-code/create', data })
}

// 修改错误码
export const updateErrorCode = (data: ErrorCodeVO) => {
  return request.put({ url: '/infra/data/error-code/update', data })
}

// 删除错误码
export const deleteErrorCode = (id: number) => {
  return request.delete({ url: '/infra/data/error-code/delete?id=' + id })
}
// 导出错误码
export const excelErrorCode = (params) => {
  return request.download({ url: '/infra/data/error-code/export-excel', params })
}
