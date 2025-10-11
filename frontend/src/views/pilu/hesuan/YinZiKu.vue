<template>
  <Dialog v-model="dialogVisible" :title="dialogTitle">
    <ContentWrap>
      <el-form :model="queryParams" ref="queryFormRef" label-width="auto" :inline="true">
        <el-form-item label="燃烧类型" prop="type">
          <el-input v-model="queryParams.type" placeholder="请输入燃烧类型" :clearable="true" />
        </el-form-item>
        <el-form-item label="因子" prop="yin">
          <el-input v-model="queryParams.yin" placeholder="请输入因子" :clearable="true" />
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
        :data="queryData"
        save-key="YinZiKu"
        height-per="90"
        @page-change="getPage"
        @row-dblclick="handleTableDblclick"
      />
    </ContentWrap>
  </Dialog>
</template>
<script setup name="YinZiKu" lang="ts">
const dialogTitle = ref('')
const dialogVisible = ref(false)
const queryFormRef = ref()
const queryParams = ref({
  type: undefined,
  yin: undefined
})
const queryData = ref([
  { sort: 1, type: '电煤', yin: '96.9' },
  { sort: 2, type: '褐煤', yin: '101.2' },
  { sort: 3, type: '高炉燃气', yin: '259.6' },
  { sort: 4, type: '一般煤烟', yin: '94.6' },
  { sort: 5, type: '焦炉煤气', yin: '95.6' }
])
const columns = [
  {
    label: '序号',
    prop: 'sort'
  },
  {
    label: '燃烧类型',
    prop: 'type'
  },
  {
    label: '因子',
    prop: 'yin'
  }
]
/** 打开弹窗 */
const open = () => {
  dialogVisible.value = true
}
defineExpose({ open }) // 提供 open 方法，用于打开弹窗

const emit = defineEmits(['success'])

/** 搜索按钮操作 */
const handleClickSearch = () => {}

/** 重置按钮操作 */
const handleClickReset = () => {
  queryFormRef.value?.resetFields()
  handleClickSearch()
}

/** 处理响应事件  */
const getPage = () => {}

/** 处理table行双击事件 */
const handleTableDblclick = (row) => {
  emit('success', row.type, row.yin)
  dialogVisible.value = false
}
</script>
