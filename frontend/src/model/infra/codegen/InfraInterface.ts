export type InfraInterface = {
  id: string | undefined
  name: string
  comment: string
  method: string
  authorize: string
  isTransaction: boolean
  moduleId: string | undefined
  inputType: string
  inputExtendClass: string
  outputType: string
  outputExtendClass: string
  inputServlet: boolean
  isImport: boolean
}
