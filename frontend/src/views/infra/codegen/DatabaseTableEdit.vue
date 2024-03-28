<template>
  <Dialog v-model="dialogVisible" title="新建数据库表" width="1600px" class="h-[1000px]">
    <!-- 操作 -->
    <el-form>
      <el-form-item>
        <el-button @click="handleAddColumn">添加列</el-button>
        <el-button @click="handleDeleteColumn">删除列</el-button>
        <el-button @click="handleAddValidation">添加校验</el-button>
        <el-button @click="handleDeleteValidation">删除校验</el-button>
        <el-button @click="handleAddIndex">添加索引</el-button>
        <el-button @click="handleDeleteIndex">删除索引</el-button>
        <el-button @click="handleAddMapping">添加映射</el-button>
        <el-button @click="handleDeleteMapping">删除映射</el-button>
        <el-button type="primary" @click="handleSaveTable"> 保存 </el-button>
        <el-button @click="close">关闭</el-button>
      </el-form-item>
    </el-form>
    <el-form
      ref="formRef"
      :model="formData"
      :rules="rules"
      label-width="120px"
      v-loading="formLoading"
    >
      <el-row>
        <el-col :span="12">
          <el-form-item label="表名称" prop="name">
            <el-input
              v-model="formData.name"
              placeholder="请输表名称"
              @keyup="formData.name = formData.name.replace(/[^a-z_]/g, '')"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="表描述" prop="comment">
            <el-input v-model="formData.comment" placeholder="请输入" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="一级模块" prop="firstModule">
            <el-input v-model="formData.firstModule" placeholder="请输入" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="二级模块" prop="secondModule">
            <el-input v-model="formData.secondModule" placeholder="请输入" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="备注" prop="remark">
            <el-input v-model="formData.remark" :rows="1" type="textarea" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <el-tabs v-model="tabActiveName" type="card">
      <el-tab-pane label="表字段" name="column">
        <el-table
          ref="columnTable"
          :data="formData.columns"
          height="700"
          highlight-current-row
          row-key="id"
          @current-change="handleCurrentColumnChange"
          :row-style="rowStyle"
          v-loading="formLoading"
        >
          <el-table-column type="expand">
            <template #default="scope">
              <el-table
                highlight-current-row
                @current-change="(row) => handleCurrentValidationChange(row, scope)"
                :data="scope.row.validations"
                style="width: 1100px"
                class="mx-10"
                :row-style="rowStyle"
              >
                <el-table-column label="校验注解" min-width="30%" align="center">
                  <template #default="prop">
                    <el-select v-model="prop.row.validation">
                      <el-option label="NotBlank" value="NotBlank" />
                      <el-option label="NotEmpty" value="NotEmpty" />
                      <el-option label="NotNull" value="NotNull" />
                      <el-option label="Pattern" value="Pattern" />
                      <el-option label="Min" value="Min" />
                      <el-option label="Max" value="Max" />
                      <el-option label="Range" value="Range" />
                      <el-option label="Size" value="Size" />
                      <el-option label="Length" value="Length" />
                      <el-option label="Email" value="Email" />
                      <el-option label="Mobile" value="Mobile" />
                      <el-option label="InEnum" value="InEnum" />
                      <el-option label="URL" value="URL" />
                      <el-option label="DecimalMax" value="DecimalMax" />
                      <el-option label="DecimalMin" value="DecimalMin" />
                    </el-select>
                  </template>
                </el-table-column>
                <el-table-column label="校验条件" align="center">
                  <template #default="prop">
                    <el-input v-model="prop.row.validationCondition" />
                  </template>
                </el-table-column>
                <el-table-column label="报错信息" align="center">
                  <template #default="prop">
                    <el-input v-model="prop.row.message" />
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-table-column>
          <el-table-column label="字段列名" min-width="10%">
            <template #default="scope">
              <el-input
                v-model="scope.row.columnName"
                :disabled="
                  scope.row.columnName == 'id' ||
                  scope.row.columnName == 'create_time' ||
                  scope.row.columnName == 'update_time' ||
                  scope.row.columnName == 'creator_id' ||
                  scope.row.columnName == 'updater_id' ||
                  scope.row.columnName == 'deleted'
                "
              />
            </template>
          </el-table-column>
          <el-table-column label="字段描述" min-width="10%">
            <template #default="scope">
              <el-input
                v-model="scope.row.columnComment"
                :disabled="
                  scope.row.columnName == 'id' ||
                  scope.row.columnName == 'create_time' ||
                  scope.row.columnName == 'update_time' ||
                  scope.row.columnName == 'creator_id' ||
                  scope.row.columnName == 'updater_id' ||
                  scope.row.columnName == 'deleted'
                "
              />
            </template>
          </el-table-column>
          <el-table-column label="物理类型" min-width="10%">
            <template #default="scope">
              <el-select
                v-model="scope.row.dataType"
                allow-create
                filterable
                default-first-option
                :disabled="
                  scope.row.columnName == 'create_time' ||
                  scope.row.columnName == 'update_time' ||
                  scope.row.columnName == 'creator_id' ||
                  scope.row.columnName == 'updater_id' ||
                  scope.row.columnName == 'deleted'
                "
                @change="dataTypeBlur(scope)"
              >
                <el-option value="BIGINT" leable="BIGINT" />
                <el-option value="INT" leable="INT" />
                <el-option value="TINYINT" leable="TINYINT" />
                <el-option value="VARCHAR(50)" leable="VARCHAR(50)" />
                <el-option value="VARCHAR(255)" leable="VARCHAR(255)" />
                <el-option value="VARCHAR(1024)" leable="VARCHAR(1024)" />
                <el-option value="DECIMAL(19,4)" leable="DECIMAL(19,4)" />
                <el-option value="DATETIME" leable="DATETIME" />
                <el-option value="TIMESTAMP" leable="TIMESTAMP" />
              </el-select>
            </template>
          </el-table-column>
          <el-table-column label="Java类型" min-width="11%">
            <template #default="scope">
              <el-select
                v-model="scope.row.javaType"
                :disabled="
                  scope.row.columnName == 'create_time' ||
                  scope.row.columnName == 'update_time' ||
                  scope.row.columnName == 'creator_id' ||
                  scope.row.columnName == 'updater_id' ||
                  scope.row.columnName == 'deleted'
                "
              >
                <el-option label="Long" value="Long" />
                <el-option label="String" value="String" />
                <el-option label="Integer" value="Integer" />
                <el-option label="Double" value="Double" />
                <el-option label="BigDecimal" value="BigDecimal" />
                <el-option label="LocalDateTime" value="LocalDateTime" />
                <el-option label="Boolean" value="Boolean" />
                <el-option label="List<Long>" value="List<Long>" />
                <el-option label="List<String>" value="List<String>" />
                <el-option label="Map<String, Object>" value="Map<String, Object>" />
                <el-option label="UUID" value="UUID" />
              </el-select>
            </template>
          </el-table-column>
          <el-table-column label="允许NULL" min-width="6%">
            <template #default="scope">
              <el-checkbox
                v-model="scope.row.nullable"
                :disabled="
                  scope.row.columnName == 'id' ||
                  scope.row.columnName == 'create_time' ||
                  scope.row.columnName == 'update_time' ||
                  scope.row.columnName == 'creator_id' ||
                  scope.row.columnName == 'updater_id' ||
                  scope.row.columnName == 'deleted'
                "
                false-value="false"
                true-value="true"
              />
            </template>
          </el-table-column>
          <el-table-column label="默认值" min-width="6%">
            <template #default="scope">
              <el-input
                v-model="scope.row.defaultValue"
                :disabled="
                  scope.row.columnName == 'id' ||
                  scope.row.columnName == 'create_time' ||
                  scope.row.columnName == 'update_time' ||
                  scope.row.columnName == 'creator_id' ||
                  scope.row.columnName == 'updater_id' ||
                  scope.row.columnName == 'deleted'
                "
              />
            </template>
          </el-table-column>
          <el-table-column label="关联表" min-width="12%">
            <template #default="scope">
              <el-select
                v-model="scope.row.relatedTable"
                filterable
                remote
                placeholder="输入表名搜索"
                remote-show-suffix
                :remote-method="getTableOptions"
              >
                <el-option
                  v-for="dict in tableOptions"
                  :key="dict.id"
                  :label="dict.name"
                  :value="dict.name"
                  :disabled="
                    scope.row.columnName == 'id' ||
                    scope.row.columnName == 'create_time' ||
                    scope.row.columnName == 'update_time' ||
                    scope.row.columnName == 'creator_id' ||
                    scope.row.columnName == 'updater_id' ||
                    scope.row.columnName == 'deleted'
                  "
                />
              </el-select>
            </template>
          </el-table-column>
          <el-table-column label="字典类型" min-width="12%">
            <template #default="scope">
              <el-select
                v-model="scope.row.dictType"
                clearable
                filterable
                placeholder="请选择"
                :disabled="
                  scope.row.columnName == 'id' ||
                  scope.row.columnName == 'create_time' ||
                  scope.row.columnName == 'update_time' ||
                  scope.row.columnName == 'creator_id' ||
                  scope.row.columnName == 'updater_id' ||
                  scope.row.columnName == 'deleted'
                "
              >
                <el-option
                  v-for="dict in dictOptions"
                  :key="dict.id"
                  :label="dict.name"
                  :value="dict.type"
                />
              </el-select>
            </template>
          </el-table-column>
          <el-table-column label="示例" min-width="10%">
            <template #default="scope">
              <el-input
                v-model="scope.row.example"
                :disabled="
                  scope.row.columnName == 'id' ||
                  scope.row.columnName == 'create_time' ||
                  scope.row.columnName == 'update_time' ||
                  scope.row.columnName == 'creator_id' ||
                  scope.row.columnName == 'updater_id' ||
                  scope.row.columnName == 'deleted'
                "
              />
            </template>
          </el-table-column>
          <el-table-column label="前端必传" min-width="6%">
            <template #default="scope">
              <el-checkbox
                v-model="scope.row.required"
                false-value="false"
                true-value="true"
                @change="clickRequired(scope)"
                :disabled="
                  scope.row.columnName == 'id' ||
                  scope.row.columnName == 'create_time' ||
                  scope.row.columnName == 'update_time' ||
                  scope.row.columnName == 'creator_id' ||
                  scope.row.columnName == 'updater_id' ||
                  scope.row.columnName == 'deleted'
                "
              />
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="表索引" name="index">
        <el-table
          :data="formData.indexes"
          height="700"
          highlight-current-row
          @current-change="handleCurrentIndexChange"
          :row-style="rowStyle"
        >
          <el-table-column label="索引类型" align="center" min-width="20%">
            <template #default="scope">
              <el-select v-model="scope.row.indexType">
                <el-option label="普通索引" value="INDEX" />
                <el-option label="唯一索引" value="UNIQUE INDEX" />
              </el-select>
            </template>
          </el-table-column>
          <el-table-column label="索引名称" align="center" min-width="40%">
            <template #default="scope">
              <el-input v-model="scope.row.indexName" />
            </template>
          </el-table-column>
          <el-table-column label="字段" align="center" min-width="40%">
            <template #default="scope">
              <el-select
                v-model="scope.row.columnNames"
                multiple
                placeholder="请选择"
                class="w-[420px]"
              >
                <el-option
                  v-for="column in formData.columns"
                  :key="column.id"
                  :label="column.columnName"
                  :value="column.columnName"
                />
              </el-select>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="表映射" name="mapping">
        <el-table
          :data="formData.mappings"
          height="700"
          highlight-current-row
          @current-change="handleCurrentMappingChange"
          :row-style="rowStyle"
        >
          <el-table-column label="名称" align="center" min-width="10%">
            <template #default="scope">
              <el-input v-model="scope.row.name" />
            </template>
          </el-table-column>
          <el-table-column label="是否是list" min-width="6%">
            <template #default="scope">
              <el-checkbox v-model="scope.row.isList" false-value="false" true-value="true" />
            </template>
          </el-table-column>
          <el-table-column label="映射表" min-width="20%">
            <template #default="scope">
              <el-select
                v-model="scope.row.mappingTable"
                filterable
                remote
                placeholder="输入表名搜索"
                remote-show-suffix
                :remote-method="getTableOptions"
              >
                <el-option
                  v-for="dict in tableOptions"
                  :key="dict.id"
                  :label="dict.name"
                  :value="dict.name"
                />
              </el-select>
            </template>
          </el-table-column>
          <el-table-column label="注解" align="center" min-width="20%">
            <template #default="scope">
              <el-input v-model="scope.row.annotate" />
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </Dialog>
</template>
<script lang="ts" name="InfraCodegenDatabaseTableEdit" setup>
import * as DictApi from '@/api/infra/data/dict'
import * as CodegenApi from '@/api/infra/codegen'
import { ElTable } from 'element-plus'
const message = useMessage() // 消息弹窗

