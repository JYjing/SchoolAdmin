import Vue from 'vue'
import Router from 'vue-router'
import Login from "./views/Login.vue"
import Main from "./views/Main.vue"
import KickingStudent from "./views/KickingStudent.vue"
import DisbandageGroup from "./views/DisbandageGroup.vue"
import DissolutionClass from "./views/DissolutionClass.vue"
import DownloadJob from "./views/DownloadJob.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/login',
      component: Login
    },
    {
      path:'/main',
      component: Main,
      children:[
        {
          path:'/',
          component:KickingStudent
        },
        {
          path:'/kicking',
          component:KickingStudent
        },
        {
          path:'/disban',
          component:DisbandageGroup,
        },
        {
          path:'/dissltn',
          component:DissolutionClass,
        },
        {
          path:'/download',
          component:DownloadJob,
        },
      ]
    }
  ]
})
