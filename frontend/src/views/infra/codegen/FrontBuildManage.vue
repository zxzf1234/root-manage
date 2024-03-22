<template>
  <Dialog v-model="dialogVisible" :title="dialogTitle">
    <el-form
      ref="formRef"
      v-loading="formLoading"
      :model="formData"
      :rules="formRules"
      label-width="80px"
    >
      <el-form-item label="页面名称" prop="name">
        <el-input
          v-model="formData.name"
          placeholder="请输入页面名称"
          @keyup="formData.name = formData.name?.replace(/[^a-zA-Z_]/g, '')"
        />
      </el-form-item>
      <el-tabs v-model="tabActiveName" type="card">
        <el-tab-pane label="按钮" name="buttonParam">
          <el-button @click="clickAddButton">添加按钮</el-button>
          <el-button @click="clickDeleteButton">删除按钮</el-button>
          <Table
            :columns="buttonColumns"
            :data="formData.buttons"
            @current-change="currentChangeButton"
          >
            <template #buttonName="{ row }">
              <el-input :value="row.buttonName" />
            </template>
            <template #buttonFunction="{ row }">
              <el-input :value="row.buttonFunction" />
            </template>
            <template #buttonIcon="{ row }">
              <el-input :value="row.buttonIcon" />
            </template>
          </Table>
        </el-tab-pane>
        <el-tab-pane label="搜索条件" name="searchConditionParam">
          <el-button @click="clickAddSearchCondition">添加搜索条件</el-button>
          <el-button @click="clickDeleteSearchCondition">删除搜索条件</el-button>
          <Table
            :columns="searchConditionColumns"
            :data="formData.searchConditions"
            @current-change="currentChangeSearchCondition"
          >
            <template #buttonName="{ row }">
              <el-input :value="row.buttonName" />
            </template>
            <template #buttonFunction="{ row }">
              <el-input :value="row.buttonFunction" />
            </template>
            <template #buttonIcon="{ row }">
              <el-input :value="row.buttonIcon" />
            </template>
          </Table>
        </el-tab-pane>
        <el-tab-pane label="表字段" name="tableParam">
          <el-button @click="clickAddTableColumn">添加表字段</el-button>
          <el-button @click="clickDeleteTableColumn">删除表字段</el-button>
          <Table
            :columns="tableColumns"
            :data="formData.tableColumns"
            @current-change="currentChangeTableColumn"
          >
            <template #buttonName="{ row }">
              <el-input :value="row.buttonName" />
            </template>
            <template #buttonFunction="{ row }">
              <el-input :value="row.buttonFunction" />
            </template>
            <template #buttonIcon="{ row }">
              <el-input :value="row.buttonIcon" />
            </template>
          </Table>
        </el-tab-pane>
      </el-tabs>
    </el-form>
    <template #footer>
      <el-button type="primary" @click="submitForm">确 定</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </template>
  </Dialog>
</template>
<script lang="ts" name="FrontBuildManage" setup>
const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formData = ref({
  name: '',
  buttons: [],
  searchConditions: [],
  tableColumns: []
})
const tabActiveName = ref('buttonParam')
const buttonCurrentRow = ref()
const searchConditionCurrentRow = ref()
const tableColumnCurrentRow = ref()
const message = useMessage() // 消息弹窗

const buttonColumns = [
  {
    label: '按钮名称',
    prop: 'buttonName',
    slot: 'buttonName'
  },
  {
    label: '响应函数',
    prop: 'buttonFunction',
    slot: 'buttonFunction'
  },
  {
    label: '按钮图片',
    prop: 'buttonIcon',
    slot: 'buttonIcon'
  }
]

const searchConditionColumns = [
  {
    label: '按钮名称',
    prop: 'buttonName',
    slot: 'buttonName'
  },
  {
    label: '响应函数',
    prop: 'buttonFunction',
    slot: 'buttonFunction'
  },
  {
    label: '按钮图片',
    prop: 'buttonIcon',
    slot: 'buttonIcon'
  }
]

const tableColumns = [
  {
    label: '按钮名称',
    prop: 'buttonName',
    slot: 'buttonName'
  },
  {
    label: '响应函数',
    prop: 'buttonFunction',
    slot: 'buttonFunction'
  },
  {
    label: '按钮图片',
    prop: 'buttonIcon',
    slot: 'buttonIcon'
  }
]
const formRules = reactive({
  name: [{ required: true, message: '页面名称不能为空', trigger: 'blur' }]
})

const formRef = ref() // 表单 Ref

/** 打开弹窗 */
const open = async () => {
  dialogVisible.value = true
  resetForm()
}
defineExpose({ open }) // 提供 open 方法，用于打开弹窗

/** 提交表单 */
const emit = defineEmits(['success']) // 定义 success 事件，用于操作成功后的回调
const submitForm = async () => {
  // 校验表单
  if (!formRef) return
  const valid = await formRef.value.validate()
  if (!valid) return
  // 提交请求
  formLoading.value = true
  try {
    dialogVisible.value = false
    // 发送操作成功的事件
    emit('success')
  } finally {
    formLoading.value = false
  }
}

/** 重置表单 */
const resetForm = () => {
  formData.value = {
    name: '',
    buttons: [],
    searchConditions: [],
    tableColumns: []
  }
  formRef.value?.resetFields()
}

const clickAddButton = () => {
  const newButton = {
    id: crypto.randomUUID(),
    buttonName: '',
    buttonFunction: '',
    buttonIcon: ''
  }
  formData.value.buttons.push(newButton)
}

const clickDeleteButton = () => {
  if (buttonCurrentRow.value === undefined) {
    message.alertError('请选择要删除的按钮')
    return
  }
  const index = formData.value.buttons.indexOf(buttonCurrentRow.value)
  formData.value.buttons.splice(index, 1)
}

const currentChangeButton = (val) => {
  buttonCurrentRow.value = val
}

const clickAddSearchCondition = () => {
  const newSearchCondition = {
    id: crypto.randomUUID(),
    buttonName: '',
    buttonFunction: '',
    buttonIcon: ''
  }
  formData.value.searchConditions.push(newSearchCondition)
}

const clickDeleteSearchCondition = () => {
  if (searchConditionCurrentRow.value === undefined) {
    message.alertError('请选择要删除的搜索条件')
    return
  }
  const index = formData.value.searchConditions.indexOf(searchConditionCurrentRow.value)
  formData.value.searchConditions.splice(index, 1)
}

const currentChangeSearchCondition = (val) => {
  searchConditionCurrentRow.value = val
}

const clickAddTableColumn = () => {
  const newTableColumn = {
    id: crypto.randomUUID(),
    buttonName: '',
    buttonFunction: '',
    buttonIcon: ''
  }
  formData.value.tableColumns.push(newTableColumn)
}

const clickDeleteTableColumn = () => {
  if (tableColumnCurrentRow.value === undefined) {
    message.alertError('请选择要删除的表字段')
    return
  }
  const index = formData.value.tableColumns.indexOf(tableColumnCurrentRow.value)
  formData.value.tableColumns.splice(index, 1)
}

const currentChangeTableColumn = (val) => {
  tableColumnCurrentRow.value = val
}
</script>