const formRef = ref() // 表单 Ref
const dialogVisible = ref(false) // 弹窗的是否展示
const formData = ref<CodegenApi.DatabaseTableVO>({
  id: '0',
  name: '',
  comment: '',
  firstModule: '',
  secondModule: '',
  remark: '',
  columns: [],
  indexes: [],
  mappings: []
})
const rules = reactive({
  name: [{ required: true, message: '表名称不能为空', trigger: 'blur' }],
  comment: [{ required: true, message: '表描述不能为空', trigger: 'blur' }],
  firstModule: [{ required: true, message: '一级模块不能为空', trigger: 'blur' }],
  secondModule: [{ required: true, message: '二级模块不能为空', trigger: 'blur' }]
})

const columnCurrentRow = ref()

const validationCurrentRow = ref({})

const indexCurrentRow = ref()

const mappingCurrentRow = ref()

const columnTable = ref<InstanceType<typeof ElTable>>()

const tabActiveName = ref('column')

var columnSort = 1

var tableId = ''

const formType = ref('') // 表单的类型：create - 新增；update - 修改

const tableOptions = ref<CodegenApi.DatabaseTableVO[]>([])

const dictOptions = ref<DictApi.DictTypeVO[]>()

const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用

/** 打开弹窗 */
const open = async (type: string, id?: string) => {
  resetForm()
  formType.value = type
  if (id) {
    formLoading.value = true
    try {
      tableId = id
      const data = await CodegenApi.getDatabaseTable(id)
      formData.value = data
      data.columns.forEach((item: CodegenApi.DatabaseColumnVO) => {
        if (columnSort < item.sort && item.sort < 1000) columnSort = item.sort
      })
      columnSort++
    } finally {
      formLoading.value = false
    }
  } else {
    tableId = crypto.randomUUID()
    formData.value = {
      id: tableId,
      name: '',
      comment: '',
      firstModule: '',
      secondModule: '',
      remark: '',
      columns: [
        {
          id: crypto.randomUUID(),
          tableId: tableId,
          columnName: 'id',
          dataType: 'BIGINT',
          columnComment: '主键ID',
          nullable: 0,
          defaultValue: '',
          javaType: 'Long',
          dictType: '',
          example: '',
          relatedTable: '',
          required: 0,
          operateType: '',
          sort: 0,
          validations: []
        },
        {
          id: crypto.randomUUID(),
          tableId: tableId,
          columnName: 'create_time',
          dataType: 'TIMESTAMP',
          columnComment: '创建时间',
          nullable: 0,
          defaultValue: 'CURRENT_TIMESTAMP',
          javaType: 'LocalDateTime',
          dictType: '',
          example: '',
          relatedTable: '',
          required: 0,
          operateType: '',
          sort: 1000,
          validations: []
        },
        {
          id: crypto.randomUUID(),
          tableId: tableId,
          columnName: 'update_time',
          dataType: 'TIMESTAMP',
          columnComment: '更新时间',
          nullable: 0,
          defaultValue: 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
          javaType: 'LocalDateTime',
          dictType: '',
          example: '',
          relatedTable: '',
          required: 0,
          operateType: '',
          sort: 1001,
          validations: []
        },
        {
          id: crypto.randomUUID(),
          tableId: tableId,
          columnName: 'creator_id',
          dataType: 'BIGINT',
          columnComment: '创建人ID',
          nullable: 0,
          defaultValue: '0',
          javaType: 'Long',
          dictType: '',
          example: '',
          relatedTable: '',
          required: 0,
          operateType: '',
          sort: 1002,
          validations: []
        },
        {
          id: crypto.randomUUID(),
          tableId: tableId,
          columnName: 'updater_id',
          dataType: 'BIGINT',
          columnComment: '修改人ID',
          nullable: 0,
          defaultValue: '0',
          javaType: 'Long',
          dictType: '',
          example: '',
          relatedTable: '',
          required: 0,
          operateType: '',
          sort: 1003,
          validations: []
        },
        {
          id: crypto.randomUUID(),
          tableId: tableId,
          columnName: 'deleted',
          dataType: 'TINYINT(4)',
          columnComment: '是否删除',
          nullable: 0,
          defaultValue: '0',
          javaType: 'boolean',
          dictType: '',
          example: '',
          relatedTable: '',
          required: 0,
          operateType: '',
          sort: 1004,
          validations: []
        }
      ],
      indexes: [],
      mappings: []
    }
  }
  await getDictOptions()
  await getTableOptions('')
}
defineExpose({ open }) // 提供 open 方法，用于打开弹窗
const clickRequired = (scope) => {
  let validation = ''
  if (scope.row.javaType == 'String') {
    validation = 'NotBlank'
  } else if (
    scope.row.javaType == 'List<Long>' ||
    scope.row.javaType == 'List<String>' ||
    scope.row.javaType == 'Map<String, Object>'
  ) {
    validation = 'NotEmpty'
  } else if (
    scope.row.javaType == 'Long' ||
    scope.row.javaType == 'Integer' ||
    scope.row.javaType == 'Double' ||
    scope.row.javaType == 'BigDecimal' ||
    scope.row.javaType == 'LocalDateTime'
  ) {
    validation = 'NotNull'
  } else {
    return
  }
  if (scope.row.required == 'true') {
    let isExists = false
    if (scope.row.validations != undefined) {
      scope.row.validations.forEach((element) => {
        if (element.validation == validation) {
          isExists = true
        }
      })
    }
    if (!isExists) {
      const newValidation = {
        id: crypto.randomUUID(),
        parentId: scope.row.id,
        validation: validation,
        validationCondition: '',
        message: scope.row.columnComment + '不能为空',
        operateType: 'new'
      }
      columnTable.value?.toggleRowExpansion(scope.row, true)
      if (scope.row.validations == undefined) scope.row.value.validations = [newValidation]
      else scope.row.validations.push(newValidation)
    }
  } else {
    let index = -1
    if (scope.row.validations != undefined) {
      let tmpIndex = 0
      scope.row.validations.forEach((element) => {
        if (element.validation == validation) {
          index = tmpIndex
        }
        tmpIndex++
      })
      if (index > -1) {
        if (formType.value === 'create') {
          scope.row.validations.splice(index, 1)
        } else {
          scope.row.validations[index].operateType = 'delete'
        }
      }
    }
  }
}
const autoAddValidation = (scope, fieldLength, validation, tip, validationCondition) => {
  let isExists = false
  if (scope.row.validations != undefined) {
    scope.row.validations.forEach((element) => {
      if (element.validation == validation) {
        isExists = true
        element.validationCondition = validationCondition
        element.message = scope.row.columnComment + tip + fieldLength
      }
    })
  }
  if (isExists) {
    columnTable.value?.toggleRowExpansion(scope.row, true)
  } else {
    const newValidation = {
      id: crypto.randomUUID(),
      parentId: scope.row.id,
      validation: validation,
      validationCondition: validationCondition,
      message: scope.row.columnComment + tip + fieldLength,
      operateType: 'new'
    }
    if (scope.row.validations == undefined) scope.row.validations = [newValidation]
    else scope.row.validations.push(newValidation)
  }
}

