<!-- 部门管理页面 -->

<template>
  <div>
    <ContentWrap>
      <el-form
        class="-mb-15px"
        :model="queryParams"
        ref="queryFormRef"
        :inline="true"
        label-width="68px"
      >
        <el-form-item label="部门名称" prop="name">
          <el-input
            v-model="queryParams.name"
            placeholder="请输入部门名称"
            clearable
            class="!w-240px"
          />
        </el-form-item>
        <el-form-item label="部门状态" prop="status">
          <el-select
            v-model="queryParams.status"
            placeholder="请选择部门状态"
            clearable
            class="!w-240px"
          >
            <el-option
              v-for="dict in getIntDictOptions(DICT_TYPE.COMMON_STATUS)"
              :key="dict.value"
              :label="dict.label"
              :value="dict.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            :icon="useRenderIcon(Search)"
            :loading="loading"
            @click="handleQuery"
          >
            搜索
          </el-button>
          <el-button :icon="useRenderIcon(Refresh)" @click="resetQuery"> 重置 </el-button>
        </el-form-item>
      </el-form>
    </ContentWrap>
    <PureTableBar :columns="columns" @refresh="getList">
      <template #buttons>
        <el-button type="primary" :icon="useRenderIcon(AddFill)" @click="openForm('create')">
          新增部门
        </el-button>
      </template>
      <template #default="{ dynamicColumns }">
        <pure-table
          border
          row-key="id"
          ref="tableRef"
          alignWhole="center"
          showOverflowTooltip
          :size="tableSize as any"
          :loading="loading"
          :height="tableSize === 'small' ? 352 : 440"
          :data="list"
          :columns="dynamicColumns"
          @row-contextmenu="showMouseMenu"
        >
          <template #operation="{ row }">
            <el-button
              class="reset-margin"
              link
              type="primary"
              :icon="useRenderIcon(EditPen)"
              @click="openForm('update', row.id)"
            >
              修改
            </el-button>
            <el-button
              class="reset-margin"
              @click="handleDelete(row.id)"
              link
              type="primary"
              :icon="useRenderIcon(Delete)"
            >
              删除
            </el-button>
          </template>
        </pure-table>
      </template>
    </PureTableBar>
    <!-- 表单弹窗：添加/修改 -->
    <DeptForm ref="formRef" @success="getList" />
  </div>
</template>
<script lang="ts" name="SystemRole" setup>
import { useRenderIcon } from '@/components/ReIcon/src/hooks'
import EditPen from '@iconify-icons/ep/edit-pen'
import Delete from '@iconify-icons/ep/delete'
import { PureTable } from '@pureadmin/table'
import { DICT_TYPE, getIntDictOptions } from '@/utils/dict'
import AddFill from '@iconify-icons/ri/add-circle-line'
import Search from '@iconify-icons/ep/search'
import Refresh from '@iconify-icons/ep/refresh'
import { ref } from 'vue'
import { PureTableBar } from '@/components/RePureTableBar'
import { useColumns } from './deptColuns'
import DeptForm from './DeptForm.vue'
const {
  handleDelete,
  columns,
  list,
  showMouseMenu,
  getList,
  queryParams,
  handleQuery,
  tableSize,
  loading
} = useColumns()

/** 重置按钮操作 */
const queryFormRef = ref() // 搜索的表单
const resetQuery = () => {
  queryParams.pageNo = 1
  queryFormRef.value.resetFields()
  getList()
}
/** 添加/修改操作 */
const formRef = ref()
const openForm = (type: string, id?: number) => {
  formRef.value.open(type, id)
}
</script>
<style>
.el-checkbox-group {
  display: flex;
  flex-direction: column;
}
</style>
<!-- ./deptColuns -->
