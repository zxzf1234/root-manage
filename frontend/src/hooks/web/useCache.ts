/**
 * 配置浏览器本地存储的方式，可直接存储对象数组。
 */

import WebStorageCache from 'web-storage-cache'

type CacheType = 'localStorage' | 'sessionStorage'

const keys = [
  'NOTICE_UNREAD_INFO',
  'IS_DARK',
  'USER',
  'LANG',
  'THEME',
  'LAYOUT',
  'ROLE_ROUTERS',
  'DICT_CACHE',
  'TABLE_CACHE',
  'ACCESS_TOKEN_KEY',
  'REFRESH_TOKEN_KEY',
  'ACCOUNT_INFO',
  'ACCOUNT_VERSION',
  'SERVER_BASE_URL',
  'SERVER_HTTP_URL',
  'SERVER_WS_URL'
] as const

export const CACHE_KEY = Object.fromEntries(
  keys.map((key) => [key, `${import.meta.env.VITE_APP_NO}-${key.toLowerCase()}`])
) as { readonly [K in (typeof keys)[number]]: string }

export const useCache = (type: CacheType = 'localStorage') => {
  const wsCache: WebStorageCache = new WebStorageCache({
    storage: type
  })

  return {
    wsCache
  }
}
