<template>
  <div class="message">
    <ElPopover :width="500" placement="bottom" trigger="click">
      <template #reference>
        <ElBadge
          :value="unreadCount"
          class="item"
          :max-value="99"
          :show-zero="false"
          :offset="[0, 5]"
          badge-style="height: 15px; width: auto"
        >
          <Icon
            :size="20"
            class="cursor-pointer mt-1"
            icon="ic:baseline-notifications-none"
            @click="getList"
          />
        </ElBadge>
      </template>
      <div style="display: flex; margin-bottom: 8px">
        <el-button
          :type="queryParams.isRead ? '' : 'primary'"
          round
          @click="handleClickIsRead(false)"
        >
          未读
        </el-button>
        <el-button
          :type="queryParams.isRead ? 'primary' : ''"
          round
          @click="handleClickIsRead(true)"
        >
          已读
        </el-button>
        <el-button
          v-if="!queryParams.isRead"
          style="margin-left: auto !important; margin-right: 7px"
          text
          @click="handleClickAllRead"
        >
          全部已读
        </el-button>
      </div>
      <Table
        :data="data"
        :columns="columns"
        :show-header="false"
        row-key="id"
        alignWhole="left"
        align="left"
        :border="false"
        :showOverflowTooltip="false"
        style="height: 400px"
      >
        <template #content="{ row }">
          <div style="display: flex; margin-left: 8px">
            <div>
              <el-button
                v-if="!queryParams.isRead"
                link
                class="w-3.5 h-3.5 px-1.5 border-0 mx-1.5"
                @click="handleClickRead(row)"
              >
                <Icon
                  icon="fad:armrecording"
                  :size="14"
                  style="margin-top: 12px"
                  :color="row.isRead ? '#e0e8f0' : '#5faff6'"
                />
              </el-button>
            </div>
            <div>
              <span style="color: #808080; font-size: 12px; width: auto">
                {{ convertShowTime(row.createTime) }}
              </span>
              <div>
                <span> {{ row.content }}</span>
              </div>
            </div>
          </div>
        </template>
      </Table>
      <div style="display: flex; border-top: 1px solid #f9fafb">
        <el-pagination
          v-model:current-page="page.currentPage"
          v-model:page-size="page.pageSize"
          size="small"
          layout="total, prev, pager, next"
          :pager-count="5"
          :total="page.totalSize"
          @update:current-page="getList"
          style="margin: auto; margin-bottom: 3px; margin-top: 5px"
        />
      </div>
      <!-- 更多 -->
      <!-- <div style="text-align: right; margin-top: 10px">
        <XButton preIcon="ep:view" title="查看全部" type="primary" @click="goMyList" />
      </div> -->
    </ElPopover>
  </div>
  <Notice ref="noticeRef" @read-notice="getUnreadInfo()" />
</template>
<script lang="ts" name="Message" setup>
import { Notice } from '@/layout/components/Notice'
import * as NoticeApi from '@/api/system/notice/notice'
import { betweenDay, convertShowTime } from '@/utils/formatTime'
import { propTypes } from '@/utils/propTypes'
import { CACHE_KEY, useCache } from '@/hooks/web/useCache'
const { wsCache } = useCache()

const noticeRef = ref()
const unreadCount = ref(0) // 未读消息数量
const data = ref()
const userId = ref()

const queryParams = ref({
  notifierId: undefined,
  isRead: false,
  pageNo: 1,
  pageSize: 20
})

const columns: TableColumnList = [
  {
    label: '内容',
    prop: 'content',
    slot: 'content',
    showOverflowTooltip: true
  }
]
const page = ref({
  currentPage: 1,
  pageSize: 20,
  totalSize: 0
})

defineProps({
  color: propTypes.string.def('')
})

// ========== 初始化 =========
onMounted(async () => {
  userId.value = wsCache.get(CACHE_KEY.USER).user.id
  queryParams.value.notifierId = userId.value
  await getList()
  getUnreadInfo()
  // 轮询刷新小红点
  setInterval(() => {
    getUnreadInfo()
  }, 1000 * 60 * 2)
})

// 获得未读消息数
const getUnreadInfo = async () => {
  const oldNoticeUnreadInfo = wsCache.get(CACHE_KEY.NOTICE_UNREAD_INFO)
  const noticeUnreadInfo = await NoticeApi.getUnreadInfo(queryParams.value)
  unreadCount.value = noticeUnreadInfo.count
  // 有新消息和当天第一次都会弹窗
  if (
    noticeUnreadInfo.count > 0 &&
    (oldNoticeUnreadInfo == undefined ||
      betweenDay(oldNoticeUnreadInfo.showTime, new Date()) > 0 ||
      oldNoticeUnreadInfo.maxId < noticeUnreadInfo.maxId)
  ) {
    noticeRef.value.open()
  }
  wsCache.set(CACHE_KEY.NOTICE_UNREAD_INFO, { ...noticeUnreadInfo, showTime: new Date() })
}

// 获得消息列表
const getList = async () => {
  queryParams.value.pageNo = page.value.currentPage
  queryParams.value.pageSize = page.value.pageSize
  const pageInfo = await NoticeApi.pageQuery(queryParams.value)

  data.value = pageInfo.list
  page.value.totalSize = pageInfo.total
}

const handleClickRead = async (row) => {
  await NoticeApi.setRead({ id: row.id })
  await getList()
  await getUnreadInfo()
}

const handleClickAllRead = async () => {
  await NoticeApi.allSetRead(userId.value)
  await getList()
  await getUnreadInfo()
}

const handleClickIsRead = (isRead) => {
  queryParams.value.isRead = isRead
  getList()
}

// 跳转我的站内信
// const goMyList = () => {
//   push({
//     name: 'MyNotifyMessage'
//   })
// }
</script>
<style lang="scss" scoped>
.message-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 260px;
  line-height: 45px;
}
</style>
