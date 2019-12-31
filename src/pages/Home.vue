<template>
  <el-container id="top">
    <el-header>
      <elheader />
    </el-header>
    <el-container>
      <el-aside width="220px">
        <left />  
      </el-aside>
      <el-container>
        <el-main>
          <!-- 路由出口 -->
          <router-view />
        </el-main>
        <el-footer>
          <foot />
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import elheader from "../components/Top.vue";
import foot from "../components/Footer.vue";
import left from "../components/Left.vue";
export default {
  name: "top",
  components: {
    elheader,
    foot,
    left
  }
};
</script>

<style lang="less" scoped>
.el-container {
  width: 100%;
  height: 100%;
}
.el-header {
  height: 60px;
  color: #fff;
  padding: 0;
  border-bottom: 1px solid #f2f2f2;
  box-shadow: 1px 0 2px 0 rgba(0, 0, 0, 0.14);
}
.el-footer {
  height: 45px !important;
  width: 100%;
  background: #fff;
}
</style>