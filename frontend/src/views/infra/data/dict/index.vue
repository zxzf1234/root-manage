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
      <el-form-item label="字典类型" prop="type">
        <el-input
          v-model="queryParams.type"
          clearable
          placeholder="请输入字典类型"
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="字典名称" prop="name">
        <el-input
          v-model="queryParams.name"
          clearable
          placeholder="请输入字典名称"
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-select v-model="queryParams.status" clearable placeholder="请选择字典状态">
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
          end-placeholder="结束日期"
          start-placeholder="开始日期"
          type="daterange"
          value-format="yyyy-MM-dd HH:mm:ss"
        />
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
        <el-button
          v-hasPermi="['infra:data:dict:create']"
          plain
          type="primary"
          @click="openForm('create')"
        >
          <Icon icon="ep:plus" />
          新增
        </el-button>
        <el-button
          v-hasPermi="['infra:data:dict:export']"
          :loading="exportLoading"
          plain
          type="success"
          @click="handleExport"
        >
          <Icon icon="ep:download" />
          导出
        </el-button>
      </el-form-item>
    </el-form>
    <Table
      save-key="dictType"
      :columns="typeColumns"
      :page-param="queryParams"
      @page-change="getList"
      :page-data="typeData"
      adaptive
      @row-click="handleRowClick"
      @row-dblclick="(row) => openForm('update', row.id)"
    >
      <template #menu="{ row }">
        <context-menu-item
          label="修改"
          v-hasPermi="['infra:data:dict:update']"
          @click="openForm('update', row.id)"
        />
        <context-menu-item
          label="删除"
          v-hasPermi="['infra:data:dict:delete']"
          @click="handleDelete(row.id)"
        />
      </template>
      <template #status="{ row }">
        <dict-tag :type="DICT_TYPE.COMMON_STATUS" :value="row.status" />
      </template>
    </Table>
  </ContentWrap>
  <ContentWrap class="h-[35%]">
    <el-tabs v-model="tabActiveName" type="card" height="700">
      <el-tab-pane label="数据" name="dictData">
        <Table :columns="dataColumns" :data="rowDetail">
          <template #status="{ row }">
            <dict-tag :type="DICT_TYPE.COMMON_STATUS" :value="row.status" />
          </template>
        </Table>
      </el-tab-pane>
    </el-tabs>
  </ContentWrap>
  <!-- 表单弹窗：添加/修改 -->
  <DictTypeForm ref="formRef" @success="getList" />
</template>

<script lang="ts" name="InfraDictType" setup>
import { DICT_TYPE, getIntDictOptions } from '@/utils/dict'

import * as DictTypeApi from '@/api/infra/data/dict'
import DictTypeForm from './DictTypeForm.vue'
import download from '@/utils/download'
import { formatDate } from '@/utils/formatTime'

const message = useMessage() // 消息弹窗
const { t } = useI18n() // 国际化

const loading = ref(true) // 列表的加载中
const typeData = ref()
const tabActiveName = ref('dictData')
const typeColumns: TableColumnList = [
  {
    label: '字典类型',
    prop: 'type'
  },
  {
    label: '字典名称',
    prop: 'name',
    showOverflowTooltip: true
  },
  {
    label: '一级模块',
    prop: 'firstModule'
  },
  {
    label: '二级模块',
    prop: 'secondModule'
  },
  {
    label: '状态',
    prop: 'status',
    slot: 'status'
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
const dataColumns: TableColumnList = [
  {
    label: '数据标签',
    prop: 'label'
  },
  {
    label: '数据键值',
    prop: 'value'
  },
  {
    label: '数据枚举',
    prop: 'dataEnum'
  },
  {
    label: '排序',
    prop: 'sort'
  },
  {
    label: '状态',
    prop: 'status',
    slot: 'status'
  },
  {
    label: '颜色类型',
    prop: 'colorType'
  },
  {
    label: 'CSS Class',
    prop: 'cssClass'
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
const rowDetail = ref<DictTypeApi.DictDataVO>()
const queryParams = reactive({
  pageNo: 1,
  pageSize: 10,
  name: '',
  type: '',
  status: undefined,
  createTime: []
})
const queryFormRef = ref() // 搜索的表单
const exportLoading = ref(false) // 导出的加载中

/** 查询字典类型列表 */
const getList = async () => {
  loading.value = true
  try {
    typeData.value = await DictTypeApi.getDictTypePage(queryParams)
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

/** 删除按钮操作 */
const handleDelete = async (id: string) => {
  try {
    // 删除的二次确认
    await message.delConfirm()
    // 发起删除
    await DictTypeApi.deleteDictType(id)
    message.success(t('common.delSuccess'))
    // 刷新列表
    await getList()
  } catch {}
}

/** 导出按钮操作 */
const handleExport = async () => {
  try {
    // 导出的二次确认
    await message.exportConfirm()
    // 发起导出
    exportLoading.value = true
    const data = await DictTypeApi.exportDictType(queryParams)
    download.excel(data, '字典类型.xls')
  } catch {
  } finally {
    exportLoading.value = false
  }
}
/** 处理某一行的点击 */
const handleRowClick = async (row) => {
  rowDetail.value = await DictTypeApi.getDictDataByTypeId(row.id)
}

/** 初始化 **/
onMounted(() => {
  getList()
})
</script>
