<template>
    <div class="downwork-main">
        <div class="down-flex">
             <select name="" id="">
                <option >{{claName.name}}</option>
            </select>
            <select name="d-Course">
                <option v-for="(item, index) in course" :key="index" :value="item.couid">{{item.title}}</option>
            </select>
            <button @click.prevent="LoginWork(1)" class="btn btn-info">查找</button>
            <button @click.prevent="downAllWork()" class="btn btn-info">下载全部作业</button>
        </div>
         <span class="result-font">
            <p>所有学生作业：</p>
            <div class="btn-group" role="group">
                <button v-if="pno-1>0" type="button" class="btn btn-info">上一页</button>
                <button v-if="pno-2>0" type="button" class="btn btn-info">{{pno-2}}</button>
                <button v-if="pno-1>0" type="button" class="btn btn-info">{{pno-1}}</button>
                <button type="button" class="btn btn-info active">{{pno}}</button>
                <button v-if="pno+1<=pageCount" type="button" class="btn btn-info">{{pno+1}}</button>
                <button v-if="pno+2<=pageCount" type="button" class="btn btn-info">{{pno+2}}</button>
                <button v-if="pno+1<=pageCount" type="button" class="btn btn-info">下一页</button>
            </div>
        </span>
        <div class="down-table">
            <table class="table">
                <thead>
                    <tr>
                        <th>编号</th>
                        <th>姓名</th>
                        <th>课程</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="!work.length>0">
                        <td>没有任何数据</td>
                    </tr>
                    <tr v-else v-for="(item, index) in work" :key="index">
                        <td>{{item.task_id}}</td>
                        <td>{{item.name}}</td>
                        <td>{{courName.title}}</td>
                        <td><button class="btn btn-success" @click.prevent="downWork(item.task_url)">下载</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    import "../assets/css/DwonWork.css"
    export default {
        data(){
            return{
                course:null,
                claName:null,
                index:0,
                pageCount:10,
                pno:null,
                work:null,
                courName:null,
                urlwork:null
            }
        },
        methods:{
            downWork(value){
                let url = decodeURIComponent(value);
                let ip = "http://176.128.18.86"
                window.open(`${ip}${this.urlwork}${url}`);
            },
            LoginWork(pno){
                let couid = "";
                if($("select[name='d-Course'] option:selected").length>0){
                    couid = $("select[name='d-Course'] option:selected")[0].value;
                }
                let cid = sessionStorage.getItem('cid');
                let url = "http://176.128.18.86/SchoolOnline/";
                let urlback = "Php/admin.php";
                let pageCount = this.pageCount;
                let arr = {
                    pageCount,
                    pno,
                    couid,
                    cid,
                    do:"ShowWork"
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
                    this.course = result['course'];
                    this.claName = result['class'];
                    this.pno = result['pno'];
                    this.work = result['work'];
                    this.courName =result['claName'];
                    this.urlwork = result['url'];
                })
            },
        },
        beforeMount() {
            this.LoginWork(1);  
        } 
    }
</script>