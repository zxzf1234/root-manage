<template>
  <Dialog
    v-model="dialogVisible"
    :title="dialogTitle"
    :isModal="false"
    :fullscreen="false"
    @close="close"
    header-class="dialog-header"
    class="download-mail-header-dialog"
    style="border-radius: 10px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3)"
  >
    <div
      style="
        display: flex;
        height: 100px;
        margin-bottom: 10px;
        justify-content: center;
        align-items: center;
        font-size: medium;
        color: #111111;
        text-align: center;
      "
    >
      {{ noticeInfo.content }}
    </div>
    <div style="display: flex; margin-bottom: 10px">
      <el-button type="info" style="margin-left: 20%" @click="handleClickRead">标为已读</el-button>
      <el-button type="primary" style="margin-right: 20%; margin-left: auto">立刻处理</el-button>
    </div>
    <div style="display: flex">
      <el-button text :disabled="queryParams.pageNo == 1" @click="handleClickPrev">
        上一页
      </el-button>
      <span style="margin-top: 6px; margin-left: 28%">
        {{ queryParams.pageNo }}/ {{ queryParams.total }}
      </span>
      <el-button
        text
        style="margin-left: auto"
        @click="handleClickNext"
        :disabled="queryParams.pageNo == queryParams.total"
      >
        下一页
      </el-button>
    </div>
  </Dialog>
</template>
<script setup name="Notice" lang="ts">
import { convertShowTime, formatDate } from '@/utils/formatTime'
import { useCache, CACHE_KEY } from '@/hooks/web/useCache'
const { wsCache } = useCache()
import * as NoticeApi from '@/api/system/notice/notice'

const noticeInfo = ref({ id: 0, content: '', createTime: new Date() })

// const dialogTitle = ref('')
const dialogTitle = ref('')
const queryParams = ref({
  noticerId: undefined,
  isRead: false,
  pageNo: 1,
  pageSize: 1,
  total: 0
})
const userId = ref()

const dialogVisible = ref(false)

/** 打开弹窗 */
const open = async () => {
  userId.value = wsCache.get(CACHE_KEY.USER)
  queryParams.value.noticerId = userId.value
  queryParams.value.pageNo = 1
  dialogVisible.value = true
  getList()
}
defineExpose({ open }) // 提供 open 方法，用于打开弹窗

const getList = async () => {
  const pageInfo = await NoticeApi.pageQuery(queryParams.value)
  queryParams.value.total = pageInfo.total
  console.log(pageInfo.list[0])
  noticeInfo.value = pageInfo.list[0]
  dialogTitle.value =
    convertShowTime(noticeInfo.value.createTime) + formatDate(noticeInfo.value.createTime, 'HH:MM')
}

const handleClickPrev = () => {
  queryParams.value.pageNo--
  getList()
}
const handleClickNext = () => {
  queryParams.value.pageNo++
  getList()
}

/** 关闭弹窗 */
const close = async () => {
  dialogVisible.value = false
}

const handleClickRead = async () => {
  await NoticeApi.setRead({ id: noticeInfo.value.id })
  getList()
}
</script>
<style>
/* 使用深度选择器来覆盖el-dialog的默认样式 */
.download-mail-header-dialog :deep(.el-dialog) {
  margin: 0 !important;
  /* 设置为固定定位 */
  position: fixed;
  bottom: 20px;
  left: 70%;
}
.download-mail-header-dialog {
  margin: 0 !important;
  /* 设置为固定定位 */
  position: fixed;
  top: calc(100% - 250px);
  left: calc(100% - 420px);
  height: 250px;
  width: 400px;
}
.dialog-header {
  font-size: 13px;
}
</style>
