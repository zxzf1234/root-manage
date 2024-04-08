<template>
  <Dialog v-model="dialogVisible" :title="dialogTitle" width="1000px">
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
      <el-tabs v-model="tabActiveName" type="card">
        <el-tab-pane label="按钮" name="buttons">
          <el-button @click="clickAddButton">添加按钮</el-button>
          <el-button @click="clickAddMenuPermi">按菜单权限添加</el-button>
          <el-button @click="clickDeleteButton">删除按钮</el-button>
          <Table
            :columns="buttonColumns"
            :data="formData.buttons"
            @current-change="currentChangeButton"
          >
            <template #buttonName="{ row }">
              <div class="flex items-center">
                <Icon
                  icon="icon-park-outline:drag"
                  data-inline="false"
                  class="drag-buttons cursor-grab"
                  @mouseenter="rowDrop('buttons')"
                />
                <el-input class="ml-[16px]" v-model="row.buttonName" />
              </div>
            </template>
            <template #buttonFunction="{ row }">
              <el-input
                v-model="row.buttonFunction"
                @keyup="row.buttonFunction = row.buttonFunction.replace(/[^a-zA-Z_]/g, '')"
              />
            </template>
            <template #buttonIcon="{ row }">
              <el-select
                v-model="row.buttonIcon"
                filterable
                allow-create
                default-first-option
                :reserve-keyword="false"
              >
                <el-option label="ep:search" value="ep:search" />
                <el-option label="ep:refresh" value="ep:refresh" />
                <el-option label="ep:plus" value="ep:plus" />
                <el-option label="ep:edit" value="ep:edit" />
                <el-option label="ep:delete" value="ep:delete" />
                <el-option label="ep:upload" value="ep:upload" />
                <el-option label="ep:download" value="ep:download" />
              </el-select>
            </template>
            <template #hasPermi="{ row }">
              <el-input v-model="row.hasPermi" />
            </template>
          </Table>
        </el-tab-pane>
        <el-tab-pane label="搜索条件" name="searchConditions">
          <el-form-item label="搜索条件数据对象" prop="searchModel">
            <el-input
              v-model="formData.searchModel"
              placeholder="请输入搜索条件数据对象"
              @keyup="formData.searchModel = formData.searchModel?.replace(/[^a-zA-Z_]/g, '')"
            />
          </el-form-item>
          <el-form-item label="搜索条件ref对象" prop="searchRef">
            <el-input
              v-model="formData.searchRef"
              placeholder="请输入搜索条件ref对象"
              @keyup="formData.searchRef = formData.searchRef?.replace(/[^a-zA-Z_]/g, '')"
            />
          </el-form-item>
          <el-form-item label="搜索条件验证规则对象" prop="searchRule">
            <el-input
              v-model="formData.searchRule"
              placeholder="请输入搜索条件验证规则对象"
              @keyup="formData.searchRule = formData.searchRule?.replace(/[^a-zA-Z_]/g, '')"
            />
          </el-form-item>
          <el-form-item>
            <el-button @click="clickAddSearchCondition">添加搜索条件</el-button>
            <el-button @click="clickAddDatabaseColumn">添加数据库表字段</el-button>
            <el-button @click="clickDeleteSearchCondition">删除搜索条件</el-button>
          </el-form-item>

          <Table
            :columns="searchConditionColumns"
            :data="formData.searchConditions"
            @current-change="currentChangeSearchCondition"
          >
            <template #searchName="{ row }">
              <div class="flex items-center">
                <Icon
                  icon="icon-park-outline:drag"
                  data-inline="false"
                  class="drag-searchConditions cursor-grab"
                  @mouseenter="rowDrop('searchConditions')"
                />
                <el-input class="ml-[16px]" v-model="row.searchName" />
              </div>
            </template>
            <template #searchValue="{ row }">
              <el-input
                v-model="row.searchValue"
                @keyup="row.searchValue = row.searchValue.replace(/[^a-zA-Z_]/g, '')"
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
          </Table>
        </el-tab-pane>
        <el-tab-pane label="表字段" name="tableColumns">
          <el-form-item label="表绑定字段变量名" prop="tableColumnName">
            <el-input
              v-model="formData.tableColumnName"
              placeholder="请输入表绑定字段变量名"
              @keyup="
                formData.tableColumnName = formData.tableColumnName?.replace(/[^a-zA-Z_]/g, '')
              "
            />
          </el-form-item>
          <el-form-item label="是否分页" prop="tableIsPage">
            <el-checkbox v-model="formData.tableIsPage" />
          </el-form-item>
          <el-form-item label="表绑定数据分页变量" prop="tableData">
            <el-input
              v-model="formData.tableData"
              placeholder="请输入表绑定数据分页变量"
              @keyup="formData.tableData = formData.tableData?.replace(/[^a-zA-Z_]/g, '')"
            />
          </el-form-item>

          <el-form-item
            v-show="formData.tableIsPage == true"
            label="分页变化响应函数"
            prop="tablePageChange"
          >
            <el-input
              v-model="formData.tablePageChange"
              placeholder="请输入分页变化响应函数"
              @keyup="
                formData.tablePageChange = formData.tablePageChange?.replace(/[^a-zA-Z_]/g, '')
              "
            />
          </el-form-item>
          <el-form-item>
            <el-button @click="clickAddTableColumn">添加表字段</el-button>
            <el-button @click="clickAddDatabaseColumn">添加数据库表字段</el-button>
            <el-button @click="clickDeleteTableColumn">删除表字段</el-button>
          </el-form-item>

          <Table
            :columns="tableColumns"
            :data="formData.tableColumns"
            @current-change="currentChangeTableColumn"
          >
            <template #columnName="{ row }">
              <div class="flex items-center">
                <Icon
                  icon="icon-park-outline:drag"
                  data-inline="false"
                  class="drag-tableColumns cursor-grab"
                  @mouseenter="rowDrop('tableColumns')"
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
          </Table>
        </el-tab-pane>
        <el-tab-pane label="表右键菜单" name="tableMenuItems">
          <el-button @click="clickAddTableMenuItem">添加右键菜单</el-button>
          <el-button @click="clickAddMenuPermi">按菜单权限添加</el-button>
          <el-button @click="clickDeleteTableMenuItem">删除表字段</el-button>
          <Table
            :columns="tableMenuItems"
            :data="formData.tableMenuItems"
            @current-change="currentChangeTableMenuItem"
          >
            <template #itemName="{ row }">
              <div class="flex items-center">
                <Icon
                  icon="icon-park-outline:drag"
                  data-inline="false"
                  class="drag-tableMenuItems cursor-grab"
                  @mouseenter="rowDrop('tableMenuItems')"
                />
                <el-input class="ml-[16px]" v-model="row.itemName" />
              </div>
            </template>
            <template #itemFunction="{ row }">
              <el-input
                v-model="row.itemFunction"
                @keyup="row.itemFunction = row.itemFunction.replace(/[^a-zA-Z_]/g, '')"
              />
            </template>
            <template #hasPermi="{ row }">
              <el-input v-model="row.hasPermi" />
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
  <InterfaceRelatedParam ref="relatedParamRef" @save-param="handleBatchRelatedParam" />
  <MenuSelect ref="MenuSelectRef" @save-select="handleBatchMenuSelect" />
