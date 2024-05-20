export type SystemUser = {
  id: number
  username: string
  password: string
  nickname: string
  remark: string | null
  deptId: number | null
  postIds: string[] | null
  email: string
  mobile: string
  sex: number
  avatar: string
  status: number
  loginIp: string
  loginDate: Date | undefined | null
  userNo: string
}
