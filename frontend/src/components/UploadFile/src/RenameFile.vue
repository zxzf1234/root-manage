<template>
  <Dialog v-model="dialogVisible" title="重命名" :isModal="false" :fullscreen="false" width="400px">
    <el-form :model="formData" ref="formRef" :rules="formRules">
      <el-form-item prop="fileName">
        <el-input ref="fileNameRef" class="!w-360px" v-model="formData.fileName" />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button type="primary" @click="submitForm">确 定</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </template>
  </Dialog>
</template>
<script setup name="RenameFile" lang="ts">
const dialogVisible = ref(false)
const formData = ref({
  fileName: ''
})
const formRef = ref()
const fileNameRef = ref()
const emit = defineEmits(['success'])
let fileIndex = 0
let fileTypeName = ''

const formRules = reactive({
  fileName: [{ required: true, message: '附件名称不能为空', trigger: 'change' }]
})

/** 打开弹窗 */
const open = (index, fileName) => {
  fileIndex = index
  dialogVisible.value = true
  if (fileName.indexOf('.') > 0) {
    fileTypeName = fileName.substring(fileName.indexOf('.'))
    fileName = fileName.substring(0, fileName.indexOf('.'))
  }
  formData.value.fileName = fileName

  setTimeout(() => {
    fileNameRef.value.focus()
    fileNameRef.value.select()
  }, 100)
}
defineExpose({ open }) // 提供 open 方法，用于打开弹窗

/** 提交表单 */
const submitForm = async () => {
  // 校验表单
  if (!formRef) return
  const valid = await formRef.value.validate()
  if (!valid) return

  dialogVisible.value = false
  // 发送操作成功的事件
  emit('success', fileIndex, formData.value.fileName + fileTypeName)
}
</script>