</template>
<script lang="ts" name="FrontBuildManage" setup>
import * as CodegenApi from '@/api/infra/codegen'
import InterfaceRelatedParam from './InterfaceRelatedParam.vue'
import MenuSelect from '../data/menu/MenuSelect.vue'
import * as FrontBuildManageModel from '@/model/infra/codegen/FrontBuildManage'
import { upperFirst, camelCase } from 'lodash-es'
import Sortable from 'sortablejs'
const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formData = ref<FrontBuildManageModel.FrontBuildManage>({
  name: '',
  searchModel: 'queryParams',
  searchRef: 'queryFormRef',
  searchRule: '',
  tableColumnName: 'columns',
  tableIsPage: true,
  tableData: 'tableData',
  tablePageChange: 'getPage',
  isDialog: false,
  isShowSubmitBtn: true,
  buttons: [],
  searchConditions: [],
  tableColumns: [],
  tableMenuItems: []
})
const tabActiveName = ref('buttons')
const buttonCurrentRow = ref()
const searchConditionCurrentRow = ref()
const tableColumnCurrentRow = ref()
const tableMenuItemCurrentRow = ref()
const message = useMessage() // 消息弹窗
const relatedParamRef = ref()
const MenuSelectRef = ref()

const buttonColumns: TableColumnList = [
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
  },
  {
    label: '权限',
    prop: 'hasPermi',
    slot: 'hasPermi'
  }
]

