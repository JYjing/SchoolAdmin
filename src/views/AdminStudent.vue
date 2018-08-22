<template>
    <div class="kick-main">
            
           <div class="kick-search">
                <div class="kick-input-search">
                        编号<input name="stuUid" @blur="blurColor" @focus="focusColor" type="text">
                        班级<select name="claName">
                                <option v-for="(item, index) in cName" :key="index" :value="item.name">{{item.name}}</option>
                            </select>
                        等级<input name="stuLevel" @blur="blurColor" @focus="focusColor" type="text">
                        姓名<input name="stuName" @blur="blurColor" @focus="focusColor" type="text">
                    <button @click.prevent="FindStudent(1)" class="btn btn-info">搜索</button>
                </div>
                
                <div class="kick-table">
                 <table class="table">
                        <thead>
                            <tr>
                                <th>编号</th>
                                <th>名字</th>
                                <th>班级</th>
                                <th>等级</th>
                                <th>小组</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="!stu">
                                <td>没有相关数据</td>
                            </tr>
                            <tr v-else v-for="(item, i) in stu" :key="i">
                                <td>{{item.stuUid}}</td>
                                <td>{{item.stuName}}</td>
                                <td>{{claName}}</td>
                                <td>{{item.stuLevel|lvTrans}}</td>
                                <td>{{item.groName}}</td>
                                <td class="btnModal">
                                    <button @click.prevent="ChangeIndex(i)" class="btn btn-danger" data-toggle="modal" data-target="#myModal1">踢出</button>&nbsp;
                                    <button @click.prevent="ChangeIndex(i)" class="btn btn-success" data-toggle="modal" data-target="#myModal2">提升</button>&nbsp;
                                    <button @click.prevent="ChangeIndex(i)" class="btn btn-warning" data-toggle="modal" data-target="#myModal3">撤销</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div v-show="stu" class="btn-group btnCount" role="group">
                        <button v-if="pno-1>0" @click.prevent="FindStudent(pno-1)" type="button" class="btn btn-info">上一页</button>
                        <button v-if="pno-2>0" @click.prevent="FindStudent(pno-2)" type="button" class="btn btn-info">{{pno-2}}</button>
                        <button v-if="pno-1>0" @click.prevent="FindStudent(pno-1)" type="button" class="btn btn-info">{{pno-1}}</button>
                        <button type="button"  @click.prevent="FindStudent(pno)" class="btn btn-info active">{{pno}}</button>
                        <button v-if="pno+1<=count" @click.prevent="FindStudent(pno+1)" type="button" class="btn btn-info">{{pno+1}}</button>
                        <button v-if="pno+2<=count" @click.prevent="FindStudent(pno+2)" type="button" class="btn btn-info">{{pno+2}}</button>
                        <button v-if="pno+1<=count" @click.prevent="FindStudent(pno+1)" type="button" class="btn btn-info">下一页</button>
                    </div>
                </div>
            </div>

            <!-- 踢出模态框 -->
            <div v-if="stu" class="modal fade" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
               <div class="modal-dialog" role="document">
                   <div class="modal-content">
                       <div class="modal-header">
                         <h3 class="modal-title" id="myModalLabel">学员信息</h3>
                        </div>
                        <div class="modal-body">
                            <h3>{{stu[index].stuName}}</h3>
                            <hr>
                            <p>编号：<input disabled="disabled" type="text" :value="stu[index].stuUid"></p>
                            <p>小组：<input disabled="disabled" type="text" :value="stu[index].groName"></p>
                            <p>班级：<input disabled="disabled" type="text" :value="claName"></p>
                            <p>等级：<input disabled="disabled" type="text" :value="stu[index].stuLevel|lvTrans"></p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                            <button @click.prevent="kickStudent(stu[index].stuUid)" class="btn btn-danger">确定踢出</button>
                        </div>
                   </div>
               </div>
           </div>

            <!-- 提升模态框 -->
           <div v-if="stu" class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
               <div class="modal-dialog" role="document">
                   <div class="modal-content">
                       <div class="modal-header">
                         <h3 class="modal-title" id="myModalLabel">学员信息</h3>
                        </div>
                        <div class="modal-body">
                            <h3>{{stu[index].stuName}}</h3>
                            <hr>
                            <p>编号：<input disabled="disabled" type="text" :value="stu[index].stuUid"></p>
                            <p>小组：<input disabled="disabled" type="text" :value="stu[index].groName"></p>
                            <p>班级：<input disabled="disabled" type="text" :value="claName"></p>
                            <p>等级：<input disabled="disabled" type="text" :value="stu[index].stuLevel|lvTrans"></p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                            <button class="btn btn-info" @click.prevent="UpStudent(stu[index].stuUid)">提升学委</button>
                        </div>
                   </div>
               </div>
           </div>

            <!-- 撤销模态框 -->
            <div v-if="stu" class="modal fade" id="myModal3" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
               <div class="modal-dialog" role="document">
                   <div class="modal-content">
                       <div class="modal-header">
                         <h3 class="modal-title" id="myModalLabel">学员信息</h3>
                        </div>
                        <div class="modal-body">
                            <h3>{{stu[index].stuName}}</h3>
                            <hr>
                            <p>编号：<input disabled="disabled" type="text" :value="stu[index].stuUid"></p>
                            <p>小组：<input disabled="disabled" type="text" :value="stu[index].groName"></p>
                            <p>班级：<input disabled="disabled" type="text" :value="claName"></p>
                            <p>等级：<input disabled="disabled" type="text" :value="stu[index].stuLevel|lvTrans"></p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                            <button class="btn btn-warning" @click.prevent="DownStudent(stu[index].stuUid)">撤销学委</button>
                        </div>
                   </div>
               </div>
           </div>
    </div>
