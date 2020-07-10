import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home'

import Index from '@/pages/Index'
import Cate from '@/pages/Cate'
import Cart from '@/pages/Cart'
import User from '@/pages/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:"/home"
    },
    {
        path:"/home",
        name:"home",
        component:Home,
        redirect:"/home/index",
        children:[
               {
                  path:"index",
                  component:Index 
               },
               {
                path:"cate",
                component:Cate 
             },
             {
                path:"cart",
                component:Cart 
             },
             {
                path:"user",
                component:User 
             }

        ]
    }
  ]
})
