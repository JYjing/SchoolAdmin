<template>
    <div class="downwork-main">
        <div class="down-flex">
            <select name="" id="">
                <option value="">课程一</option>
                <option value="">课程一</option>
                <option value="">课程一</option>
            </select>
            <select disabled="disabled" name="" id="">
                <option value="">软件171</option>
                <option value="">软件171</option>
                <option value="">软件171</option>
            </select>
            <button class="btn btn-info">查找</button>
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
                    <tr>
                        <td>01</td>
                        <td>王王王</td>
                        <td>课程一</td>
                        <td><button class="btn btn-success" >下载</button></td>
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
                index:0,
                pageCount:10,
                pno:2
            }
        },
    }
</script>