const searchConditionColumns = [
  {
    label: '搜索名称',
    prop: 'searchName',
    slot: 'searchName'
  },
  {
    label: '搜索值',
    prop: 'searchValue',
    slot: 'searchValue'
  },
  {
    label: '组件类型',
    prop: 'type',
    slot: 'type'
  }
]

const tableColumns = [
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
  }
]

const tableMenuItems = [
  {
    label: '菜单名称',
    prop: 'itemName',
    slot: 'itemName'
  },
  {
    label: '响应函数',
    prop: 'itemFunction',
    slot: 'itemFunction'
  },
  {
    label: '权限',
    prop: 'hasPermi',
    slot: 'hasPermi'
  }
]
const formRules = reactive({
  name: [{ required: true, message: '页面名称不能为空', trigger: 'blur' }],
  searchModel: [{ required: true, message: '搜索条件数据对象不能为空', trigger: 'blur' }],
  searchRef: [{ required: true, message: '搜索条件ref对象不能为空', trigger: 'blur' }],
  tableColumnName: [{ required: true, message: '表绑定字段变量名不能为空', trigger: 'blur' }],
  tablePageData: [{ required: true, message: '页面名称不能为空', trigger: 'blur' }],
  tableLoading: [{ required: true, message: '表加载中对象不能为空', trigger: 'blur' }],
  tablePageChange: [{ required: true, message: '分页变化响应函数不能为空', trigger: 'blur' }]
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
  if (formData.value.buttons.length < 1) {
    message.alertError('按钮至少有一个')
    return
  }
  let isEmpty = false
  formData.value.buttons.forEach((element) => {
    if (element.buttonFunction == '' || element.buttonName == '') isEmpty = true
  })
  if (isEmpty) {
    message.alertError('按钮的名称或响应函数不能为空')
    return
  }
  formData.value.searchConditions.forEach((element) => {
    if (element.searchName == '' || element.searchValue == '' || element.type == '') isEmpty = true
  })
  if (isEmpty) {
    message.alertError('搜索条件的搜索名称、搜索值、组件类型不能为空')
    return
  }
  if (formData.value.tableColumns.length < 1) {
    message.alertError('表字段至少有一个')
    return
  }
  formData.value.tableColumns.forEach((element) => {
    if (element.columnName == '' || element.columnValue == '') isEmpty = true
  })
  if (isEmpty) {
    message.alertError('表字段的字段名称、字段值不能为空')
    return
  }
  formData.value.tableMenuItems.forEach((element) => {
    if (element.itemName == '' || element.itemFunction == '') isEmpty = true
  })
  if (isEmpty) {
    message.alertError('表右键菜单的菜单名称、响应函数不能为空')
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

/** 重置表单 */
const resetForm = () => {
  formData.value = {
    name: '',
    isDialog: false,
    isShowSubmitBtn: true,
    searchModel: 'queryParams',
    searchRef: 'queryFormRef',
    searchRule: '',
    tableColumnName: 'columns',
    tableIsPage: true,
    tableData: 'queryData',
    tablePageChange: 'getPage',
    buttons: [
      {
        id: crypto.randomUUID(),
        buttonName: '搜索',
        buttonFunction: 'handleClickSearch',
        buttonIcon: 'ep:search',
        hasPermi: ''
      },
      {
        id: crypto.randomUUID(),
        buttonName: '重置',
        buttonFunction: 'handleClickReset',
        buttonIcon: 'ep:refresh',
        hasPermi: ''
      }
    ],
    searchConditions: [],
    tableColumns: [],
    tableMenuItems: []
  }
  formRef.value?.resetFields()
}

const clickAddButton = () => {
  const newButton = {
    id: crypto.randomUUID(),
    buttonName: '',
    buttonFunction: '',
    buttonIcon: '',
    hasPermi: ''
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
    searchName: '',
    searchValue: '',
    type: 'input'
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
    columnName: '',
    columnValue: '',
    isSlot: false
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

const clickAddTableMenuItem = () => {
  const newTableMenuItem = {
    id: crypto.randomUUID(),
    itemName: '',
    itemFunction: '',
    hasPermi: ''
  }
  formData.value.tableMenuItems.push(newTableMenuItem)
}

const clickDeleteTableMenuItem = () => {
  if (tableMenuItemCurrentRow.value === undefined) {
    message.alertError('请选择要删除的表右键菜单')
    return
  }
  const index = formData.value.tableMenuItems.indexOf(tableMenuItemCurrentRow.value)
  formData.value.tableMenuItems.splice(index, 1)
}

const currentChangeTableMenuItem = (val) => {
  tableMenuItemCurrentRow.value = val
}

const handleBatchRelatedParam = (dbSelectdColumnList) => {
  if (tabActiveName.value === 'searchConditions') {
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
      const newSearchCondition = {
        id: crypto.randomUUID(),
        searchName: element.columnComment,
        searchValue: camelCase(element.columnName),
        type: dataType
      }
      formData.value.searchConditions.push(newSearchCondition)
    })
  }
  if (tabActiveName.value === 'tableColumns') {
    dbSelectdColumnList.forEach((element) => {
      const newTableColumn = {
        id: crypto.randomUUID(),
        columnName: element.columnComment,
        columnValue: camelCase(element.columnName),
        isSlot: false
      }
      formData.value.tableColumns.push(newTableColumn)
    })
  }
}

const handleBatchMenuSelect = (dbSelectdMenuList) => {
  if (tabActiveName.value === 'buttons') {
    dbSelectdMenuList.forEach((element) => {
      let iconName = ''
      if (element.permission.indexOf(':query') > -1) iconName = 'ep:search'
      if (element.permission.indexOf(':create') > -1) iconName = 'ep:plus'
      if (element.permission.indexOf(':update') > -1) iconName = 'ep:edit'
      if (element.permission.indexOf(':delete') > -1) iconName = 'ep:delete'
      if (element.permission.indexOf(':import') > -1) iconName = 'ep:upload'
      if (element.permission.indexOf(':export') > -1) iconName = 'ep:download'
      if (element.name == '查询' && element.permission.indexOf(':query') > -1) {
        formData.value.buttons.forEach((button) => {
          if (button.buttonName == '搜索' && button.hasPermi == '')
            button.hasPermi = element.permission
        })
      } else {
        const newSearchCondition = {
          id: crypto.randomUUID(),
          buttonName: element.name,
          buttonFunction:
            'handleClick' +
            upperFirst(
              element.permission.substring(
                element.permission.lastIndexOf(':') + 1,
                element.permission.length
              )
            ),
          buttonIcon: iconName,
          hasPermi: element.permission
        }
        formData.value.buttons.push(newSearchCondition)
      }
    })
  }
  if (tabActiveName.value === 'tableMenuItems') {
    dbSelectdMenuList.forEach((element) => {
      const newTableMenuItem = {
        id: crypto.randomUUID(),
        itemName: element.name,
        itemFunction:
          'handleMenu' +
          upperFirst(
            element.permission.substring(
              element.permission.lastIndexOf(':') + 1,
              element.permission.length
            )
          ),
        hasPermi: element.permission
      }
      formData.value.tableMenuItems.push(newTableMenuItem)
    })
  }
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

const clickAddMenuPermi = () => {
  MenuSelectRef.value.open(3)
}
</script>
