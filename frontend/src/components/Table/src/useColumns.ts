import Sortable from 'sortablejs'
import { cloneDeep } from '@pureadmin/utils'
import { useTableStoreWithOut } from '@/store/modules/table'
import { createSettingHeader } from './render/settingHeader'
import type { TableProps } from './props'

export function useColumns(props: TableProps) {
  const tableStore = useTableStoreWithOut()

  const sortableInstance = ref<Sortable | null>(null)

  const dynamicColumns = ref<any[]>([])

  const getColumnKey = (column: any) => {
    return column.prop || column.label
  }

  const getSavedColumns = () => {
    if (!props.saveKey) {
      return cloneDeep(props.columns)
    }

    const cacheColumns = tableStore?.[props.saveKey]?.column

    if (!cacheColumns) {
      return cloneDeep(props.columns)
    }

    const originColumns = cloneDeep(props.columns)

    const originMap = new Map(originColumns.map((item) => [getColumnKey(item), item]))

    const result: any[] = []

    cacheColumns.forEach((cacheItem) => {
      const key = getColumnKey(cacheItem)

      if (originMap.has(key)) {
        const column = originMap.get(key) as any

        column.hide = cacheItem.hide

        result.push(column)

        originMap.delete(key)
      }
    })

    originMap.forEach((item) => {
      result.push(item)
    })

    return result
  }

  dynamicColumns.value = getSavedColumns()

  watch(
    () => props.columns,
    () => {
      dynamicColumns.value = getSavedColumns()
    },
    {
      deep: true
    }
  )

  const checkedColumns = computed(() => {
    return dynamicColumns.value.filter((item) => !item.hide).map((item) => getColumnKey(item))
  })

  const saveColumns = () => {
    if (!props.saveKey) {
      return
    }

    const cache = tableStore[props.saveKey] || {}

    cache.column = cloneDeep(dynamicColumns.value)

    tableStore.setTableCache(props.saveKey, cache)
  }

  const handleCheckColumnListChange = (value: boolean, key: string) => {
    const target = dynamicColumns.value.find((item) => getColumnKey(item) === key)

    if (!target) {
      return
    }

    target.hide = !value

    saveColumns()
  }

  const isFixedColumn = (key: string) => {
    const column = dynamicColumns.value.find((item) => getColumnKey(item) === key)

    return !!column?.fixed
  }

  const resetColumns = () => {
    dynamicColumns.value = cloneDeep(props.columns)

    saveColumns()
  }

  const columnsCom = computed(() => {
    const columns = cloneDeep(dynamicColumns.value)

    if (!props.saveKey) {
      return columns
    }

    const visibleColumns = columns.filter((item) => !item.hide)

    const lastColumn = visibleColumns[visibleColumns.length - 1]

    if (!lastColumn) {
      return columns
    }

    lastColumn.headerRenderer = createSettingHeader({
      props,
      checkedColumns,
      dynamicColumns,
      resetColumns,
      handleCheckColumnListChange,
      isFixedColumn,
      initColumnSortable,
      saveColumns,
      getColumnKey
    })

    return columns
  })

  const initColumnSortable = async () => {
    await nextTick()

    if (sortableInstance.value) {
      return
    }

    const wrapper = document.querySelector(
      `.el-checkbox-group[savekey='${props.saveKey}'] > div`
    ) as HTMLElement

    if (!wrapper) {
      return
    }

    sortableInstance.value = Sortable.create(wrapper, {
      animation: 300,
      handle: '.drag-btn',

      onEnd({ oldIndex, newIndex }) {
        if (oldIndex == null || newIndex == null) {
          return
        }

        const oldColumn = dynamicColumns.value[oldIndex]
        const newColumn = dynamicColumns.value[newIndex]

        if (oldColumn?.fixed || newColumn?.fixed) {
          return
        }

        const current = dynamicColumns.value.splice(oldIndex, 1)[0]

        dynamicColumns.value.splice(newIndex, 0, current)

        saveColumns()
      }
    })
  }

  onBeforeUnmount(() => {
    sortableInstance.value?.destroy()
  })

  return {
    dynamicColumns,
    checkedColumns,
    columnsCom,
    resetColumns,
    initColumnSortable,
    handleCheckColumnListChange,
    isFixedColumn
  }
}
