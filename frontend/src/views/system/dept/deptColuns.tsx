import { handleTree } from '@/utils/tree'
const list = ref() // 列表的数据
import * as DeptApi from '@/api/system/dept'
const { tagStyle } = usePublicHooks()
import dayjs from 'dayjs'
const tableSize = ref('default')
const loading = ref(true) // 列表的加载中
const { t } = useI18n() // 国际化

import * as RoleApi from '@/api/system/role'
import { CustomMouseMenu } from '@howdyjs/mouse-menu'

import { usePublicHooks } from './hooks'

const message2 = useMessage() // 消息弹窗
const queryParams = reactive({
  title: '',
  name: undefined,
  status: undefined,
  pageNo: 1
})

export function useColumns() {
  const exportLoading = ref(false) // 导出的加载中
  const columns: TableColumnList = [
    {
      label: '部门名称',
      prop: 'name',
      width: 180,
      align: 'left'
    },
    {
      label: '负责人',
      prop: 'leader'
    },
    {
      label: '排序',
      prop: 'sort',
      minWidth: 70
    },
    {
      label: '状态',
      prop: 'status',
      minWidth: 100,
      cellRenderer: ({ row, props }) => (
        <el-tag size={props.size} style={tagStyle.value(row.status)}>
          {row.status === 1 ? '启用' : '停用'}
        </el-tag>
      )
    },
    {
      label: '创建时间',
      prop: 'createTime',
      minWidth: 200,
      formatter: ({ createTime }) => dayjs(createTime).format('YYYY-MM-DD HH:mm:ss')
    },
    {
      label: '操作',
      fixed: 'right',
      width: 160,
      slot: 'operation'
    }
  ]
  /** 查询部门列表 */
  const getList = async () => {
    loading.value = true
    try {
      const data = await DeptApi.getDeptPage(queryParams)
      list.value = handleTree(data)
    } finally {
      loading.value = false
    }
  }
  /** 搜索按钮操作 */
  const handleQuery = () => {
    queryParams.pageNo = 1
    getList()
  }
  /** 初始化 **/
  onMounted(() => {
    getList()
  })

  // 表格右键功能
  function showMouseMenu(row, column, event) {
    event.preventDefault()
    const { x, y } = event
    const ctx = CustomMouseMenu({
      el: event.currentTarget,
      menuWidth: 100,
      params: row,
      // 菜单容器的CSS设置
      menuWrapperCss: {
        background: '	#DDDDDD',
        padding: '10px 5px',
        lineColor: 'red',
        lineMargin: '8px 0'
      },
      menuItemCss: {
        labelFontSize: '16px',
        padding: '3px 10px'
      },
      ...menuOptions
    })
    ctx.show(x, y)
  }

  // 配置参考：https://kongfandong.cn/howdy/mouse-menu/readme
  const menuOptions = {
    menuList: [
      {
        label: ({ name }) => `ID：${name}`,
        disabled: true
      },
      {
        label: '编辑',
        fn: (row) => {
          openForm('update', row.id)
        }
      },
      {
        label: '菜单权限',
        fn: (row) => {
          openAssignMenuForm(row)
        }
      },
      {
        label: '删除',
        fn: (row) => {
          handleDelete(row.id)
        }
      },
      {
        label: '隐藏该列',
        fn: (row) => {
          handleDelete(row.id)
        }
      }
    ]
  }

  /** 删除按钮操作 */
  const handleDelete = async (id: number) => {
    try {
      // 删除的二次确认
      await message2.delConfirm()
      // 发起删除
      await RoleApi.deleteRole(id)
      message2.success(t('common.delSuccess'))
      // 刷新列表
      await getList()
    } catch {}
  }

  return {
    handleDelete,

    columns,

    list,
    getList,
    handleQuery,
    showMouseMenu,
    queryParams,
    exportLoading,

    loading,
    tableSize,

    checkColumns: []
  }
}
