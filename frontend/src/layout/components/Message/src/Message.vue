<template>
  <div class="message">
    <ElPopover :width="400" placement="bottom" trigger="click">
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
      <ElTabs v-model="activeName">
        <ElTabPane label="未读" name="unread">
          <Table
            :page-data="unreadData"
            :columns="columns"
            :page-param="unreadQueryParams"
            :show-header="false"
            row-key="id"
            alignWhole="left"
            align="left"
            :border="false"
            :showOverflowTooltip="false"
          >
            <template #content="{ row }">
              <div>
                <div style="display: flex">
                  <el-button
                    link
                    class="w-3.5 h-3.5 px-1.5 border-0 mx-1.5"
                    @click="handleNoticeRead(row)"
                  >
                    <Icon
                      icon="fad:armrecording"
                      :size="14"
                      style="margin: 0"
                      :color="row.isRead ? '#e0e8f0' : '#5faff6'"
                    />
                  </el-button>
                  <div>
                    <span style="color: #808080; font-size: 13px; width: auto">
                      {{ convertShowTime(row.showTime) }}
                    </span>
                    <span> {{ row.content }}</span>
                  </div>
                </div>
              </div>
            </template>
          </Table>
        </ElTabPane>
        <ElTabPane label="已读" name="read">
          <Table :page-data="readData" :columns="columns" :page-param="readQueryParams">
            <template #content="{ row }">{{ row.content }}</template>
          </Table>
        </ElTabPane>
      </ElTabs>
      <!-- 更多 -->
      <!-- <div style="text-align: right; margin-top: 10px">
        <XButton preIcon="ep:view" title="查看全部" type="primary" @click="goMyList" />
      </div> -->
    </ElPopover>
  </div>
</template>
<script lang="ts" name="Message" setup>
import * as NoticeApi from '@/api/system/notice/notice'
import { convertShowTime } from '@/utils/formatTime'
import { propTypes } from '@/utils/propTypes'
import { CACHE_KEY, useCache } from '@/hooks/web/useCache'
const { wsCache } = useCache()

// const { push } = useRouter()
const activeName = ref('unread')
const unreadCount = ref(0) // 未读消息数量
const unreadData = ref()
const readData = ref()

const unreadQueryParams = ref({
  noticerId: undefined,
  isRead: false
})

const readQueryParams = ref({
  noticerId: undefined,
  isRead: true
})

const columns: TableColumnList = [
  {
    label: '内容',
    prop: 'content',
    slot: 'content',
    showOverflowTooltip: true
  }
]

defineProps({
  color: propTypes.string.def('')
})

// ========== 初始化 =========
onMounted(() => {
  let userInfo = wsCache.get(CACHE_KEY.USER)
  unreadQueryParams.value.noticerId = userInfo.user.id
  readQueryParams.value.noticerId = userInfo.user.id
  // 首次加载小红点
  getUnreadCount()
  // 轮询刷新小红点
  setInterval(() => {
    getUnreadCount()
  }, 1000 * 60 * 2)
})

// 获得未读消息数
const getUnreadCount = async () => {
  unreadCount.value = await NoticeApi.getUnreadCount(unreadQueryParams.value)
}

// 获得消息列表
const getList = async () => {
  // 强制设置 unreadCount 为 0，避免小红点因为轮询太慢，不消除
  unreadCount.value = 0

  unreadData.value = await NoticeApi.pageQuery(unreadQueryParams.value)
  readData.value = await NoticeApi.pageQuery(readQueryParams.value)
  unreadCount.value = unreadData.value.total
}

const handleNoticeRead = async (row) => {
  console.log(row.id)
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
