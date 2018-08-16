<template>
    <div class="disban-main">
        <div class="d-main">
           <div class="dmain-flex">
                <label for="stuClass">班级</label>
                <select @change="groupChange()" id="stuClass">
                    <option  v-for="(item, index) in cName" :key="index" :value="item.name">{{item.name}}</option>
                </select>
                <label for="stuGroup">小组</label>
                <select  id="stuGroup">
                    <option v-for="(item, index) in group" :data-gid="item.gid" :key="index" :value="item.name">{{item.name}}</option>
                </select>
                <button class="btn btn-info" @click.prevent="LoadGroup(1)" >查看小组成员</button>
                <button class="btn btn-info" @click.prevent="CheckGroupPwd()" data-toggle="modal" data-target="#seeGrouppwd">查看小组密匙</button>
                <button class="btn btn-danger" data-toggle="modal" data-target="#deleGroup">删除小组</button>
           </div>
            <hr>
            <table class="table">
                <thead>
                    <tr>
                        <th>编号</th>
                        <th>姓名</th>
                        <th>班级</th>
                        <th>小组</th>
                        <th>等级</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="!stu">
                        <td>没有任何数据</td>
                    </tr>
                    <tr v-else v-for="(item, i) in stu" :key="i">
                        <td>{{item.stuUid}}</td>
                        <td>{{item.stuName}}</td>
                        <td>{{claName}}</td>
                        <td>{{graName}}</td>
                        <td>{{item.stuLevel|lvTrans}}</td>
                        <td>
                            <button @click.prevent="changeId(item.stuUid)" class="btn btn-warning" data-toggle="modal" data-target="#kickStu">踢出小组</button>&nbsp;
                        </td>
                    </tr>
                </tbody>
            </table>
            <div v-if="stu"  class="btn-group btnCount" role="group">
                <button v-if="pno-1>0" @click.prevent="LoadGroup(pno-1)" type="button" class="btn btn-info">上一页</button>
                <button v-if="pno-2>0" @click.prevent="LoadGroup(pno-2)" type="button" class="btn btn-info">{{pno-2}}</button>
                <button v-if="pno-1>0" @click.prevent="LoadGroup(pno-1)" type="button" class="btn btn-info">{{pno-1}}</button>
                <button type="button"  @click.prevent="LoadGroup(pno)" class="btn btn-info active">{{pno}}</button>
                <button v-if="pno+1<=count" @click.prevent="LoadGroup(pno+1)" type="button" class="btn btn-info">{{pno+1}}</button>
                <button v-if="pno+2<=count" @click.prevent="LoadGroup(pno+2)" type="button" class="btn btn-info">{{pno+2}}</button>
                <button v-if="pno+1<=count" @click.prevent="LoadGroup(pno+1)" type="button" class="btn btn-info">下一页</button>
            </div>
           <!-- 踢出成员模态框 -->
            <div v-if="stu" class="modal fade" id="kickStu" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
               <div class="modal-dialog" role="document">
                   <div class="modal-content">
                       <div class="modal-header">
                         <h3 class="modal-title" id="myModalLabel">警告</h3>
                        </div>
                        <div class="modal-body">
                            <h3>确定要将编号为"{{stu[index].stuUid}}"的"{{stu[index].stuName}}"学员踢出本小组么？</h3>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                            <button type="button" @click.prevent="kickOutGroup" class="btn btn-danger">确定踢出</button>
                        </div>
                   </div>
               </div>
            </div>
            <!-- 删除小组模态框 -->
            <div v-if="stu"  class="modal fade" id="deleGroup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
               <div class="modal-dialog" role="document">
                   <div class="modal-content">
                       <div class="modal-header">
                         <h3 class="modal-title" id="myModalLabel">警告</h3>
                        </div>
                        <div class="modal-body">
                            <h3>确定要删除本小组么？</h3>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                            <button type="button" @click.prevent="deleGroup()" class="btn btn-danger">确定删除</button>
                        </div>
                   </div>
               </div>
            </div>
            <!-- 查看小组密匙模态框 -->
            <div v-if="stu" class="modal fade" id="seeGrouppwd" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
               <div class="modal-dialog" role="document">
                   <div class="modal-content">
                       <div class="modal-header">
                         <h3 class="modal-title" id="myModalLabel">查看密匙</h3>
                        </div>
                        <div class="modal-body">
                            <h3>{{gropName}}</h3>
                            <hr>
                            <p>密码：<input disabled="disabled" type="text" :value="gropkey"></p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                        </div>
                   </div>
               </div>
            </div>
       
        </div>
    </div>
