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
      <Table :column="buttonColumns">
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
    </el-form>
    <template #footer>
      <el-button type="primary" @click="submitForm">确 定</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </template>
  </Dialog>
</template>
<script lang="ts" name="FrontBuildEdit" setup>
const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formData = ref({
  parentId: undefined,
  name: '',
  comment: undefined,
  type: 0,
  sort: 0
})
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
    parentId: undefined,
    name: '',
    comment: undefined,
    type: 0,
    sort: 0
  }
  formRef.value?.resetFields()
}
</script>
