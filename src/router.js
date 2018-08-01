import Vue from 'vue'
import Router from 'vue-router'
import Login from "./views/Login.vue"
import Main from "./views/Main.vue"
import AdminStudent from "./views/AdminStudent.vue"
import AdminGroup from "./views/AdminGroup.vue"
import AdminClass from "./views/AdminClass.vue"
import UploadVideo from "./views/UploadVideo.vue"
import AdminVideo from "./views/AdminVideo.vue"
import CreateClass from "./views/CreateClass.vue"

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
          path:'/uplvideo',
          component:UploadVideo,
        },
        {
          path:'/admvideo',
          component:AdminVideo,
        },
        {
          path:'/creclass',
          component:CreateClass,
        },

      ]
    }
  ]
})
