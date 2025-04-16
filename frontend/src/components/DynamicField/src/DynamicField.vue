<template>
  <div style="display: flex; flex-wrap: wrap">
    <div
      v-for="(dynamicRow, index) in dynamicRows"
      :key="index"
      style="margin-bottom: 5px; display: flow"
    >
      <slot :row="dynamicRow"></slot>
      <el-button
        style="margin-left: 5px; margin-right: 10px; width: 12px"
        @click="() => handleFieldClick(index)"
      >
        <Icon
          :icon="index == 0 ? 'ic:baseline-plus' : 'ic:baseline-minus'"
          style="margin-left: 5px"
        />
      </el-button>
    </div>
  </div>
</template>
<script lang="ts" name="DynamicField" setup>
import { isEmpty, isEqual } from 'lodash-es'
const dynamicRows = ref<any[]>([{}])
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: Array as PropType<any[]>
  }
})

watch(
  () => props.modelValue,
  (val: []) => {
    if (val == undefined || val.length == 0) return
    let isSame = true
    for (let index = 0; index < val.length; index++) {
      if (!isEmpty(val[index]) && isEmpty(dynamicRows.value[index])) {
        isSame = false
        break
      }
      if (
        !isEmpty(val[index]) &&
        !isEmpty(dynamicRows.value[index]) &&
        !isEqual(val[index], dynamicRows.value[index])
      ) {
        isSame = false
        break
      }
    }
    if (isSame) {
      return
    }
    dynamicRows.value = val
  },
  {
    immediate: true
  }
)

watch(
  () => dynamicRows.value,
  (val: []) => {
    if (val == undefined) return
    let rows = []

    val.forEach((row) => {
      if (row == undefined) return
      let isPush = false
      Object.keys(row).forEach((key) => {
        if (row[key] != undefined && row[key] != '') isPush = true
      })
      if (isPush) {
        rows.push(row)
      }
    })

    emit('update:modelValue', rows)
  },
  { deep: true }
)
const handleFieldClick = (index) => {
  if (index == 0) {
    dynamicRows.value.push({})
  } else {
    dynamicRows.value.splice(index, 1)
  }
}
</script>
