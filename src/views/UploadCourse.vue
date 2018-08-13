<template>
    <div class="uplvideo-mian">
            <h3>视频上传</h3>
            <hr>
            <br>
            <span>视频类型：</span>
            <select name="tcourse">
                <option value="腾讯视频">腾讯视频</option>
                <option value="其他视频">其他视频</option>
            </select>
            <p>
                <span>日期：</span><input type="date">
            </p>
            <p>课程视频上传地址：</p>
            <input name="viedo_src" @blur="blurColor" @focus="focusColor" type="text">
            <p>课程标题</p>
            <input name="course_title" @blur="blurColor" @focus="focusColor" type="text">
            <p>描述(不能超过200个字)：</p>
            <textarea name="course_content" @blur="blurColor" @focus="focusColor"></textarea>
            <!-- <h3>作业上传</h3> -->
            <hr>
            <!-- <p>(单文件可直接上传，多文件请打包压缩后再上传)</p>
            <input type="file" name="file_upload" id="file_upload"> -->
            <button @click.prevent="uploadCourse()" type="button" class="btn btn-info">上传</button>
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
            uploadCourse(){
                let url = "http://176.128.18.86/SchoolOnline/";
                let urlback = "Php/admin.php";
                let cid = sessionStorage.getItem('cid');
                let title = $("input[name='course_title']")[0].value;
                let content = $("textarea[name='course_content']")[0].value;
                let video_src = $("input[name='viedo_src']")[0].value;
                let viedo_kind="";
                // console.log($("select[name='tcourse'] option:selected")[0].value);
                if($("select[name='tcourse'] option:selected")[0].value=="腾讯视频"){
                    viedo_kind = 1;
                }else{
                    viedo_kind = 2;
                }
                let arr ={
                    cid, //班级id
                    title, //课程标题
                    content, //标题内容
                    video_src,  //视频链接
                    viedo_kind, //视频链接类型
                    do:"CreateCourse"
                }
                console.log(arr);
                $.ajax({
                    type: "post",
                    url: url+urlback,
                    data: arr,
                    dataType: "json",
                }).then(result=>{
                    console.log(result); 
                    if(result[talk=='Ok']){
                        alert("上传成功");
                    }
                    else{
                        alert("上传失败");
                    }
                })

            }
        },
        mounted(){

        }
    }
</script>