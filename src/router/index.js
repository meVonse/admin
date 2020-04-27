import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  /* 登录 */
  { path: '/', name: 'Login', component: Login },
   /* 注册 */
   { path: '/Register', name: 'Register', component: Register },
  /* 退出 */
  { path: '/out', name: 'Out',component:()=>import("../views/Out.vue")},
  // main
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/home/index',
        component: () => import('../views/pages/Index.vue')
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
