<template>
  <elForm
    v-show="getShow"
    :rules="rules"
    class="dark:(border-1 border-[var(--el-border-color)] border-solid)"
    hide-required-asterisk
    label-position="top"
    size="large"
    ref="formRef"
  >
    <LoginFormTitle v-model="formData.title" />
    <el-form-item label="用户名" prop="userName">
      <el-input v-model="formData.userName" placeholder="请输入用户名" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <InputPassword v-model="formData.password" placeholder="请输入密码" />
    </el-form-item>
    <el-form-item label="确认密码" prop="password">
      <InputPassword v-model="formData.password" placeholder="请输入密码" />
    </el-form-item>
    <el-form-item label="验证码" prop="code">
      <el-input v-model="formData.code" placeholder="请输入验证码" />
    </el-form-item>

    <div class="w-[100%]">
      <XButton
        :loading="loading"
        :title="t('login.register')"
        class="w-[100%]"
        type="primary"
        @click="loginRegister()"
      />
    </div>
    <div class="w-[100%] mt-15px">
      <XButton :title="t('login.hasUser')" class="w-[100%]" @click="handleBackLogin()" />
    </div>
  </elForm>
</template>
<script lang="ts" name="RegisterForm" setup>
import type { FormRules } from 'element-plus'

import { useValidator } from '@/hooks/web/useValidator'
import LoginFormTitle from './LoginFormTitle.vue'
import { LoginStateEnum, useLoginState } from './useLogin'

const { t } = useI18n()
const { required } = useValidator()
const formRef = ref()

const { handleBackLogin, getLoginState } = useLoginState()
const getShow = computed(() => unref(getLoginState) === LoginStateEnum.REGISTER)
const formData = ref({
  title: '',
  userName: '',
  password: '',
  checkPassword: '',
  code: ''
})

const rules: FormRules = {
  username: [required()],
  password: [required()],
  check_password: [required()],
  code: [required()]
}

const loading = ref(false)

const loginRegister = async () => {
  // formRef?.validate(async (valid) => {
  //   if (valid) {
  //     try {
  //       loading.value = true
  //     } finally {
  //       loading.value = false
  //     }
  //   }
  // })
}
</script>
