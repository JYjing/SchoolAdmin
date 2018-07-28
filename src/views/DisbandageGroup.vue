<template>
    <div class="disban-main">
        <div class="d-main">
            <label for="stuGroup">小组:</label>
            <select name="sGroup" id="stuGroup">
                <option value="">第一组</option>
                <option value="">第二组</option>
                <option value="">第三组</option>
                <option value="">第四组</option>
            </select>
            <button class="">查看小组成员</button>
            <button class="">删除小组</button>
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
                    <tr>
                        <td>01</td>
                        <td>王大枪</td>
                        <td>软件171</td>
                        <td>学生</td>
                        <td>
                            <button>踢出小组</button>
                            <button>查看密匙</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    import "../assets/css/DisbandageGroup.css"
    import "../assets/css/bootstrap.css"

    export default {
        data(){
            return{
                
            }
        }
    }
</script>