const dataTypeBlur = (scope) => {
  scope.row.dataType = scope.row.dataType.toUpperCase().trim()
  if (scope.row.dataType.includes('CHAR') || scope.row.dataType.includes('TEXT')) {
    scope.row.javaType = 'String'
    scope.row.defaultValue = "''"
    if (
      scope.row.dataType.includes('(') &&
      scope.row.dataType.includes(')') &&
      scope.row.dataType.indexOf('(') < scope.row.dataType.indexOf(')')
    ) {
      let fieldLength = scope.row.dataType.substring(
        scope.row.dataType.indexOf('(') + 1,
        scope.row.dataType.indexOf(')')
      )
      let validation = 'Size'
      autoAddValidation(scope, fieldLength, validation, '长度不能超过', 'max = ' + fieldLength)
    }
  } else if (scope.row.dataType.includes('TINYINT')) {
    scope.row.javaType = 'Integer'
    scope.row.defaultValue = 0
    autoAddValidation(scope, '127', 'Range', '最大不能超过', 'max = 127')
  } else if (scope.row.dataType.includes('BIGINT')) {
    scope.row.javaType = 'Long'
    scope.row.defaultValue = 0
  } else if (scope.row.dataType.includes('INT')) {
    scope.row.javaType = 'Integer'
    scope.row.defaultValue = 0
    autoAddValidation(scope, '100000000', 'Range', '最大不能超过', 'max = 100000000')
  } else if (scope.row.dataType.includes('FLOAT')) {
    scope.row.javaType = 'Long'
    scope.row.defaultValue = 0
  } else if (scope.row.dataType.includes('DOUBLE')) {
    scope.row.javaType = 'Double'
    scope.row.defaultValue = 0
  } else if (scope.row.dataType.includes('DECIMAL')) {
    scope.row.javaType = 'BigDecimal'
    scope.row.defaultValue = 0
    autoAddValidation(scope, '10000000000', 'DecimalMax', '最大不能超过', 'value = "10000000000"')
  } else if (scope.row.dataType.includes('DATE') || scope.row.dataType.includes('TIME'))
    scope.row.javaType = 'LocalDateTime'
}

