
// 导出属于员工的路由规则
import Layout from '@/layout'
//  {  path: '', component: '' }
// 每个子模块 其实 都是外层是layout  组件位于layout的二级路由里面
export default {
  path: '/manage-storage', // 路径
  component: Layout, // 组件
  // 配置二级路的路由表
  name: 'manage-storage', // 给路由规则加一个name
  redirect: '/manage-storage/list',
  // 路由元信息  其实就是存储数据的对象 我们可以在这里放置一些信息
  meta: {
    title: '库内管理', icon: 'education' // meta属性的里面的属性 随意定义 但是这里为什么要用title呢， 因为左侧导航会读取我们的路由里的meta里面的title作为显示菜单名称
  },
  children: [
    { path: 'list', component: () => import('@/views/manage-storage/list'), name: 'list', meta: { title: '盘点单' }},
    { path: 'list-task', component: () => import('@/views/manage-storage/list-task'), name: 'list-task', meta: { title: '盘点任务' }},
    { path: 'storage-lose-profit', component: () => import('@/views/manage-storage/storage-lose-profit'), name: 'storage-lose-profit', meta: { title: '库存损益' }},
    { path: 'latest-storage', component: () => import('@/views/manage-storage/latest-storage'), name: 'latest-storage', meta: { title: '实时库存' }}

  ]
}
