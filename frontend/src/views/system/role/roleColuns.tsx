// import { message } from '@/utils/message'
import Sortable from 'sortablejs'
const list = ref([]) // 列表的数据
const total = ref(0) // 列表的总页数
const tableSize = ref('default')
const loading = ref(true) // 列表的加载中
const { t } = useI18n() // 国际化
import download from '@/utils/download'
// const exportLoading = ref(false) // 导出的加载中
import * as RoleApi from '@/api/system/role'
import { CustomMouseMenu } from '@howdyjs/mouse-menu'
import { nextTick } from 'vue'
import { clone, delay } from '@pureadmin/utils'
import type { PaginationProps, LoadingConfig } from '@pureadmin/table'

const message2 = useMessage() // 消息弹窗
const queryParams = reactive({
  pageNo: 1,
  pageSize: 10,
  code: '',
  name: '',
  status: undefined,
  createTime: []
})
const columnsDrag = ref<TableColumnList>([
  {
    label: '角色编号',
    prop: 'id',
    hide: false
  },
  {
    label: '角色名称',
    prop: 'name',
    hide: false
  },
  {
    label: '角色类型',
    prop: 'type',
    hide: false
  },
  {
    label: '角色标识',
    prop: 'code',
    hide: false
  },
  {
    label: '显示顺序',
    prop: 'sort',
    hide: false
  },
  {
    label: '备注',
    prop: 'remark',
    hide: false
  },
  {
    label: '状态',
    prop: 'status',
    hide: false
  },
  {
    label: '创建时间',
    prop: 'createTime',
    hide: false
  }
])

export function useColumns() {
  const exportLoading = ref(false) // 导出的加载中

  const columns = ref<TableColumnList>([
    {
      label: '角色编号',
      prop: (index) => columnsDrag.value[index].prop as string,
      hide: false
    },
    {
      label: '角色名称',
      prop: (index) => columnsDrag.value[index].prop as string,
      hide: false
    },
    {
      label: '角色类型',
      prop: (index) => columnsDrag.value[index].prop as string,
      hide: false
    },
    {
      label: '角色标识',
      prop: (index) => columnsDrag.value[index].prop as string,
      hide: false
    },
    {
      label: '显示顺序',
      prop: (index) => columnsDrag.value[index].prop as string,
      hide: false
    },
    {
      label: '备注',
      prop: (index) => columnsDrag.value[index].prop as string,
      hide: false
    },
    {
      label: '状态',
      prop: (index) => columnsDrag.value[index].prop as string,
      hide: false,
      cellRenderer: ({ row }) => <el-tag>{row.status === 1 ? '关闭' : '开启'}</el-tag>
    },
    {
      label: '创建时间',
      prop: (index) => columnsDrag.value[index].prop as string,
      hide: false
    }
  ])

  /* 选择列 */
  const changeColumns = () => {
    columns.value.forEach((item) => {
      item.hide = true
    })
  }
  /** 查询角色列表 */
  const getList = async () => {
    loading.value = true
    try {
      const data = await RoleApi.getRolePage(queryParams)
      list.value = data.list
      total.value = data.total
    } finally {
      loading.value = false
    }
  }
  // 列拖拽演示
  const columnDrop = () => {
    //通知浏览器不要执行与事件关联的默认动作
    nextTick(() => {
      const wrapper = document.querySelector('.el-table__header-wrapper tr')

      Sortable.create(wrapper, {
        animation: 300,
        delay: 0,
        onEnd: ({ newIndex, oldIndex }) => {
          const oldItem = columnsDrag.value[oldIndex]
          columnsDrag.value.splice(oldIndex, 1)

          columnsDrag.value.splice(newIndex, 0, oldItem)
        }
      })
    })
  }
  /** 分页配置 */
  const pagination = reactive<PaginationProps>({
    pageSize: 10,
    currentPage: 1,
    pageSizes: [10, 15, 20],
    total: 0,
    align: 'right',
    background: true,
    small: false
  })

  function onCurrentChange(val) {
    loadingConfig.text = `正在加载第${val}页...`
    loading.value = true
    delay(600).then(() => {
      loading.value = false
    })
  }
  /** 加载动画配置 */
  const loadingConfig = reactive<LoadingConfig>({
    text: '正在加载第一页...',
    viewBox: '-10, -10, 50, 50',
    spinner: `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `
    // svg: "",
    // background: rgba()
  })
  // const datalist = list.value
  const dataList: any[] = []
  /** 初始化 **/
  onMounted(() => {
    getList()
    nextTick(() => {
      columnDrop()
    })
    delay(600).then(() => {
      const newList: any[] = []
      Array.from({ length: 6 }).forEach(() => {
        newList.push(clone(list.value, true))
      })
      newList.flat(Infinity).forEach((item, index) => {
        dataList.push({ id: index, ...item })
      })
      pagination.total = list.value.length
      loading.value = false
    })
  })

  function showMouseMenu(row, column, event) {
    event.preventDefault()
    const { x, y } = event
    const ctx = CustomMouseMenu({
      el: event.currentTarget,
      menuWidth: 100,
      params: row,
      // 菜单容器的CSS设置
      menuWrapperCss: {
        // background: '	#DDDDDD',
        background: '	#ffffff',
        padding: '10px 5px',
        lineColor: 'red',
        lineMargin: '12px 0'
      },
      menuItemCss: {
        labelFontSize: '12px',
        padding: '8px 8px'
      },
      ...menuOptions
    })
    ctx.show(x, y)
  }

  // 配置参考：https://kongfandong.cn/howdy/mouse-menu/readme
  const menuOptions = {
    menuList: [
      // {
      //   label: ({ id }) => `ID：${id}`,
      //   disabled: true
      // },
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
  /** 添加/修改操作 */
  const formRef = ref()
  const openForm = (type: string, id?: number) => {
    formRef.value.open(type, id)
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
  /** 菜单权限操作 */
  const assignMenuFormRef = ref()
  const openAssignMenuForm = async (row: RoleApi.RoleVO) => {
    assignMenuFormRef.value.open(row)
  }
  /** 搜索按钮操作 */
  const handleQuery = () => {
    // queryParams.pageNo = 1
    getList()
  }

  /** 导出按钮操作 */
  const handleExport = async () => {
    try {
      // 导出的二次确认
      await message2.exportConfirm()
      // 发起导出
      exportLoading.value = true
      const data = await RoleApi.exportRole(queryParams)
      download.excel(data, '角色列表.xls')
    } catch {
    } finally {
      exportLoading.value = false
    }
  }

  return {
    columns,
    list,
    getList,
    columnsDrag,
    showMouseMenu,
    queryParams,
    handleQuery,
    openForm,
    handleExport,
    exportLoading,
    pagination,
    onCurrentChange,
    loading,
    tableSize,
    loadingConfig,
    changeColumns,
    checkColumns: []
  }
}