const rowStyle = ({ row }) => {
  if (row?.operateType == 'delete') {
    return { display: 'none' }
  } else return {}
}

const handleCurrentColumnChange = (row: CodegenApi.DatabaseColumnVO | undefined) => {
  columnCurrentRow.value = row
}

const handleCurrentValidationChange = (
  row: CodegenApi.InterfaceValidationVO | undefined,
  scope
) => {
  validationCurrentRow.value['row'] = row
  validationCurrentRow.value['parent'] = scope
}

const handleCurrentIndexChange = (row: CodegenApi.DatabaseIndexVO | undefined) => {
  indexCurrentRow.value = row
}

const handleCurrentMappingChange = (row: CodegenApi.DatabaseMappingVO | undefined) => {
  mappingCurrentRow.value = row
}

/** 关闭弹窗 */
const close = async () => {
  dialogVisible.value = false
}

/** 查询字典下拉列表 */
const getDictOptions = async () => {
  dictOptions.value = await DictApi.getSimpleDictTypeList()
}

const getTableOptions = async (name: string) => {
  tableOptions.value = await CodegenApi.getDatabaseTableName(name)
}

/** 添加字段列 */
const handleAddColumn = async () => {
  tabActiveName.value = 'column'
  const newColumn = {
    id: crypto.randomUUID(),
    tableId: tableId,
    columnName: '',
    dataType: '',
    columnComment: '',
    nullable: 0,
    defaultValue: '',
    javaType: '',
    dictType: '',
    example: '',
    relatedTable: '',
    required: 0,
    operateType: 'new',
    sort: columnSort++,
    validations: []
  }
  formData.value.columns.splice(-5, 0, newColumn)
}

