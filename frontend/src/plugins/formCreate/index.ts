import type { App } from 'vue'
// 👇使用 form-create 需额外全局引入 element plus 组件

import formCreate from '@form-create/element-ui'
import install from '@form-create/element-ui/auto-import'

// 参考 http://www.form-create.com/v3/element-ui/auto-import.html 文档
export const setupFormCreate = (app: App<Element>) => {
  formCreate.use(install)
  app.use(formCreate)
}
