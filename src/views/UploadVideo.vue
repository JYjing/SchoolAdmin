<template>
    <div class="uplvideo-mian">
        <span>班级：</span>
        <select disabled="disabled" name="tclass">
            <option value="">软件171</option>
            <option value="">软件171</option>
            <option value="">软件171</option>
        </select>
        <br>
        <span>课程：</span>
        <select name="tcourse">
            <option value="">课程1</option>
            <option value="">课程1</option>
            <option value="">课程1</option>
        </select>
        <p>课程视频上传地址：</p>
        <input @blur="blurColor" @focus="focusColor" type="text">
        <p>描述(不能超过50个字)：</p>
        <textarea @blur="blurColor" @focus="focusColor"></textarea>
        <p>
            <button type="button" class="btn btn-info">上传</button>
        </p>
    </div>
</template>
<script>
    import "../assets/css/bootstrap.css"
    import "../assets/css/UploadVideo.css"

    export default {
        data(){
            return{
               
            }
        },
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
        }
    }
</script>