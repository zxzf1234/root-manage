import { Icon } from '@/components/Icon'
import DragIcon from '../svg/drag.svg?component'

export function createSettingHeader(ctx: any) {
  return () => {
    const columnKeys = ctx.dynamicColumns.value.map((item) => {
      return ctx.getColumnKey(item)
    })

    return (
      <div>
        设置
        <el-popover
          placement="bottom-start"
          width="180"
          trigger="click"
          onShow={ctx.initColumnSortable}
          v-slots={{
            reference: () => (
              <el-button class="float-right" link type="primary">
                <Icon icon="ep:setting" />
              </el-button>
            )
          }}
        >
          <div class="flex justify-between pt-[3px] px-[11px] border-b-[1px] border-solid border-[#dcdfe6] dark:border-[#303030]">
            <el-button class="m-auto" type="primary" link onClick={ctx.resetColumns}>
              重置
            </el-button>
          </div>

          <div class="pt-[6px] pl-[11px]">
            <el-checkbox-group savekey={ctx.props.saveKey} modelValue={ctx.checkedColumns.value}>
              <el-space direction="vertical" alignment="flex-start" size={0}>
                {columnKeys.map((key) => {
                  const fixed = ctx.isFixedColumn(key)

                  return (
                    <div class="flex items-center">
                      <DragIcon
                        class={[
                          'drag-btn w-[16px] mr-2',
                          fixed ? '!cursor-no-drop' : '!cursor-grab'
                        ]}
                      />

                      <el-checkbox
                        key={key}
                        value={key}
                        onChange={(value) => {
                          ctx.handleCheckColumnListChange(value, key)
                        }}
                      >
                        <span
                          title={key}
                          class="inline-block w-[120px] truncate hover:text-text_color_primary"
                        >
                          {key}
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
}
