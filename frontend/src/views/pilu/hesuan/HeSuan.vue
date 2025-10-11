<template>
  <ContentWrap>
    <el-form :model="queryParams" ref="queryFormRef" label-width="auto" :inline="true">
      <el-form-item label="名称" prop="name">
        <el-input v-model="queryParams.name" placeholder="请输入名称" :clearable="true" />
      </el-form-item>
      <el-form-item label="描述" prop="comment">
        <el-input v-model="queryParams.comment" placeholder="请输入描述" :clearable="true" />
      </el-form-item>
      <el-form-item label="调用方法" prop="method">
        <el-input v-model="queryParams.method" placeholder="请输入调用方法" :clearable="true" />
      </el-form-item>
      <el-form-item>
        <el-button @click="handleClickSearch">
          <Icon icon="ep:search" />
          搜索
        </el-button>
        <el-button @click="handleClickReset">
          <Icon icon="ep:refresh" />
          重置
        </el-button>
        <el-button @click="handleClickNew">
          <Icon icon="ep:plus" />
          新增模型
        </el-button>
      </el-form-item>
    </el-form>
    <Table
      :columns="columns"
      :page-param="queryParams"
      :adaptive="true"
      :page-data="queryData"
      save-key="HeSuan"
      height-per="90"
      @page-change="getPage"
      @row-dblclick="handleTableDblclick"
    />
  </ContentWrap>
  <MoxingNew ref="formRef" />
</template>
<script setup name="HeSuan" lang="ts">
import MoxingNew from './MoxingNew.vue'
const formRef = ref()
const queryFormRef = ref()
const queryParams = ref({
  name: undefined,
  comment: undefined,
  method: undefined
})
const queryData = ref()
const columns = [
  {
    label: '省名称',
    prop: 'name'
  },
  {
    label: '调用方法',
    prop: 'method'
  },
  {
    label: '描述',
    prop: 'comment'
  }
]
/** 初始化 */
onMounted(() => {})

/** 搜索按钮操作 */
const handleClickSearch = () => {}

/** 重置按钮操作 */
const handleClickReset = () => {
  queryFormRef.value?.resetFields()
  handleClickSearch()
}

/** 新增模型按钮操作 */
const handleClickNew = () => {
  formRef.value.open()
}

/** 处理响应事件  */
const getPage = () => {}

/** 处理table行双击事件 */
const handleTableDblclick = (row) => {
  console.log(row)
}
</script>
