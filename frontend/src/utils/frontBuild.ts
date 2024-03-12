import { camelCase } from 'lodash-es'
/**
 * @param {string} jsonRule 需要转换的json
 */
export const jsonParseCode = (objectRule: object) => {
  if (objectRule === undefined) return ''
  if (!objectRule) return ''
  else {
    let code = ''
    code = objectParseCode(objectRule, 1)
    console.log(code)
    return code
  }
}

const objectParseCode = (objectRule: object, deepIndex: number) => {
  let code = ''
  if (Object.keys(objectRule).length < 1) return ''
  for (const key in objectRule) {
    if (typeof objectRule[key] === 'object' && '_fc_drag_tag' in objectRule[key]) {
      const func = frontComponent[camelCase(objectRule[key]['_fc_drag_tag'])]
      if (typeof func === 'function') {
        code = code + func(objectRule[key], deepIndex, '')
      } else {
        console.log(camelCase(objectRule[key]['_fc_drag_tag']) + ' not eixts')
      }
    }
  }

  return code
}
const generateTab = (deepIndex: number) => {
  let code = ''
  for (let i = 0; i < deepIndex; i++) {
    code = code + '  '
  }
  return code
}

const frontComponent = {
  input: (componentObject: object, deepIndex: number, formModel: String) => {
    let code = ''
    if (formModel != '') {
      code = code + generateTab(deepIndex) + '<el-form-item'
      if ('title' in componentObject) {
        code = code + ' label="' + componentObject['title'] + '"'
      }
      if ('field' in componentObject) {
        code = code + ' prop="' + componentObject['field'] + '"'
      }
      // 添加属性
      code = code + '>\r'
    }
    code = code + generateTab(deepIndex + 1) + '<el-input/>'
    if (formModel != '') {
      code = code + generateTab(deepIndex) + '</el-form-item>'
    }
    return code
  },
  button: (componentObject: object, deepIndex: number, formModel: String) => {
    console.log('button function is called')
    console.log(formModel)
    for (const key in componentObject) {
      if (typeof componentObject[key] === 'object') {
        deepIndex = deepIndex++
        objectParseCode(componentObject[key], deepIndex)
      }
    }
  },
  // eslint-disable-next-line
  form: (componentObject: object, deepIndex: number, formModel: String) => {
    let code = ''
    code = code + generateTab(deepIndex) + '<el-form'
    // 添加属性

    code = code + '>\r'
    if ('children' in componentObject) {
      const childrenObject = componentObject['children'] as object
      const childernIndex = deepIndex + 1
      code = code + objectParseCode(childrenObject, childernIndex)
    }
    code = code + generateTab(deepIndex) + '</el-form>'
    return code
  }
}
