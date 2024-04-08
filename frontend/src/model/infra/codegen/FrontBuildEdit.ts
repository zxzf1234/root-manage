export interface FrontBuildEditComponents {
  componentName: string
  componentValue: string
  type: string
  span: number
  push: number
  pull: number
}

export interface FrontBuildEditDetailTableColumn {
  id: string
  columnName: string
  columnValue: string
  isSlot: boolean
  type: string
}

export interface FrontBuildEdit {
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
