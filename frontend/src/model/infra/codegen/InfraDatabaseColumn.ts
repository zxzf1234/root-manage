export type InfraDatabaseColumn = {
  id: string
  tableId: string
  columnName: string
  dataType: string
  columnComment: string
  nullable: boolean
  defaultValue: string
  javaType: string
  dictType: string
  example: string
  required: boolean
  relatedTable: string
  sort: number
}
