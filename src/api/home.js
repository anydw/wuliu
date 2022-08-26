import request from '@/utils/request'
// 工单统计
export const getWorkAll = (params) => request({ url: '/api/order-service/report/orderCount', params })
// 获取当时工单汇总信息(人员统计头部信息)
export function getTaskAllInfo(start, end) {
  return request({ url: `/api/task-service/task/taskReportInfo/${start}/${end}` })
}
// 获取销售前几的商品
export function getMarket(topValue, start, end) {
  return request({ url: `/api/order-service/report/skuTop/${topValue}/${start}/${end}` })
}
// 获取一定时间范围之内的收入
export function getTimer(params) {
  return request({ url: '/api/order-service/report/orderAmount', params })
}
