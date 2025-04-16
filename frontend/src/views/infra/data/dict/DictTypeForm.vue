<template>
  <Dialog v-model="dialogVisible" :title="dialogTitle" width="1000px">
    <el-form>
      <el-form-item>
        <el-button type="primary" @click="submitForm"> 保存 </el-button>
        <el-button @click="dialogVisible = false">关闭</el-button>
        <el-button @click="handleAddData">添加字典数据</el-button>
        <el-button @click="handleDeleteData">删除字典数据</el-button>
      </el-form-item>
    </el-form>
    <el-form
      ref="formRef"
      v-loading="formLoading"
      :model="formData"
      :rules="formRules"
      label-width="80px"
    >
      <el-row>
        <el-col :span="12">
          <el-form-item label="字典类型" prop="type">
            <el-input
              v-model="formData.type"
              placeholder="请输入字典类型"
              @keyup="formData.type = formData.type.replace(/[^a-z_]/g, '')"
            />
          </el-form-item>
          <el-col :span="12">
            <el-form-item label="字典名称" prop="name">
              <el-input v-model="formData.name" placeholder="请输入字典名称" />
            </el-form-item>
          </el-col>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="状态" prop="status">
            <el-radio-group v-model="formData.status">
              <el-radio
                v-for="dict in getIntDictOptions(DICT_TYPE.COMMON_STATUS)"
                :key="dict.value"
                :value="dict.value"
              >
                {{ dict.label }}
              </el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="一级模块" prop="firstModule">
            <el-input v-model="formData.firstModule" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="二级模块" prop="secondModule">
            <el-input v-model="formData.secondModule" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item label="备注" prop="remark">
        <el-input v-model="formData.remark" placeholder="请输入内容" type="textarea" />
      </el-form-item>
    </el-form>
    <Table
      :columns="dataColumns"
      :data="formData.datas"
      @row-click="handleCurrentDataChange"
      :row-style="rowStyle"
    >
      <template #label="{ row }">
        <el-input v-model="row.label" />
      </template>
      <template #value="{ row }">
        <el-input v-model="row.value" />
      </template>
      <template #dataEnum="{ row }">
        <el-input
          v-model="row.dataEnum"
          @blur="row.dataEnum = row.dataEnum.toUpperCase()"
          @keyup="row.dataEnum = row.dataEnum.replace(/[^a-zA-Z_]/g, '')"
        />
      </template>
      <template #sort="{ row }">
        <el-input-number v-model="row.sort" :min="0" />
      </template>
      <template #colorType="{ row }">
        <el-select v-model="row.colorType">
          <el-option
            v-for="item in colorTypeOptions"
            :key="item.value"
            :label="item.label + '(' + item.value + ')'"
            :value="item.value"
          />
        </el-select>
      </template>
      <template #cssClass="{ row }">
        <el-input v-model="row.cssClass" type="textarea" />
      </template>
      <template #remark="{ row }">
        <el-input v-model="row.remark" type="textarea" />
      </template>
    </Table>
  </Dialog>
</template>
<script lang="ts" name="InfraDictTypeForm" setup>
import { DICT_TYPE, getIntDictOptions } from '@/utils/dict'
import * as DictTypeApi from '@/api/infra/data/dictType'
import { CommonStatusEnum } from '@/utils/constants'

const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗
const dataCurrentRow = ref()
// 数据标签回显样式
const colorTypeOptions = readonly([
  {
    value: 'default',
    label: '默认'
  },
  {
    value: 'primary',
    label: '主要'
  },
  {
    value: 'success',
    label: '成功'
  },
  {
    value: 'info',
    label: '信息'
  },
  {
    value: 'warning',
    label: '警告'
  },
  {
    value: 'danger',
    label: '危险'
  }
])
const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formType = ref('') // 表单的类型：create - 新增；update - 修改
const formData = ref<DictTypeApi.DictTypeVO>({
  id: '',
  name: '',
  type: '',
  status: CommonStatusEnum.ENABLE,
  remark: '',
  firstModule: '',
  secondModule: '',
  datas: []
})

const dataColumns: TableColumnList = [
  {
    label: '数据标签',
    prop: 'label',
    slot: 'label'
  },
  {
    label: '数据键值',
    prop: 'value',
    slot: 'value'
  },
  {
    label: '数据枚举',
    prop: 'dataEnum',
    slot: 'dataEnum'
  },
  {
    label: '排序',
    prop: 'sort',
    slot: 'sort',
    minWidth: '110%'
  },

  {
    label: '颜色类型',
    prop: 'colorType',
    slot: 'colorType'
  },
  {
    label: 'CSS Class',
    prop: 'cssClass',
    slot: 'cssClass'
  },
  {
    label: '备注',
    prop: 'remark',
    slot: 'remark'
  }
]
const formRules = reactive({
  name: [{ required: true, message: '字典名称不能为空', trigger: 'blur' }],
  type: [{ required: true, message: '字典类型不能为空', trigger: 'blur' }],
  firstModule: [{ required: true, message: '一级模块不能为空', trigger: 'blur' }],
  status: [{ required: true, message: '状态不能为空', trigger: 'change' }]
})
const formRef = ref() // 表单 Ref

/** 打开弹窗 */
const open = async (type: string, id?: string) => {
  dialogVisible.value = true
  dialogTitle.value = t('action.' + type)
  formType.value = type
  resetForm()
  // 修改时，设置数据
  if (id) {
    formLoading.value = true
    try {
      formData.value = await DictTypeApi.getDictType(id)
    } finally {
      formLoading.value = false
    }
  }
}
defineExpose({ open }) // 提供 open 方法，用于打开弹窗

const rowStyle = ({ row }) => {
  if (row?.operateType == 'delete') {
    return { display: 'none' }
  } else return {}
}

const handleAddData = () => {
  const data = {
    id: crypto.randomUUID(),
    sort: 0,
    label: '',
    value: '',
    status: 0,
    colorType: '',
    cssClass: '',
    remark: '',
    dataEnum: '',
    operateType: 'new',
    typeId: formData.value.id
  }

  formData.value.datas.push(data)
}

const handleCurrentDataChange = (row: DictTypeApi.DictDataVO | undefined) => {
  dataCurrentRow.value = row
}

const handleDeleteData = () => {
  if (dataCurrentRow.value === undefined) {
    message.alertError('请选择要删除的字典数据')
    return
  }
  if (formType.value === 'create') {
    const index = formData.value.datas.indexOf(dataCurrentRow.value)
    formData.value.datas.splice(index, 1)
  } else {
    dataCurrentRow.value.operateType = 'delete'
  }
}

/** 提交表单 */
const emit = defineEmits(['success']) // 定义 success 事件，用于操作成功后的回调
const submitForm = async () => {
  // 校验表单
  if (!formRef) return
  const valid = await formRef.value.validate()
  if (!valid) return
  // 提交请求
  formLoading.value = true
  try {
    const data = formData.value as unknown as DictTypeApi.DictTypeVO
    if (formType.value === 'create') {
      await DictTypeApi.createDictType(data)
      message.success(t('common.createSuccess'))
    } else {
      await DictTypeApi.updateDictType(data)
      message.success(t('common.updateSuccess'))
    }
    dialogVisible.value = false
    // 发送操作成功的事件
    emit('success')
  } finally {
    formLoading.value = false
  }
}

/** 重置表单 */
const resetForm = () => {
  formData.value = {
    id: '',
    type: '',
    name: '',
    firstModule: '',
    secondModule: '',
    status: CommonStatusEnum.ENABLE,
    remark: '',
    datas: []
  }
  formRef.value?.resetFields()
}
</script>
