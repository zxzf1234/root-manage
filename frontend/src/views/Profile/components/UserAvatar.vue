<template>
  <div class="change-avatar">
    <CropperAvatar
      ref="cropperRef"
      :btnProps="{ preIcon: 'ant-design:cloud-upload-outlined' }"
      :showBtn="isShowBtn"
      :value="avatar"
      width="120px"
      @change="handelUpload"
    />
  </div>
</template>
<script lang="ts" name="UserAvatar" setup>
import { propTypes } from '@/utils/propTypes'
import { uploadAvatar } from '@/api/system/user/profile'

const props = defineProps({
  img: propTypes.string.def('')
})
const avatar = computed(() => {
  return props.img
})
const isShowBtn = computed(() => {
  return props.img == '' ? true : false
})

const cropperRef = ref()
const handelUpload = async ({ data }) => {
  await uploadAvatar({ avatarFile: data })
  cropperRef.value.close()
}
</script>

<style lang="scss" scoped>
.change-avatar {
  img {
    display: block;
    margin-bottom: 15px;
    border-radius: 50%;
  }
}
</style>
