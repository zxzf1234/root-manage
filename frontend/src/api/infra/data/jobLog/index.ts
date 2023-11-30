import request from '@/config/axios'

export interface JobLogVO {
  id: number
  jobId: number
  handlerName: string
  handlerParam: string
  cronExpression: string
  executeIndex: string
  beginTime: Date
  endTime: Date
  duration: string
  status: number
  createTime: string
}

// 任务日志列表
export const getJobLogPage = (params: PageParam) => {
  return request.get({ url: '/infra/data/job-log/page', params })
}

// 任务日志详情
export const getJobLog = (id: number) => {
  return request.get({ url: '/infra/data/job-log/get?id=' + id })
}

// 导出定时任务日志
export const exportJobLog = (params) => {
  return request.download({
    url: '/infra/data/job-log/export-excel',
    params
  })
}
