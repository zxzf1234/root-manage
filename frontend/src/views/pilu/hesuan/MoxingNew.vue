<template>
  <Dialog v-model="dialogVisible" :title="dialogTitle" style="min-width: 500px">
    <el-form
      :model="formData"
      ref="formRef"
      :rules="formRules"
      vloading="formLoading"
      :inline="true"
      label-width="auto"
    >
      <el-form-item label="所属阶段" prop="ShuoShuJieDuan">
        <el-select v-model="formData.ShuoShuJieDuan" placeholder="请输入所属阶段">
          <el-option label="范围1" :value="1" />
        </el-select>
      </el-form-item>
      <el-form-item label="核算单元" prop="HeSuanDanYuan">
        <el-select v-model="formData.HeSuanDanYuan" placeholder="请选择核算单元">
          <el-option label="固定燃烧" :value="1" />
        </el-select>
      </el-form-item>
      <el-divider content-position="center">排放源</el-divider>

      <el-form-item label="排放源类型" prop="PaiFangYuanLeiXin">
        <el-select v-model="formData.PaiFangYuanLeiXin" placeholder="请选择排放源类型">
          <el-option label="能源活动/固定源燃烧活动" :value="1" />
          <el-option label="能源活动/移动源燃烧活动" :value="2" />
          <el-option label="固定燃烧" :value="3" />
        </el-select>
      </el-form-item>
      <el-form-item label="排放源名称" prop="PaiFangYuanName">
        <el-input
          v-model="formData.PaiFangYuanName"
          placeholder="请输入排放源名称"
          :clearable="true"
        />
      </el-form-item>
      <el-divider content-position="center">排放源描述</el-divider>
      <el-form-item label="燃料名称" prop="RanLiaoMingCheng">
        <el-input
          v-model="formData.RanLiaoMingCheng"
          placeholder="请输入燃料名称"
          :clearable="true"
        />
      </el-form-item>
      <el-form-item label="排放气体种类" prop="PiaFangQiTingZhongLei">
        <el-select v-model="formData.PiaFangQiTingZhongLei" placeholder="请选择排放气体种类">
          <el-option label="CO₂" :value="1" />
          <el-option label="CH₄" :value="2" />
          <el-option label="N₂O" :value="3" />
        </el-select>
      </el-form-item>
      <el-form-item label="GWP100（全球变暖潜势）" prop="QuanQiuBianNuan">
        <el-input v-model="formData.QuanQiuBianNuan" disabled="" :clearable="true" />
      </el-form-item>
      <el-divider content-position="center">核算方法</el-divider>
      <el-form-item label="计算方法" prop="JiSuanFangFang">
        <el-select v-model="formData.JiSuanFangFang" placeholder="请选择计算方法">
          <el-option label="实测法" :value="1" />
          <el-option label="排放因子法" :value="2" />
          <el-option label="质量平衡法" :value="3" />
        </el-select>
      </el-form-item>
      <div v-if="formData.JiSuanFangFang == 3">
        <el-divider content-position="center"> 质量平衡法 </el-divider>
        <el-form-item label="活动数据" style="font-weight: bold" prop="活动数据">
          <div style="width: 100em"> </div>
        </el-form-item>

        <el-form-item label="选择公式" prop="XuanZheGongShi">
          <el-select v-model="formData.XuanZheGongShi" placeholder="请选择选择公式">
            <el-option label="能耗*低位发热值（二级运算）" :value="1" />
            <el-option label="质量*距离*排放因子（二级运算）" :value="2" />
            <el-option label="百公里耗油量*行驶公里数/100*低位发热值（多级运算）" :value="3" />
          </el-select>
        </el-form-item>

        <div v-if="formData.XuanZheGongShi == 2">
          <el-form-item label="物料" style="font-weight: bold" prop="物料">
            <div style="width: 100em"> </div>
          </el-form-item>
          <el-form-item label="物品重量" prop="WuPingZhongLiang">
            <InputNumber
              v-model="formData.WuPingZhongLiang"
              placeholder="请输入物品重量"
              :clearable="true"
              type="decimal"
            />
          </el-form-item>
          <el-form-item label="单位" prop="DanWei">
            <el-select v-model="formData.DanWei" placeholder="请选择单位">
              <el-option label="T" :value="1" />
              <el-option label="KG" :value="2" />
            </el-select>
          </el-form-item>
          <el-form-item label="数据来源" prop="WuliaoShujJuLaiYuan">
            <el-select v-model="formData.WuliaoShujJuLaiYuan" placeholder="请选择数据来源">
              <el-option label="实测值" :value="1" />
              <el-option label="估计值" :value="2" />
              <el-option label="缺省值" :value="3" />
            </el-select>
          </el-form-item>
          <el-form-item label="不确定性" prop="WuliaoBuQueDingXing">
            <el-input
              v-model="formData.WuliaoBuQueDingXing"
              placeholder="请输入不确定性"
              :clearable="true"
            />
          </el-form-item>
          <el-form-item label="证明材料" prop="WuliaoZhengMingCaiLiao">
            <UploadFile
              v-model="formData.WuliaoZhengMingCaiLiao"
              :isShowTip="false"
              :drag="true"
              :limit="1"
            />
          </el-form-item>
          <el-form-item label="运输" style="font-weight: bold" prop="物料">
            <div style="width: 100em"> </div>
          </el-form-item>
          <el-form-item label="运输距离" prop="YunShuJuLi">
            <InputNumber
              v-model="formData.YunShuJuLi"
              placeholder="请输入物品重量"
              :clearable="true"
              type="decimal"
            />
          </el-form-item>
          <el-form-item label="单位" prop="YunShuDanWei">
            <el-select v-model="formData.YunShuDanWei" placeholder="请选择单位">
              <el-option label="KG" :value="2" />
            </el-select>
          </el-form-item>
          <el-form-item label="数据来源" prop="YunShuShujJuLaiYuan">
            <el-select v-model="formData.YunShuShujJuLaiYuan" placeholder="请选择数据来源">
              <el-option label="实测值" :value="1" />
              <el-option label="估计值" :value="2" />
              <el-option label="缺省值" :value="3" />
            </el-select>
          </el-form-item>
          <el-form-item label="不确定性" prop="YunShuBuQueDingXing">
            <el-input
              v-model="formData.YunShuBuQueDingXing"
              placeholder="请输入不确定性"
              :clearable="true"
            />
          </el-form-item>
          <el-form-item label="证明材料" prop="YunShuZhengMingCaiLiao">
            <UploadFile
              v-model="formData.YunShuZhengMingCaiLiao"
              :isShowTip="false"
              :drag="true"
              :limit="1"
            />
          </el-form-item>

          <el-form-item label="排放因子" style="font-weight: bold" prop="排放因子">
            <div style="width: 100em"> </div>
          </el-form-item>
          <el-form-item label="数据来源" prop="YinZiShuJuLaiYuan">
            <el-select v-model="formData.YinZiShuJuLaiYuan" placeholder="请选择数据来源">
              <el-option label="供应商数据" :value="1" />
              <el-option label="因子库" :value="2" />
              <el-option label="自定义" :value="1" />
            </el-select>
          </el-form-item>
          <el-form-item label="因子名称" prop="YinZiMingCheng">
            <el-input
              v-model="formData.YinZiMingCheng"
              placeholder="请输入因子名称"
              :clearable="true"
            />
            <el-button @click="handleAddYinZi"> 添加 </el-button>
          </el-form-item>
          <el-form-item label="数值" prop="YinZiShuZhi">
            <InputNumber v-model="formData.YinZiShuZhi" :clearable="true" type="decimal" />
          </el-form-item>
          <el-form-item label="单位" prop="YinZiDanWei">
            <el-input v-model="formData.YinZiDanWei" :clearable="true" />
          </el-form-item>

          <el-form-item label="数据类型" prop="YunShuShuJuLeiXing">
            <el-select v-model="formData.YunShuShuJuLeiXing" disabled="">
              <el-option label="实测数据" :value="1" />
              <el-option label="估计数据" :value="2" />
              <el-option label="过程数据" :value="3" />
            </el-select>
          </el-form-item>
          <el-form-item label="数值" prop="YunShuShuZhi">
            <el-input v-model="formData.YunShuShuZhi" placeholder="请输入数值" :clearable="true" />
          </el-form-item>
          <el-form-item label="单位" prop="单位">
            <el-input placeholder="请输入不确定性" :clearable="true" disabled>TJ</el-input>
          </el-form-item>
        </div>
      </div>
    </el-form>
    <template #footer>
      <el-button type="primary" :disabled="formLoading" @click="submitForm">确 定</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </template>
  </Dialog>
  <YinZiKu ref="yinziRef" @success="handleYinziSuccess" />
