export interface InterfaceFrontBuildManageButton {
  id: string
  buttonName: string
  buttonFunction: string
  buttonIcon: string
  hasPermi: string
}

export interface InterfaceFrontBuildManageSearchCondition {
  id: string
  searchName: string
  searchValue: string
  type: string
}

export interface InterfaceFrontBuildManageTableColumn {
  id: string
  columnName: string
  columnValue: string
  isSlot: boolean
}

export interface InterfaceFrontBuildManageTableMenuItem {
  id: string
  itemName: string
  itemFunction: string
  hasPermi: string
}

export interface InterfaceFrontBuildManage {
  name: string
  searchModel: string
  searchRef: string
  searchRule: string
  isDialog: boolean
  dialogTitle: string
  tableColumnName: string
  tablePageData: string
  tablePageChange: string
  tableLoading: string
  buttons: InterfaceFrontBuildManageButton[]
  searchConditions: InterfaceFrontBuildManageSearchCondition[]
  tableColumns: InterfaceFrontBuildManageTableColumn[]
  tableMenuItems: InterfaceFrontBuildManageTableMenuItem[]
}
