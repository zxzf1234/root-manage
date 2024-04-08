export interface FrontBuildManageButton {
  id: string
  buttonName: string
  buttonFunction: string
  buttonIcon: string
  hasPermi: string
}

export interface FrontBuildManageSearchCondition {
  id: string
  searchName: string
  searchValue: string
  type: string
}

export interface FrontBuildManageTableColumn {
  id: string
  columnName: string
  columnValue: string
  isSlot: boolean
}

export interface FrontBuildManageTableMenuItem {
  id: string
  itemName: string
  itemFunction: string
  hasPermi: string
}

export interface FrontBuildManage {
  name: string
  searchModel: string
  searchRef: string
  searchRule: string
  isDialog: boolean
  isShowSubmitBtn: boolean
  tableColumnName: string
  tableIsPage: boolean
  tableData: string
  tablePageChange: string
  buttons: FrontBuildManageButton[]
  searchConditions: FrontBuildManageSearchCondition[]
  tableColumns: FrontBuildManageTableColumn[]
  tableMenuItems: FrontBuildManageTableMenuItem[]
}
