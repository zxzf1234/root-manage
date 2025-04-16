import request from '@/config/axios'
/**
 * 查询国家
 */
export const countryList = () => {
  return request.get({ url: '/infra/data/area/country-list' })
}

/**
 * 根据国家ID查询省份
 */
export const provinceListByCountryId = (id) => {
  return request.get({ url: '/infra/data/area/province-list-by-country-id?id=' + id })
}

/**
 * 根据省份ID查询城市
 */
export const cityListByProvinceId = (id) => {
  return request.get({ url: '/infra/data/area/city-list-by-province-id?id=' + id })
}

/**
 * 根据城市ID查询区
 */
export const districtListByCityId = (id) => {
  return request.get({ url: '/infra/data/area/district-list-by-city-id?id=' + id })
}
