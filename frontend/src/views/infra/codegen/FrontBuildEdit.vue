<template>
  <Dialog v-model="dialogVisible" :title="dialogTitle" width="1000px">
    <el-form>
      <el-form-item>
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
      <el-form-item label="是否弹窗" prop="isDialog">
        <el-checkbox v-model="formData.isDialog" />
      </el-form-item>
      <el-form-item
        v-show="formData.isDialog == true"
        label="是否显示提交按钮"
        prop="isShowSubmitBtn"
      >
        <el-checkbox v-model="formData.isShowSubmitBtn" />
      </el-form-item>
      <el-form-item label="表单数据对象" prop="model">
        <el-input
          v-model="formData.model"
          placeholder="请输入搜索条件数据对象"
          @keyup="formData.model = formData.model?.replace(/[^a-zA-Z_]/g, '')"
        />
      </el-form-item>
      <el-form-item label="表单ref对象" prop="ref">
        <el-input
          v-model="formData.ref"
          placeholder="请输入表单ref对象"
          @keyup="formData.ref = formData.ref?.replace(/[^a-zA-Z_]/g, '')"
        />
      </el-form-item>
      <el-form-item label="表单验证规则对象" prop="rule">
        <el-input
          v-model="formData.rule"
          placeholder="请输入搜索条件验证规则对象"
          @keyup="formData.rule = formData.rule?.replace(/[^a-zA-Z_]/g, '')"
        />
      </el-form-item>
      <el-form-item label="表单加载中对象" prop="loading">
        <el-input
          v-model="formData.loading"
          placeholder="请输入表单加载中对象"
          @keyup="formData.ref = formData.ref?.replace(/[^a-zA-Z_]/g, '')"
        />
      </el-form-item>
      <el-tabs v-model="tabActiveName" type="card">
        <el-tab-pane label="组件" name="components">
          <el-form-item>
            <el-button @click="clickAddComponent">添加组件</el-button>
            <el-button @click="clickAddDatabaseColumn">根据数据库表字段添加组件</el-button>
            <el-button @click="clickDeleteComponent">删除组件</el-button>
          </el-form-item>
          <Table
            :columns="formComponentColumns"
            :data="formData.components"
            @current-change="currentChangeComponents"
          >
            <template #componentName="{ row }">
              <div class="flex items-center">
                <Icon
                  icon="icon-park-outline:drag"
                  data-inline="false"
                  class="drag-components cursor-grab"
                  @mouseenter="rowDrop('components')"
                />
                <el-input class="ml-[16px]" v-model="row.componentName" />
              </div>
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
              <el-input-number v-model="row.span" :min="0" :max="24" />
            </template>
            <template #push="{ row }">
              <el-input-number v-model="row.push" :min="0" :max="24" />
            </template>
            <template #pull="{ row }">
              <el-input-number v-model="row.pull" :min="0" :max="24" />
            </template>
          </Table>
        </el-tab-pane>
        <el-tab-pane label="明细表" name="detailTableColumns">
          <el-form-item label="明细表数据对象" prop="detailTableData">
            <el-input
              v-model="formData.detailTableData"
              placeholder="请输入明细表数据对象"
              @keyup="formData.model = formData.model?.replace(/[^a-zA-Z_]/g, '')"
            />
          </el-form-item>
          <el-form-item>
            <el-button @click="clickAddTableColumn">添加表字段</el-button>
            <el-button @click="clickAddDatabaseColumn">添加数据库表字段</el-button>
            <el-button @click="clickDeleteTableColumn">删除表字段</el-button>
          </el-form-item>
          <Table
            :columns="detailTableColumns"
            :data="formData.detailTableColumns"
            @current-change="currentChangeTableColumn"
          >
            <template #columnName="{ row }">
              <div class="flex items-center">
                <Icon
                  icon="icon-park-outline:drag"
                  data-inline="false"
                  class="drag-detailTableColumns cursor-grab"
                  @mouseenter="rowDrop('detailTableColumns')"
                />
                <el-input class="ml-[16px]" v-model="row.columnName" />
              </div>
            </template>
            <template #columnValue="{ row }">
              <el-input
                v-model="row.columnValue"
                @keyup="row.columnValue = row.columnValue.replace(/[^a-zA-Z_]/g, '')"
              />
            </template>
            <template #isSlot="{ row }">
              <el-checkbox v-model="row.isSlot" />
            </template>
            <template #type="{ row }">
              <el-select v-model="row.type">
                <el-option label="input" value="input" />
                <el-option label="select" value="select" />
                <el-option label="checkbox" value="checkbox" />
                <el-option label="datePicker" value="datePicker" />
              </el-select>
            </template>
          </Table>
        </el-tab-pane>
      </el-tabs>
    </el-form>
  </Dialog>
  <InterfaceRelatedParam ref="relatedParamRef" @save-param="handleBatchRelatedParam" />
