import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import ViewPageVue from '@/views/ViewPage.vue'
import UpdateEmployeeVue from '@/views/UpdateEmployee.vue'
import FindEmployeeVue from '@/views/FindEmployee.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: ViewPageVue
  },
  {
    path:'/add',
    name:'add',
    component: () => import('../views/AddEmployee.vue')
  },
  {
    path:'/edit/:id',
    name:'edit',
    
    component : UpdateEmployeeVue
  },
  {
    path:'/find/:id',
    name:'find',
    component: FindEmployeeVue
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