/** 删除字段列 */
const handleDeleteColumn = async () => {
  tabActiveName.value = 'column'
  if (columnCurrentRow.value === undefined) {
    message.alertError('请选择要删除的字段')
    return
  }
  const columnName = columnCurrentRow.value['columnName']
  if (
    columnName == 'id' ||
    columnName == 'create_time' ||
    columnName == 'update_time' ||
    columnName == 'creator_id' ||
    columnName == 'updater_id' ||
    columnName == 'deleted'
  ) {
    message.alertError('内置字段不可删除')
    return
  }
  if (formType.value === 'create') {
    const index = formData.value.columns.indexOf(columnCurrentRow.value)
    formData.value.columns.splice(index, 1)
  } else {
    columnCurrentRow.value.operateType = 'delete'
  }
}

/** 添加校验列 */
const handleAddValidation = async () => {
  tabActiveName.value = 'column'
  if (columnCurrentRow.value === undefined) {
    message.alertError('请先选择字段')
    return
  }
  const newValidation = {
    id: crypto.randomUUID(),
    parentId: columnCurrentRow.value.id,
    validation: '',
    validationCondition: '',
    message: '',
    operateType: 'new'
  }
  columnTable.value?.toggleRowExpansion(columnCurrentRow.value, true)
  if (columnCurrentRow.value.validations == undefined)
    columnCurrentRow.value.validations = [newValidation]
  else columnCurrentRow.value.validations.push(newValidation)
}

