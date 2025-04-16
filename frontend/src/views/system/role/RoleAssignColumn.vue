<template>
  <Dialog v-model="dialogVisible" title="字段权限">
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane
        :label="column.typeName"
        :name="column.type"
        v-for="column in columns"
        :key="column.type"
      >
        <el-scrollbar style="height: 430px">
          <el-form>
            <el-form-item
              v-for="(columnField, index) in column.columnInfos"
              :key="index"
              style="margin-bottom: 0"
            >
              <div style="margin: 0 auto">
                <el-checkbox v-model="formData[columnField.id]" style="margin-right: 4px" />
                <span>{{ columnField.columnComment }}</span>
              </div>
            </el-form-item>
          </el-form>
        </el-scrollbar>
      </el-tab-pane>
    </el-tabs>
    <el-row>
      <el-button type="primary" @click="submitForm" style="margin: 10px auto"> 保存 </el-button>
    </el-row>
  </Dialog>
</template>
<script setup name="RoleAssignColumn" lang="ts">
import * as DatabaseTableApi from '@/api/infra/codegen/databaseTable'
import * as BusinessFieldApi from '@/api/setting/businessField'
import * as RoleApi from '@/api/system/role/role'
import { getKeyList } from '@pureadmin/utils'
import { SettingBusinessModuleEnum } from '@/utils/constants'

const roleId = ref(0)
const message = useMessage() // 消息弹窗
const activeName = ref('customer')

const formData = ref({})

const columns = ref([
  {
    type: 'customer',
    businessModule: SettingBusinessModuleEnum.CUSTOMER,
    tableName: 'customer_info',
    typeName: '客户',
    columnNames: [
      'source',
      'grade',
      'stage',
      'custom_field1',
      'custom_field2',
      'custom_field3',
      'custom_field4',
      'custom_field5',
      'custom_field6',
      'custom_field7',
      'custom_field8',
      'custom_field9',
      'custom_field10',
      'custom_field11',
      'custom_field12',
      'custom_field13',
      'custom_field14',
      'custom_field15',
      'custom_field16',
      'custom_field17',
      'custom_field18',
      'custom_field19',
      'custom_field20'
    ],
    columnInfos: [] as any[]
  },
  {
    type: 'customerContact',
    tableName: 'customer_contact',
    businessModule: SettingBusinessModuleEnum.CUSTOMER_CONTACT,
    typeName: '客户联系人',
    columnNames: [
      'decision_role',
      'position',
      'work_state',
      'custom_field1',
      'custom_field2',
      'custom_field3',
      'custom_field4',
      'custom_field5',
      'custom_field6',
      'custom_field7',
      'custom_field8',
      'custom_field9',
      'custom_field10'
    ],
    columnInfos: []
  }
])

const dialogVisible = ref(false)

// 菜单权限 打开弹窗
const open = async (id) => {
  roleId.value = id
  dialogVisible.value = true
  const roleColumns = await RoleApi.getColumnByRoleId(roleId.value)
  const columnIds = getKeyList(roleColumns, 'columnId')

  formData.value = {}
  columns.value.forEach(async (column) => {
    const moduleField = await BusinessFieldApi.getByModule(column.businessModule)
    const moduleFieldName = getKeyList(moduleField, 'fieldName')
    const moduleFieldShowName = getKeyList(moduleField, 'showName')
    column.columnInfos = await DatabaseTableApi.getColumnByNames({
      tableName: column.tableName,
      columnNames: column.columnNames
    })
    column.columnInfos.forEach((columnInfo) => {
      formData.value[columnInfo.id] = columnIds.includes(columnInfo.id) ? false : true
      if (moduleFieldName.includes(columnInfo.columnName)) {
        columnInfo.columnComment =
          moduleFieldShowName[moduleFieldName.indexOf(columnInfo.columnName)]
      }
    })
  })
}
defineExpose({ open }) // 提供 open 方法，用于打开弹窗

const submitForm = async () => {
  const columnIds = [] as any[]
  columns.value.forEach(async (column) => {
    column.columnInfos.forEach((columnInfo) => {
      if (!formData.value[columnInfo.id]) {
        columnIds.push(columnInfo.id)
      }
    })
  })

  await RoleApi.saveRoleColumn({ roleId: roleId.value, columnIds: columnIds })
  dialogVisible.value = false
  message.success('保存成功')
}
</script>
<style scoped>
:deep(.el-tabs__nav-scroll) {
  display: flex;
  justify-content: center;
}
</style>
