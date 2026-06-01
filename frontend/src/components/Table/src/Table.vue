<!-- eslint-disable no-unused-vars -->
<script lang="tsx">
import { PureTable } from '@pureadmin/table'
import { ContextMenu } from '@imengyu/vue3-context-menu'
import props from './props'
import { useContextMenu } from './useContextMenu'
import { useAdaptive } from './useAdaptive'
import { usePagination } from './usePagination'
import { useColumns } from './useColumns'

export default defineComponent({
  name: 'Table',
  props,
  emits: ['page-change', 'row-contextmenu'],
  setup(props, { slots, attrs, emit, expose }) {
    const { pageData, data } = toRefs(props)
    const { columnsCom } = useColumns(props)
    let dataCom = () => {
      if (Object.keys(unref(pageData)).length > 0) return unref(pageData).list
      else return unref(data)
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
