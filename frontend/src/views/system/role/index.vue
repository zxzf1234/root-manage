<script lang="ts" name="SystemRole" setup>
import { PureTable } from '@pureadmin/table'
import { DICT_TYPE, getIntDictOptions } from '@/utils/dict'
// const exportLoading = ref(false) // 导出的加载中
// import EditColun from './EditColun.vue'
import { useRenderIcon } from '@/components/ReIcon/src/hooks'
import AddFill from '@iconify-icons/ri/add-circle-line'
import RoleForm from './RoleForm.vue'
import RoleAssignMenuForm from './RoleAssignMenuForm.vue'
import RoleDataPermissionForm from './RoleDataPermissionForm.vue'
import { ref } from 'vue'
import { PureTableBar } from '@/components/RePureTableBar'
import { useColumns } from './roleColuns'
const {
  columns,
  handleExport,
  list,
  showMouseMenu,
  getList,
  queryParams,
  handleQuery,
  pagination,
  tableSize,
  exportLoading,
  onCurrentChange,
  loading,
  loadingConfig
} = useColumns()
/** 重置按钮操作 */
const queryFormRef = ref() // 搜索的表单
const resetQuery = () => {
  queryFormRef.value.resetFields()
  handleQuery()
}
/** 添加/修改操作 */
const formRef = ref()
const openForm = (type: string, id?: number) => {
  formRef.value.open(type, id)
}
</script>

<template>
  <div>
    <doc-alert title="功能权限" url="https://doc.iocoder.cn/resource-permission" />
    <doc-alert title="数据权限" url="https://doc.iocoder.cn/data-permission" />
    <ContentWrap class="search-form">
      <!-- 搜索工作栏 -->
      <el-form
        ref="queryFormRef"
        :inline="true"
        :model="queryParams"
        class="-mb-15px"
        label-width="68px"
      >
        <el-form-item label="角色名称" prop="name">
          <el-input
            v-model="queryParams.name"
            class="!w-240px"
            clearable
            placeholder="请输入角色名称"
            @keyup.enter="handleQuery"
          />
        </el-form-item>
        <el-form-item label="角色标识" prop="code">
          <el-input
            v-model="queryParams.code"
            class="!w-240px"
            clearable
            placeholder="请输入角色标识"
            @keyup.enter="handleQuery"
          />
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-select
            v-model="queryParams.status"
            class="!w-240px"
            clearable
            placeholder="请选择状态"
          >
            <el-option
              v-for="dict in getIntDictOptions(DICT_TYPE.COMMON_STATUS)"
              :key="dict.value"
              :label="dict.label"
              :value="dict.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="创建时间" prop="createTime">
          <el-date-picker
            v-model="queryParams.createTime"
            :default-time="[new Date('1 00:00:00'), new Date('1 23:59:59')]"
            class="!w-240px"
            end-placeholder="结束日期"
            start-placeholder="开始日期"
            type="daterange"
            value-format="YYYY-MM-DD HH:mm:ss"
          />
        </el-form-item>
        <el-form-item>
          <el-button @click="handleQuery">
            <Icon class="mr-5px" icon="ep:search" />
            搜索
          </el-button>
          <el-button @click="resetQuery">
            <Icon class="mr-5px" icon="ep:refresh" />
            重置
          </el-button>

          <el-button
            v-hasPermi="['system:role:export']"
            :loading="exportLoading"
            plain
            type="success"
            @click="handleExport"
          >
            <Icon class="mr-5px" icon="ep:download" />
            导出
          </el-button>
        </el-form-item>
      </el-form>
    </ContentWrap>
    <PureTableBar :columns="columns" @refresh="getList">
      <template #buttons>
        <el-button type="primary" :icon="useRenderIcon(AddFill)" @click="openForm('create')">
          新增角色
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
          :loading-config="loadingConfig"
          :height="tableSize === 'small' ? 352 : 440"
          :data="
            list.slice(
              (pagination.currentPage - 1) * pagination.pageSize,
              pagination.currentPage * pagination.pageSize
            )
          "
          :pagination="pagination"
          @page-current-change="onCurrentChange"
          :columns="dynamicColumns"
          @row-contextmenu="showMouseMenu"
        />
      </template>
    </PureTableBar>
    <!-- 表单弹窗：添加/修改 -->
    <RoleForm ref="formRef" @success="getList" />
    <!-- <EditColun ref="edit" /> -->
    <!-- 表单弹窗：菜单权限 -->
    <RoleAssignMenuForm ref="assignMenuFormRef" @success="getList" />
    <!-- 表单弹窗：数据权限 -->
    <RoleDataPermissionForm ref="dataPermissionFormRef" @success="getList" />
  </div>
</template>
<style>
.el-checkbox-group {
  display: flex;
  flex-direction: column;
}
</style>
