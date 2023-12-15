export type SystemNotifyMessage = {
  id: string
  userId: string
  userType: number
  templateId: string
  templateCode: string
  templateNickname: string
  templateContent: string
  templateType: number
  templateParams: Map<String, Object>
  readStatus: boolean
  readTime: Date
  createTime: Date
  updateTime: Date
  creatorId: string
  updaterId: string
}
