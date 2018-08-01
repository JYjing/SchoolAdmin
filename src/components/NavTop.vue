<template>
    <div class="navi-top">
        <div class="nav-flex">    
            <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
            <ul id="n-top">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">超级管理员 <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="#" data-toggle="modal" data-target="#revisePwd">修改密码</a></li>
                        <li><a href="#">通知</a></li>
                        <li><router-link to="/admstudent">学生管理</router-link></li>
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
        <!-- 修改密码 -->
        <div class="modal fade" id="revisePwd" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
               <div class="modal-dialog" role="document">
                   <div class="modal-content">
                        <div class="modal-body">
                            <h3>修改密码</h3>
                            <hr>
                            <p>旧密码：<input type="text" value=""></p>
                            <p>新密码：<input type="text" value="stu[index].grop"></p>
                            <p>再次确认密码：<input type="text" value="stu[index].class"></p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                            <button class="btn btn-info">确定修改</button>
                        </div>
                   </div>
               </div>
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