</template>
<script>
import "../assets/css/AdminStudent.css";
import "../assets/css/bootstrap.css";
import "../apiFilter/myFilter.js" 

export default {
    data(){
        return{
            claName:null,
            cName:null, 
            index:0,
            pageCount:10,//数据大小
            pno:null,//数据页码
            count:null,//总页数
            stu:null
        }
    },
    methods:{
        ChangeIndex(i){
            this.index = i;
        },
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
        // Onloading(pno){
        //     let uid = sessionStorage.getItem('uid');
        //     let cid = sessionStorage.getItem('cid');
        //     let pageCount = this.pageCount;
        //         let arr = {
        //             pageCount,
        //             pno,
        //             uid,
        //             cid,
        //             do:"ShowStudent"
        //         }
        //         console.log(arr);

        //         let url = "http://176.128.18.86/SchoolOnline/";
        //         let urlback = "Php/admin.php";
        //         $.ajax({
        //             type: "post",
        //             url: url+urlback,
        //             data: arr,
        //             dataType: "json",
        //             async: false
        //         }).then((result) => {
        //             console.log(result);
        //             this.stu = result["student"];
        //             this.count = Math.ceil(result["howNum"]);
        //             this.pno = parseInt(result["pno"]);
        //             this.cName = result["class"];
        //             console.log( result["class"]);
        //             console.log(this.count);
        //         }); 
        // },
        FindStudent(pno){
            let stuUid = "";
            if($("input[name='stuUid']").length>0){
                stuUid = $("input[name='stuUid']")[0].value;
            }
            let stuName = "";
            if($("input[name='stuName']").length>0){
                stuName = $("input[name='stuName']")[0].value;
            }
            let claName = "";
            if($("select[name='claName'] option:selected").length>0){
                claName = $("select[name='claName'] option:selected")[0].value;  
            }
            let stuLevel ="";
            if($("input[name='stuLevel']").length>0){
                if($("input[name='stuLevel']")[0].value=="学生"){
                    stuLevel=1
                }
                else if($("input[name='stuLevel']")[0].value=="学委"){
                    stuLevel=3
                }
                else if($("input[name='stuLevel']")[0].value=="教师"){
                    stuLevel=5
                }
                else if($("input[name='stuLevel']")[0].value==""){
                    stuLevel=""
                }
                else{
                    alert("输入错误");
                    return;
                }
            }
            let cid = sessionStorage.getItem('cid');
            let uid = sessionStorage.getItem('uid');
            let level = sessionStorage.getItem('lve');
            let pageCount = this.pageCount;      
            let arr = {
                uid,
                level,
                cid,
                stuUid,
                claName,
                stuName,
                stuLevel,
                pageCount,
                pno,
                do:"ShowStudent"
            }
            console.log("我发送：")
            console.log(arr);
            let url = "http://176.128.18.86/SchoolOnline/";
            let urlback = "Php/admin.php";
            $.ajax({
                type: "post",
                url: url+urlback,
                data: arr,
                dataType: "json",
                async:false
            }).then((result) => {
                console.log("我接收：")
                console.log(result);
                if(result["talk"]=="NotHave"){
                    console.log("没有相关数据");
                }
                else{
                    this.stu = result["student"];
                    this.count = Math.ceil(result["howNum"]);
                    console.log(this.count);
                    this.pno = parseInt(result["pno"]);
                    console.log(this.pno);
                    this.cName = result["class"];
                    this.claName = result["classOne"]
                    // console.log(this.count);
                }
            }); 
        },
        kickStudent(uid){
            console.log(uid);
            console.log(document.querySelector("button[data-dismiss='modal']"))
            let arr={
                uid,
                how:"kickOut",
                do:"UpdateStudent"
            };
            
            console.log(arr);
            let url = "http://176.128.18.86/SchoolOnline/";
            let urlback = "Php/admin.php";
            $.ajax({
                type: "post",
                url: url+urlback,
                data: arr,
                dataType: "json",
                async:false
            }).then((result) => {
                console.log("我接收：")
                console.log(result);
                if(result["talk"]=="Ok"){
                    alert("已踢出此班级！")
                    // $("button[data-dismiss='modal']")[0].click();
                    $('#myModal1').modal('hide')
                    this.FindStudent(1);
                }
            }); 
        },
        UpStudent(uid){
            console.log(uid);
            console.log(document.querySelector("button[data-dismiss='modal']"))
            let arr={
                uid,
                how:"upgrade",
                do:"UpdateStudent"
            };
            console.log(arr);
            let url = "http://176.128.18.86/SchoolOnline/";
            let urlback = "Php/admin.php";
            $.ajax({
                type: "post",
                url: url+urlback,
                data: arr,
                dataType: "json",
                async:false
            }).then((result) => {
                console.log("我接收：")
                console.log(result);
                if(result["talk"]=="Ok"){
                    alert("已提升为学委！")
                    // $("button[data-dismiss='modal']")[0].click();
                    $('#myModal2').modal('hide')
                    this.FindStudent(1);
                }
                else{
                    alert("此学生已是学委，无法提升");
                }
            }); 
        },
        DownStudent(uid){
            console.log(uid);
            console.log(document.querySelector("button[data-dismiss='modal']"))
            let arr={
                uid,
                how:"downgrade",
                do:"UpdateStudent"
            };
            console.log(arr);
            let url = "http://176.128.18.86/SchoolOnline/";
            let urlback = "Php/admin.php";
            $.ajax({
                type: "post",
                url: url+urlback,
                data: arr,
                dataType: "json",
                async:false
            }).then((result) => {
                console.log("我接收：")
                console.log(result);
                if(result["talk"]=="Ok"){
                    alert("已撤销学委！")
                    // $("button[data-dismiss='modal']")[0].click();
                    $('#myModal3').modal('hide')
                    this.FindStudent(1);
                }
                else{
                    alert("此学生不是学委,无法撤销");
                }
            }); 
        }

    },
    beforeMount() {
        this.FindStudent(1) 
    },
};
</script>