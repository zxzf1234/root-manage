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
    const code = { vue: '', script: { import: {}, function: [], variable: [] } }
    objectParseCode(code, objectRule, 1)
    let codeContext = '<template>\r' + code['vue'] + '</template>\r<script setup lang="ts">\r'

    ;['import', 'variable', 'function'].forEach((key) => {
      if (Object.keys(code['script'][key]).length > 0) {
        for (const n in code['script'][key]) codeContext += code['script'][key][n]
      }
    })
    codeContext += '</script>\r'
    return codeContext
  }
}

const objectParseCode = (code: object, objectRule: object, deepIndex: number) => {
  if (Object.keys(objectRule).length < 1) return ''
  for (const key in objectRule) {
    if (typeof objectRule[key] === 'object' && '_fc_drag_tag' in objectRule[key]) {
      if (mainComponent.indexOf(camelCase(objectRule[key]['_fc_drag_tag'])) > -1) {
        frontComponent.mainComponet(code, objectRule[key], deepIndex, '')
      } else {
        const func = frontComponent[camelCase(objectRule[key]['_fc_drag_tag'])]
        if (typeof func === 'function') {
          code += func(code, objectRule[key], deepIndex)
        } else {
          console.log(camelCase(objectRule[key]['_fc_drag_tag']) + ' not eixts')
        }
      }
    }
  }
}

const generateTab = (deepIndex: number) => {
  let code = ''
  for (let i = 0; i < deepIndex; i++) {
    code += '  '
  }
  return code
}

const addProps = (code: object, propObject: object) => {
  for (const key in propObject) {
    if (key.at(0) == '_') continue
    if (typeof propObject[key] === 'number') {
      code['vue'] += ' :' + key + '="' + propObject[key] + '"'
    } else if (typeof propObject[key] === 'boolean') {
      if (propObject[key] === true) {
        code['vue'] += +' ' + key
      } else {
        code['vue'] += ' :' + key + '="' + propObject[key] + '"'
      }
    } else {
      if (propObject[key] !== '') code['vue'] += ' ' + key + '="' + propObject[key] + '"'
    }
  }
  return code
}

const addEvent = (code: object, eventObject: object) => {
  for (const key in eventObject) {
    code['vue'] += ' @' + eventObject[key]['eventName'] + '="' + eventObject[key]['function'] + '"'
    const functionCode = 'const ' + eventObject[key]['function'] + ' = () => {}\r'
    if (!code['script']['function'].includes(functionCode))
      code['script']['function'].push(functionCode)
  }
}

const addOptions = (code: object, optionsObject: object, componentDeepIndex: number) => {
  const optionsDeepIndex = componentDeepIndex + 1
  if ('dict' in optionsObject) {
    const dict = optionsObject['dict'] as String
    code['vue'] +=
      generateTab(optionsDeepIndex) +
      '<el-option v-for="dict in getIntDictOptions(DICT_TYPE.' +
      dict.toUpperCase() +
      ')" :key="dict.value" :label="dict.label" :value="dict.value"\r'
    if (code['script']['import'] === undefined) {
      code['script']['import'] = {}
    }
    if (code['script']['import']['@/utils/dict'] === undefined) {
      code['script']['import']['@/utils/dict'] = ['getIntDictOptions', 'DICT_TYPE']
    }
  } else {
    for (const key in optionsObject) {
      code['vue'] +=
        generateTab(optionsDeepIndex) +
        '<el-option label="' +
        optionsObject[key]['label'] +
        '" value="' +
        optionsObject[key]['value'] +
        '" />\r'
    }
  }
}

