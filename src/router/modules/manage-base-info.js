// 导出属于员工的路由规则
import Layout from '@/layout'
//  {  path: '', component: '' }
// 每个子模块 其实 都是外层是layout  组件位于layout的二级路由里面
export default {
  path: '/manage-base-info', // 路径
  component: Layout, // 组件
  // 配置二级路的路由表
  name: 'manage-base-info', // 给路由规则加一个name
  redirect: '/manage-base-info/warehouse',
  // 路由元信息  其实就是存储数据的对象 我们可以在这里放置一些信息
  meta: {
    title: '基础信息管理', icon: 'guide' // meta属性的里面的属性 随意定义 但是这里为什么要用title呢， 因为左侧导航会读取我们的路由里的meta里面的title作为显示菜单名称
  },
  children: [
    { path: 'warehouse', component: () => import('@/views/manage-base-info/warehouse'), name: 'warehouse', meta: { title: '仓库管理' }},
    { path: 'area', component: () => import('@/views/manage-base-info/area'), name: 'area', meta: { title: '库区管理' }},
    { path: 'location', component: () => import('@/views/manage-base-info/location'), name: 'location', meta: { title: '库位管理' }},
    { path: 'location-view', component: () => import('@/views/manage-base-info/location-view'), name: 'location-view', meta: { title: '库位视图' }},
    { path: 'goods', component: () => import('@/views/manage-base-info/goods'), name: 'goods', meta: { title: '货品管理' }},
    { path: 'goods-type', component: () => import('@/views/manage-base-info/goods-type'), name: 'goods-type', meta: { title: '货品类型管理' }}
  ]

}

// 当你的访问地址 是 /employees的时候 layout组件会显示 此时 你的二级路由的默认组件  也会显示

// import layout from '@/layout'

// export default {
//   path: '/task', // 路径
//   component: layout, // 组件
//   name: 'task',
//   meta: {
//     title: '工单管理', icon: 'gd'
//   },
//   children: [{ // 配置二级路由
//     path: 'business', // 这里当二级路由的path什么都不写的时候 表示该路由为当前二级路由的默认路由
//     component: () => import('@/views/task/business'),
//     meta: {
//       title: '运营管理'
//     }
//   },
//   {
//     path: 'operation', // 这里当二级路由的path什么都不写的时候 表示该路由为当前二级路由的默认路由
//     component: () => import('@/views/task/operation'),
//     meta: {
//       title: '运维管理'
//     }
//   }]

// }
