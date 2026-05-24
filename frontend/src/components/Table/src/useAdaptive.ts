import { debounce, cloneDeep } from '@pureadmin/utils'
import type { TableProps } from './props'

export function useAdaptive(props: TableProps) {
  const adaptiveConfigCom = reactive(cloneDeep(props.adaptiveConfig))

  const setAdaptiveOffsetBottom = async () => {
    await nextTick()

    adaptiveConfigCom.offsetBottom =
      window.innerHeight - (window.innerHeight * Number(props.heightPer)) / 100
  }

  const debounceResize = debounce(setAdaptiveOffsetBottom, adaptiveConfigCom.timeout ?? 60)

  onMounted(() => {
    if (!props.adaptive) {
      return
    }

    setAdaptiveOffsetBottom()

    window.addEventListener('resize', debounceResize)
  })

  onBeforeUnmount(() => {
    if (!props.adaptive) {
      return
    }

    window.removeEventListener('resize', debounceResize)
  })

  return {
    adaptiveConfigCom
  }
}
