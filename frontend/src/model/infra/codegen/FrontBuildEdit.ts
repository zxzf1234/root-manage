export interface InterfaceFrontBuildEditComponents {
  componentName: string
  componentValue: string
  type: string
  span: number
  push: number
  pull: number
}
export interface InterfaceFrontBuildEdit {
  name: string
  model: string
  ref: string
  rule: string
  loading: string
  isDialog: boolean
  isShowSubmitBtn: boolean
  components: Array<InterfaceFrontBuildEditComponents>
}
