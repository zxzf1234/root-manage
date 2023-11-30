import request from '@/config/axios'

// 编号列表
export const getJobPage = (params: PageParam) => {
  return request.get({ url: '/infra/data/no/page', params })
}
