<template>
    <div class="creclass-main">
        <h3>创建班级：</h3>
        <hr>
        <p>班级名字：
            <input  @blur="blurColor" @focus="focusColor" type="text">
        </p>
        <hr>
        <button class="btn btn-success">创建班级</button>
    </div>
</template>
<script>
    import "../assets/css/bootstrap.css"
    import "../assets/css/CreateClass.css"

    export default {
        methods:{
            focusColor(e) {
            $(e.target).css("background-color", "#82929d");
            $(e.target).css("color","#fff");
            },
            blurColor(e) {
                $(e.target).css("background-color", "#fff");
                $(e.target).css("color","#000");
            },
            defaultFocus() {
                $(".login-box>input[name='username']").focus();
            },
        },
    }
</script> 