export type SystemNotifyMessage = {
  id: number
  userId: number
  userType: number
  templateId: number
  templateCode: string
  templateNickname: string
  templateContent: string
  templateType: number
  templateParams: Map<String, Object>
  readStatus: boolean
  readTime: Date | undefined
}
