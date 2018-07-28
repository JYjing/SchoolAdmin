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
import "../assets/js/jquery-1.11.0.min.js"
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
    //    $(".login-box>input[name='username']").animate({
    //        left:-1300
    //    },500);
    //    $(".login-box>input[name='password']").animate({
    //        left:-1300
    //    },700);
    //    $(".login-box>button").animate({
    //        left:-1300
    //    },900,() => {
    //        this.$router.push("/main");
    //    });
        $(".login").animate({
            opacity:0
        },500,()=>{
            this.$router.push("/main");
        });
    }
  },
  mounted() {
      this.defaultFocus();
  }
};
</script>