</template>
<script lang="ts" name="FrontBuildEdit" setup>
import * as frontBuildEditModel from '@/model/infra/codegen/FrontBuildEdit'
import InterfaceRelatedParam from './InterfaceRelatedParam.vue'
import * as CodegenApi from '@/api/infra/codegen'
import { camelCase } from 'lodash-es'
import Sortable from 'sortablejs'
const message = useMessage() // 消息弹窗
const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const fromComponentCurrentRow = ref()
const relatedParamRef = ref()
const tabActiveName = ref('components')
const tableColumnCurrentRow = ref()
const detailTableColumns = [
  {
    label: '字段名称',
    prop: 'columnName',
    slot: 'columnName'
  },
  {
    label: '字段值',
    prop: 'columnValue',
    slot: 'columnValue'
  },
  {
    label: '是否插槽',
    prop: 'isSlot',
    slot: 'isSlot'
  },
  {
    label: '组件类型',
    prop: 'type',
    slot: 'type'
  }
]

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

const formData = ref<frontBuildEditModel.FrontBuildEdit>({
  name: '',
  model: '',
  ref: '',
  rule: '',
  loading: '',
  isDialog: true,
  isShowSubmitBtn: true,
  detailTableData: 'details',
  detailTableColumns: [],
  components: []
})

const rowDrop = (tableName: string) => {
  nextTick(() => {
    const wrapper: HTMLElement | null = document.querySelector(
      '#pane-' + tableName + ' .el-table__body-wrapper tbody'
    )
    Sortable.create(wrapper, {
      animation: 300,
      handle: '.drag-' + tableName,
      onEnd: ({ newIndex, oldIndex }) => {
        const currentRow = formData.value[tableName].splice(oldIndex, 1)[0]
        formData.value[tableName].splice(newIndex, 0, currentRow)
      }
    })
  })
}

const clickAddTableColumn = () => {
  const newTableColumn = {
    id: crypto.randomUUID(),
    columnName: '',
    columnValue: '',
    isSlot: true,
    type: 'input'
  }
  formData.value.detailTableColumns.push(newTableColumn)
}

const clickDeleteTableColumn = () => {
  if (tableColumnCurrentRow.value === undefined) {
    message.alertError('请选择要删除的表字段')
    return
  }
  const index = formData.value.detailTableColumns.indexOf(tableColumnCurrentRow.value)
  formData.value.detailTableColumns.splice(index, 1)
}

const currentChangeTableColumn = (val) => {
  tableColumnCurrentRow.value = val
}

const formRules = reactive({
  name: [{ required: true, message: '页面名称不能为空', trigger: 'blur' }],
  model: [{ required: true, message: '表单数据对象不能为空', trigger: 'blur' }],
  ref: [{ required: true, message: '表单ref对象不能为空', trigger: 'blur' }],
  rruleef: [{ required: true, message: '表单验证规则对象不能为空', trigger: 'blur' }],
  loading: [{ required: true, message: '表单加载中对象不能为空', trigger: 'blur' }]
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
    type: 'input',
    span: 0,
    push: 0,
    pull: 0
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

  let isEmpty = false
  if (formData.value.components.length < 1) {
    message.alertError('组件至少有一个')
    return
  }
  formData.value.components.forEach((element) => {
    if (element.componentName == '' || element.componentValue == '' || element.type == '')
      isEmpty = true
  })
  if (isEmpty) {
    message.alertError('组件的名称、值、类型不能为空')
    return
  }
  // 提交请求
  formLoading.value = true
  try {
    dialogVisible.value = false
    // 发送操作成功的事件
    emit('success', formData.value)
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
    if (tabActiveName.value === 'components') {
      const newComponent = {
        id: crypto.randomUUID(),
        componentName: element.columnComment,
        componentValue: camelCase(element.columnName),
        type: dataType,
        span: 0,
        push: 0,
        pull: 0
      }
      formData.value.components.push(newComponent)
    } else {
      const newColumn = {
        id: crypto.randomUUID(),
        columnName: element.columnComment,
        columnValue: camelCase(element.columnName),
        isSlot: true,
        type: dataType
      }
      formData.value.detailTableColumns.push(newColumn)
    }
  })
}

/** 重置表单 */
const resetForm = () => {
  formData.value = {
    name: '',
    model: 'formData',
    ref: 'formRef',
    rule: 'formRules',
    loading: 'formLoading',
    isDialog: true,
    isShowSubmitBtn: true,
    detailTableData: 'details',
    detailTableColumns: [],
    components: []
  }
  formRef.value?.resetFields()
}
</script>
