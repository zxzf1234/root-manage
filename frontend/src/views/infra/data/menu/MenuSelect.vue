<template>
  <Dialog v-model="dialogVisible" :title="dialogTitle" width="1200px" class="h-[1000px]">
    <!-- 搜索工作栏 -->
    <ContentWrap class="h-[600px]">
      <el-form
        ref="queryFormRef"
        :inline="true"
        :model="queryParams"
        class="-mb-15px"
        label-width="68px"
      >
        <el-form-item label="菜单名称" prop="name">
          <el-input
            v-model="queryParams.name"
            clearable
            placeholder="请输入菜单名称"
            @keyup.enter="handleQuery"
          />
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-select v-model="queryParams.status" clearable placeholder="请选择菜单状态">
            <el-option
              v-for="dict in getIntDictOptions(DICT_TYPE.COMMON_STATUS)"
              :key="dict.value"
              :label="dict.label"
              :value="dict.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button @click="handleQuery">
            <Icon icon="ep:search" />
            搜索
          </el-button>
          <el-button @click="resetQuery">
            <Icon icon="ep:refresh" />
            重置
          </el-button>

          <el-button plain type="danger" @click="toggleExpandAll">
            <Icon icon="ep:sort" />
            展开/折叠
          </el-button>
          <el-button :disabled="formLoading" type="primary" @click="saveSelect">确 定</el-button>
          <el-button @click="dialogVisible = false">取 消</el-button>
        </el-form-item>
      </el-form>
      <el-table
        v-if="refreshTable"
        v-loading="formLoading"
        :data="list"
        :default-expand-all="isExpandAll"
        row-key="id"
        @row-dblclick="handleMenuDblclick"
      >
        <el-table-column :show-overflow-tooltip="true" label="菜单名称" prop="name" width="250" />
        <el-table-column align="center" label="图标" prop="icon" width="100">
          <template #default="scope">
            <Icon :icon="scope.row.icon" />
          </template>
        </el-table-column>
        <el-table-column label="排序" prop="sort" width="60" />
        <el-table-column :show-overflow-tooltip="true" label="权限标识" prop="permission" />
        <el-table-column :show-overflow-tooltip="true" label="组件路径" prop="component" />
        <el-table-column :show-overflow-tooltip="true" label="组件名称" prop="componentName" />
        <el-table-column label="状态" prop="status" width="80">
          <template #default="scope">
            <dict-tag :type="DICT_TYPE.COMMON_STATUS" :value="scope.row.status" />
          </template>
        </el-table-column>
      </el-table>
    </ContentWrap>

    <ContentWrap class="h-[230px]">
      <el-table
        highlight-current-row
        default-expand-all
        :data="dbSelectdMenuList"
        value-key="Id"
        max-height="200"
        class="mx-10"
      >
        <el-table-column :show-overflow-tooltip="true" label="菜单名称" prop="name" width="250" />
        <el-table-column align="center" label="图标" prop="icon" width="100">
          <template #default="scope">
            <Icon :icon="scope.row.icon" />
          </template>
        </el-table-column>
        <el-table-column label="排序" prop="sort" width="60" />
        <el-table-column :show-overflow-tooltip="true" label="权限标识" prop="permission" />
        <el-table-column :show-overflow-tooltip="true" label="组件路径" prop="component" />
        <el-table-column :show-overflow-tooltip="true" label="组件名称" prop="componentName" />
        <el-table-column label="状态" prop="status" width="80">
          <template #default="scope">
            <dict-tag :type="DICT_TYPE.COMMON_STATUS" :value="scope.row.status" />
          </template>
        </el-table-column>
      </el-table>
    </ContentWrap>
  </Dialog>
</template>
<script lang="ts" name="InfraMenuSelect" setup>
import { DICT_TYPE, getIntDictOptions } from '@/utils/dict'
import { handleTree } from '@/utils/tree'
import * as MenuApi from '@/api/infra/data/menu'

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const list = ref<any>([]) // 列表的数据
const queryParams = reactive({
  name: undefined,
  status: undefined
})
const queryFormRef = ref() // 搜索的表单
const isExpandAll = ref(false) // 是否展开，默认全部折叠
const refreshTable = ref(true) // 重新渲染表格状态
const dbSelectdMenuList = ref<MenuApi.MenuVO[]>([]) // 选中的字段列表
let type = 0

const emit = defineEmits(['saveSelect'])
/** 打开弹窗 */
const open = async (params) => {
  dialogVisible.value = true
  type = params
  await getList()
}
defineExpose({ open }) // 提供 open 方法，用于打开弹窗

/** 查询列表 */
const getList = async () => {
  formLoading.value = true
  try {
    const data = await MenuApi.getMenuList(queryParams)
    list.value = handleTree(data)
  } finally {
    formLoading.value = false
  }
}

/** 搜索按钮操作 */
const handleQuery = () => {
  getList()
}

/** 重置按钮操作 */
const resetQuery = () => {
  queryFormRef.value.resetFields()
  handleQuery()
}

/** 展开/折叠操作 */
const toggleExpandAll = () => {
  refreshTable.value = false
  isExpandAll.value = !isExpandAll.value
  nextTick(() => {
    refreshTable.value = true
  })
}

const handleMenuDblclick = (row) => {
  if (type == row.type && dbSelectdMenuList.value.indexOf(row) == -1)
    dbSelectdMenuList.value.push(row)
}

const saveSelect = () => {
  emit('saveSelect', dbSelectdMenuList.value)
  close()
}

/** 关闭弹窗 */
const close = async () => {
  dialogVisible.value = false
}
</script>
