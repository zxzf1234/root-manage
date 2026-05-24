import { ref, useSlots } from 'vue'

export function useContextMenu(emit, tableRef) {
  const slots = useSlots()

  const menuOption = ref({
    show: false,
    option: {
      zIndex: 3000,
      minWidth: 130,
      x: 500,
      y: 200,
      theme: 'default'
    }
  })

  const menuSlot = ref(slots?.['menu']?.({ row: {} }))

  /**
   * 显示右键菜单
   */
  function showMouseMenu(row, column, event) {
    if (!slots?.menu) return

    const currentMenuSlot = slots.menu({ row })

    if (!currentMenuSlot || currentMenuSlot.length <= 0) return

    event.preventDefault()

    const { x, y } = event

    menuOption.value.show = true
    menuOption.value.option.x = x
    menuOption.value.option.y = y

    menuSlot.value = currentMenuSlot

    tableRef.value?.getTableRef?.().setCurrentRow(row)

    emit('row-contextmenu', row, column, event)
  }

  /**
   * 禁止默认右键菜单
   */
  function disableContextMenu(event) {
    event.preventDefault()
  }

  return {
    menuOption,
    menuSlot,
    showMouseMenu,
    disableContextMenu
  }
}