</template>
<script setup name="MoxingNew" lang="ts">
import YinZiKu from './YinZiKu.vue'
const dialogTitle = ref('')
const dialogVisible = ref(false)
const formRef = ref()
const yinziRef = ref()
const formLoading = ref(false)
const formData = ref({
  ShuoShuJieDuan: 1,
  HeSuanDanYuan: undefined,
  PaiFangYuanLeiXin: undefined,
  PaiFangYuanName: undefined,
  RanLiaoMingCheng: undefined,
  PiaFangQiTingZhongLei: undefined,
  QuanQiuBianNuan: undefined,
  JiSuanFangFang: 3,
  XuanZheGongShi: 2,
  WuPingZhongLiang: undefined,
  DanWei: undefined,
  WuliaoShujJuLaiYuan: undefined,
  WuliaoBuQueDingXing: undefined,
  WuliaoZhengMingCaiLiao: undefined,
  YunShuJuLi: undefined,
  YunShuDanWei: 2,
  YunShuShujJuLaiYuan: undefined,
  YunShuBuQueDingXing: undefined,
  YunShuZhengMingCaiLiao: undefined,
  YunShuShuJuLeiXing: undefined,
  YunShuShuZhi: undefined,
  YinZiShuJuLaiYuan: 2,
  YinZiMingCheng: undefined,
  YinZiShuZhi: undefined,
  YinZiDanWei: undefined
})
const formRules = reactive({})
/** 打开弹窗 */
const open = () => {
  dialogVisible.value = true
  dialogTitle.value = '新建'
  formData.value = {
    ShuoShuJieDuan: 1,
    HeSuanDanYuan: undefined,
    PaiFangYuanLeiXin: undefined,
    PaiFangYuanName: undefined,
    RanLiaoMingCheng: undefined,
    PiaFangQiTingZhongLei: undefined,
    QuanQiuBianNuan: undefined,
    JiSuanFangFang: 3,
    XuanZheGongShi: 2,
    WuPingZhongLiang: undefined,
    DanWei: undefined,
    WuliaoShujJuLaiYuan: undefined,
    WuliaoBuQueDingXing: undefined,
    WuliaoZhengMingCaiLiao: undefined,
    YunShuJuLi: undefined,
    YunShuDanWei: 2,
    YunShuShujJuLaiYuan: undefined,
    YunShuBuQueDingXing: undefined,
    YunShuZhengMingCaiLiao: undefined,
    YunShuShuJuLeiXing: undefined,
    YunShuShuZhi: undefined,
    YinZiShuJuLaiYuan: 2,
    YinZiMingCheng: undefined,
    YinZiShuZhi: undefined,
    YinZiDanWei: undefined
  }
}
defineExpose({ open }) // 提供 open 方法，用于打开弹窗

