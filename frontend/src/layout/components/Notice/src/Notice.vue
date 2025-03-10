<template>
  <Dialog
    v-model="dialogVisible"
    title="下载邮件"
    :isModal="false"
    :fullscreen="false"
    @close="close"
    class="download-mail-header-dialog"
    style="border-radius: 10px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3)"
  >
    <div>
      <ul v-if="downloadStatus == 'receiving'">
        <li
          v-for="(item, index) in receivingList"
          :key="index"
          class="mt-2 mb-5"
          style="font-size: medium"
        >
          <div class="mb-2">
            正在下载“{{ index }}”的邮件头 （第{{ item.downloadCount }}封/共{{ item.totalCount }}封）
          </div>
          <el-progress :percentage="Math.floor((item.downloadCount / item.totalCount) * 100)" />
        </li>
      </ul>
      <div v-else class="mt-2 mb-5 text-center"> {{ downloadMessage }} </div>
    </div>
  </Dialog>
</template>
<script setup name="Notice" lang="ts">
import { getAccessToken } from '@/utils/auth'
import { useWebSocket, UseWebSocketReturn } from '@vueuse/core'
import { useCache, CACHE_KEY } from '@/hooks/web/useCache'
const { wsCache } = useCache()
const message = useMessage() // 消息弹窗
// const dialogTitle = ref('')
const { t } = useI18n() // 国际化
const dialogVisible = ref(false)
const socketType = 'download-mail-header'
/** 发起 WebSocket 连接 */
const socketObject = ref<UseWebSocketReturn<any>>()
const sendText = ref() // 发送内容
const downloadStatus = ref('check_folder')
const downloadMessage = ref('正在检查文件夹的状态')
const receivingList = ref<any>({})
watch(
  () => socketObject.value?.data,
  (data) => {
    if (!data) {
      return
    }
    const receiveData = unref(data)
    try {
      // 1. 收到心跳
      if (receiveData === 'pong') {
        return
      }

      // 2.1 解析 type 消息类型
      const jsonMessage = JSON.parse(receiveData)
      const type = jsonMessage.type
      const content = JSON.parse(jsonMessage.content)
      if (!type) {
        message.error('未知的消息类型：' + data)
        return
      }
      if (type != socketType) return
      if (content.status == 'error') {
        downloadMessage.value = '未知错误：' + content.message
        return
      }
      if (['folder_begin', 'folder_done', 'receiving'].includes(content.status)) {
        content.message = t('mailbox.folder.' + content.message)
      }
      if (content.status == 'receiving') {
        receivingList.value[content.message] = {
          totalCount: content.totalCount,
          downloadCount: Math.min(content.downloadCount, content.totalCount)
        }
      } else if (content.status == 'folder_done') {
        delete receivingList.value[content.message]
        downloadMessage.value = '“' + content.message + '”' + '下载完成'
      } else if (content.status == 'folder_begin') {
        downloadMessage.value = '“' + content.message + '”' + '开始下载邮件头'
      } else {
        downloadMessage.value = content.message
      }
      if (Object.keys(receivingList.value).length == 0) {
        downloadStatus.value = 'check_folder'
      } else {
        downloadStatus.value = 'receiving'
      }
      if (content.status == 'done') {
        setTimeout(() => {
          close()
        }, 3000)
      }
    } catch (error) {
      message.error('处理消息发生异常：' + data)
      console.error(error)
    }
  }
)
const handlerSend = () => {
  const jsonMessage = JSON.stringify({
    type: socketType,
    content: JSON.stringify(sendText.value)
  })
  // 发送消息
  socketObject.value?.send(jsonMessage)
  sendText.value = []
}

/** 打开弹窗 */
const open = async (params) => {
  dialogVisible.value = true
  downloadStatus.value = 'check_folder'
  downloadMessage.value = '正在检查文件夹的状态'
  receivingList.value = {}
  socketObject.value = useWebSocket(
    wsCache.get(CACHE_KEY.SERVER_WS_URL) + '?token=' + getAccessToken(),
    {
      autoReconnect: false,
      heartbeat: false
    }
  )
  sendText.value = params
  handlerSend()
}
defineExpose({ open }) // 提供 open 方法，用于打开弹窗

/** 初始化 */
onMounted(() => {
  dialogVisible.value = true
})

/** 关闭弹窗 */
const close = async () => {
  if (unref(socketObject.value?.status) === 'OPEN') socketObject.value?.close()
  dialogVisible.value = false
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
</style>
