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
export const jsonParseCode = (objectRule: object, formAttr: object) => {
  if (objectRule === undefined) return ''
  if (!objectRule) return ''
  else {
    const code = { vue: '', script: { import: {}, function: [], variable: <string[]>[] } }
    let deepIndex = 1
    if (formAttr['isDialog']) {
      deepIndex = 2
      code['script']['variable'].push('const ' + formAttr['dialogTitle'] + " = ref('')\r")
      code['script']['variable'].push('const dialogVisible = ref(false)\r')
    }
    objectParseCode(code, objectRule, deepIndex, '')
    let codeContext =
      '<template>\r' +
      (formAttr['isDialog']
        ? '  <Dialog v-model="dialogVisible" :title="' + formAttr['dialogTitle'] + '">\r'
        : '') +
      code['vue'] +
      (formAttr['isDialog'] ? '  </Dialog>\r' : '') +
      '</template>\r<script setup name="' +
      formAttr['name'] +
      '" lang="ts">\r'
    ;['import', 'variable', 'function'].forEach((key) => {
      if (Object.keys(code['script'][key]).length > 0) {
        for (const n in code['script'][key]) codeContext += code['script'][key][n]
      }
    })
    codeContext += '</script>\r'
    return codeContext
  }
}

const objectParseCode = (
  code: object,
  objectRule: object,
  deepIndex: number,
  formModel: string
) => {
  if (Object.keys(objectRule).length < 1) return ''
  for (const key in objectRule) {
    if (typeof objectRule[key] === 'object' && '_fc_drag_tag' in objectRule[key]) {
      if (mainComponent.indexOf(camelCase(objectRule[key]['_fc_drag_tag'])) > -1) {
        frontComponent.mainComponet(code, objectRule[key], deepIndex, formModel)
      } else if (
        objectRule[key]['_fc_drag_tag'] == 'button' ||
        objectRule[key]['_fc_drag_tag'] == 'row'
      ) {
        const func = frontComponent[camelCase(objectRule[key]['_fc_drag_tag'])]
        func(code, objectRule[key], deepIndex, formModel)
      } else {
        const func = frontComponent[camelCase(objectRule[key]['_fc_drag_tag'])]
        if (typeof func === 'function') {
          func(code, objectRule[key], deepIndex)
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
    let propKey = key
    if (key === 'click') {
      propKey = '@click'
      let functionCodeContext = ''
      if (propObject['click'] == 'handleClickReset') {
        functionCodeContext = '\r  queryFormRef.value?.resetFields()\r  handleClickSearch()\r'
      }
      const functionCode =
        'const ' + propObject['click'] + ' = () => {' + functionCodeContext + '}\r'
      if (!code['script']['function'].includes(functionCode))
        code['script']['function'].push(functionCode)
    }

    if (key === 'hasPermi' && propObject[key] != '') {
      propKey = 'v-hasPermi'
      propObject[key] = "['" + propObject[key] + "']"
    }
    if (typeof propObject[key] === 'number') {
      code['vue'] += ' :' + propKey + '="' + propObject[key] + '"'
    } else if (typeof propObject[key] === 'boolean') {
      if (propObject[key] === true) {
        code['vue'] += ' ' + propKey
      } else {
        code['vue'] += ' :' + propKey + '="' + propObject[key] + '"'
      }
    } else {
      if (propObject[key] !== '') code['vue'] += ' ' + propKey + '="' + propObject[key] + '"'
    }
  }
  return code
}

const addEvent = (code: object, eventObject: object) => {
  for (const key in eventObject) {
    code['vue'] += ' @' + eventObject[key]['eventName'] + '="' + eventObject[key]['function'] + '"'
    let functionCodeContext = ''
    if (eventObject[key]['function'] == 'handleClickReset') {
      functionCodeContext = '\r  queryFormRef.value?.resetFields()\r  handleClickSearch()\r'
    }
    const functionCode =
      'const ' + eventObject[key]['function'] + ' = () => {' + functionCodeContext + '}\r'
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
      '  {\r' + "    label: '" + element['label'] + "',\r    prop: '" + element['prop'] + "'"
    if (element['slot'] !== undefined && element['slot'] === true) {
      columnVariable += ",\r    slot: '" + element['prop'] + "'\r"
      slotCode += generateTab(deepIndex) + '<template #' + element['prop'] + '="{ row }">\r'
      slotCode +=
        generateTab(deepIndex + 1) + '<el-input v-model="row.' + element['prop'] + '" />\r'
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
    if (menuObject[key]['hasPermi'] !== undefined) {
      code['vue'] += ' v-hasPermi="[\'' + menuObject[key]['hasPermi'] + '\']"'
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

    // 添加function
    if (componentObject['event'] !== undefined && typeof componentObject['event'] === 'object') {
      addEvent(code, componentObject['event'] as object)
    }

    if ('v-loading' in componentObject['props']) {
      code['script']['variable'].push(
        'const ' + componentObject['props']['v-loading'] + ' = ref(true)\r'
      )
    }

    if (':page-data' in componentObject['props']) {
      code['script']['variable'].push(
        'const ' + componentObject['props'][':page-data'] + ' = ref()\r'
      )
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

  button: (code: object, componentObject: object, deepIndex: number, formModel: string) => {
    const itemDeepIndex = deepIndex
    let buttonDeepIndex = deepIndex

    if (formModel != '') {
      buttonDeepIndex++
      const lastItemIndex = code['vue'].lastIndexOf('<el-form-item')
      if (
        lastItemIndex > -1 &&
        code['vue'].substring(lastItemIndex, code['vue'].lenght).indexOf('button') > -1
      ) {
        code['vue'] = code['vue'].substring(
          0,
          code['vue'].lastIndexOf(generateTab(itemDeepIndex) + '</el-form-item>\r')
        )
      } else {
        code['vue'] += generateTab(itemDeepIndex) + '<el-form-item>\r'
      }
    }
    code['vue'] += generateTab(buttonDeepIndex) + '<el-button'
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
    if (icon !== undefined && icon != '') {
      const iconDeepIndex = buttonDeepIndex + 1
      code['vue'] += '\r' + generateTab(iconDeepIndex) + '<Icon icon="' + icon + '" />\r'
    }
    if (
      componentObject['children'] !== undefined &&
      typeof componentObject['children'] === 'object'
    ) {
      if (icon !== undefined) {
        const childrenDeepIndex = buttonDeepIndex + 1
        code['vue'] += generateTab(childrenDeepIndex) + componentObject['children'][0] + '\r'
      } else {
        code['vue'] += componentObject['children'][0]
      }
    }
    code['vue'] += (icon !== undefined ? generateTab(buttonDeepIndex) : '') + '</el-button>\r'
    if (formModel != '') {
      code['vue'] += generateTab(itemDeepIndex) + '</el-form-item>\r'
    }
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
        code['script']['variable'].push('const ' + props['ref'] + ' = ref()\r')
      }
      if ('v-loading' in props) {
        code['script']['variable'].push('const ' + props['v-loading'] + ' = ref(true)\r')
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
          'const ' + props[':model'] + ' = ref({\r' + childrenModel + '})\r'
        )
      }
      if (':rules' in props && props[':rules'] != '') {
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
      objectParseCode(code, childrenObject, childernDeepIndex, formModel)
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
      objectParseCode(code, childrenObject, childernDeepIndex, '')
    }
    code['vue'] += generateTab(deepIndex) + '</ContentWrap>\r'
  },

  row: (code: object, componentObject: object, deepIndex: number, formModel: string) => {
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
          objectParseCode(code, childrenObject, childernDeepIndex, formModel)
        }

        code['vue'] += generateTab(deepIndex) + '</el-col>\r'
      }
    }
    code['vue'] += generateTab(deepIndex) + '</el-row>\r'
  }
}