const generateValidateCode = (validate: object) => {
  let code = ''
  let count = 0
  const totalCount = Object.keys(validate).length
  for (const key in validate) {
    code += '{'
    const singleValidate = validate[key] as object
    // mode
    if (singleValidate['mode'] == 'required') {
      code += ' required: true,'
    } else if (singleValidate['mode'] == 'min') {
      code += ' min: ' + singleValidate['min'] + ','
    } else if (singleValidate['mode'] == 'max') {
      code += ' max: ' + singleValidate['max'] + ','
    } else if (singleValidate['mode'] == 'len') {
      code += ' len: ' + singleValidate['len'] + ','
    } else if (singleValidate['mode'] == 'pattern') {
      code += ' pattern: ' + singleValidate['pattern'] + ','
    }
    // type
    if (singleValidate['type'] != 'string') {
      code += " type: '" + singleValidate['type'] + "',"
    }
    // message
    if (singleValidate['message'] != '') {
      code += " message: '" + singleValidate['message'] + "',"
    }
    // trigger
    if (singleValidate['trigger'] != '') {
      code += " trigger: '" + singleValidate['trigger'] + "' "
    }

    count++
    if (count == totalCount) code += '}'
    else code += '},'
  }
  return code
}

const generateTableSlot = (code: object, componentObject: object, deepIndex: number) => {
  if (
    componentObject['props'] === undefined ||
    componentObject['props'][':columns'] === undefined ||
    componentObject['column'] === undefined
  )
    return ''
  let columnVariable = (('const ' + componentObject['props'][':columns']) as string) + ' = [\r'
  const columnLength = componentObject['column'].length
  let count = 0
  let slotCode = ''
  componentObject['column'].forEach((element: object) => {
    columnVariable +=
      '  {\r' + "    label: '" + element['label'] + "',\r    prop: '" + element['value'] + "'"
    if (element['slot'] !== undefined && element['slot'] === true) {
      columnVariable += ",\r    slot: '" + element['value'] + "'\r"
      slotCode += generateTab(deepIndex) + '<template #' + element['value'] + '="{ row }">\r'
      slotCode +=
        generateTab(deepIndex + 1) + '<el-input v-model="row.' + element['value'] + '" />\r'
      slotCode += generateTab(deepIndex) + '</template>\r'
    } else {
      columnVariable += '\r'
    }
    count++
    if (count == columnLength) {
      columnVariable += '  }\r'
    } else {
      columnVariable += '  },\r'
    }
  })
  columnVariable += ']\r'
  code['script']['variable'].push(columnVariable)
  return slotCode
}

const addTableMenu = (code: object, menuObject: object, deepIndex: number) => {
  code['vue'] += generateTab(deepIndex) + '<template #menu="{ row }">\r'
  const menuIndex = deepIndex + 1
  for (const key in menuObject) {
    code['vue'] +=
      generateTab(menuIndex) +
      '<context-menu-item label="' +
      menuObject[key]['label'] +
      '" @click="' +
      menuObject[key]['function'] +
      '(row)"'
    if (menuObject[key]['label']['hasPermi'] !== undefined) {
      code['vue'] += ' v-hasPermi="[\'' + menuObject[key]['label']['hasPermi'] + '\']"\r'
    }
    const functionCode =
      'const ' + menuObject[key]['function'] + ' = (row) => {\r  console.log(row)\r}\r'
    if (!code['script']['function'].includes(functionCode))
      code['script']['function'].push(functionCode)
    code['vue'] += ' />\r'
  }
  code['vue'] += generateTab(deepIndex) + '</template>\r'
}

