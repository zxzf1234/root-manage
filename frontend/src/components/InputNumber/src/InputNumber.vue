<script lang="ts" name="InputNumber" setup>
import { propTypes } from '@/utils/propTypes'
import { useDesign } from '@/hooks/web/useDesign'

const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('input-number')
const props = defineProps({
  controls: propTypes.bool.def(true),
  type: propTypes.string.def('number'),
  min: propTypes.number.def(0),
  modelValue: propTypes.number.def(undefined),
  allowUndefined: propTypes.bool.def(false)
})

const controls = ref(false)
const precision = ref()
const min = ref(0)
const model = ref<number | undefined>(0)

onMounted(() => {
  if (props.type != 'decimal') {
    precision.value = 0
  }
  min.value = props.min
  model.value = props.modelValue
})

const emit = defineEmits(['blur', 'update:modelValue'])

watch(
  () => props.modelValue,
  (propModelValue: number) => {
    model.value = propModelValue
  }
)

watch(
  () => model.value,
  (modelValue: number) => {
    if (modelValue == null) {
      model.value = 0
    }
    emit('update:modelValue', model.value)
  }
)

const handleBlur = () => {
  if (props.type == 'decimal' && model.value != undefined) {
    model.value = parseFloat(model.value.toFixed(4))
    emit('update:modelValue', model.value)
  }
  emit('blur')
}
</script>
<template>
  <el-input-number
    :class="prefixCls"
    :controls="controls"
    :min="min"
    :precision="precision"
    v-model="model"
    @blur="handleBlur"
    :valueOnClear="0"
    style="width: auto"
  />
</template>

<style lang="scss" scoped>
$prefix-cls: #{$namespace}-input-number;
.#{$prefix-cls} {
  width: 100%;
  :deep(.el-input__inner) {
    text-align: left;
  }
}
</style>
