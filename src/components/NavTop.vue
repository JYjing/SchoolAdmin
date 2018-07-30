<template>
    <div class="navi-top">
        <div class="nav-flex">    
            <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
            <ul id="n-top">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">超级管理员 <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">修改密码</a></li>
                        <li><a href="#">通知</a></li>
                        <li><a href="#">学生管理</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="#">问题反馈</a></li>
                        <li role="separator" class="divider"></li>
                        <li><router-link class="display-n" to="/login">退出登录</router-link></li>
                    </ul>
                </li>
            </ul>    
            <span class="glyphicon glyphicon-bell display-n" aria-hidden="true"></span>
            <span class="nav-data display-n">2018/7/25</span>
           <router-link class="display-n" to="/login"><span class="glyphicon glyphicon-off" aria-hidden="true"></span></router-link>
        </div>
       
    </div>
</template>
<script>
    import "../assets/css/bootstrap.css"
    import '../assets/js/bootstrap.js'
    import '../assets/js/jquery-1.11.0.min.js'
    import '../assets/css/NavTop.css'

    export default {
        data(){
            return{

            }
        },

    }
</script>