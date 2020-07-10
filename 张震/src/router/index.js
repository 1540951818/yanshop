import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from "@/components/HelloWorld"
import Home from "@/components/Home"
import User from "@/components/user"
import Teacher from "@/components/teacher"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      redirect:"/user",
      children:[
        {
          path:"/user",
          name:"User",
          component:User
        },
        {
          path:"/teacher",
          name:"Teacher",
          component:Teacher
        }
      ]
    },
  ]
})
