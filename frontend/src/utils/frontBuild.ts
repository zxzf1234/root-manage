import { camelCase } from 'lodash-es'
const mainComponent = [
  'input',
  'inputNumber',
  'radio',
  'checkbox',
  'select',
  'switch',
  'timePicker',
  'datePicker',
  'slider',
  'rate',
  'colorPicker',
  'cascader',
  'upload',
  'transfer',
  'tree'
]
/**
 * @param {string} jsonRule 需要转换的json
 */
export const jsonParseCode = (objectRule: object) => {
  if (objectRule === undefined) return ''
  if (!objectRule) return ''
  else {
    let code = '<template>\r'
    code = code + objectParseCode(objectRule, 1)
    code = code + '</template>'
    return code
  }
}

const objectParseCode = (objectRule: object, deepIndex: number) => {
  let code = ''
  if (Object.keys(objectRule).length < 1) return ''
  for (const key in objectRule) {
    if (typeof objectRule[key] === 'object' && '_fc_drag_tag' in objectRule[key]) {
      console.log(mainComponent.indexOf(camelCase(objectRule[key]['_fc_drag_tag'])))
      if (mainComponent.indexOf(camelCase(objectRule[key]['_fc_drag_tag'])) > -1) {
        code = code + frontComponent.mainComponet(objectRule[key], deepIndex, '')
      } else {
        const func = frontComponent[camelCase(objectRule[key]['_fc_drag_tag'])]
        if (typeof func === 'function') {
          code = code + func(objectRule[key], deepIndex, '')
        } else {
          console.log(camelCase(objectRule[key]['_fc_drag_tag']) + ' not eixts')
        }
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

const addProps = (propObject: object) => {
  let code = ''
  for (const key in propObject) {
    code = code + ' ' + key + '="' + propObject[key] + '"'
  }
  return code
}

const frontComponent = {
  mainComponet: (componentObject: object, deepIndex: number, formModel: String) => {
    let code = ''
    let componentDeepIndex = deepIndex
    if (formModel != '') {
      code = code + generateTab(deepIndex) + '<el-form-item'
      if ('title' in componentObject) {
        code = code + ' label="' + componentObject['title'] + '"'
      }
      if ('field' in componentObject) {
        code = code + ' prop="' + componentObject['field'] + '"'
      }

      code = code + '>\r'
      componentDeepIndex++
    }
    code = code + generateTab(componentDeepIndex) + '<el-' + componentObject['_fc_drag_tag']
    // 添加属性
    if ('props' in componentObject && typeof componentObject['props'] === 'object') {
      code = code + addProps(componentObject['props'])
    }
    code = code + ' />\r'
    if (formModel != '') {
      code = code + generateTab(deepIndex) + '</el-form-item>\r'
    }
    return code
  },

  button: (componentObject: object, deepIndex: number, formModel: String) => {
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
      if (Object.keys(childrenObject).length < 1) return ''
      for (const key in childrenObject) {
        if (typeof childrenObject[key] === 'object' && '_fc_drag_tag' in childrenObject[key]) {
          if (mainComponent.indexOf(camelCase(objectRule[key]['_fc_drag_tag'])) > -1) {
            code = code + frontComponent.mainComponet(objectRule[key], deepIndex, '')
          } else {
            const func = frontComponent[camelCase(childrenObject[key]['_fc_drag_tag'])]
            if (typeof func === 'function') {
              code = code + func(childrenObject[key], childernIndex, 'queryParams')
            } else {
              console.log(camelCase(childrenObject[key]['_fc_drag_tag']) + ' not eixts')
            }
          }
        }
      }
    }
    code = code + generateTab(deepIndex) + '</el-form>\r'
    return code
  }
}
