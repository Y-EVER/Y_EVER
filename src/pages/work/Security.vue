<template>
  <el-tabs id='app' type="border-card">
    <el-tab-pane label="安保管理"><control /></el-tab-pane>
    <el-tab-pane label="消防管理"><fire_m /></el-tab-pane>
    <el-tab-pane label="人员档案">角色管理</el-tab-pane>
    <el-tab-pane label="排班定岗">定时任务补偿</el-tab-pane>
    <router-view />
  </el-tabs>
</template>

<script>
import control from '../work/s_protection/Control.vue'//安保管理
import fire_m from '../work/s_protection/Fire_m.vue'//消防管理
export default {
    name:'app',
    components:{
        control,
        fire_m
    }
};
</script>

<style lang="less">
.el-tabs--border-card>.el-tabs__content{padding:0}
</style>