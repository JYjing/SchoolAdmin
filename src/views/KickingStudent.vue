<template>
    <div class="kick-main">
           <div class="kick-search">
                <div class="kick-input-search">
                    编号：<input @blur="blurColor" @focus="focusColor" type="text">
                    班级：<input @blur="blurColor" @focus="focusColor" type="text">
                    等级：<input @blur="blurColor" @focus="focusColor" type="text">
                    姓名：<input @blur="blurColor" @focus="focusColor" type="text">
                    <button class="btn btn-info">搜索</button>
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
                            <tr v-for="(item, i) in stu" :key="i">
                                <td>{{item.sid}}</td>
                                <td>{{item.sname}}</td>
                                <td>{{item.class}}</td>
                                <td>{{item.Lv|lvTrans}}</td>
                                <td>{{item.grop}}</td>
                                <td class="btnModal">
                                    <button @click.prevent="ChangeIndex(i)" class="btn btn-danger" data-toggle="modal" data-target="#myModal1">踢出</button>&nbsp;
                                    <button @click.prevent="ChangeIndex(i)" class="btn btn-success" data-toggle="modal" data-target="#myModal2">提升</button>&nbsp;
                                    <button @click.prevent="ChangeIndex(i)" class="btn btn-warning" data-toggle="modal" data-target="#myModal3">撤销</button>
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
                </div>
            </div>

            <!-- 踢出模态框 -->
            <div class="modal fade" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
               <div class="modal-dialog" role="document">
                   <div class="modal-content">
                       <div class="modal-header">
                         <h3 class="modal-title" id="myModalLabel">学员信息</h3>
                        </div>
                        <div class="modal-body">
                            <h3>{{stu[index].sname}}</h3>
                            <hr>
                            <p>编号：<input disabled="disabled" type="text" :value="stu[index].sid"></p>
                            <p>小组：<input disabled="disabled" type="text" :value="stu[index].grop"></p>
                            <p>班级：<input disabled="disabled" type="text" :value="stu[index].class"></p>
                            <p>等级：<input disabled="disabled" type="text" :value="stu[index].Lv"></p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                            <button class="btn btn-info">确定踢出</button>
                        </div>
                   </div>
               </div>
           </div>

            <!-- 提升模态框 -->
           <div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
               <div class="modal-dialog" role="document">
                   <div class="modal-content">
                       <div class="modal-header">
                         <h3 class="modal-title" id="myModalLabel">学员信息</h3>
                        </div>
                        <div class="modal-body">
                            <h3>{{stu[index].sname}}</h3>
                            <hr>
                            <p>编号：<input disabled="disabled" type="text" :value="stu[index].sid"></p>
                            <p>小组：<input disabled="disabled" type="text" :value="stu[index].grop"></p>
                            <p>班级：<input disabled="disabled" type="text" :value="stu[index].class"></p>
                            <p>等级：<input disabled="disabled" type="text" :value="stu[index].Lv"></p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                            <button class="btn btn-info">提升学委</button>
                        </div>
                   </div>
               </div>
           </div>

            <!-- 撤销模态框 -->
            <div class="modal fade" id="myModal3" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
               <div class="modal-dialog" role="document">
                   <div class="modal-content">
                       <div class="modal-header">
                         <h3 class="modal-title" id="myModalLabel">学员信息</h3>
                        </div>
                        <div class="modal-body">
                            <h3>{{stu[index].sname}}</h3>
                            <hr>
                            <p>编号：<input disabled="disabled" type="text" :value="stu[index].sid"></p>
                            <p>小组：<input disabled="disabled" type="text" :value="stu[index].grop"></p>
                            <p>班级：<input disabled="disabled" type="text" :value="stu[index].class"></p>
                            <p>等级：<input disabled="disabled" type="text" :value="stu[index].Lv"></p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                            <button class="btn btn-info">撤销学委</button>
                        </div>
                   </div>
               </div>
           </div>
    </div>
</template>
<script>
import "../assets/css/kickingStudent.css";
import "../assets/css/bootstrap.css";
import "../apiFilter/myFilter.js"

export default {
    data(){
        return{
            index:0,
            pageCount:10,
            pno:2,
            stu:[
                {sid:"01",sname:"王小妹1",grop:"第一组",Lv:"1",class:"软件171"},
                {sid:"02",sname:"王小妹2",grop:"第一组",Lv:"1",class:"软件171"},
                {sid:"03",sname:"王小妹3",grop:"第一组",Lv:"1",class:"软件171"},
                {sid:"04",sname:"王小妹4",grop:"第一组",Lv:"1",class:"软件171"},
                {sid:"05",sname:"王小妹5",grop:"第一组",Lv:"1",class:"软件171"},
                {sid:"06",sname:"王小妹6",grop:"第一组",Lv:"1",class:"软件171"},
                {sid:"07",sname:"王小妹7",grop:"第一组",Lv:"1",class:"软件171"},
                {sid:"08",sname:"王小妹8",grop:"第一组",Lv:"1",class:"软件171"},
                {sid:"09",sname:"王小妹9",grop:"第一组",Lv:"1",class:"软件171"},
                {sid:"10",sname:"王小妹10",grop:"第一组",Lv:"1",class:"软件171"},
                {sid:"11",sname:"王小妹10",grop:"第一组",Lv:"1",class:"软件171"},
                {sid:"12",sname:"王小妹10",grop:"第一组",Lv:"1",class:"软件171"},
                {sid:"13",sname:"王小妹10",grop:"第一组",Lv:"1",class:"软件171"},
            ]
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
    }
};
</script>