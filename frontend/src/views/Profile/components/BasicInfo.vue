<template>
  <el-form ref="formRef" :labelWidth="80" :rules="rules">
    <el-form-item label="用户昵称" prop="nickname">
      <el-input v-model="formData.nickname" placeholder="请输入用户昵称" />
    </el-form-item>
    <el-form-item label="手机号码" prop="mobile">
      <el-input v-model="formData.mobile" maxlength="11" placeholder="请输入手机号码" />
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="formData.email" maxlength="50" placeholder="请输入邮箱" />
    </el-form-item>
    <el-form-item label="性别">
      <el-radio-group v-model="formData.sex">
        <el-radio :value="1">{{ t('profile.user.man') }}</el-radio>
        <el-radio :value="2">{{ t('profile.user.woman') }}</el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>
  <XButton :title="t('common.save')" @click="submit()" />
  <XButton :title="t('common.reset')" type="danger" @click="init()" />
</template>
<script lang="ts" name="BasicInfo" setup>
import type { FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'

import {
  getUserProfile,
  updateUserProfile,
  UserProfileUpdateReqVO
} from '@/api/system/user/profile'

const { t } = useI18n()
// 表单校验
const rules = reactive<FormRules>({
  nickname: [{ required: true, message: t('profile.rules.nickname'), trigger: 'blur' }],
  email: [
    { required: true, message: t('profile.rules.mail'), trigger: 'blur' },
    {
      type: 'email',
      message: t('profile.rules.truemail'),
      trigger: ['blur', 'change']
    }
  ],
  mobile: [
    { required: true, message: t('profile.rules.phone'), trigger: 'blur' },
    {
      pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/,
      message: t('profile.rules.truephone'),
      trigger: 'blur'
    }
  ]
})
const formData = ref({
  id: undefined,
  nickname: '',
  mobile: '',
  email: '',
  sex: undefined
})
const formRef = ref<>() // 表单 Ref
const submit = () => {
  const elForm = unref(formRef)?.getElFormRef()
  if (!elForm) return
  elForm.validate(async (valid) => {
    if (valid) {
      const data = unref(formRef)?.formModel as UserProfileUpdateReqVO
      await updateUserProfile(data)
      ElMessage.success(t('common.updateSuccess'))
      await init()
    }
  })
}
const init = async () => {
  formData.value = await getUserProfile()
}
onMounted(async () => {
  await init()
})
</script>
