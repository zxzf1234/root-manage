import request from '@/config/axios'

// 查询菜单（精简）列表
export const getSimpleMenusList = () => {
  return request.get({ url: '/infra/data/menu/list-all-simple' })
}

// 查询菜单列表
export const getMenuList = (params) => {
  return request.get({ url: '/infra/data/menu/list', params })
}

// 获取菜单详情
export const getMenu = (id: string) => {
  return request.get({ url: '/infra/data/menu/get?id=' + id })
}

// 新增菜单
export const createMenu = (data) => {
  return request.post({ url: '/infra/data/menu/create', data })
}

// 修改菜单
export const updateMenu = (data) => {
  return request.put({ url: '/infra/data/menu/update', data })
}

// 删除菜单
export const deleteMenu = (id: string) => {
  return request.delete({ url: '/infra/data/menu/delete?id=' + id })
}
