import request from '@/utils/request'
// 区域列表
export function getRegionList(params) {
  return request({ url: '/api/vm-service/region/search', method: 'GET', params })
}
// 新增区域
export function getAddArea(data) {
  return request({ url: '/api/vm-service/region', method: 'POST', data })
}
// 点位搜索
export function getPioneSearch(params) {
  return request({ url: '/api/vm-service/node/search', method: 'GET', params })
}
// 修改区域
export function getAmendArea(id, data) {
  return request({ url: `/api/vm-service/region/${id}`, method: 'PUT', data })
}
// 删除区域
export function getDeletaArea(id) {
  return request({ url: `/api/vm-service/region/${id}`, method: 'DELETE' })
}
