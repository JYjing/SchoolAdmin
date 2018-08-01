<template>
    <div class="uplvideo-mian">
            <h3>视频上传</h3>
            <hr>
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
            <p>
                <span>日期：</span><input type="date">
            </p>
            <p>课程视频上传地址：</p>
            <input @blur="blurColor" @focus="focusColor" type="text">
            <p>课程标题</p>
            <input @blur="blurColor" @focus="focusColor" type="text">
            <p>描述(不能超过200个字)：</p>
            <textarea @blur="blurColor" @focus="focusColor"></textarea>
            <h3>作业上传</h3>
            <hr>
            <p>(单文件可直接上传，多文件请打包压缩后再上传)</p>
            <input type="file" name="file_upload" id="file_upload">
            <button type="button" class="btn btn-info">上传</button>
    </div>
</template>
<script>
    import "../assets/css/bootstrap.css"
    import "../assets/css/UploadCourse.css"


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
        },
        mounted(){

        }
    }
</script>