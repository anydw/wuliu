
// 导出属于员工的路由规则
import Layout from '@/layout'
//  {  path: '', component: '' }
// 每个子模块 其实 都是外层是layout  组件位于layout的二级路由里面
export default {
  path: '/manage-business', // 路径
  component: Layout, // 组件
  // 配置二级路的路由表
  name: 'manage-business', // 给路由规则加一个name
  redirect: '/manage-business/goods-owner',
  // 路由元信息  其实就是存储数据的对象 我们可以在这里放置一些信息
  meta: {
    title: '商务管理', icon: 'chart' // meta属性的里面的属性 随意定义 但是这里为什么要用title呢， 因为左侧导航会读取我们的路由里的meta里面的title作为显示菜单名称
  },
  children: [
    { path: 'goods-owner', component: () => import('@/views/manage-business/goods-owner'), name: 'goods-owner', meta: { title: '货主管理' }},
    { path: 'task-picking', component: () => import('@/views/manage-business/task-picking'), name: 'task-picking', meta: { title: '承运商管理' }}

  ]
}
