import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('../views/login.vue'),
    meta:{
      title:'登录'
    }
  },
  {
    path: '/home',
    meta:{
      title:'航空应急管理系统'
    },
    component: () => import('../views/home.vue'),
    children: [
      {
        path: '/resourceManagement',
        component: () => import('../views/resourceManagement.vue')
      },
      {
        path: '/instruction',
        component: () => import('../views/instruction.vue')
      },
      {
        path: '/task',
        component: () => import('../views/task.vue')
      },
      {
        path: '/plan',
        component: () => import('../views/plan.vue')
      },
      {
        path: '/service',
        component: () => import('../views/service.vue')
      },
      {
        path: '/operation',
        component: () => import('../views/operation.vue')
      },
      {
        path: '/serviceArc',
        component: () => import('../views/serviceArc.vue')
      },
      {
        path: '/statistics',
        component: () => import('../views/statistics.vue')
      },
      {
        path: '/onduty',
        component: () => import('../views/onduty.vue')
      },
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=>{
  document.title = to.matched[0].meta.title;
  console.log(to)
  next()
 })
 
export default router
