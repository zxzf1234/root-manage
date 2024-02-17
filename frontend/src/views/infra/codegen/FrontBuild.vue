<template>
  <ContentWrap>
    <el-row>
      <el-col>
        <div class="mb-2 float-right">
          <el-button size="small" @click="setJson"> 导入JSON</el-button>
          <el-button size="small" type="primary" @click="showJson">生成 JSON</el-button>
        </div>
      </el-col>
      <!-- 表单设计器 -->
      <el-col>
        <FcDesigner ref="designer" height="780px" />
      </el-col>
    </el-row>
  </ContentWrap>
  <!-- 弹窗：表单预览 -->
  <Dialog :title="dialogTitle" v-model="dialogVisible" max-height="600">
    <div ref="editor" v-if="dialogVisible">
      <el-scrollbar height="580">
        <div v-if="formType == 0">
          <el-button style="float: right" @click="copy(formData)">
            {{ t('common.copy') }}
          </el-button>
          <pre><code class="hljs" v-html="highlightedCode(formData)"></code></pre>
        </div>
        <div v-else>
          <el-input v-model="formData" :rows="20" type="textarea" />
          <el-button @click="dialogVisible = false" size="small">取 消</el-button>
          <el-button type="primary" @click="onOk" size="small">确 定</el-button>
        </div>
      </el-scrollbar>
    </div>
  </Dialog>
</template>
<script setup lang="ts" name="InfraBuild">
import FcDesigner from '@form-create/designer'
import { useClipboard } from '@vueuse/core'
import { isString } from '@/utils/is'
const { t } = useI18n() // 国际化

const formType = ref(-1) // 表单的类型：0 - 生成 JSON；1 - 生成 Options；2 - 生成组件
const formData = ref('') // 表单数据
const designer = ref() // 表单设计器
const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const message = useMessage() // 消息

const label = ' 内容块'
const name = 'ContentWrap'
// let i = 1
// const uniqueId = () => `uni${i++}`
const checkbox = {
  //拖拽组件的图标
  icon: 'icon-checkbox',
  //拖拽组件的名称
  label,
  name,
  inside: true,
  drag: true,
  dragBtn: false,
  mask: false,
  //拖拽组件的生成规则
  rule() {
    //如果在 props 方法中需要修改 rule 的属性,需要提前在 rule 上定义对应的属性
    return {
      //生成组件的名称
      type: name,
      children: []
    }
  },
  //拖拽组件配置项(props)的生成规则
  props() {
    return [
      //生成`checkbox`组件的`options`配置规则

      {
        type: 'switch',
        field: 'type',
        title: '按钮类型',
        props: { activeValue: 'button', inactiveValue: 'default' }
      },
      { type: 'switch', field: 'disabled', title: '是否禁用' },
      {
        type: 'inputNumber',
        field: 'min',
        title: '可被勾选的 checkbox 的最小数量'
      },
      { type: 'inputNumber', field: 'max', title: '可被勾选的 checkbox 的最大数量' },
      {
        type: 'input',
        field: 'textColor',
        title: '按钮形式的 Checkbox 激活时的文本颜色'
      },
      { type: 'input', field: 'fill', title: '按钮形式的 Checkbox 激活时的填充色和边框色' }
    ]
  }
}
/** 初始化 **/
onMounted(async () => {
  console.log(designer.value)
  designer.value.addComponent(checkbox)
  //插入拖拽按钮到`main`分类下
  designer.value.appendMenuItem('layout', {
    icon: checkbox.icon,
    name: checkbox.name,
    label: checkbox.label
  })
})

/** 打开弹窗 */
const openModel = (title: string) => {
  dialogVisible.value = true
  dialogTitle.value = title
}

/** 生成 JSON */
const showJson = () => {
  openModel('生成 JSON')
  formType.value = 0
  formData.value = designer.value.getRule()
}

/** 导入 JSON */
const setJson = () => {
  openModel('导入 JSON')
  formType.value = 1
}

/** 确定 */
const onOk = () => {
  dialogVisible.value = false
  designer.value.setRule(JSON.parse(formData.value))
}

/** 复制 **/
const copy = async (text: string) => {
  const { copy, copied, isSupported } = useClipboard({ source: text })
  if (!isSupported) {
    message.error(t('common.copyError'))
  } else {
    await copy()
    if (unref(copied)) {
      message.success(t('common.copySuccess'))
    }
  }
}

import hljs from 'highlight.js' // 导入代码高亮文件
import json from 'highlight.js/lib/languages/json'
const highlightedCode = (code) => {
  // 处理语言和代码
  let language = 'json'
  if (!isString(code)) {
    code = JSON.stringify(code, null, 2)
  }
  // 高亮
  const result = hljs.highlight(language, code, true)
  return result.value || '&nbsp;'
}
/** 初始化 **/
onMounted(async () => {
  hljs.registerLanguage('json', json)
})
</script>
