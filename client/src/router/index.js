import Vue from 'vue'
import Router from 'vue-router'
// 我設定的首頁
import Home from '@/pages/Home'
import ShowItem from '@/pages/ShowItem';
import Select from '@/components/Select';
import Create from '@/components/Create';
import Update from '@/components/Update';
import Delete from '@/components/Delete';

// 使用路由
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/home',
    name: 'Home',
    component: Home,
    children: [{
      path: '/showItem',
      name: 'ShowItem',
      component: ShowItem,
    },{
      path: '/create',
      name: 'Create',
      component: Create,
    },],
  },{
    path: '/*' , redirect: '/home'
  }],
});
