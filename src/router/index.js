import Vue from 'vue'
import VueRouter from 'vue-router'
import StuList from "../views/StuList"
import StuAdd from "../views/StuAdd"
Vue.use(VueRouter)

  const routes = [
  {
    path:'/stuList',
    component:StuList
  },
  {
    path:'/stuAdd',
    component:StuAdd
  },
  {
    path:'*',
    redirect:'/stuList'
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: 'active'
})

export default router
