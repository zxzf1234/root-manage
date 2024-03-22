<template>
  <ContentWrap>
    <el-row>
      <el-col>
        <div class="mb-2 float-right">
          <el-button size="small" @click="setJson"> 导入JSON</el-button>
          <el-button size="small" type="primary" @click="showJson">生成 JSON</el-button>
          <el-button size="small" type="primary" @click="showCode">生成 代码</el-button>
          <el-button size="small" type="primary" @click="buildManage">构建管理页面</el-button>
          <el-button size="small" type="primary" @click="buildEdit">构建编辑页面</el-button>
        </div>
      </el-col>
      <!-- 表单设计器 -->
      <el-col>
        <designerForm ref="designer" height="780px" />
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
          <el-input v-model="formData" :rows="20" type="textarea" />
        </div>
        <div v-else-if="formType == 2">
          <el-button style="float: right" @click="copy(formData)">
            {{ t('common.copy') }}
          </el-button>
          <el-input v-model="formData" :rows="20" type="textarea" />
        </div>
        <div v-else>
          <el-input v-model="formData" :rows="20" type="textarea" />
          <el-button @click="dialogVisible = false" size="small">取 消</el-button>
          <el-button type="primary" @click="onOk" size="small">确 定</el-button>
        </div>
      </el-scrollbar>
    </div>
  </Dialog>
  <FrontBuildManage ref="buildManageRef" @success="showBuildManage" />
  <FrontBuildEdit ref="buildEditRef" @success="showBuildEdit" />
</template>
<script setup lang="ts" name="InfraBuild">
import { useClipboard } from '@vueuse/core'
import designerForm from '@/components/FcDesigner/index.es.js'
import { jsonParseCode } from '@/utils/frontBuild'
import FrontBuildManage from './FrontBuildManage.vue'
import FrontBuildEdit from './FrontBuildEdit.vue'
const { t } = useI18n() // 国际化

const formType = ref(-1) // 表单的类型：0 - 生成 JSON；1 - 生成 Options；2 - 生成组件
const formData = ref('') // 表单数据
const designer = ref() // 表单设计器
const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const message = useMessage() // 消息
const buildManageRef = ref()
const buildEditRef = ref()

/** 初始化 **/
onMounted(async () => {})

/** 打开弹窗 */
const openModel = (title: string) => {
  dialogVisible.value = true
  dialogTitle.value = title
}

/** 生成 JSON */
const showJson = () => {
  openModel('生成 JSON')
  formType.value = 0
  formData.value = JSON.stringify(designer.value.getRule(), null, 2)
}

/** 生成 代码 */
const showCode = () => {
  openModel('生成 代码')
  formType.value = 2

  formData.value = jsonParseCode(designer.value.getRule())
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

const showBuildManage = () => {
  console.log(2)
}

const showBuildEdit = () => {
  console.log(3)
}

const buildManage = () => {
  buildManageRef.value.open()
}

const buildEdit = () => {
  buildEditRef.value.open()
}
</script>
