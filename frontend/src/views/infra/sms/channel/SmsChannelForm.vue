<template>
  <ContentWrap>
    <el-form :model="queryParams" ref="queryFormRef" label-width="auto" :inline="true">
      <el-form-item label="创建时间" prop="createTime">
        <el-date-picker
          v-model="queryParams.createTime"
          placeholder="请输入创建时间"
          :clearable="true"
          type="daterange"
        />
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
      </el-form-item>
    </el-form>
    <Table
      :columns="columns"
      :page-param="queryParams"
      :adaptive="true"
      :page-data="queryData"
      save-key="ss"
      height-per="90"
      @page-change="getPage"
    />
  </ContentWrap>
</template>
<script setup name="ss" lang="ts">
const queryFormRef = ref()
const queryParams = ref({
  createTime: undefined
})
const queryData = ref()
const columns = [
  {
    label: '物资信息ID',
    prop: 'materialId'
  },
  {
    label: '数量',
    prop: 'number'
  },
  {
    label: '批次号',
    prop: 'batchNo'
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

/** 处理响应事件  */
const getPage = () => {}
</script>
