import { camelCase, snakeCase } from 'lodash-es'
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
      if (mainComponent.indexOf(camelCase(objectRule[key]['_fc_drag_tag'])) > -1) {
        code = code + frontComponent.mainComponet(objectRule[key], deepIndex, '')
      } else {
        const func = frontComponent[camelCase(objectRule[key]['_fc_drag_tag'])]
        if (typeof func === 'function') {
          code = code + func(objectRule[key], deepIndex)
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
    if (key.at(0) == '_') continue
    if (typeof propObject[key] === 'number') {
      code = code + ' :' + key + '="' + propObject[key] + '"'
    } else if (typeof propObject[key] === 'boolean') {
      if (propObject[key] === true) {
        code = code + ' ' + key
      } else {
        code = code + ' :' + key + '="' + propObject[key] + '"'
      }
    } else {
      code = code + ' ' + key + '="' + propObject[key] + '"'
    }
  }
  return code
}

const addOptions = (optionsObject: object, componentDeepIndex: number) => {
  let code = ''
  const optionsDeepIndex = componentDeepIndex + 1
  if ('dict' in optionsObject) {
    const dict = optionsObject['dict'] as String
    code =
      code +
      generateTab(optionsDeepIndex) +
      '<el-option v-for="dict in getIntDictOptions(DICT_TYPE.' +
      dict.toUpperCase() +
      ')" :key="dict.value" :label="dict.label" :value="dict.value"\r'
  } else {
    for (const key in optionsObject) {
      code =
        code +
        generateTab(optionsDeepIndex) +
        '<el-option label="' +
        optionsObject[key]['label'] +
        '" value="' +
        optionsObject[key]['value'] +
        '" />\r'
    }
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
    code =
      code + generateTab(componentDeepIndex) + '<el-' + snakeCase(componentObject['_fc_drag_tag'])

    // 添加属性
    if (formModel != '' && componentObject['field'] !== undefined) {
      code = code + ' v-model="' + formModel + '.' + componentObject['field'] + '"'
    }

    if (componentObject['props'] !== undefined && typeof componentObject['props'] === 'object') {
      code = code + addProps(componentObject['props'] as object)
    }
    code = code + ' />\r'
    // 添加options
    if ('options' in componentObject && typeof componentObject['options'] === 'object') {
      code = code + addOptions(componentObject['options'] as object, componentDeepIndex)
    }
    if (formModel != '') {
      code = code + generateTab(deepIndex) + '</el-form-item>\r'
    }
    return code
  },

  button: (componentObject: object, deepIndex: number) => {
    let code = ''
    code = code + generateTab(deepIndex) + '<el-button'
    let icon = undefined
    // 添加属性
    if ('props' in componentObject && typeof componentObject['props'] === 'object') {
      const propObject = componentObject['props'] as object
      if (propObject['icon'] !== undefined) {
        icon = propObject['icon']
        delete propObject['icon']
      }
      code = code + addProps(componentObject['props'] as object)
    }

    code = code + '>'
    if (icon !== undefined) {
      const iconDeepIndex = deepIndex + 1
      code = code + '\r' + generateTab(iconDeepIndex) + '<Icon icon="' + icon + '" />\r'
    }
    if (
      componentObject['children'] !== undefined &&
      typeof componentObject['children'] === 'object'
    ) {
      if (icon !== undefined) {
        const childrenDeepIndex = deepIndex + 1
        code = code + generateTab(childrenDeepIndex) + componentObject['children'][0] + '\r'
      } else {
        code = code + componentObject['children'][0]
      }
    }
    code = code + generateTab(deepIndex) + '</el-button>\r'
    return code
  },

  form: (componentObject: object, deepIndex: number) => {
    let code = ''
    code = code + generateTab(deepIndex) + '<el-form'
    let formModel = ''
    // 添加属性
    if (componentObject['props'] !== undefined && typeof componentObject['props'] === 'object') {
      code = code + addProps(componentObject['props'] as object)
      formModel =
        componentObject['props'][':model'] !== undefined ? componentObject['props'][':model'] : ''
    }

    code = code + '>\r'
    if ('children' in componentObject) {
      const childrenObject = componentObject['children'] as object
      const childernDeepIndex = deepIndex + 1
      if (Object.keys(childrenObject).length < 1) return ''
      for (const key in childrenObject) {
        if (typeof childrenObject[key] === 'object' && '_fc_drag_tag' in childrenObject[key]) {
          if (mainComponent.indexOf(camelCase(childrenObject[key]['_fc_drag_tag'])) > -1) {
            code =
              code + frontComponent.mainComponet(childrenObject[key], childernDeepIndex, formModel)
          } else {
            const func = frontComponent[camelCase(childrenObject[key]['_fc_drag_tag'])]
            if (typeof func === 'function') {
              code = code + func(childrenObject[key], childernDeepIndex)
            } else {
              console.log(camelCase(childrenObject[key]['_fc_drag_tag']) + ' not eixts')
            }
          }
        }
      }
    }
    code = code + generateTab(deepIndex) + '</el-form>\r'
    return code
  },
  contentWrap: (componentObject: object, deepIndex: number) => {
    let code = ''
    code = code + generateTab(deepIndex) + '<ContentWrap'
    // 添加属性
    if ('props' in componentObject && typeof componentObject['props'] === 'object') {
      code = code + addProps(componentObject['props'] as object)
    }
    code = code + '>\r'
    if (
      componentObject['children'] !== undefined &&
      Object.keys(componentObject['children']).length > 0
    ) {
      const childernDeepIndex = deepIndex + 1
      const childrenObject = componentObject['children'] as object
      code = code + objectParseCode(childrenObject, childernDeepIndex)
    }
    code = code + generateTab(deepIndex) + '</ContentWrap>\r'
    return code
  },

  row: (componentObject: object, deepIndex: number) => {
    let code = ''
    code = code + generateTab(deepIndex) + '<el-row'
    // 添加属性
    if ('props' in componentObject && typeof componentObject['props'] === 'object') {
      code = code + addProps(componentObject['props'] as object)
    }
    code = code + '>\r'
    if (
      componentObject['children'] !== undefined &&
      Object.keys(componentObject['children']).length > 0
    ) {
      const colDeepIndex = deepIndex + 1
      const colObject = componentObject['children'] as object
      for (const key in colObject) {
        code = code + generateTab(colDeepIndex) + '<el-col'
        // 添加属性
        if ('props' in colObject[key] && typeof colObject[key]['props'] === 'object') {
          code = code + addProps(colObject[key]['props'] as object)
        }
        code = code + '>\r'

        if (
          colObject[key]['children'] !== undefined &&
          Object.keys(colObject[key]['children']).length > 0
        ) {
          const childernDeepIndex = colDeepIndex + 1
          const childrenObject = colObject[key]['children'] as object
          code = code + objectParseCode(childrenObject, childernDeepIndex)
        }

        code = code + generateTab(deepIndex) + '</el-col>\r'
      }
    }
    code = code + generateTab(deepIndex) + '</el-form>\r'
    return code
  }
}
