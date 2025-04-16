export type SystemUser = {
  id: number | undefined
  username: string
  password: string
  nickname: string
  remark: string | undefined
  deptId: number | undefined
  postIds: number[] | undefined
  email: string
  mobile: string
  sex: number
  avatar: string
  status: number
  loginIp: string
  loginDate: Date | undefined
  userNo: string
  position: string
}
