import { cloneDeep } from '@pureadmin/utils'
import { useTableStoreWithOut } from '@/store/modules/table'
import type { TableProps } from './props'

export function usePagination(
  props: TableProps,
  emit: (event: 'page-change', value: number) => void
) {
  const tableStore = useTableStoreWithOut()

  const paginationState = reactive(cloneDeep(props.pagination))

  watch(
    () => props.pagination,
    (pagination) => {
      Object.assign(paginationState, cloneDeep(pagination))
    },
    { deep: true }
  )

  const paginationCom = computed(() => {
    if (!props.pageParam || Object.keys(props.pageParam).length === 0) {
      return undefined
    }

    if (props.saveKey && tableStore?.[props.saveKey]?.pageSize) {
      paginationState.pageSize = tableStore[props.saveKey].pageSize
      props.pageParam.pageSize = tableStore[props.saveKey].pageSize
    }

    paginationState.total = Number(props.pageData?.total || 0)

    return paginationState
  })

  const handleSizeChange = (value: number) => {
    props.pageParam.pageSize = value

    if (props.saveKey) {
      const cache = tableStore[props.saveKey] || {}

      cache.pageSize = value

      tableStore.setTableCache(props.saveKey, cache)
    }

    emit('page-change', value)
  }

  const handlePageCurrentChange = (value: number) => {
    props.pageParam.pageNo = value

    emit('page-change', value)
  }

  return {
    paginationCom,
    handleSizeChange,
    handlePageCurrentChange
  }
}
