<template>
    <div class="main">
        <nav-top></nav-top>
        <div class="main-flex">
            <main-nav></main-nav>
                <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import "../assets/css/bootstrap.css"
    import "../assets/css/nav.css"
    import '../assets/fonts/iconfont.css'
    import "../assets/js/jquery-3.2.1.js"
    import MainNav from "../components/Nav.vue";
    import NavTop from "../components/NavTop.vue"

    export default {
        components:{
            MainNav,
            NavTop
        },
    }
</script>
<style>
    .main{
      width: 100%;
      height: 100%;  
      /* min-width: 1000px; */
    }
    .main-flex{
        height: 100%;
        display: flex;
    }
</style>