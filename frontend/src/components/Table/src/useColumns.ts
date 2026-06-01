import Sortable from 'sortablejs'
import { h, resolveComponent } from 'vue'
import { Icon } from '@/components/Icon'
import { cloneDeep, isBoolean, isFunction, getKeyList } from '@pureadmin/utils'
import { useTableStoreWithOut } from '@/store/modules/table'
import DragIcon from './svg/drag.svg?component'
import type { TableProps } from './props'

export function useColumns(props: TableProps) {
  const { columns, saveKey } = toRefs(props)
  const lastColumnLabel = ref('')
  const tableStore = useTableStoreWithOut()

  const getDynamicColumns = () => {
    if (unref(saveKey) && tableStore?.[unref(saveKey)]?.['column']) {
      const saveColumn = tableStore[unref(saveKey)]['column']
      const currentColumns = []
      const saveLabel = getKeyList(saveColumn, 'label')
      const originLabel = getKeyList(unref(columns), 'label')
      const originColumns = cloneDeep(unref(columns))
      let y = 0
      for (let i = 0; i < saveLabel.length; i++) {
        if (originLabel.indexOf(saveLabel[i]) >= 0) {
          currentColumns[y] = originColumns[originLabel.indexOf(saveLabel[i])]
          currentColumns[y].hide = saveColumn[i].hide
          y++
        }
      }
      for (let i = 0; i < originLabel.length; i++) {
        if (saveLabel.indexOf(originLabel[i]) == -1) {
          currentColumns[y] = originColumns[i]
          y++
        }
      }
      return currentColumns
    } else return cloneDeep(unref(columns))
  }

  const dynamicColumns = ref(getDynamicColumns())
  watch(
    () => unref(columns),
    (newColumn) => {
      if (unref(saveKey) && tableStore?.[unref(saveKey)]?.['column']) {
        const saveColumn = tableStore[unref(saveKey)]['column']
        const currentColumns = []
        const saveLabel = getKeyList(saveColumn, 'label')
        const originLabel = getKeyList(newColumn, 'label')
        const originColumns = cloneDeep(newColumn)
        let y = 0
        for (let i = 0; i < saveLabel.length; i++) {
          if (originLabel.indexOf(saveLabel[i]) >= 0) {
            currentColumns[y] = originColumns[originLabel.indexOf(saveLabel[i])]
            currentColumns[y].hide = saveColumn[i].hide
            y++
          }
        }
        for (let i = 0; i < originLabel.length; i++) {
          if (saveLabel.indexOf(originLabel[i]) == -1) {
            currentColumns[y] = originColumns[i]
            y++
          }
        }
        dynamicColumns.value = currentColumns
      } else dynamicColumns.value = cloneDeep(unref(columns))
    },
    { deep: true }
  )
  let checkColumnList = getKeyList(cloneDeep(unref(dynamicColumns)), 'label')
  const filterColumns = cloneDeep(unref(dynamicColumns)).filter((column) =>
    isBoolean(column?.hide) ? !column.hide : !(isFunction(column?.hide) && column?.hide())
  )

  const checkedColumns = ref(getKeyList(cloneDeep(filterColumns), 'label'))

  const rowDrop = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    nextTick(() => {
      const wrapper = document.querySelector(
        ".el-checkbox-group[savekey='" + unref(saveKey) + "']>div"
      )
      Sortable.create(wrapper, {
        animation: 300,
        handle: '.drag-btn',
        onEnd: ({ newIndex, oldIndex, item }) => {
          const targetThElem = item
          const wrapperElem = targetThElem.parentNode as HTMLElement
          const oldColumn = dynamicColumns.value[oldIndex]
          const newColumn = dynamicColumns.value[newIndex]
          if (oldColumn?.fixed || newColumn?.fixed) {
            // Fixed columns cannot be dragged.
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
          moveSettingButton()
        }
      })
    })
  }

  function handleCheckColumnListChange(val: boolean, label: string) {
    dynamicColumns.value.filter((item) => item.label === label)[0].hide = !val
    // moveSettingButton()
  }

  const isFixedColumn = (label: string) => {
    return dynamicColumns.value.filter((item) => item.label === label)[0].fixed ? true : false
  }

  const moveSettingButton = () => {
    if (!unref(saveKey)) {
      return
    }
    let currentSettingColumnIndex = 0
    let lastColumnIndex = 0
    for (let i = 0; i < unref(dynamicColumns).length; i++) {
      if (!unref(dynamicColumns)[i].hide) lastColumnIndex = i
      if (unref(dynamicColumns)[i].headerRenderer) currentSettingColumnIndex = i
    }
    if (currentSettingColumnIndex != lastColumnIndex) {
      lastColumnLabel.value = unref(dynamicColumns)[lastColumnIndex].label
      unref(dynamicColumns)[lastColumnIndex].headerRenderer = settingHeader

      unref(dynamicColumns)[currentSettingColumnIndex].headerRenderer = null
    }
    saveColumns()
  }

  const saveColumns = () => {
    if (tableStore[unref(saveKey)]) {
      const tableCache = tableStore[unref(saveKey)]
      tableCache['column'] = unref(dynamicColumns)
      tableStore.setTableCache(unref(saveKey), tableCache)
    } else {
      tableStore.setTableCache(unref(saveKey), { column: unref(dynamicColumns) })
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

  async function onColumnsReset() {
    dynamicColumns.value = cloneDeep(unref(columns))
    checkColumnList = []
    checkColumnList = await getKeyList(cloneDeep(unref(columns)), 'label')
    checkedColumns.value = getKeyList(cloneDeep(unref(columns)), 'label')
    saveColumns()
  }

  const SettingReference = {
    reference: () =>
      h(
        resolveComponent('ElButton') as any,
        { class: 'float-right', link: true, type: 'primary' },
        () => h(Icon, { icon: 'ep:setting' })
      )
  }

  const settingHeader = () => {
    return h('div', null, [
      unref(lastColumnLabel),
      h(
        resolveComponent('ElPopover') as any,
        {
          placement: 'bottom-start',
          width: '160',
          trigger: 'click'
        },
        {
          ...SettingReference,
          default: () => [
            h('div', { class: [topClass.value] }, [
              h(
                resolveComponent('ElButton') as any,
                { class: ['m-auto'], type: 'primary', link: true, onClick: () => onColumnsReset() },
                () => '重置'
              )
            ]),

            h('div', { class: 'pt-[6px] pl-[11px]' }, [
              h(
                resolveComponent('ElCheckboxGroup') as any,
                {
                  saveKey: unref(saveKey),
                  modelValue: checkedColumns.value,
                  'onUpdate:modelValue': (value: any) => {
                    checkedColumns.value = value
                  },
                  min: 1
                },
                () =>
                  h(
                    resolveComponent('ElSpace') as any,
                    { direction: 'vertical', alignment: 'flex-start', size: 0 },
                    () =>
                      checkColumnList.map((item) => {
                        return h('div', { class: 'flex items-center' }, [
                          h(DragIcon, {
                            class: [
                              'drag-btn w-[16px] mr-2',
                              isFixedColumn(item) ? '!cursor-no-drop' : '!cursor-grab'
                            ],
                            onMouseenter: (event: { preventDefault: () => void }) => rowDrop(event)
                          }),

                          h(
                            resolveComponent('ElCheckbox') as any,
                            {
                              key: item,
                              value: item,
                              onChange: (value: boolean) => handleCheckColumnListChange(value, item)
                            },
                            () =>
                              h(
                                'span',
                                {
                                  title: item,
                                  class:
                                    'inline-block w-[120px] truncate hover:text-text_color_primary'
                                },
                                item
                              )
                          )
                        ])
                      })
                  )
              )
            ])
          ]
        }
      )
    ])
  }

  const columnsCom = () => {
    if (unref(saveKey)) {
      let lastColumnIndex = 0
      for (let i = 0; i < unref(dynamicColumns).length; i++) {
        if (!unref(dynamicColumns)[i].hide) lastColumnIndex = i
      }
      lastColumnLabel.value = unref(dynamicColumns)[lastColumnIndex].label
      unref(dynamicColumns)[lastColumnIndex].headerRenderer = settingHeader
    }
    return unref(dynamicColumns)
  }

  return {
    columnsCom
  }
}
