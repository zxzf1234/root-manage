import Sortable from 'sortablejs'
import { h, resolveComponent } from 'vue'
import { Icon } from '@/components/Icon'
import { cloneDeep, getKeyList, isBoolean, isFunction } from '@pureadmin/utils'
import { useTableStoreWithOut } from '@/store/modules/table'
import DragIcon from './svg/drag.svg?component'
import type { TableProps } from './props'

type TableColumn = Record<string, any>

export function useColumns(props: TableProps) {
  const { columns, saveKey } = toRefs(props)
  const tableStore = useTableStoreWithOut()
  const dynamicColumns = ref<TableColumn[]>([])
  const checkedColumns = ref<string[]>([])
  const checkColumnList = ref<string[]>([])
  const sortableInstance = ref<Sortable | null>(null)

  const ElButton = resolveComponent('ElButton') as any
  const ElPopover = resolveComponent('ElPopover') as any
  const ElCheckboxGroup = resolveComponent('ElCheckboxGroup') as any
  const ElCheckbox = resolveComponent('ElCheckbox') as any
  const ElSpace = resolveComponent('ElSpace') as any

  const isHiddenColumn = (column: TableColumn) => {
    return isBoolean(column?.hide) ? column.hide : isFunction(column?.hide) && column?.hide()
  }

  const getColumnLabels = (sourceColumns: TableColumn[]) => {
    return getKeyList(cloneDeep(sourceColumns), 'label') as string[]
  }

  const mergeColumnsWithCache = (sourceColumns: TableColumn[]) => {
    const sourceColumnList = cloneDeep(sourceColumns)
    const cacheColumns = tableStore?.[unref(saveKey)]?.['column']

    if (!unref(saveKey) || !cacheColumns) {
      return sourceColumnList
    }

    const cacheLabels = getKeyList(cacheColumns, 'label')
    const sourceLabels = getKeyList(sourceColumnList, 'label')
    const mergedColumns: TableColumn[] = []

    cacheLabels.forEach((label) => {
      const sourceIndex = sourceLabels.indexOf(label)

      if (sourceIndex >= 0) {
        const column = sourceColumnList[sourceIndex]

        column.hide = cacheColumns[cacheLabels.indexOf(label)].hide
        mergedColumns.push(column)
      }
    })

    sourceLabels.forEach((label, index) => {
      if (cacheLabels.indexOf(label) == -1) {
        mergedColumns.push(sourceColumnList[index])
      }
    })

    return mergedColumns
  }

  const refreshCheckedColumns = () => {
    const visibleColumns = cloneDeep(unref(dynamicColumns)).filter(
      (column) => !isHiddenColumn(column)
    )

    checkedColumns.value = getColumnLabels(visibleColumns)
  }

  const setDynamicColumns = (sourceColumns: TableColumn[]) => {
    dynamicColumns.value = mergeColumnsWithCache(sourceColumns)
    checkColumnList.value = getColumnLabels(unref(dynamicColumns))
    refreshCheckedColumns()
  }

  const saveColumns = () => {
    if (tableStore[unref(saveKey)]) {
      const tableCache = tableStore[unref(saveKey)]

      tableCache['column'] = cloneDeep(unref(dynamicColumns))
      tableStore.setTableCache(unref(saveKey), tableCache)
    } else {
      tableStore.setTableCache(unref(saveKey), { column: cloneDeep(unref(dynamicColumns)) })
    }
  }

  const topClass = computed(() => {
    return [
      'flex',
      'justify-between',
      'pt-[3px]',
      'px-[11px]',
      'border-b-[1px]',
      'border-solid',
      'border-[#dcdfe6]',
      'dark:border-[#303030]'
    ]
  })

  const resetColumns = async () => {
    dynamicColumns.value = cloneDeep(unref(columns))
    checkColumnList.value = getColumnLabels(unref(columns))
    checkedColumns.value = getColumnLabels(unref(columns))
    saveColumns()
  }

  const handleCheckColumnListChange = (val: boolean, label: string) => {
    const column = dynamicColumns.value.find((item) => item.label === label)

    if (column) {
      column.hide = !val
      saveColumns()
    }
  }

  const isFixedColumn = (label: string) => {
    const column = dynamicColumns.value.find((item) => item.label === label)

    return column?.fixed ? true : false
  }

  const createColumnSortable = (wrapper: HTMLElement) => {
    sortableInstance.value?.destroy()
    sortableInstance.value = Sortable.create(wrapper, {
      animation: 300,
      handle: '.drag-btn',
      onEnd: ({ newIndex, oldIndex, item }) => {
        const targetThElem = item
        const wrapperElem = targetThElem.parentNode as HTMLElement
        const oldColumn = dynamicColumns.value[oldIndex]
        const newColumn = dynamicColumns.value[newIndex]

        if (oldColumn?.fixed || newColumn?.fixed) {
          const oldThElem = wrapperElem.children[oldIndex] as HTMLElement

          if (newIndex > oldIndex) {
            wrapperElem.insertBefore(targetThElem, oldThElem)
          } else {
            wrapperElem.insertBefore(
              targetThElem,
              oldThElem ? oldThElem.nextElementSibling : oldThElem
            )
          }
          return
        }

        const currentRow = dynamicColumns.value.splice(oldIndex, 1)[0]

        dynamicColumns.value.splice(newIndex, 0, currentRow)
        saveColumns()
      }
    })
  }

  const rowDrop = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    nextTick(() => {
      const wrapper = document.querySelector(
        ".el-checkbox-group[savekey='" + unref(saveKey) + "']>div"
      ) as HTMLElement | null

      if (wrapper) {
        createColumnSortable(wrapper)
      }
    })
  }

  const SettingReference = {
    reference: () =>
      h(
        ElButton,
        {
          class:
            'flex h-[34px] w-[34px] items-center justify-center rounded-[4px] p-0 !text-[#eaf4ff] hover:!bg-white/10 hover:!text-white',
          link: true,
          type: 'primary',
          style: {
            '--el-button-text-color': '#eaf4ff',
            '--el-button-hover-text-color': '#fff'
          }
        },
        () => h(Icon, { icon: 'ep:setting' })
      )
  }

  const renderColumnOption = (label: string) => {
    return h('div', { class: 'flex items-center' }, [
      h(DragIcon, {
        class: [
          'drag-btn w-[16px] mr-2',
          isFixedColumn(label) ? '!cursor-no-drop' : '!cursor-grab'
        ],
        onMouseenter: (event: { preventDefault: () => void }) => rowDrop(event)
      }),
      h(
        ElCheckbox,
        {
          key: label,
          value: label,
          onChange: (value: boolean) => handleCheckColumnListChange(value, label)
        },
        () =>
          h(
            'span',
            {
              title: label,
              class: 'inline-block w-[120px] truncate hover:text-text_color_primary'
            },
            label
          )
      )
    ])
  }

  const renderColumnSetting = () => {
    if (!unref(saveKey)) {
      return null
    }

    return h('div', { class: 'absolute right-0 top-[15px] z-[9] h-[34px]' }, [
      h(
        ElPopover,
        {
          placement: 'bottom-end',
          width: '160',
          trigger: 'click'
        },
        {
          ...SettingReference,
          default: () => [
            h('div', { class: [topClass.value] }, [
              h(
                ElButton,
                {
                  class: ['m-auto'],
                  type: 'primary',
                  link: true,
                  onClick: () => resetColumns()
                },
                () => '重置'
              )
            ]),
            h('div', { class: 'pt-[6px] pl-[11px]' }, [
              h(
                ElCheckboxGroup,
                {
                  saveKey: unref(saveKey),
                  modelValue: checkedColumns.value,
                  'onUpdate:modelValue': (value: string[]) => {
                    checkedColumns.value = value
                  },
                  min: 1
                },
                () =>
                  h(
                    ElSpace,
                    {
                      direction: 'vertical',
                      alignment: 'flex-start',
                      size: 0
                    },
                    () => checkColumnList.value.map((item) => renderColumnOption(item))
                  )
              )
            ])
          ]
        }
      )
    ])
  }

  const columnsCom = () => {
    return unref(dynamicColumns)
  }

  setDynamicColumns(unref(columns))

  watch(
    () => unref(columns),
    (newColumn) => setDynamicColumns(newColumn),
    { deep: true }
  )

  onBeforeUnmount(() => {
    sortableInstance.value?.destroy()
  })

  return {
    columnsCom,
    renderColumnSetting
  }
}
