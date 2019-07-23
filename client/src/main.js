// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 現成UI第三套件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// Vuex 使用的資料夾
import store from './store';


Vue.config.productionTip = false;
// 使用第三套件UI
Vue.use(ElementUI);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 路由轉接頁面
  router,
  // vuex 所使用
  store,
  render: h => h(App)
  // components: { App },
  // template: '<App/>'
})
