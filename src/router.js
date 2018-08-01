import Vue from 'vue'
import Router from 'vue-router'
import Login from "./views/Login.vue"
import Main from "./views/Main.vue"
import AdminStudent from "./views/AdminStudent.vue"
import AdminGroup from "./views/AdminGroup.vue"
import AdminClass from "./views/AdminClass.vue"
import UploadCourse from "./views/UploadCourse.vue"
import AdminCourse from "./views/AdminCourse.vue"
import CreateClass from "./views/CreateClass.vue"
import DownWork from "./views/DownWork.vue"

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
          component:AdminStudent
        },
        {
          path:'/admstudent',
          component:AdminStudent
        },
        {
          path:'/admgroup',
          component:AdminGroup,
        },
        {
          path:'/admclass',
          component:AdminClass,
        },
        {
          path:'/uplcourse',
          component:UploadCourse,
        },
        {
          path:'/admcourse',
          component:AdminCourse,
        },
        {
          path:'/creclass',
          component:CreateClass,
        },
        {
          path:'/down',
          component:DownWork,
        },

      ]
    }
  ]
})
