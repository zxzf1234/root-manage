export type SystemMenu = {
  id: string | undefined
  name: string
  permission: string
  type: number
  sort: number
  parentId: string
  path: string
  icon: string
  component: string
  componentName: string
  status: number
  visible: boolean
  keepAlive: boolean
  alwaysShow: boolean
  backShow: boolean
}
