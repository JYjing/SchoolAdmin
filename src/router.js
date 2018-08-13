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
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path:'/main',
      name:'main',
      component: Main,
      children:[
        {
          path:'',
          redirect:{name:'admstudent'}
        },
        {
          path:'admstudent',
          name:'admstudent',
          component:AdminStudent
        },
        {
          path:'admgroup',
          name:'admgroup',
          component:AdminGroup,
        },
        {
          path:'admclass',
          name:'admclass',
          component:AdminClass,
        },
        {
          path:'uplcourse',
          name:'uplcourse',
          component:UploadCourse,
        },
        {
          path:'admcourse',
          name:'admcourse',
          component:AdminCourse,
        },
        {
          path:'creclass',
          name:'creclass',
          component:CreateClass,
        },
        {
          path:'down',
          name:'down',
          component:DownWork,
        },

      ]
    },
    {
      path: '**',
      redirect: '/login',
    }
  ]
})

router.beforeEach((to,from,next)=>{
  console.log('进入守卫..'); 
  const nextRoute = ['main','admstudent','admgroup','admclass','uplcourse','admcourse','creclass','down'];//路由名字
  let isLogin =true;  // 是否登录
  if(nextRoute.indexOf(to.name) >= 0) { //如果进入nextRoute中的路由
    if (isLogin===false) { //判断是否登录
      console.log('未登录，拦截网站');
      next('/login')   //跳转登录界面           
    }
    else{
      console.log("已登录，正常运作")
      next();
    }
  }
  else{
    next();
  }
});

export default router;