// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 全部引入的方式 引入vant组件库
import Vant from 'vant';
import 'vant/lib/index.css';
import "./assets/reset.css"
import "./assets/rem"

// 引入axios 模块
import axios from "axios"
// axios 的默认配置
axios.defaults.baseURL = 'https://api.it120.cc/small4';
Vue.prototype.http = axios

Vue.use(Vant);



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
