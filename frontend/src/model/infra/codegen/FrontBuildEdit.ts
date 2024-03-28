export interface InterfaceFrontBuildEditComponents {
  componentName: string
  componentValue: string
  type: string
  span: string
  push: string
  pull: string
}
export interface InterfaceFrontBuildEdit {
  name: string
  model: string
  ref: string
  rule: string
  components: Array<InterfaceFrontBuildEditComponents>
}
