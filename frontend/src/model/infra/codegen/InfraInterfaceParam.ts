export type InfraInterfaceParam = {
  id: string | undefined
  name: string
  comment: string
  isList: boolean
  variableType: string
  relatedId: string
  relatedType: number
  example: string
  required: boolean
  parentId: string
  parentType: number
  inoutType: number
  relatedColumn: string
  sort: number
}
