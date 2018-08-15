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
                            <button @click.prevent="DeleCourse(oneCourse.couid)" class="btn btn-danger">删除课程</button>&nbsp;
                            <button @click.prevent="DeleFile(oneCourse.couid)" v-if="cour" class="btn btn-danger" >删除文件</button>
                            <button v-else  class="btn btn-success" data-toggle="modal" data-target="#UploadFile" >上传文件</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- 上传文件模态框 -->
        <div class="modal fade" id="UploadFile" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
               <div class="modal-dialog" role="document">
                   <div class="modal-content">
                       <div class="modal-header">
                         <h3 class="modal-title" id="myModalLabel">上传文件</h3>
                        </div>
                        <div class="modal-body">
                            <p>（只能上传单个文件，多个请压缩打包）</p>
                            <form id="form1" enctype="multipart/form-data" method="post">
                                <div class="row">
                                    <input type="file" name="fileToUpload" id="fileToUpload" @change="fileSelected()"/>
                                </div>
                                    <div id="fileName"></div>
                                    <div id="fileSize"></div>
                                    <div id="fileType"></div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                            <button @click="uploadFile(oneCourse.couid)" class="btn btn-success">上传</button>
                        </div>
                   </div>
            </div>
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
                console.log("asdasd");
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
                let arr ={
                    couid,
                    do:"DeleteCou"
                }
                console.log(arr);
                let url = "http://176.128.18.86/SchoolOnline/";
                let urlback = "Php/admin.php";
                $.ajax({
                    type: "post",
                    url: url+urlback,
                    data: arr,
                    dataType: "json",
                }).then(result=>{
                    console.log(result);
                    if(result["talk"]=="Ok"){
                        alert("删除成功");
                        window.location.reload();
                    }
                    else{
                        alert("删除失败");
                    }
                })
            },
            DeleFile(value){
                let couid = value;
                let arr ={
                    couid,
                    do:"DeleteWork"
                }
                console.log(arr);
                let url = "http://176.128.18.86/SchoolOnline/";
                let urlback = "Php/admin.php";
                $.ajax({
                    type: "post",
                    url: url+urlback,
                    data: arr,
                    dataType: "json",
                }).then(result=>{
                    console.log(result);
                    if(result["talk"]=="Ok"){
                        alert("删除成功");
                        window.location.reload();
                    }
                    else{
                        alert("删除失败");
                    }
                })
            },
            fileSelected() {
                var file = document.getElementById('fileToUpload').files[0];
                if((Math.round(file.size * 100 / (1024 * 1024)) / 100).toString()>2){
                    alert("文件大于2M,不能上传");
                    return
                }      
                console.log(file.size)
                if (file) {
                    var fileSize = 0;
                    if (file.size > 1024 * 1024)
                    fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
                    else
                    fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';
                    document.getElementById('fileName').innerHTML = '文件名: ' + file.name;
                    document.getElementById('fileSize').innerHTML = '文件大小: ' + fileSize;
                    document.getElementById('fileType').innerHTML = '文件类型: ' + file.type;
                }
            },
            uploadFile(value) {
                let url = "http://176.128.18.86/SchoolOnline/";
                let urlback = "Php/admin.php";
                let form = document.getElementById('form1');
                let file = new FormData(form);
                let cid = sessionStorage.getItem('cid');
                let couid = value;
                let arr = {
                    cid,
                    couid,
                    file,
                    do:"InWork"
                }
                console.log(arr);
                $.ajax({
                    type: "post",
                    url: url+urlback,
                    data: arr,
                    dataType: "json",
                }).then(result=>{
                    console.log(result);
                })
            },
        },
        beforeMount() {
            this.LoginCourse();  
        } 
     
    }
</script>
