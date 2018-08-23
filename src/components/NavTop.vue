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
                        <li @click.prevent="exits"><a href="#">退出登录</a></li>
                    </ul>
                </li>
            </ul>    
            <span class="glyphicon glyphicon-bell display-n" aria-hidden="true"></span>
            <span class="nav-data display-n">2018/7/25</span>
          <span @click.prevent="exits" class="glyphicon glyphicon-off" aria-hidden="true"></span>
        </div>
        <!-- 修改密码 -->
        <div class="modal fade" id="revisePwd" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
               <div class="modal-dialog" role="document">
                   <div class="modal-content">
                        <div class="modal-body">
                            <h3>修改密码</h3>
                            <hr>
                            <p>旧密码：<input type="text" name="oldPossWord" ></p>
                            <p>新密码：<input type="text" name="newPossWord1" ></p>
                            <p>再次确认密码：<input type="text" name="newPossWord2"></p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                            <button class="btn btn-info" @click.prevent="updatePwd">确定修改</button>
                        </div>
                   </div>
               </div>
           </div>
    </div>
</template>
<script>
    import "../assets/css/bootstrap.css"
    import '../assets/js/bootstrap.js'
    import "../assets/js/jquery-1.11.3.js"
    import "../assets/js/jquery-3.2.1.js"
    import '../assets/css/NavTop.css'

    export default {
        data(){
            return{
                
            }
        },
        methods:{
            updatePwd(){
                let oldPassword = $("input[name='oldPossWord']")[0].value;
                let newPassword = $("input[name='newPossWord1']")[0].value;
                let newPassword2 = $("input[name='newPossWord2']")[0].value;
                let uid = sessionStorage.getItem('uid');
                
                if(newPassword==newPassword2){
                    let url = "http://176.128.18.86/SchoolOnline/";
                    let urlback = "Php/admin.php";
                    let arr = {
                        oldPassword,
                        newPassword,
                        uid,
                        do:"UpdatePassword"
                    }
                    console.log(arr)
                    $.ajax({
                        type: "post",
                        url: url+urlback,
                        data: arr,
                        dataType: "json"
                    }).then((result) => {
                        console.log(result)
                        if(result['talk']=="NotOk1"){
                            alert("旧密码错误,请重新输入");
                        }
                        else if(result['talk']=="NotOk2"){
                            alert("网络错误");
                        }
                        else{
                            alert("修改密码成功");
                            $('#revisePwd').modal('hide')
                            sessionStorage.clear();
                            this.$router.push("/login");
                        }
                    });


                }
                else{
                    alert("新密码输入不一致，请重新输入");
                }
            },
            exits(){
                sessionStorage.clear();
                this.$router.push("/login");
            }
        }
    }
</script>