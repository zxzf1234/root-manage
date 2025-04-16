<template>
  <Dialog v-model="dialogVisible" :title="dialogTitle" width="700px">
    <Table :columns="errorInfo!.columns" :data="errorInfo!.data" />
    <template #footer>
      <el-button type="primary" @click="submitForm">确 定</el-button>
    </template>
  </Dialog>
</template>
<script setup name="ErrorMessage" lang="ts">
const emit = defineEmits(['success'])
interface errorInfoModel {
  title: string
  data: Object[]
  columns: Object[]
}
const dialogVisible = ref(false)
const errorInfo = ref<errorInfoModel>()
const dialogTitle = ref('错误列表')
/** 打开弹窗 */
const open = (info: errorInfoModel) => {
  errorInfo.value = info
  dialogTitle.value = errorInfo.value.title
  dialogVisible.value = true
}
defineExpose({ open }) // 提供 open 方法，用于打开弹窗
/** 提交表单 */
const submitForm = async () => {
  dialogVisible.value = false
  emit('success')
}
</script>
