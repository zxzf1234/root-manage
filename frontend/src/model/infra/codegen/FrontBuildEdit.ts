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
  components: Array<InterfaceFrontBuildEditComponents>
}
