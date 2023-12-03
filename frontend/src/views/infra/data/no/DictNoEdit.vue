<template>
  <Dialog v-model="dialogVisible" :title="dialogTitle">
    <el-form
      ref="formRef"
      v-loading="formLoading"
      :model="formData"
      :rules="formRules"
      label-width="80px"
    >
      <el-form-item label="编码名称" prop="keyName">
        <el-input v-model="formData.keyName" placeholder="请输入编码名称" />
      </el-form-item>
      <el-form-item label="前缀" prop="prefix">
        <el-input v-model="formData.prefix" placeholder="请输入前缀" />
      </el-form-item>
      <el-form-item label="日期格式" prop="dateForm">
        <el-select v-model="formData.dateForm">
          <el-option label="YYYYMMDD" value="0" />
          <el-option label="YYMMDD" value="1" />
        </el-select>
      </el-form-item>
      <el-form-item label="日期计算方式" prop="dateBase">
        <el-select v-model="formData.dateBase">
          <el-option label="全日期" value="0" />
          <el-option label="短日期" value="1" />
          <el-option label="无日期" value="2" />
        </el-select>
      </el-form-item>
      <el-form-item label="后缀长度" prop="postfixLen">
        <el-input v-model="formData.postfixLen" placeholder="请输入后缀长度" type="textarea" />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button :disabled="formLoading" type="primary" @click="submitForm">确 定</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </template>
  </Dialog>
</template>
<script lang="ts" name="DictNoEdit" setup>
import * as DictNoApi from '@/api/infra/data/dictNo'
const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formType = ref('') // 表单的类型：create - 新增；update - 修改
const formData = ref({
  id: undefined,
  keyName: '',
  prefix: '',
  dateForm: 0,
  dateBase: 0,
  postfixLen: 4
})
const formRules = reactive({
  keyName: [{ required: true, message: '编码名称不能为空', trigger: 'blur' }],
  prefix: [{ required: true, message: '前缀不能为空', trigger: 'blur' }],
  dateForm: [{ required: true, message: '日期格式不能为空', trigger: 'blur' }],
  dateBase: [{ required: true, message: '日期计算方式不能为空', trigger: 'blur' }],
  postfixLen: [{ required: true, message: '后缀长度不能为空', trigger: 'blur' }]
})
const formRef = ref() // 表单 Ref

/** 打开弹窗 */
const open = async (type: string, id: number) => {
  dialogVisible.value = true
  dialogTitle.value = t('action.' + type)
  formType.value = type
  resetForm()
  // 修改时，设置数据
  if (id) {
    formLoading.value = true
    try {
      formData.value = await DictNoApi.get(id)
    } finally {
      formLoading.value = false
    }
  }
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
    const data = formData.value as unknown as DictNoApi.InfraDictNoVo
    if (formType.value === 'create') {
      await DictNoApi.create(data)
      message.success(t('common.createSuccess'))
    } else {
      await DictNoApi.update(data)
      message.success(t('common.updateSuccess'))
    }
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
    id: undefined,
    keyName: '',
    prefix: '',
    dateForm: 0,
    dateBase: 0,
    postfixLen: 4
  }
  formRef.value?.resetFields()
}
</script>
