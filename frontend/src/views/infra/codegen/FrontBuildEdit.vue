<template>
  <Dialog v-model="dialogVisible" :title="dialogTitle">
    <el-form>
      <el-form-item>
        <el-button @click="clickAddComponent">添加组件</el-button>
        <el-button @click="clickAddDatabaseColumn">根据数据库表字段添加组件</el-button>
        <el-button @click="clickDeleteComponent">删除组件</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
      </el-form-item>
    </el-form>
    <el-form
      ref="formRef"
      v-loading="formLoading"
      :model="formData"
      :rules="formRules"
      :inline="true"
      label-width="auto"
    >
      <el-form-item label="页面名称" prop="name">
        <el-input
          v-model="formData.name"
          placeholder="请输入页面名称"
          @keyup="formData.name = formData.name?.replace(/[^a-zA-Z_]/g, '')"
        />
      </el-form-item>
      <el-form-item label="表单数据对象" prop="searchModel">
        <el-input
          v-model="formData.model"
          placeholder="请输入搜索条件数据对象"
          @keyup="formData.model = formData.model?.replace(/[^a-zA-Z_]/g, '')"
        />
      </el-form-item>
      <el-form-item label="表单ref对象" prop="searchRef">
        <el-input
          v-model="formData.ref"
          placeholder="请输入表单ref对象"
          @keyup="formData.ref = formData.ref?.replace(/[^a-zA-Z_]/g, '')"
        />
      </el-form-item>
      <el-form-item label="表单验证规则对象" prop="searchRule">
        <el-input
          v-model="formData.rule"
          placeholder="请输入搜索条件验证规则对象"
          @keyup="formData.rule = formData.rule?.replace(/[^a-zA-Z_]/g, '')"
        />
      </el-form-item>
      <Table
        :columns="formComponentColumns"
        :data="formData.components"
        @current-change="currentChangeComponents"
      >
        <template #componentName="{ row }">
          <el-input v-model="row.componentName" />
        </template>
        <template #componentValue="{ row }">
          <el-input
            v-model="row.componentValue"
            @keyup="row.componentValue = row.componentValue.replace(/[^a-zA-Z_]/g, '')"
          />
        </template>
        <template #type="{ row }">
          <el-select v-model="row.type">
            <el-option label="input" value="input" />
            <el-option label="select" value="select" />
            <el-option label="checkbox" value="checkbox" />
            <el-option label="datePicker" value="datePicker" />
          </el-select>
        </template>
        <template #span="{ row }">
          <el-input-number v-model="row.span" :min="1" :max="24" />
        </template>
        <template #push="{ row }">
          <el-input-number v-model="row.push" :min="1" :max="24" />
        </template>
        <template #pull="{ row }">
          <el-input-number v-model="row.pull" :min="1" :max="24" />
        </template>
      </Table>
    </el-form>
  </Dialog>
  <InterfaceRelatedParam ref="relatedParamRef" @save-param="handleBatchRelatedParam" />
</template>
<script lang="ts" name="FrontBuildEdit" setup>
import { InterfaceFrontBuildEdit } from '@/model/infra/codegen/FrontBuildEdit'
import InterfaceRelatedParam from './InterfaceRelatedParam.vue'
import * as CodegenApi from '@/api/infra/codegen'
const message = useMessage() // 消息弹窗
const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const fromComponentCurrentRow = ref()
const relatedParamRef = ref()
const formData = ref<InterfaceFrontBuildEdit>({
  name: '',
  model: '',
  ref: '',
  rule: '',
  components: []
})
const formComponentColumns = [
  {
    label: '组件名称',
    prop: 'componentName',
    slot: 'componentName'
  },
  {
    label: '组件值',
    prop: 'componentValue',
    slot: 'componentValue'
  },
  {
    label: '组件类型',
    prop: 'type',
    slot: 'type'
  },
  {
    label: '格栅列数',
    prop: 'span',
    slot: 'span'
  },
  {
    label: '格栅右移列数',
    prop: 'push',
    slot: 'push'
  },
  {
    label: '格栅左移列数',
    prop: 'pull',
    slot: 'pull'
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

const currentChangeComponents = (val) => {
  fromComponentCurrentRow.value = val
}

const clickAddDatabaseColumn = () => {
  let variableType = 1 << 1
  let params = {
    Subclasses: new Array<CodegenApi.InterfaceSubclassVO>(),
    variableType: variableType,
    isBatchAdd: 1
  }
  relatedParamRef.value.open(params)
}

const clickAddComponent = () => {
  const newComponent = {
    id: crypto.randomUUID(),
    componentName: '',
    componentValue: '',
    type: 'input'
  }
  formData.value.components.push(newComponent)
}

const clickDeleteComponent = () => {
  if (fromComponentCurrentRow.value === undefined) {
    message.alertError('请选择要删除的搜索条件')
    return
  }
  const index = formData.value.components.indexOf(fromComponentCurrentRow.value)
  formData.value.components.splice(index, 1)
}

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
const handleBatchRelatedParam = (dbSelectdColumnList) => {
  dbSelectdColumnList.forEach((element) => {
    let dataType = 'input'
    if (element.javaType == 'Long' || element.javaType == 'Integer') {
      dataType = 'select'
    }
    if (element.javaType == 'LocalDateTime') {
      dataType = 'datePicker'
    }
    if (element.javaType == 'boolean') {
      dataType = 'checkbox'
    }
    const newComponentCondition = {
      id: crypto.randomUUID(),
      componentName: element.columnName,
      componentValue: element.columnComment,
      type: dataType
    }
    formData.value.components.push(newComponentCondition)
  })
}

/** 重置表单 */
const resetForm = () => {
  formData.value = {
    name: '',
    model: '',
    ref: '',
    rule: '',
    components: []
  }
  formRef.value?.resetFields()
}
</script>
