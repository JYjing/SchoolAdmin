<template>
    <div class="admvideo-main">
        <div class="video-search">
            <span>班级</span>
            <select>
                <option value="">软件171</option>
                <option value="">软件171</option>
                <option value="">软件171</option>
            </select>
             <span>课程</span>
            <select>
                <option value="">课程1</option>
                <option value="">课程1</option>
                <option value="">课程1</option>
            </select>
            <button class="btn btn-info">查找视频</button>
            <button class="btn btn-info">查看所有视频</button>
        </div>
        <span class="result-font">
            <p>查找结果：</p>
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
        <div class="video-result">
            <table class="table">
                <thead>
                    <tr>
                        <th>班级</th>
                        <th>课程</th>
                        <th>视频链接</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>软件171</td>
                        <td>课程1</td>
                        <td>www.baidu.com</td>
                        <td class="btnModal">
                            <button @click.prevent="ChangeIndex(i)" class="btn btn-danger" data-toggle="modal" data-target="#myModal1">删除</button>&nbsp;
                        </td>
                    </tr>
                    <tr>
                        <td>软件171</td>
                        <td>课程1</td>
                        <td>www.baidu.com</td>
                        <td class="btnModal">
                            <button @click.prevent="ChangeIndex(i)" class="btn btn-danger" data-toggle="modal" data-target="#myModal1">删除</button>&nbsp;
                        </td>
                    </tr>
                    <tr>
                        <td>软件171</td>
                        <td>课程1</td>
                        <td>www.baidu.com</td>
                        <td class="btnModal">
                            <button @click.prevent="ChangeIndex(i)" class="btn btn-danger" data-toggle="modal" data-target="#myModal1">删除</button>&nbsp;
                        </td>
                    </tr>
                    <tr>
                        <td>软件171</td>
                        <td>课程1</td>
                        <td>www.baidu.com</td>
                        <td class="btnModal">
                            <button @click.prevent="ChangeIndex(i)" class="btn btn-danger" data-toggle="modal" data-target="#myModal1">删除</button>&nbsp;
                        </td>
                    </tr>
                    <tr>
                        <td>软件171</td>
                        <td>课程1</td>
                        <td>www.baidu.com</td>
                        <td class="btnModal">
                            <button @click.prevent="ChangeIndex(i)" class="btn btn-danger" data-toggle="modal" data-target="#myModal1">删除</button>&nbsp;
                        </td>
                    </tr>
                    <tr>
                        <td>软件171</td>
                        <td>课程1</td>
                        <td>www.baidu.com</td>
                        <td class="btnModal">
                            <button @click.prevent="ChangeIndex(i)" class="btn btn-danger" data-toggle="modal" data-target="#myModal1">删除</button>&nbsp;
                        </td>
                    </tr>
                    <tr>
                        <td>软件171</td>
                        <td>课程1</td>
                        <td>www.baidu.com</td>
                        <td class="btnModal">
                            <button @click.prevent="ChangeIndex(i)" class="btn btn-danger" data-toggle="modal" data-target="#myModal1">删除</button>&nbsp;
                        </td>
                    </tr>
                    <tr>
                        <td>软件171</td>
                        <td>课程1</td>
                        <td>www.baidu.com</td>
                        <td class="btnModal">
                            <button @click.prevent="ChangeIndex(i)" class="btn btn-danger" data-toggle="modal" data-target="#myModal1">删除</button>&nbsp;
                        </td>
                    </tr>
                    <tr>
                        <td>软件171</td>
                        <td>课程1</td>
                        <td>www.baidu.com</td>
                        <td class="btnModal">
                            <button @click.prevent="ChangeIndex(i)" class="btn btn-danger" data-toggle="modal" data-target="#myModal1">删除</button>&nbsp;
                        </td>
                    </tr>
                    <tr>
                        <td>软件171</td>
                        <td>课程1</td>
                        <td>www.baidu.com</td>
                        <td class="btnModal">
                            <button @click.prevent="ChangeIndex(i)" class="btn btn-danger" data-toggle="modal" data-target="#myModal1">删除</button>&nbsp;
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
