/**
 * 配置浏览器本地存储的方式，可直接存储对象数组。
 */

import WebStorageCache from 'web-storage-cache'

type CacheType = 'localStorage' | 'sessionStorage'

export const CACHE_KEY = {
  IS_DARK: 'isDark',
  USER: 'user',
  LANG: 'lang',
  THEME: 'theme',
  LAYOUT: 'layout',
  ROLE_ROUTERS: 'roleRouters',
  DICT_CACHE: 'dictCache',
  TABLE_CACHE: 'tableCache',
  ACCESS_TOKEN_KEY: 'access_token_key',
  REFRESH_TOKEN_KEY: 'refresh_token_key',
  ACCOUNT_INFO: 'account_info',
  ACCOUNT_VERSION: 'account_version',
  SERVER_BASE_URL: 'server_base_url',
  SERVER_HTTP_URL: 'server_http_url',
  SERVER_WS_URL: 'server_ws_url',
  SERVER_UPLOAD_FILE_URL: 'server_upload_file_url'
}

export const useCache = (type: CacheType = 'localStorage') => {
  const wsCache: WebStorageCache = new WebStorageCache({
    storage: type
  })

  return {
    wsCache
  }
}