/** 删除校验列 */
const handleDeleteValidation = async () => {
  tabActiveName.value = 'column'
  if (validationCurrentRow.value === undefined) {
    message.alertError('请选择要删除的校验列')
    return
  }
  if (formType.value === 'create') {
    const index = validationCurrentRow.value['parent'].row.validations.indexOf(
      validationCurrentRow.value['row']
    )
    if (index > -1) validationCurrentRow.value['parent'].row.validations.splice(index, 1)
  } else {
    validationCurrentRow.value['row'].operateType = 'delete'
  }
}

/** 添加索引 */
const handleAddIndex = async () => {
  tabActiveName.value = 'index'
  const newIndex = {
    id: crypto.randomUUID(),
    tableId: tableId,
    indexType: '',
    indexName: '',
    columnNames: '',
    operateType: 'new'
  }
  formData.value.indexes.push(newIndex)
}

/** 删除索引 */
const handleDeleteIndex = async () => {
  tabActiveName.value = 'index'
  if (indexCurrentRow.value === undefined) {
    message.alertError('请选择要删除的索引')
    return
  }
  if (formType.value === 'create') {
    const index = formData.value.indexes.indexOf(indexCurrentRow.value)
    formData.value.indexes.splice(index, 1)
  } else {
    indexCurrentRow.value.operateType = 'delete'
  }
}

