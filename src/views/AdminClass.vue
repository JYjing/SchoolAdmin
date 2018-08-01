<template>
    <div class="adminclass-main">
        <h3>所有班级信息：</h3>
        <hr>
        <table class="table">
            <thead>
                <tr>
                    <td>班级</td>
                    <td>班级密匙</td>
                    <td>班主任密匙</td>
                    <td>班主任</td>
                    <td>班级人数</td>
                    <td>小组数</td>
                    <td>操作</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>软件171</td>
                    <td>asjxna57121</td>
                    <td>asda456156</td>
                    <td>王大枪</td>
                    <td>56人</td>
                    <td>7组</td>
                    <td><button class="btn btn-danger" data-toggle="modal" data-target="#deleClass">删除</button></td>
                </tr>
            </tbody>
        </table>
        <div class="modal fade" id="deleClass" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
               <div class="modal-dialog" role="document">
                   <div class="modal-content">
                       <div class="modal-header">
                         <h3 class="modal-title" id="myModalLabel">警告</h3>
                        </div>
                        <div class="modal-body">
                            <h3>确定要删除此班级么？</h3>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                            <button type="button" class="btn btn-danger">确定删除</button>
                        </div>
                   </div>
               </div>
        </div>
    </div>
</template>
<script>
    import "../assets/css/AdminClass.css"
    import "../assets/css/bootstrap.css"
    export default {
        
    }
</script>
