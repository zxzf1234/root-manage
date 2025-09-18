<template>
  <ContentWrap>
    <IFrame v-if="!loading" v-loading="loading" :src="src" />
  </ContentWrap>
</template>
<script setup lang="ts" name="InfraSwagger">
import * as ConfigApi from '@/api/infra/data/config'
import { useCache, CACHE_KEY } from '@/hooks/web/useCache'
const { wsCache } = useCache()

const loading = ref(true) // 是否加载中
const src = ref(
  wsCache.get(CACHE_KEY.SERVER_BASE_URL) +
    '/' +
    import.meta.env.VITE_APP_NO +
    '-server/swagger-ui/index.html'
)

/** 初始化 */
onMounted(async () => {
  try {
    const data = await ConfigApi.getValueByKey('url.swagger')
    if (data && data.length > 0) {
      src.value = data
    }
  } finally {
    loading.value = false
  }
})
</script>