/** 添加映射 */
const handleAddMapping = async () => {
  tabActiveName.value = 'mapping'
  const newMapping = {
    id: crypto.randomUUID(),
    tableId: tableId,
    name: '',
    isList: 0,
    annotate: '',
    mappingTable: '',
    operateType: 'new'
  }
  formData.value.mappings.push(newMapping)
}

/** 删除映射 */
const handleDeleteMapping = async () => {
  tabActiveName.value = 'mapping'
  if (mappingCurrentRow.value === undefined) {
    message.alertError('请选择要删除的索引')
    return
  }
  if (formType.value === 'create') {
    const index = formData.value.mappings.indexOf(mappingCurrentRow.value)
    formData.value.mappings.splice(index, 1)
  } else {
    mappingCurrentRow.value.operateType = 'delete'
  }
}

/** 保存列 */
const handleSaveTable = async () => {
  // 校验表单
  if (!formRef) return
  const valid = await formRef.value.validate()
  if (!valid) return
  for (let i = 0; i < formData.value.columns.length; i++) {
    if (
      formData.value.columns[i].dataType == '' &&
      formData.value.columns[i].operateType != 'delete'
    ) {
      message.alertError(formData.value.columns[i].columnName + '没有选择物理类型')
      return
    }
  }
  if (formType.value === 'create') {
    const databaseData = formData.value as unknown as CodegenApi.DatabaseTableVO
    await CodegenApi.createDatabaseTable(databaseData)
    message.success('保存成功')
  } else {
    const databaseData = formData.value as unknown as CodegenApi.DatabaseTableVO
    await CodegenApi.updateDatabaseTable(databaseData)
    message.success('修改成功')
  }
  emit('success')
  close()
}
const emit = defineEmits(['success'])

/** 重置表单 */
const resetForm = () => {
  dialogVisible.value = true
  columnSort = 1
  tabActiveName.value = 'column'
}
</script>
