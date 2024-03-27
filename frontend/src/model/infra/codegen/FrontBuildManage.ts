export type TypeFrontBuildManageButton = {
  id: string
  buttonName: string
  buttonFunction: string
  buttonIcon: string
  hasPermi: string
}

export type TypeFrontBuildManageSearchCondition = {
  id: string
  searchName: string
  searchValue: string
  type: string
}

export type TypeFrontBuildManageTableColumn = {
  id: string
  columnName: string
  columnValue: string
  isSlot: boolean
}

export type TypeFrontBuildManageTableMenuItem = {
  id: string
  itemName: string
  itemFunction: string
  hasPermi: string
}

export type TypeFrontBuildManage = {
  name: string
  searchModel: string
  searchRef: string
  searchRule: string
  tableColumnName: string
  tablePageData: string
  tablePageChange: string
  buttons: TypeFrontBuildManageButton[]
  searchConditions: TypeFrontBuildManageSearchCondition[]
  tableColumns: TypeFrontBuildManageTableColumn[]
  tableMenuItems: TypeFrontBuildManageTableMenuItem[]
}
