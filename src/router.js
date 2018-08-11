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
    }
  ]
})

router.beforeEach((to,from,next)=>{
  console.log('navigation-guards');
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

  const nextRoute = ['main','admstudent','admgroup','admclass','uplcourse','admcourse','creclass','down'];
  let isLogin =false;  // 是否登录
  // 未登录状态；当路由到nextRoute指定页时，跳转至login
  if (nextRoute.indexOf(to.name) >= 0) {  
    if (isLogin===false) {
      console.log('what fuck');
      router.push({name:'login'})
    }
  }
  // 已登录状态；当路由到login时，跳转至home 
  // if (to.name === 'login') {
  //   if (isLogin) {
  //     router.push({ name: 'main' });
  //   }
  // }
  next();
});

export default router;