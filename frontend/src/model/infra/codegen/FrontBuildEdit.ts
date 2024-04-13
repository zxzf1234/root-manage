export type FrontBuildEditComponents = {
  componentName: string
  componentValue: string
  type: string
  span: number
  push: number
  pull: number
}

export type FrontBuildEditDetailTableColumn = {
  id: string
  columnName: string
  columnValue: string
  isSlot: boolean
  type: string
}

export type FrontBuildEdit = {
  name: string
  model: string
  ref: string
  rule: string
  loading: string
  isDialog: boolean
  isShowSubmitBtn: boolean
  detailTableData: string
  detailTableColumns: Array<FrontBuildEditDetailTableColumn>
  components: Array<FrontBuildEditComponents>
}
