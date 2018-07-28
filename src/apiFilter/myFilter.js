import Vue from "vue";

Vue.filter("lvTrans",function(value){
    if(value==1){
        return "学生"
    }
    else if(value==3){
        return "学委"
    }
    else if(value==5){
        return "教师"
    }
})