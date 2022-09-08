import request from '@/utils/request'
/* eslint-disable */
/**
 *  查询全部库位详细信息
 * **/
// export function chaXunKuWeiApi(params) {
//     return request({
//         url: 'http://www-wms-java.itheima.net/api/location/listDetail',
//         params
//     })
// }
/* eslint-disable */
/**
 *  查询全部库位
 * **/
 export function chaXunKuWeiApi(params) {
    return request({
        url: '/location/pageDetail',
        params
    })
}


