
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from "@/views/login/login.vue"
import Register from "@/views/login/register.vue"

//引入自定义的路由文件
import shop from "./shop";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      alias:"/shop/login"
    },
    {
      path:"/shop/register",
      name:"Register",
      component:Register,
    },
    //扩展运算符
    ...shop
  ]
})