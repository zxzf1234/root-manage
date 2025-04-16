import './index.css'
import resizer from './resizer'
import { defineComponent, ref, unref, computed } from 'vue'
import { propTypes } from '@/utils/propTypes'
import { isEmpty } from 'lodash-es'
import { CACHE_KEY, useCache } from '@/hooks/web/useCache'
const { wsCache } = useCache()

/** 切割面板组件 */
export default defineComponent({
  name: 'SplitPane',
  components: { resizer },
  props: {
    minPercent: propTypes.number.def(0),
    defaultPercent: propTypes.number.def(50),
    minWidth: propTypes.number.def(0),
    split: propTypes.string.def('vertical'),
    saveKey: propTypes.string.def('')
  },
  emits: ['resize'],
  setup(props, ctx) {
    const active = ref(false)
    const hasMoved = ref(false)
    const percent = ref(props.defaultPercent)
    const type = props.split === 'vertical' ? 'width' : 'height'
    const resizeType = props.split === 'vertical' ? 'left' : 'top'

    const leftClass = ref(['splitter-pane splitter-paneL', props.split])

    const rightClass = ref(['splitter-pane splitter-paneR', props.split])

    if (!isEmpty(props.saveKey)) {
      const strSplitPane = wsCache.get(CACHE_KEY.SPLIT_PANE)
      if (!isEmpty(strSplitPane)) {
        const objMailSplitPane = JSON.parse(strSplitPane)
        if (objMailSplitPane != null && objMailSplitPane[props.saveKey] != null) {
          percent.value = objMailSplitPane[props.saveKey]
        }
      }
    }

    const cursor = computed(() => {
      return active.value
        ? props.split === 'vertical'
          ? { cursor: 'col-resize' }
          : { cursor: 'row-resize' }
        : { cursor: 'default' }
    })

    const percentCacheSet = (percent: number | undefined): void => {
      if (percent == undefined) return

      if (!isEmpty(props.saveKey)) {
        const strSplitPane = wsCache.get(CACHE_KEY.SPLIT_PANE)
        if (!isEmpty(strSplitPane) && JSON.parse(strSplitPane) != null) {
          const objMailSplitPane = JSON.parse(strSplitPane)

          objMailSplitPane[props.saveKey] = percent

          wsCache.set(CACHE_KEY.SPLIT_PANE, JSON.stringify(objMailSplitPane))
        } else {
          wsCache.set(CACHE_KEY.SPLIT_PANE, JSON.stringify({ [props.saveKey]: percent }))
        }
      }
    }

    const onClick = (): void => {
      if (!hasMoved.value) {
        percent.value = 50
        percentCacheSet(percent.value)
        ctx.emit('resize', percent.value)
      }
    }

    const onMouseDown = (): void => {
      active.value = true
      hasMoved.value = false
    }

    const onMouseUp = (): void => {
      active.value = false
    }

    const onMouseMove = (e: any): void => {
      if (e.buttons === 0 || e.which === 0) {
        active.value = false
      }

      if (active.value) {
        let offset = 0
        let target = e.currentTarget
        if (props.split === 'vertical') {
          while (target) {
            offset += target.offsetLeft
            target = target.offsetParent
          }
        } else {
          while (target) {
            offset += target.offsetTop
            target = target.offsetParent
          }
        }

        const currentPage = props.split === 'vertical' ? e.pageX : e.pageY
        const targetOffset =
          props.split === 'vertical' ? e.currentTarget.offsetWidth : e.currentTarget.offsetHeight
        const minWidth = Math.max(currentPage - offset, props.minWidth)
        const percents = Math.floor((minWidth / targetOffset) * 10000) / 100
        if (percents > props.minPercent && percents < 100 - props.minPercent) {
          percent.value = percents
        }
        percentCacheSet(percent.value)
        ctx.emit('resize', percent.value)

        hasMoved.value = true
      }
    }

    return () => (
      <>
        <div
          class="vue-splitter-container clearfix"
          style={unref(cursor)}
          onMouseup={() => onMouseUp()}
          onMousemove={() => onMouseMove(event)}
        >
          <div class={unref(leftClass)} style={{ [unref(type)]: unref(percent) + '%' }}>
            {ctx.slots.paneL()}
          </div>
          <resizer
            style={`${unref([resizeType])}:${unref(percent)}%`}
            split={props.split}
            onMousedown={() => onMouseDown()}
            onClick={() => onClick()}
          ></resizer>
          <div class={unref(rightClass)} style={{ [unref(type)]: 100 - unref(percent) + '%' }}>
            {ctx.slots.paneR()}
          </div>
          <div v-show={unref(active)} class="vue-splitter-container-mask"></div>
        </div>
      </>
    )
  }
})