</template>
<script>
    import "../assets/css/AdminGroup.css"
    import "../assets/css/bootstrap.css"
    import "../apiFilter/myFilter.js"

    export default {
        data(){
            return{
                gropkey:null,
                gropName:null,
                graName:null,
                claName:null,
                group:null,
                cName:null,
                index:0,
                pageCount:10,//数据大小
                pno:null,//数据页码
                count:null,//总页数
                stu:null
             }
        },
        methods:{
            changeId(i){
                this.index = i;
            },
            kickOutGroup(){
                let uid = this.index;
                let gid = $("#stuGroup option:selected").data("gid");
                let arr={
                    gid,
                    uid,
                    how:"kickOutGroup",
                     do:"UpdateStudent",
                }
                console.log(arr);
                let url = "http://176.128.18.86/SchoolOnline/";
                let urlback = "Php/admin.php";
                $.ajax({
                    type: "post",
                    url: url+urlback,
                    data: arr,
                    dataType: "json",
                    // async:false
                }).then(result=>{
                    // console.log(result);
                    if(result["talk"]=="Ok"){
                        alert("已踢出该学生");
                        $('#kickStu').modal('hide');
                        window.location.reload();
                    }   
                    else{
                        alert("该学生已不在本小组");
                    }
                })
            },
            deleGroup(){
                let gid = $("#stuGroup option:selected").data("gid");
                console.log(gid);
                let url = "http://176.128.18.86/SchoolOnline/";
                let urlback = "Php/admin.php";
                let arr={
                    gid,
                    how:"deleteGroup",
                    do:"UpdateStudent"
                }
                $.ajax({
                    type: "post",
                    url: url+urlback,
                    data: arr,
                    dataType: "json",
                    // async:false
                }).then(result=>{
                    // console.log(result);
                    if(result["talk"]=="Ok"){
                        alert("已成功删除本小组");
                        $('#deleGroup').modal('hide');
                        window.location.reload();
                    }   
                    else{
                        alert("不存在小组");
                    }
                })
            },
            CheckGroupPwd(){
                let gid = $("#stuGroup option:selected").data("gid");
                console.log(gid);
                let url = "http://176.128.18.86/SchoolOnline/";
                let urlback = "Php/admin.php";
                let arr={
                    gid,
                    do:"ShowGroupKey"
                }
                $.ajax({
                    type: "post",
                    url: url+urlback,
                    data: arr,
                    dataType: "json",
                    // async:false
                }).then(result=>{
                    console.log(result);
                    this.gropkey = result["group"]["groupkey"];
                    console.log(this.gropkey)
                    this.gropName = result["group"]["name"];
                    console.log(this.gropName)

                })
            },
            groupChange(){
                let claName =""
                if($("#stuClass option:selected").length>0){
                    claName = $("#stuClass option:selected")[0].value;
                }
                let cid = sessionStorage.getItem('cid');
                let uid = sessionStorage.getItem('uid');
                let level = sessionStorage.getItem('lve');
                let pageCount = this.pageCount;      
                let arr = {
                    showGroup:"Y",
                    updateGroup:"Y",
                    claName,
                    uid,
                    level,
                    cid,
                    pageCount,
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
                    // async:false
                }).then((result) => {
                    console.log("我接收：")
                    console.log(result);
                    if(result["talk"]=="NotGroup"){
                        alert("没有相关数据");
                          this.group = "";
                    }
                    else{
                        this.group = result["group"];
                        // console.log(this.count);
                    }
                });
            },
            LoadGroup(pno){
                let claName =""
                 if($("#stuClass option:selected").length>0){
                    claName = $("#stuClass option:selected")[0].value;
                }
                let stuGroup =""
                if($("#stuGroup option:selected").length>0){
                    stuGroup = $("#stuGroup option:selected")[0].value;
                }
                let cid = sessionStorage.getItem('cid');
                let uid = sessionStorage.getItem('uid');
                let level = sessionStorage.getItem('lve');
                let pageCount = this.pageCount;      
                let arr = {
                    showGroup:"Y",
                    claName,
                    stuGroup,
                    uid,
                    level,
                    cid,
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
                    if(result["talk"]=="NotGroup"){
                        alert("没有相关数据");
                    }
                    else{
                        this.stu = result["student"];
                        this.count = Math.ceil(result["howNum"]);
                        console.log(this.count);
                        this.pno = parseInt(result["pno"]);
                        console.log(this.pno);
                        this.cName = result["class"];
                        this.group = result["group"];
                        this.claName = result["classOne"];
                        this.graName = result["groupOne"];
                        // console.log(this.count);
                    }
                }); 
            }
        },
        beforeMount() {
            this.LoadGroup(1); 
        }     
    }
</script>