const emit = defineEmits(['success'])
/** 提交表单 */
const submitForm = () => {
  emit('success')
}

watch(
  () => formData.value.PiaFangQiTingZhongLei,
  (val) => {
    if (val == 1) {
      formData.value.QuanQiuBianNuan = 2
    } else if (val == 2) {
      formData.value.QuanQiuBianNuan = 44
    } else {
      formData.value.QuanQiuBianNuan = ''
    }
  }
)

watch(
  () => formData.value.WuliaoShujJuLaiYuan,
  (val) => {
    if (val == 1 && formData.value.YunShuShujJuLaiYuan == 1) {
      formData.value.YunShuShuJuLeiXing = 1
    } else if (val == 2 && formData.value.YunShuShujJuLaiYuan == 3) {
      formData.value.YunShuShuJuLeiXing = 2
    } else if (val == 1 && formData.value.YunShuShujJuLaiYuan == 3) {
      formData.value.YunShuShuJuLeiXing = 3
    } else {
      formData.value.YunShuShuJuLeiXing = undefined
    }
  }
)

watch(
  () => formData.value.YunShuShujJuLaiYuan,
  (val) => {
    if (formData.value.WuliaoShujJuLaiYuan == 1 && val == 1) {
      formData.value.YunShuShuJuLeiXing = 1
    } else if (formData.value.WuliaoShujJuLaiYuan == 2 && val == 3) {
      formData.value.YunShuShuJuLeiXing = 2
    } else if (formData.value.WuliaoShujJuLaiYuan == 1 && val == 3) {
      formData.value.YunShuShuJuLeiXing = 3
    } else {
      formData.value.YunShuShuJuLeiXing = undefined
    }
  }
)

const handleAddYinZi = () => {
  yinziRef.value.open()
}

const handleYinziSuccess = (type, yin) => {
  formData.value.YinZiMingCheng = type
  formData.value.YinZiShuZhi = yin
}

watch(
  () => formData.value.WuPingZhongLiang,
  (val) => {
    watchYunShuShuZhi(val, formData.value.YunShuJuLi, formData.value.YinZiShuZhi)
  }
)

watch(
  () => formData.value.YunShuJuLi,
  (val) => {
    watchYunShuShuZhi(formData.value.WuPingZhongLiang, val, formData.value.YinZiShuZhi)
  }
)

watch(
  () => formData.value.YinZiShuZhi,
  (val) => {
    watchYunShuShuZhi(formData.value.WuPingZhongLiang, formData.value.YunShuJuLi, val)
  }
)

const watchYunShuShuZhi = (WuPingZhongLiang, YunShuJuLi, YinZiShuZhi) => {
  if (
    WuPingZhongLiang == undefined ||
    formData.value.YunShuJuLi == undefined ||
    formData.value.YinZiShuZhi == undefined
  )
    formData.value.YunShuShuZhi = undefined
  formData.value.YunShuShuZhi = WuPingZhongLiang * YunShuJuLi * YinZiShuZhi
}
</script>
