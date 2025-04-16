import request from '@/config/axios'
/**
 * 根据名称获取字段信息
 */
export const getColumnByNames = (data) => {
  return request.post({ url: '/infra/codegen/database-table/get-column-by-names', data })
}
