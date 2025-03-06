<template>
  <Editor
    v-model="contentValue"
    api-key="i4qd24kno2nub7wztws8prc79wqnlvkz77sklkp4jyyqca1q"
    :init="init"
    @keydown="handleKeyDown"
  />
</template>

<script lang="ts" name="Editor" setup>
import Editor from '@tinymce/tinymce-vue'
import { propTypes } from '@/utils/propTypes'
import * as FileApi from '@/api/infra/file'
import tinymce from 'tinymce/tinymce'
import 'tinymce/themes/silver' //编辑器主题，不引入则报错
import 'tinymce/icons/default' //引入编辑器图标icon，不引入则不显示对应图标
import 'tinymce/models/dom'

import 'tinymce/plugins/autolink' //自动链接
import 'tinymce/plugins/charmap' //特殊字符
import 'tinymce/plugins/code' //编辑源码
import 'tinymce/plugins/emoticons' //表情
import 'tinymce/plugins/image' //插入编辑图片
import 'tinymce/plugins/insertdatetime' //插入日期时间
import 'tinymce/plugins/link' //超链接
import 'tinymce/plugins/lists' //列表插件
import 'tinymce/plugins/searchreplace' //查找替换
import 'tinymce/plugins/table' //表格
import '@/components/Editor/src/plugins/formatpainter/plugin.min.js'

const emit = defineEmits(['update:modelValue', 'keydown'])
const props = defineProps({
  height: propTypes.oneOfType([Number, String]).def('200px'),
  modelValue: propTypes.string.def('')
})
const contentValue = ref()

/** 初始化 */
onMounted(async () => {
  tinymce.init({})
})

const exampleImageUploadHandler = (blobInfo) => {
  return new Promise((resolve, reject) => {
    FileApi.uploadFile({ file: blobInfo.blob() })
      .then((res) => {
        if (res.code === 0) {
          resolve(res.data)
        } else {
          reject(res.data)
        }
      })
      .catch((res) => {
        reject(res.data)
      })
  })
}

const init = ref({
  base_url: '/crm-client/tinymce',
  branding: false,
  height: props.height,
  visual_table_class: 'mx-mce-table',
  automatic_uploads: true,
  valid_children: '+body[style]',
  language: 'zh_CN', //语言类型
  images_upload_handler: exampleImageUploadHandler,
  menubar: false,
  statusbar: false,

  plugins: [
    // Core editing features
    'autolink',
    'charmap',
    'emoticons',
    'image',
    'link',
    'lists',
    'searchreplace',
    'table',
    'formatpainter',
    'code'
  ],

  toolbar:
    'undo redo |  fontfamily fontsize forecolor backcolor | bold italic underline strikethrough removeformat formatpainter | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight indent outdent | numlist bullist  |  link image table | emoticons charmap code ',
  font_family_formats:
    '宋体 = SimSun;黑体 = SimHei;楷体 = KaiTi;方正兰亭纤黑简体 = Fangzheng Lantinghei;Microsoft YaHei = Microsoft YaHei;Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings',
  content_style: "body { font-family: 'Microsoft YaHei', sans-serif; }",
  forced_root_block: 'div'
})

watch(
  () => props.modelValue,
  (val: string) => {
    if (val === unref(contentValue)) return
    contentValue.value = val
  },
  {
    immediate: true
  }
)

watch(
  () => contentValue.value,
  (val: string) => {
    emit('update:modelValue', val)
  }
)

const handleKeyDown = (event) => {
  emit('keydown', event)
}
</script>

<style scoped>
:deep(.tox:not([dir='rtl']) .tox-toolbar__group:not(:last-of-type)) {
  border-right: 1px solid #cccccc;
}
</style>
