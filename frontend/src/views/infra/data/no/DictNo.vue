<!-- 字典管理页面 -->
<template>
  <!-- 搜索工作栏 -->
  <ContentWrap class="h-[55%]">
    <el-form
      ref="queryFormRef"
      :inline="true"
      :model="queryParams"
      class="-mb-15px"
      label-width="68px"
    >
      <el-form-item label="编码名称" prop="name">
        <el-input
          v-model="queryParams.keyName"
          class="!w-240px"
          clearable
          placeholder="请输入编号类别"
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="前缀" prop="type">
        <el-input
          v-model="queryParams.prefix"
          class="!w-240px"
          clearable
          placeholder="请输入前缀"
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="前缀" prop="remark">
        <el-input
          v-model="queryParams.remark"
          class="!w-240px"
          clearable
          placeholder="请输入前缀"
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="创建时间" prop="createTime">
        <el-date-picker
          v-model="queryParams.createTime"
          :default-time="[new Date('1 00:00:00'), new Date('1 23:59:59')]"
          class="!w-240px"
          end-placeholder="结束日期"
          start-placeholder="开始日期"
          type="daterange"
          value-format="yyyy-MM-dd HH:mm:ss"
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
          v-hasPermi="['infra:data:dict-no:create']"
          plain
          type="primary"
          @click="openForm('create')"
        >
          <Icon class="mr-5px" icon="ep:plus" />
          新增
        </el-button>
      </el-form-item>
    </el-form>
    <Table
      save-key="infraNo"
      :columns="typeColumns"
      :page-param="queryParams"
      @page-change="getList"
      :page-data="noData"
      adaptive
      @row-dblclick="(row) => openForm('update', row.id)"
    >
      <template #menu="{ row }">
        <context-menu-item
          label="修改"
          v-hasPermi="['infra:data:dict-no:update']"
          @click="openForm('update', row.id)"
        />
      </template>
      <template #dateForm="{ row }">
        {{ dateForms[row.dateForm] }}
      </template>
      <template #dateBase="{ row }">
        {{ dateBases[row.dateBase] }}
      </template>
    </Table>
  </ContentWrap>

  <!-- 表单弹窗：添加/修改 -->
  <DictNoEdit ref="formRef" @success="getList" />
</template>

<script lang="ts" name="infraDictNo" setup>
import * as DictNoApi from '@/api/infra/data/dictNo'
import DictNoEdit from './DictNoEdit.vue'
import { formatDate } from '@/utils/formatTime'

const loading = ref(true) // 列表的加载中
const noData = ref()
const dateForms = ['YYYYMMDD', 'YYMMDD']
const dateBases = ['全日期', '短日期', '无日期']
const typeColumns: TableColumnList = [
  {
    label: '编码名称',
    prop: 'keyName'
  },
  {
    label: '前缀',
    prop: 'prefix'
  },
  {
    label: '日期格式',
    prop: 'dateForm',
    slot: 'dateForm'
  },
  {
    label: '日期计算方式',
    prop: 'dateBase',
    slot: 'dateBase'
  },
  {
    label: '后缀长度',
    prop: 'postfixLen'
  },
  {
    label: '备注',
    prop: 'remark'
  },
  {
    label: '创建时间',
    prop: 'createTime',
    formatter: ({ createTime }) => formatDate(createTime)
  }
]

const queryParams = reactive({
  pageNo: 1,
  pageSize: 10,
  keyName: '',
  prefix: '',
  remark: '',
  createTime: []
})
const queryFormRef = ref() // 搜索的表单

/** 查询字典类型列表 */
const getList = async () => {
  loading.value = true
  try {
    noData.value = await DictNoApi.query(queryParams)
  } finally {
    loading.value = false
  }
}

/** 搜索按钮操作 */
const handleQuery = () => {
  queryParams.pageNo = 1
  getList()
}

/** 重置按钮操作 */
const resetQuery = () => {
  queryFormRef.value.resetFields()
  handleQuery()
}

/** 添加/修改操作 */
const formRef = ref()
const openForm = (type: string, id?: string) => {
  formRef.value.open(type, id)
}

/** 初始化 **/
onMounted(() => {
  getList()
})
</script>
