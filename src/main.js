import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css
import App from './App'
import store from './store'
import router from './router'
import Component from '@/components/index'
import '@/icons' // icon
import '@/permission' // permission control
import i18n from '@/lang'
// import TagsView from '@/components/TagsView'
Vue.use(Component) // 注册自己的插件
// Vue.component('TagsView', TagsView)
Vue.use(ElementUI, { i18n: (key, value) => i18n.t(key, value) })
// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  i18n,
  router,
  store,
  render: h => h(App)
})
