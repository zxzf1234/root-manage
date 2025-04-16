<template>
  <div style="display: flex">
    <div
      v-for="(resourceItem, index) in props.modelValue"
      :key="index"
      @click="handleResourceClick(resourceItem)"
      @contextmenu="(event) => handleResourceRightClick(event, resourceItem)"
      class="file-list"
      :class="{ 'resource-selected': selectedItem === resourceItem }"
    >
      <icon :size="30" style="margin: 5px" :icon="FileUtil.convertFileIcon(resourceItem.name)" />
      <div>
        <span>{{ FileUtil.truncateFileName(resourceItem.name) }}</span>
        <span>{{ FileUtil.formatBytes(resourceItem.size) }}</span>
      </div>
    </div>
    <ContextMenu v-model:show="fileMenuOption.show" :options="fileMenuOption.option">
      <div>
        <slot name="menu" :item="selectedItem"></slot>
      </div>
    </ContextMenu>
  </div>
</template>
<script setup lang="ts" name="FileList">
import * as FileUtil from '@/components/UploadFile/src/FileUtil'
const slots = useSlots()
import type { UploadUserFile } from 'element-plus'
const selectedItem = ref<any>(null)
const fileMenuOption = ref({
  show: false,
  option: { zIndex: 90000, minWidth: 130, x: 500, y: 200, theme: 'default' }
})
const props = defineProps({
  modelValue: {
    type: Array as PropType<UploadUserFile[]>,
    required: true
  }
})
const handleResourceClick = (fileItem) => {
  selectedItem.value = fileItem
}

const handleResourceRightClick = (event, fileItem) => {
  if (slots.menu == undefined) return
  event.preventDefault()
  const { x, y } = event
  fileMenuOption.value.show = true
  fileMenuOption.value.option.x = x
  fileMenuOption.value.option.y = y
  selectedItem.value = fileItem
}
</script>
<style scoped>
.file-list {
  border: 0.5px solid #eaeaea;
  width: 200px;
  min-width: 200px;
  display: flex;
  flex-wrap: wrap;
  margin-right: 8px;
  margin-bottom: 5px;
}
.file-list > div {
  overflow: hidden;
  display: flex;
  flex-direction: column; /* 垂直排列 */
  align-items: left; /* 水平居中对齐 */
  justify-content: center; /* 垂直居中对齐 */
}

.file-list span {
  cursor: default;
  font-size: 10pt;
}
.resource-selected {
  background-color: #d9ebff;
  border: 1px solid #9cb4d0;
}
</style>