const frontComponent = {
  mainComponet: (code: object, componentObject: object, deepIndex: number, formModel: String) => {
    let componentDeepIndex = deepIndex
    if (formModel != '') {
      code['vue'] += generateTab(deepIndex) + '<el-form-item'
      if ('title' in componentObject) {
        code['vue'] += ' label="' + componentObject['title'] + '"'
      }
      if ('field' in componentObject) {
        code['vue'] += ' prop="' + componentObject['field'] + '"'
      }

      code['vue'] += '>\r'
      componentDeepIndex++
    }
    code['vue'] +=
      generateTab(componentDeepIndex) + '<el-' + snakeCase(componentObject['_fc_drag_tag'])

    if (formModel != '' && componentObject['field'] !== undefined) {
      code['vue'] += ' v-model="' + formModel + '.' + componentObject['field'] + '"'
    }
    // 添加属性
    if (componentObject['props'] !== undefined && typeof componentObject['props'] === 'object') {
      addProps(code, componentObject['props'] as object)
    }

    // 添加function
    if (componentObject['event'] !== undefined && typeof componentObject['event'] === 'object') {
      addEvent(code, componentObject['event'] as object)
    }

    code['vue'] += 'options' in componentObject ? '>\r' : ' />\r'
    // 添加options
    if (
      componentObject['options'] !== undefined &&
      typeof componentObject['options'] === 'object'
    ) {
      addOptions(code, componentObject['options'] as object, componentDeepIndex)
      if (componentObject['options']['dict'] === undefined)
        code['vue'] +=
          generateTab(componentDeepIndex) +
          '</el-' +
          snakeCase(componentObject['_fc_drag_tag']) +
          '>\r'
    }
    if (formModel != '') {
      code['vue'] += generateTab(deepIndex) + '</el-form-item>\r'
    }
  },

  table: (code: object, componentObject: object, deepIndex: number) => {
    code['vue'] += generateTab(deepIndex) + '<Table'
    // 添加属性
    if (componentObject['props'] !== undefined && typeof componentObject['props'] === 'object') {
      addProps(code, componentObject['props'] as object)
    }
    const childrenIndex = deepIndex + 1
    const slotCode = generateTableSlot(code, componentObject, childrenIndex)

    if (
      (componentObject['props'] === undefined ||
        componentObject['props'][':columns'] === undefined ||
        slotCode === '') &&
      componentObject['menu'] === undefined
    ) {
      code['vue'] += ' />\r'
    } else {
      code['vue'] += '>\r'
      if (slotCode !== '') {
        code['vue'] += slotCode
      }
      if (componentObject['menu'] !== undefined) {
        addTableMenu(code, componentObject['menu'], childrenIndex)
      }

      code['vue'] += generateTab(deepIndex) + '</Table>\r'
    }
  },

  button: (code: object, componentObject: object, deepIndex: number) => {
    code['vue'] += generateTab(deepIndex) + '<el-button'
    let icon = undefined
    // 添加属性
    if ('props' in componentObject && typeof componentObject['props'] === 'object') {
      const propObject = componentObject['props'] as object
      if (propObject['icon'] !== undefined) {
        icon = propObject['icon']
        delete propObject['icon']
      }
      addProps(code, componentObject['props'] as object)
    }

    code['vue'] += '>'
    if (icon !== undefined) {
      const iconDeepIndex = deepIndex + 1
      code['vue'] += '\r' + generateTab(iconDeepIndex) + '<Icon icon="' + icon + '" />\r'
    }
    if (
      componentObject['children'] !== undefined &&
      typeof componentObject['children'] === 'object'
    ) {
      if (icon !== undefined) {
        const childrenDeepIndex = deepIndex + 1
        code['vue'] += generateTab(childrenDeepIndex) + componentObject['children'][0] + '\r'
      } else {
        code['vue'] += componentObject['children'][0]
      }
    }
    code['vue'] += generateTab(deepIndex) + '</el-button>\r'
  },

  form: (code: object, componentObject: object, deepIndex: number) => {
    code['vue'] += generateTab(deepIndex) + '<el-form'
    let formModel = ''
    // 添加属性
    if (componentObject['props'] !== undefined && typeof componentObject['props'] === 'object') {
      addProps(code, componentObject['props'] as object)
      formModel =
        componentObject['props'][':model'] !== undefined ? componentObject['props'][':model'] : ''

      const props = componentObject['props'] as object
      if ('ref' in props) {
        code['script']['variable'].push('const ' + props['ref'] + ' = ref\r')
      }
      if (':model' in props) {
        let childrenModel = ''
        if ('children' in componentObject) {
          const childrenObject = componentObject['children'] as object
          if (Object.keys(childrenObject).length > 0) {
            for (const key in childrenObject) {
              if (typeof childrenObject[key] === 'object' && 'field' in childrenObject[key]) {
                childrenModel += '  ' + childrenObject[key]['field'] + ': undefined,\r'
              }
            }
          }
        }
        code['script']['variable'].push(
          'const ' + props[':model'] + ' = reactive({\r' + childrenModel + '})\r'
        )
      }
      if (':rules' in props) {
        let childrenRule = ''
        if ('children' in componentObject) {
          const childrenObject = componentObject['children'] as object
          if (Object.keys(childrenObject).length > 0) {
            for (const key in childrenObject) {
              if (
                typeof childrenObject[key] === 'object' &&
                'field' in childrenObject[key] &&
                'validate' in childrenObject[key]
              ) {
                const validate = generateValidateCode(childrenObject[key]['validate'])
                childrenRule += '  ' + childrenObject[key]['field'] + ': [' + validate + '],\r'
              }
            }
          }
        }
        code['script']['variable'].push(
          'const ' + props[':rules'] + ' = reactive({\r' + childrenRule + '})\r'
        )
      }
    }

    code['vue'] += '>\r'
    if ('children' in componentObject) {
      const childrenObject = componentObject['children'] as object
      const childernDeepIndex = deepIndex + 1
      if (Object.keys(childrenObject).length < 1) return ''
      for (const key in childrenObject) {
        if (typeof childrenObject[key] === 'object' && '_fc_drag_tag' in childrenObject[key]) {
          if (mainComponent.indexOf(camelCase(childrenObject[key]['_fc_drag_tag'])) > -1) {
            frontComponent.mainComponet(code, childrenObject[key], childernDeepIndex, formModel)
          } else {
            const func = frontComponent[camelCase(childrenObject[key]['_fc_drag_tag'])]
            if (typeof func === 'function') {
              func(code, childrenObject[key], childernDeepIndex)
            } else {
              console.log(camelCase(childrenObject[key]['_fc_drag_tag']) + ' not eixts')
            }
          }
        }
      }
    }
    code['vue'] += generateTab(deepIndex) + '</el-form>\r'
  },
  contentWrap: (code: object, componentObject: object, deepIndex: number) => {
    code['vue'] += generateTab(deepIndex) + '<ContentWrap'
    // 添加属性
    if ('props' in componentObject && typeof componentObject['props'] === 'object') {
      addProps(code, componentObject['props'] as object)
    }
    code['vue'] += '>\r'
    if (
      componentObject['children'] !== undefined &&
      Object.keys(componentObject['children']).length > 0
    ) {
      const childernDeepIndex = deepIndex + 1
      const childrenObject = componentObject['children'] as object
      objectParseCode(code, childrenObject, childernDeepIndex)
    }
    code['vue'] += generateTab(deepIndex) + '</ContentWrap>\r'
  },

  row: (code: object, componentObject: object, deepIndex: number) => {
    code['vue'] += generateTab(deepIndex) + '<el-row'
    // 添加属性
    if ('props' in componentObject && typeof componentObject['props'] === 'object') {
      addProps(code, componentObject['props'] as object)
    }
    code['vue'] += '>\r'
    if (
      componentObject['children'] !== undefined &&
      Object.keys(componentObject['children']).length > 0
    ) {
      const colDeepIndex = deepIndex + 1
      const colObject = componentObject['children'] as object
      for (const key in colObject) {
        code['vue'] += generateTab(colDeepIndex) + '<el-col'
        // 添加属性
        if ('props' in colObject[key] && typeof colObject[key]['props'] === 'object') {
          addProps(code, colObject[key]['props'] as object)
        }
        code['vue'] += '>\r'

        if (
          colObject[key]['children'] !== undefined &&
          Object.keys(colObject[key]['children']).length > 0
        ) {
          const childernDeepIndex = colDeepIndex + 1
          const childrenObject = colObject[key]['children'] as object
          objectParseCode(code, childrenObject, childernDeepIndex)
        }

        code['vue'] += generateTab(deepIndex) + '</el-col>\r'
      }
    }
    code['vue'] += generateTab(deepIndex) + '</el-form>\r'
  }
}
