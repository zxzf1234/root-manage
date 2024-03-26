export type FrontBuildManageButton = {
  id: string
  buttonName: string
  buttonFunction: string
  buttonIcon: string
  hasPermi: string
}

export type FrontBuildManageSearchCondition = {
  id: string
  searchName: string
  searchValue: string
  type: string
}

export type FrontBuildManageTableColumn = {
  id: string
  columnName: string
  columnValue: string
  isSlot: boolean
}

export type FrontBuildManageTableMenuItem = {
  id: string
  itemName: string
  itemFunction: string
  hasPermi: string
}

export type FrontBuildManage = {
  name: string
  buttons: FrontBuildManageButton[]
  searchConditions: FrontBuildManageSearchCondition[]
  tableColumns: FrontBuildManageTableColumn[]
  tableMenuItems: FrontBuildManageTableMenuItem[]
}
