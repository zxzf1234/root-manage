<template>
  <ContentWrap>
    <el-row>
      <el-col :span="3">
        <el-form-item label="页面名称" prop="searchModel">
          <el-input
            v-model="formAttr.name"
            placeholder="请输入页面名称"
            width="60px"
            @keyup="formAttr.name = formAttr.name?.replace(/[^a-zA-Z_]/g, '')"
          />
        </el-form-item>
      </el-col>
      <el-col :span="12">
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
import { TypeFrontBuildManage } from '@/model/infra/codegen/FrontBuildManage'
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
let formAttr = ref({ name: '', isDialag: false })

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

  formData.value = jsonParseCode(designer.value.getRule(), formAttr.value)
}

/** 导入 JSON */
const setJson = () => {
  openModel('导入 JSON')
  formType.value = 1
}

/** 确定 */
const onOk = () => {
  dialogVisible.value = false
  console.log(JSON.parse(formData.value))
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

const showBuildManage = (manageObject: TypeFrontBuildManage) => {
  formAttr.value.name = manageObject.name
  // 添加代码
  let formManageCard = {
    type: 'el-card',
    style: { width: '100%' },
    fullWidth: true,
    children: [
      {
        type: 'el-form',
        style: {
          width: '100%'
        },
        class: 'el-form--inline',
        fullWidth: true,
        _fc_drag_tag: 'form',
        hidden: false,
        display: true,
        props: {
          ':model': manageObject.searchModel,
          ref: manageObject.searchRef,
          ':rules': manageObject.searchRule
        }
      }
    ],
    _fc_drag_tag: 'ContentWrap',
    hidden: false,
    display: true
  }
  if (manageObject.searchConditions.length > 0) {
    if (formManageCard.children[0]['children'] === undefined)
      formManageCard.children[0]['children'] = []
    manageObject.searchConditions.forEach((element) => {
      formManageCard.children[0]['children'].push({
        type: element.type,
        field: element.searchName,
        title: element.searchValue,
        info: '',
        $required: false,
        _fc_drag_tag: element.type,
        hidden: false,
        display: true
      })
    })
  }

  if (manageObject.buttons.length > 0) {
    if (formManageCard.children[0]['children'] === undefined)
      formManageCard.children[0]['children'] = []
    manageObject.buttons.forEach((element) => {
      formManageCard.children[0]['children'].push({
        type: 'button',
        props: {
          hasPermi: element.hasPermi,
          click: element.buttonFunction,
          icon: element.buttonIcon
        },
        children: [element.buttonName],
        _fc_drag_tag: 'button',
        hidden: false,
        display: true
      })
    })
  }
  let formManageTable = {
    type: 'el-table',
    field: 'Fw5r1onudcn02n',
    style: {
      width: '100%'
    },
    fullWidth: true,
    _fc_drag_tag: 'table',
    hidden: false,
    display: true,
    props: {
      ':columns': manageObject.tableColumnName,
      ':page-param': manageObject.searchModel,
      adaptive: true,
      ':page-data': manageObject.tablePageData,
      'save-key': manageObject.name
    }
  }
  if (manageObject.tablePageChange != '') {
    formManageTable['event'] = [
      {
        eventName: 'page-change',
        function: manageObject.tablePageChange
      }
    ]
  }
  if (manageObject.tableColumns.length > 0) {
    if (formManageTable['column'] === undefined) formManageTable['column'] = []
    manageObject.tableColumns.forEach((element) => {
      formManageTable['column'].push({
        label: element.columnName,
        prop: element.columnValue,
        slot: element.isSlot
      })
    })
  }

  if (manageObject.tableMenuItems.length > 0) {
    if (formManageTable['menu'] === undefined) formManageTable['menu'] = []

    manageObject.tableMenuItems.forEach((element) => {
      formManageTable['menu'].push({
        label: element.itemName,
        function: element.itemFunction,
        hasPermi: element.hasPermi
      })
    })
  }
  const fromMange = [formManageCard, formManageTable]
  console.log(JSON.stringify(fromMange, null, 2))
  designer.value.setRule(fromMange)
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
