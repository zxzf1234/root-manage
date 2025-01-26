import { useCache, CACHE_KEY } from '@/hooks/web/useCache'
import { TokenType } from '@/api/login/types'
import { decrypt, encrypt } from '@/utils/jsencrypt'

const { wsCache } = useCache()

interface cacheTokenModel extends TokenType {
  accountVersion: string
}

// 获取token
export const getAccessToken = () => {
  // 此处与TokenKey相同，此写法解决初始化时Cookies中不存在TokenKey报错
  return wsCache.get(CACHE_KEY.ACCESS_TOKEN_KEY)
}

// 刷新token
export const getRefreshToken = () => {
  return wsCache.get(CACHE_KEY.REFRESH_TOKEN_KEY)
}

// 设置token
export const setToken = (token: cacheTokenModel) => {
  wsCache.set(CACHE_KEY.ACCESS_TOKEN_KEY, token.accessToken)
  wsCache.set(CACHE_KEY.REFRESH_TOKEN_KEY, token.refreshToken)
  wsCache.set(CACHE_KEY.ACCOUNT_VERSION, token.accountVersion)
}

// 删除token
export const removeToken = () => {
  wsCache.delete(CACHE_KEY.ACCESS_TOKEN_KEY)
  wsCache.delete(CACHE_KEY.REFRESH_TOKEN_KEY)
  wsCache.delete(CACHE_KEY.ACCOUNT_VERSION)
}

// 设置卖家账号名称
export const setAccountInfo = (accountInfo) => {
  wsCache.set(CACHE_KEY.ACCOUNT_INFO, accountInfo)
}

// 获取卖家账号名称
export const getAccountInfo = () => {
  return wsCache.get(CACHE_KEY.ACCOUNT_INFO) ? wsCache.get(CACHE_KEY.ACCOUNT_INFO) : null
}

export const setServerUrl = (url, port) => {
  wsCache.set(CACHE_KEY.SERVER_BASE_URL, 'http://' + url + ':' + port)
  wsCache.set(
    CACHE_KEY.SERVER_HTTP_URL,
    'http://' + url + ':' + port + '/' + import.meta.env.VITE_APP_NO + '-server/admin-api'
  )
  wsCache.set(CACHE_KEY.SERVER_WS_URL, 'ws://' + url + ':' + port)
  wsCache.set(
    CACHE_KEY.SERVER_UPLOAD_FILE_URL,
    'http://' +
      url +
      ':' +
      port +
      '/' +
      import.meta.env.VITE_APP_NO +
      '-server//admin-api/infra/file/upload'
  )
}

/** 格式化token（jwt格式） */
export const formatToken = (token: string): string => {
  return 'Bearer ' + token
}
// ========== 账号相关 ==========

const LoginFormKey = 'LOGINFORM'

export type LoginFormType = {
  username: string
  password: string
  accountNo: string
  rememberMe: boolean
}

export const getLoginForm = () => {
  const loginForm: LoginFormType = wsCache.get(LoginFormKey)
  if (loginForm) {
    loginForm.password = decrypt(loginForm.password) as string
  }
  return loginForm
}

export const setLoginForm = (loginForm: LoginFormType) => {
  loginForm.password = encrypt(loginForm.password) as string
  wsCache.set(LoginFormKey, loginForm, { exp: 30 * 24 * 60 * 60 })
}

export const removeLoginForm = () => {
  wsCache.delete(LoginFormKey)
}
