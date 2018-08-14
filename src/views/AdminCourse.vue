<template>
    <div class="admvideo-main">
        <div class="video-search">
            <span>班级</span>
            <select name="v-claName">
                <option v-for="(item, index) in claName" :key="index" :value="item">{{item}}</option>
            </select>
             <span>课程</span>
            <select name="v-claCourse">
                <option v-for="(item, index) in course" :key="index" :value="item.couid">{{item.title}}</option>
            </select>
            <button @click.prevent="LoginCourse" class="btn btn-info">查找视频</button>
        </div>
        <span class="result-font">
            <p>查找结果：</p>
        </span>
        <div class="video-result">
            <table class="table">
                <thead>
                    <tr>
                        <th>班级</th>
                        <th>课程</th>
                        <th>时间</th>
                        <th>视频链接</th>
                        <th>视频类型</th>
                        <th>文件</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-show="!oneCourse">
                        <td><img src="../assets/images/loading.gif" alt=""></td>
                    </tr>
                    <tr>    
                        <td>{{claName.name}}</td>
                        <td>{{oneCourse.title}}</td>
                        <td>{{oneCourse.date|dateTrans}}</td>
                        <td style="max-width: 300px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap">{{oneCourse.video_src}}</td>
                        <td>{{oneCourse.video_kind|videoTrans}}</td>
                        <td>{{oneCourse.task_src|fileTrans}}</td>
                        <td class="btnModal">
                            <button @click.prevent="DeleCourse(oneCourse.couid)" class="btn btn-danger" data-toggle="modal" data-target="#myModal1">删除课程</button>&nbsp;
                            <button v-if="cour" class="btn btn-danger" data-toggle="modal" data-target="#myModal1">删除文件</button>
                            <button v-else  class="btn btn-success" data-toggle="modal" data-target="#myModal1">上传文件</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    import "../assets/css/bootstrap.css"
    import "../assets/css/AdminCourse.css"
    import "../apiFilter/myFilter.js"

    export default {
        data(){
            return{
                claName:null,
                oneCourse:null,
                course:null,
                cour:null,
            }
        },
        methods:{
            LoginCourse(){
                let couid = "";
                if($("select[name='v-claCourse'] option:selected").length>0){
                    couid = $("select[name='v-claCourse'] option:selected")[0].value;
                }
                let cid = sessionStorage.getItem('cid');
                let url = "http://176.128.18.86/SchoolOnline/";
                let urlback = "Php/admin.php";
                let arr = {
                    couid,
                    cid,
                    do:"FindCou"
                }
                console.log(arr);
                $.ajax({
                    type: "post",
                    url: url+urlback,
                    data: arr,
                    async:false,
                    dataType: "json"
                }).then((result) => {
                    console.log(result);
                    this.claName = result['class'];
                    this.oneCourse = result['oneCourse'];
                    this.course = result['course'];
                    if(this.oneCourse.task_src==0){
                        this.cour = false;
                    }
                    else{
                        this.cour = true;
                    }
                })
            },
            DeleCourse(value){
                let couid = value;
            }
        },
        beforeMount() {
            this.LoginCourse();  
        } 
    }
</script>
