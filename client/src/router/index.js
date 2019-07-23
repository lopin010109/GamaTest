import Vue from 'vue'
import Router from 'vue-router'
// 我設定的首頁
import Home from '@/pages/Home'

// 使用路由
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/*' , redirect: '/home'
    }
  ]
})
