import type { PropType, ExtractPropTypes } from 'vue'
import type { AdaptiveConfig } from '@pureadmin/table'

export const tableProps = {
  border: {
    type: Boolean,
    default: true
  },

  pagination: {
    type: Object as PropType<{
      total: number
      pageSize: number
      currentPage: number
      background: boolean
      pageSizes: number[]
    }>,
    default: () => ({
      total: 0,
      pageSize: 50,
      currentPage: 1,
      background: true,
      pageSizes: [10, 20, 50, 200]
    })
  },

  highlightCurrentRow: {
    type: Boolean,
    default: true
  },

  rowKey: {
    type: String,
    default: 'id'
  },

  pageParam: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({})
  },

  pageData: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({})
  },

  columns: {
    type: Array as PropType<TableColumnList>,
    default: () => []
  },

  saveKey: {
    type: String,
    default: ''
  },

  alignWhole: {
    type: String,
    default: 'center'
  },

  showOverflowTooltip: {
    type: Boolean,
    default: true
  },

  adaptiveConfig: {
    type: Object as PropType<AdaptiveConfig>,
    default: () => ({
      offsetBottom: 560,
      zIndex: 0
    })
  },

  heightPer: {
    type: [String, Number] as PropType<string | number>,
    default: '57'
  },

  adaptive: {
    type: Boolean,
    default: false
  },

  data: {
    type: Array as PropType<any[]>,
    default: () => []
  }
}

export type TableProps = ExtractPropTypes<typeof tableProps>

export default tableProps
