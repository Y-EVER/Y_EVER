<template>
    <div class="top_fix flex flex_b_c">
        <div class="top_left d_fix">
          <img src="../assets/images/logo.png" alt="">
        </div>
        <div class="top_right d_fix flex_b_c">
          <ul class="top_ul_one d_fix">
            <li><a href=""><i class="el-icon-chat-dot-square"></i></a></li>
            <li><a href=""><i class="el-icon-message-solid"></i></a></li>
            <li><a href=""><i class="el-icon-s-grid"></i></a></li>
          </ul>
          <ul class="top_ul_two d_fix">
            <li><img src="../assets/images/qing.jpg" alt=""></li>
            <li><span>退出登录</span></li>
          </ul>
        </div>
      </div>
</template>
<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
.top_fix{background: #fff;padding: 0 10px;}
.top_fix,.top_left{height: 100%;}
.top_left{width: 209px;box-shadow: 1px 0 2px 0 rgba(0,0,0,0.14);}
.top_left img{height:70%;width: 90%}
.top_right{height:100%;}
.top_right > ul{display: flex;}
.top_ul_one{border-right:1px solid #f2f2f2;padding-right:10px;height:100%;}
.top_ul_one > li{margin-left:8px;}.top_ul_one > li > a i{font-size:20px;}
.top_ul_two{margin-left: 10px;}
.top_ul_two > li{margin-right:10px}
.top_ul_two > li img{width: 35px;height: 35px;border-radius: 50%;border:1px solid #f2f2f2;}
.top_ul_two > li span{color: #181818;}

</style>