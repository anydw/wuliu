import request from '@/utils/request'
// 搜索售货机(售货机列表)
export function getVendingList(params) {
  return request({ url: '/api/vm-service/vm/search', method: 'GET', params })
}
