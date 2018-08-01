<template>
    <div class="disban-main">
        <div class="d-main">
           <div class="dmain-flex">
                <label for="stuClass">班级</label>
                <select disabled="disabled" name="sGroup" id="stuClass">
                    <option value="">软件171</option>
                    <option value="">软件171</option>
                    <option value="">软件171</option>
                    <option value="">软件171</option>
                </select>
                <label for="stuGroup">小组</label>
                <select name="sGroup" id="stuGroup">
                    <option value="">第一组</option>
                    <option value="">第二组</option>
                    <option value="">第三组</option>
                    <option value="">第四组</option>
                </select>
                <button class="btn btn-info">查看小组成员</button>
                <button class="btn btn-info" data-toggle="modal" data-target="#seeGrouppwd">查看小组密匙</button>
                <button class="btn btn-danger" data-toggle="modal" data-target="#deleGroup">删除小组</button>
           </div>
            <hr>
            <table class="table">
                <thead>
                    <tr>
                        <th>编号</th>
                        <th>姓名</th>
                        <th>班级</th>
                        <th>等级</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, i) in stu" :key="i">
                        <td>{{item.sid}}</td>
                        <td>{{item.sname}}</td>
                        <td>{{item.class}}</td>
                        <td>{{item.Lv|lvTrans}}</td>
                        <td>
                            <button @click.prevent="changeId(i)" class="btn btn-warning" data-toggle="modal" data-target="#kickStu">踢出小组</button>&nbsp;
                            <button @click.prevent="changeId(i)" type="button" class="btn btn-success" data-toggle="modal" data-target="#stuPwd">查看密匙</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="btn-group btnCount" role="group" aria-label="...">
                <button v-if="pno-1>0" type="button" class="btn btn-info">上一页</button>
                <button v-if="pno-2>0" type="button" class="btn btn-info">{{pno-2}}</button>
                <button v-if="pno-1>0" type="button" class="btn btn-info">{{pno-1}}</button>
                <button type="button" class="btn btn-info active">{{pno}}</button>
                <button v-if="pno+1<=pageCount" type="button" class="btn btn-info">{{pno+1}}</button>
                <button v-if="pno+2<=pageCount" type="button" class="btn btn-info">{{pno+2}}</button>
                <button v-if="pno+1<=pageCount" type="button" class="btn btn-info">下一页</button>
            </div>

            <!-- 查看个人密匙模态框 -->
            <div class="modal fade" id="stuPwd" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
               <div class="modal-dialog" role="document">
                   <div class="modal-content">
                       <div class="modal-header">
                         <h3 class="modal-title" id="myModalLabel">查看密匙</h3>
                        </div>
                        <div class="modal-body">
                            <h3>{{stu[index].sname}}</h3>
                            <hr>
                            <p>密码：<input disabled="disabled" type="text" :value="stu[index].pwd"></p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                        </div>
                   </div>
               </div>
           </div>
           <!-- 踢出成员模态框 -->
            <div class="modal fade" id="kickStu" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
               <div class="modal-dialog" role="document">
                   <div class="modal-content">
                       <div class="modal-header">
                         <h3 class="modal-title" id="myModalLabel">警告</h3>
                        </div>
                        <div class="modal-body">
                            <h3>确定要将编号为"{{stu[index].sid}}"的"{{stu[index].sname}}"学员踢出本小组么？</h3>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                            <button type="button" class="btn btn-danger">确定踢出</button>
                        </div>
                   </div>
               </div>
            </div>
            <!-- 删除小组模态框 -->
            <div class="modal fade" id="deleGroup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
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
                            <button type="button" class="btn btn-danger">确定删除</button>
                        </div>
                   </div>
               </div>
            </div>
            <!-- 查看小组密匙模态框 -->
            <div class="modal fade" id="seeGrouppwd" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
               <div class="modal-dialog" role="document">
                   <div class="modal-content">
                       <div class="modal-header">
                         <h3 class="modal-title" id="myModalLabel">查看密匙</h3>
                        </div>
                        <div class="modal-body">
                            <h3>第三组</h3>
                            <hr>
                            <p>密码：<input disabled="disabled" type="text" :value="stu[index].pwd"></p>
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
                index:0,
                pageCount:10,
                pno:2,
                stu:[
                    {sid:"01",sname:"王小妹1",Lv:"1",class:"软件171",pwd:"123a"},
                    {sid:"02",sname:"王小妹2",Lv:"1",class:"软件171",pwd:"123b"},
                    {sid:"03",sname:"王小妹3",Lv:"1",class:"软件171",pwd:"123c"},
                    {sid:"04",sname:"王小妹4",Lv:"1",class:"软件171",pwd:"123d"},
                    {sid:"06",sname:"王小妹6",Lv:"1",class:"软件171",pwd:"123e"},
                    {sid:"05",sname:"王小妹5",Lv:"1",class:"软件171",pwd:"123f"},
                    {sid:"07",sname:"王小妹7",Lv:"1",class:"软件171",pwd:"123g"},
                    {sid:"08",sname:"王小妹8",Lv:"1",class:"软件171",pwd:"123h"},
                    {sid:"09",sname:"王小妹9",Lv:"1",class:"软件171",pwd:"123i"},
                    {sid:"10",sname:"王小妹10",Lv:"1",class:"软件171",pwd:"123j"},
                ]
             }
        },
        methods:{
            changeId(i){
                this.index = i;
            }
        }        
    }
</script>