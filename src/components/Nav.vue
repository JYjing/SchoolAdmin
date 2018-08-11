<template> 
       <div class="nav">
	        <div class="nav-top">
	            <div id="mini" style="border-bottom:1px solid rgba(255,255,255,.1)"><img src="../assets/images/mini.png" ></div>
	        </div>
	        <ul>
	            <li class="nav-item">
	                <a href="javascript:;"><i class="my-icon nav-icon icon_1"></i><span>学生管理</span><i class="my-icon nav-more"></i></a>
	                <ul>
                      <li><router-link to="/main/admstudent"><span>所有学生</span></router-link></li>
	                </ul>
	            </li>
	            <li class="nav-item">
	                <a href="javascript:;"><i class="my-icon nav-icon icon_2"></i><span>小组管理</span><i class="my-icon nav-more"></i></a>
	                <ul>
	                    <li><router-link to="/main/admgroup"><span>所有小组</span></router-link></li>
	                </ul>
	            </li>
	            <li class="nav-item">
	                <a href="javascript:;"><i class="my-icon nav-icon icon_3"></i><span>课程资源</span><i class="my-icon nav-more"></i></a>
	                <ul>
	                    <li><router-link to="/main/uplcourse"><span>课程上传</span></router-link></li>
	                    <li><router-link to="/main/admcourse"><span>课程管理</span></router-link></li>
	                    <li><router-link to="/main/down"><span>作业下载</span></router-link></li>
	                </ul>
	            </li>
                <li class="nav-item">
	                <a href="javascript:;"><i class="my-icon nav-icon icon_3"></i><span>班级管理</span><i class="my-icon nav-more"></i></a>
	                <ul>
	                    <li><router-link to="/main/admclass"><span>所有班级</span></router-link></li>
	                    <li><router-link to="/main/creclass"><span>创建班级</span></router-link></li>
	                </ul>
	            </li>
	          </ul>
	      </div>
</template>
<script>
import "../assets/css/nav.css";
import "../assets/fonts/iconfont.css";
import "../assets/js/jquery-3.2.1.js"
import "../assets/js/jquery-1.11.3.js"

export default {
  data() {
    return {};
  },
  mounted() {
    (() => {
      $(".nav-item>a").on("click", function() {
        if (!$(".nav").hasClass("nav-mini")) {
          if (
            $(this)
              .next()
              .css("display") == "none"
          ) {
            //展开未展开
            $(".nav-item")
              .children("ul")
              .slideUp(300);
            $(this)
              .next("ul")
              .slideDown(300);
            $(this)
              .parent("li")
              .addClass("nav-show")
              .siblings("li")
              .removeClass("nav-show");
          } else {
            //收缩已展开
            $(this)
              .next("ul")
              .slideUp(300);
            $(".nav-item.nav-show").removeClass("nav-show");
          }
        }
      });
      //nav-mini切换
      $("#mini").on("click", function() {
        if (!$(".nav").hasClass("nav-mini")) {
          $(".nav-item.nav-show").removeClass("nav-show");
          $(".nav-item")
            .children("ul")
            .removeAttr("style");
          $(".nav").addClass("nav-mini");
        } else {
          $(".nav").removeClass("nav-mini");
        }
	  });
    })();
  }
};
</script>
<style scoped>
	.nav-top img {
	position: relative;
	z-index: 99;
}
</style>