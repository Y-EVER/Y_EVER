<template>
  <div class="top_fix flex flex_b_c">
    <div class="top_left d_fix">
      <img src="../assets/images/logo.png" alt />
    </div>
    <div class="top_right d_fix flex_b_c">
      <ul class="top_ul_one d_fix">
        <li>
            <i @click="drawer = true" class="el-icon-chat-dot-square"></i>
        </li>
        <li>
            <i @click="drawer_t = true" class="el-icon-message-solid"></i>
        </li>
        <li>
            <i @click="drawer_r = true" class="el-icon-s-grid"></i>
        </li>
      </ul>
      <ul class="top_ul_two d_fix">
        <li>
          <img src="../assets/images/qing.jpg" alt />
        </li>
        <li>
          <span>退出登录</span>
        </li>
      </ul>
    </div>

    <!-- 右侧弹框一 -->
    <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false">
        <span style="color:#000">我来啦!</span>
    </el-drawer>
    <!-- 右侧弹框二 -->
    <el-drawer title="我是标题" :visible.sync="drawer_t" :with-header="false">
        <span style="color:#000">我来啦222!</span>
    </el-drawer>
    <!-- 右侧弹框三 -->
    <el-drawer title="我是标题" :visible.sync="drawer_r" :with-header="false">
        <span style="color:#000">我来啦333!</span>
    </el-drawer>
  </div>
</template>
<script>
export default {
  data() {
      return {
        drawer: false,
        drawer_t: false,
        drawer_r: false,
      };
    }
};
</script>

<style lang="less" scoped>
.top_fix {
  background: #fff;
  padding: 0 10px;
}
.top_fix,
.top_left {
  height: 100%;
}
.top_left {
  width: 209px;
  box-shadow: 1px 0 2px 0 rgba(0, 0, 0, 0.14);
}
.top_left img {
  height: 70%;
  width: 90%;
}
.top_right {
  height: 100%;
}
.top_right > ul {
  display: flex;
}
.top_ul_one {
  border-right: 1px solid #f2f2f2;
  padding-right: 10px;
  height: 100%;
}
.top_ul_one > li {
  margin-left: 8px;
}
.top_ul_one > li > i {
  font-size: 20px;
  color: black;
}
.top_ul_two {
  margin-left: 10px;
}
.top_ul_two > li {
  margin-right: 10px;
}
.top_ul_two > li img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid #f2f2f2;
}
.top_ul_two > li span {
  color: #181818;
}
</style>