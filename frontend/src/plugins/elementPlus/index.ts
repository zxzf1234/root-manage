import type { App } from 'vue'
// 完整引入element-plus
import ElementPlus from 'element-plus'

export const setupElementPlus = (app: App<Element>) => {
  app.use(ElementPlus)
}
