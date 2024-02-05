import props from '@/components/Table/src/props'; import { values } from 'min-dash';
<script lang="ts" name="ReTpeit" setup>
import TypeIt from 'typeit'
const props = defineProps({
  /** 打字速度，以每一步之间的毫秒数为单位，默认`200` */
  speed: {
    type: Number,
    default: 200
  },
  values: {
    type: Array,
    defalut: []
  },
  className: {
    type: String,
    default: 'type-it'
  },
  cursor: {
    type: Boolean,
    default: true
  }
})
const text = ref(null)
onMounted(() => {
  new TypeIt(text.value, {
    strings: props.values,
    speed: props.speed,
    cursor: props.cursor //在字符串末尾显示闪烁的光标
  }).go()
})
</script>
<template>
  <span ref="text" class="msg"></span>
</template>
