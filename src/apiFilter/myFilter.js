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

Vue.filter("dateTrans",function(value){
    let date = new Date(value);
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();
    let newdate = `${year}-${month}-${day}`;
    return newdate;
})

Vue.filter("videoTrans",function(value){
    if(value==1){
        return "腾讯视频"
    }
    else{
        return "其他视频"
    }
})

Vue.filter("fileTrans",function(value){
    if(value==0){
        return "无文件"
    }
    else{
        let file = decodeURI(value);
        let newfile = file.split("/");
        return newfile[2];
    }
})