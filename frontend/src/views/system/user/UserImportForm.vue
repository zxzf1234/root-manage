<template>
  <Dialog v-model="dialogVisible" title="用户导入" width="400">
    <div v-if="!isShowErrorMeesage">
      <el-upload
        ref="uploadRef"
        v-model:file-list="fileList"
        :auto-upload="false"
        :disabled="formLoading"
        :limit="1"
        :on-error="submitFormError"
        :on-exceed="handleExceed"
        accept=".xlsx, .xls"
        drag
      >
        <Icon icon="ep:upload" />
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <template #tip>
          <div class="el-upload__tip text-center">
            <span>仅允许导入 xls、xlsx 格式文件。</span>
            <el-link
              :underline="false"
              style="font-size: 12px; vertical-align: baseline"
              type="primary"
              @click="importTemplate"
            >
              下载模板
            </el-link>
          </div>
        </template>
      </el-upload>
    </div>
    <div v-else>
      <Table :columns="columns" :data="errorData" />
    </div>
    <template #footer>
      <el-button :disabled="formLoading" type="primary" @click="submitForm">确 定</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </template>
  </Dialog>
</template>
<script lang="ts" name="SystemUserImportForm" setup>
import * as UserApi from '@/api/system/user/user'
import download from '@/utils/download'
import type { UploadUserFile } from 'element-plus'

const message = useMessage() // 消息弹窗

const dialogVisible = ref(false) // 弹窗的是否展示
const formLoading = ref(false) // 表单的加载中
const uploadRef = ref()
const fileList = ref<UploadUserFile[]>([]) // 文件列表
const isShowErrorMeesage = ref(false)
const errorData = ref()
const columns: TableColumnList = [
  { label: '行数', prop: 'columnIndex' },
  { label: '错误原因', prop: 'errorMessage' }
]

/** 打开弹窗 */
const open = () => {
  dialogVisible.value = true
  resetForm()
}
defineExpose({ open }) // 提供 open 方法，用于打开弹窗

/** 文件上传成功 */
const emits = defineEmits(['success'])
/** 提交表单 */
const submitForm = async () => {
  if (fileList.value.length == 0) {
    message.error('请上传文件')
    return
  }
  const errorMessages = await UserApi.importExcel({
    file: new Blob([fileList.value[0].raw!], { type: fileList.value[0].raw?.type })
  })
  formLoading.value = true
  if (errorMessages.data.length == 0) {
    message.alert('导入成功')
    // 发送操作成功的事件
    emits('success')
    dialogVisible.value = false
  } else {
    errorData.value = errorMessages.data
    isShowErrorMeesage.value = true
  }
}

/** 上传错误提示 */
const submitFormError = (): void => {
  message.error('上传失败，请您重新上传！')
  formLoading.value = false
}

/** 重置表单 */
const resetForm = () => {
  // 重置上传状态和文件
  formLoading.value = false
  uploadRef.value?.clearFiles()
  fileList.value = []
  isShowErrorMeesage.value = false
}

/** 文件数超出提示 */
const handleExceed = (): void => {
  message.error('最多只能上传一个文件！')
}

/** 下载模板操作 */
const importTemplate = async () => {
  const res = await UserApi.getImportTemplate()
  download.excel(res, '用户导入模版.xls')
}
</script>
