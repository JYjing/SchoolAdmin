<template>
    <div class="login">
        <div class="login-box">
            <h1>Admin</h1>
            <hr>
            <h2>教学后台管理系统</h2>
            <input placeholder="登录用户" @blur="blurColor" @focus="focusColor" name="username" type="text">
            <input placeholder="登录密码" @blur="blurColor" @focus="focusColor" name="password" type="password">
            <br/>
            <button @click.prevent="doLogin" type="button" class="btn btn-info">登录</button>
        </div>
    </div>
</template>
<script>
import "../assets/css/bootstrap.css";
import "../assets/js/jquery-3.2.1.js"
import "../assets/css/login.css"

export default {
  data() {
    return {};
  },
  methods: {
        focusColor(e) {
            $(e.target).css("background-color", "#82929d");
        },
        blurColor(e) {
            $(e.target).css("background-color", "#6f7e8c");
        },
        defaultFocus() {
            $(".login-box>input[name='username']").focus();
        },
    doLogin(){
        // $(".login").animate({
        //     opacity:0
        // },500,()=>{
        //     this.$router.push("/main");
        // });
        let url = "http://176.128.18.86/SchoolOnline/";
        let urlback = "Php/admin.php";
        let uname = $("input[name='username']")[0].value;
        let upwd = $("input[name='password']")[0].value;

        let arr = {
            uname,
            upwd,
            do:"Login"
        };
        console.log(arr);

        $.ajax({
            type: "post",
            url: url+urlback,
            data: arr,
            dataType: "json",
        }).then((result) => {
            if(result["talk"]=="Ok"){
                $(".login").animate({
                         opacity:0
                },500,()=>{
                      this.$router.push("/main");
                });
                sessionStorage.setItem('uid',result["use"][0]["uid"]);
                sessionStorage.setItem('cid',result["use"][0]["cid"]);
                sessionStorage.setItem('lve',result["use"][0]["level"]);
                sessionStorage.setItem('isLogin',true);
            }
            else{
                alert("帐号或密码错误");
            }
            console.log(result);
        });
    }
  },
  mounted() {
      this.defaultFocus();
  }
};
</script>