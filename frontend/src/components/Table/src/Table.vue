<!-- eslint-disable no-unused-vars -->
<script lang="tsx">
import { PureTable } from '@pureadmin/table'
import { ContextMenu } from '@imengyu/vue3-context-menu'
import { Icon } from '@/components/Icon'
import props from './props'
import Sortable from 'sortablejs'
import DragIcon from './svg/drag.svg?component'
import { cloneDeep, isBoolean, isFunction, getKeyList } from '@pureadmin/utils'
import { useTableStoreWithOut } from '@/store/modules/table'
import { useContextMenu } from './useContextMenu'
import { useAdaptive } from './useAdaptive'
import { usePagination } from './usePagination'

export default defineComponent({
  name: 'Table',
  props,
  emits: ['page-change', 'row-contextmenu'],
  setup(props, { slots, attrs, emit, expose }) {
    const { columns, saveKey, pageData, data } = toRefs(props)
    const lastColumnLabel = ref('')
    const tableStore = useTableStoreWithOut()
    const getDynamicColumns = () => {
      if (unref(saveKey) && tableStore?.[unref(saveKey)]?.['column']) {
        let saveColumn = tableStore[unref(saveKey)]['column']
        let currentColumns = []
        let saveLabel = getKeyList(saveColumn, 'label')
        let originLabel = getKeyList(unref(columns), 'label')
        let originColumns = cloneDeep(unref(columns))
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
          let saveColumn = tableStore[unref(saveKey)]['column']
          let currentColumns = []
          let saveLabel = getKeyList(saveColumn, 'label')
          let originLabel = getKeyList(newColumn, 'label')
          let originColumns = cloneDeep(newColumn)
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
    let dataCom = () => {
      if (Object.keys(unref(pageData)).length > 0) return unref(pageData).list
      else return unref(data)
    }
    const SettingReference = {
      reference: () => (
        <el-button class="float-right" link type="primary">
          <Icon icon="ep:setting" />
        </el-button>
      )
    }
    const filterColumns = cloneDeep(unref(dynamicColumns)).filter((column) =>
      isBoolean(column?.hide) ? !column.hide : !(isFunction(column?.hide) && column?.hide())
    )

    const checkedColumns = ref(getKeyList(cloneDeep(filterColumns), 'label'))

    /** 列展示拖拽排序 */
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
              // 当前列存在fixed属性 则不可拖拽
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
        let tableCache = tableStore[unref(saveKey)]
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

    const tableRef = ref<Element | null>(null)
    const { menuOption, menuSlot, showMouseMenu, disableContextMenu } = useContextMenu(
      emit,
      tableRef
    )
    const { adaptiveConfigCom } = useAdaptive(props)
    const { paginationCom, handleSizeChange, handlePageCurrentChange } = usePagination(props, emit)
    const getTableRef = () => {
      if (tableRef == null) return null
      else return tableRef.value?.getTableRef()
    }
    expose({
      /** 获取表格实例 */
      getTableRef
    })

    let settingHeader = () => {
      return (
        <div>
          {unref(lastColumnLabel)}
          <el-popover
            placement="bottom-start"
            width="160"
            trigger="click"
            v-slots={SettingReference}
          >
            <div class={[topClass.value]}>
              <el-button class={['m-auto']} type="primary" link onClick={() => onColumnsReset()}>
                重置
              </el-button>
            </div>

            <div class="pt-[6px] pl-[11px]">
              <el-checkbox-group saveKey={unref(saveKey)} v-model={checkedColumns.value} min={1}>
                <el-space direction="vertical" alignment="flex-start" size={0}>
                  {checkColumnList.map((item) => {
                    return (
                      <div class="flex items-center">
                        <DragIcon
                          class={[
                            'drag-btn w-[16px] mr-2',
                            isFixedColumn(item) ? '!cursor-no-drop' : '!cursor-grab'
                          ]}
                          onMouseenter={(event: { preventDefault: () => void }) => rowDrop(event)}
                        />

                        <el-checkbox
                          key={item}
                          value={item}
                          onChange={(value) => handleCheckColumnListChange(value, item)}
                        >
                          <span
                            title={item}
                            class="inline-block w-[120px] truncate hover:text-text_color_primary"
                          >
                            {item}
                          </span>
                        </el-checkbox>
                      </div>
                    )
                  })}
                </el-space>
              </el-checkbox-group>
            </div>
          </el-popover>
        </div>
      )
    }

    let columnsCom = () => {
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

    return () => (
      <>
        <PureTable
          ref={tableRef}
          {...props}
          {...attrs}
          columns={columnsCom()}
          data={dataCom()}
          pagination={unref(paginationCom)}
          adaptiveConfig={adaptiveConfigCom}
          onPage-size-change={(val) => handleSizeChange(val)}
          onPage-current-change={(val) => handlePageCurrentChange(val)}
          onRow-contextmenu={showMouseMenu}
        >
          {slots}
        </PureTable>
        <ContextMenu v-model:show={menuOption.value.show} options={menuOption.value.option}>
          <div onContextmenu={disableContextMenu}>{menuSlot.value}</div>
        </ContextMenu>
      </>
    )
  }
})
</script>
<style>
.mx-context-menu-item-sperator {
  padding: 0 !important;
}
:root {
  --mx-menu-hover-backgroud: #409eff;
  --mx-menu-open-hover-backgroud: #409eff;
  --mx-menu-open-backgroud: #409eff;
}
.el-table__body-wrapper .el-table-column--selection > .cell {
  justify-content: center;
}

.pure-table > .el-table,
.pure-table .el-table {
  border: 1px solid #dcdfe6;
  border-radius: 8px;
  overflow: hidden;
}

.pure-table > .el-table::before,
.pure-table > .el-table::after,
.pure-table .el-table::before,
.pure-table .el-table::after {
  display: none;
}

.pure-table > .el-table th.el-table__cell,
.pure-table .el-table th.el-table__cell {
  height: 56px;
  padding: 0;
  background: #1f7ccc !important;
  border-right: 1px solid rgb(255 255 255 / 26%);
  border-bottom: 1px solid #1f7ccc;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
}

.pure-table > .el-table thead tr:first-child th.el-table__cell:first-child,
.pure-table .el-table thead tr:first-child th.el-table__cell:first-child {
  border-top-left-radius: 8px;
}

.pure-table > .el-table thead tr:first-child th.el-table__cell:last-child,
.pure-table .el-table thead tr:first-child th.el-table__cell:last-child {
  border-top-right-radius: 8px;
}

.pure-table > .el-table .el-table__body tr:last-child td.el-table__cell:first-child,
.pure-table .el-table .el-table__body tr:last-child td.el-table__cell:first-child {
  border-bottom-left-radius: 8px;
}

.pure-table > .el-table .el-table__body tr:last-child td.el-table__cell:last-child,
.pure-table .el-table .el-table__body tr:last-child td.el-table__cell:last-child {
  border-bottom-right-radius: 8px;
}

.pure-table > .el-table th.el-table__cell .cell,
.pure-table .el-table th.el-table__cell .cell {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 56px;
  padding: 0 14px;
  line-height: 1.35;
  white-space: normal;
  word-break: break-word;
}

.pure-table > .el-table td.el-table__cell,
.pure-table .el-table td.el-table__cell {
  padding: 0;
  border-right: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
  color: #111827;
  font-size: 15px;
}

.pure-table > .el-table td.el-table__cell .cell,
.pure-table .el-table td.el-table__cell .cell {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 56px;
  padding: 12px 14px;
  line-height: 1.5;
  white-space: normal;
  word-break: break-word;
}

.pure-table > .el-table .el-table__body tr:hover > td.el-table__cell,
.pure-table .el-table .el-table__body tr:hover > td.el-table__cell {
  background: #eef6ff !important;
}

.pure-table > .el-table .el-table__fixed-right td.el-table__cell,
.pure-table > .el-table .el-table__fixed td.el-table__cell,
.pure-table .el-table .el-table__fixed-right td.el-table__cell,
.pure-table .el-table .el-table__fixed td.el-table__cell {
  background: inherit;
}

.pure-table > .el-table .el-table__cell.is-left .cell,
.pure-table .el-table .el-table__cell.is-left .cell {
  justify-content: flex-start;
  text-align: left;
}

.pure-table > .el-table .el-table__cell.is-right .cell,
.pure-table .el-table .el-table__cell.is-right .cell {
  justify-content: flex-end;
  text-align: right;
}
</style>
