<template>
    <el-menu id="app" default-active="/home/security" class="el-menu-vertical-demo" background-color="#fff" text-color="#181818" active-text-color="#ffd04b" :unique-opened='true' :router='true' >
          <el-submenu v-for='left_meuns in left_meun' :index="left_meuns.p_index">
            <template slot="title">
              <i :class="left_meuns.i_class"></i>
              <span>{{left_meuns.p_tit}}</span>
            </template>
            <el-menu-item-group v-for='child_a in left_meuns.children_arr'>
              <el-menu-item :index="child_a.child_index">{{child_a.child_tit}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
</template>

<script>
    export default {
      name:'app',
      data(){
        return{
            left_meun:[
                {
                  p_index:'1',
                  i_class:'el-icon-location',
                  p_tit:'首页',
                  children_arr:[
                      {child_index:'/home/project',child_tit:'预设方案'},
                      {child_index:'/home/software',child_tit:'软件说明'},
                      {child_index:'/home/subscription',child_tit:'订购服务'},
                  ]
                },
                {
                  p_index:'2',
                  i_class:'el-icon-location',
                  p_tit:'工作',
                  children_arr:[
                      {child_index:'/home/security',child_tit:'安保消防'},
                      {child_index:'/home/cleaning',child_tit:'保洁环卫'},
                      {child_index:'/home/pay',child_tit:'缴费管理'},
                      {child_index:'/home/club',child_tit:'会所管理'},
                      {child_index:'/home/energy',child_tit:'能耗管理'},
                      {child_index:'/home/lease',child_tit:'租赁信息'},
                      {child_index:'/home/material',child_tit:'物资管理'},
                      {child_index:'/home/group',child_tit:'集团办公'},
                  ]
                },
                {
                  p_index:'3',
                  i_class:'el-icon-location',
                  p_tit:'公众',
                  children_arr:[
                      {child_index:'/home/property',child_tit:'物业信息'},
                      {child_index:'/home/notice',child_tit:'小区通知'},
                      {child_index:'/home/publicity',child_tit:'物业公示'},
                      {child_index:'/home/exposure',child_tit:'小区曝光'},
                      {child_index:'/home/troubleshooting',child_tit:'故障维修'},
                      {child_index:'/home/questionnaire',child_tit:'问卷调查'},
                      {child_index:'/home/convenient',child_tit:'便民服务'},
                      {child_index:'/home/complaint',child_tit:'投诉建议'},
                      {child_index:'/home/express',child_tit:'快递管理'},
                      {child_index:'/home/community',child_tit:'社区管理'},
                      {child_index:'/home/user_m',child_tit:'用户管理'},
                  ]
                },
                {
                  p_index:'4',
                  i_class:'el-icon-location',
                  p_tit:'房产',
                  children_arr:[
                      {child_index:'/home/house',child_tit:'房产管理'},
                      {child_index:'/home/parking',child_tit:'车位管理'},
                      {child_index:'/home/shops',child_tit:'商铺管理'},
                      {child_index:'/home/owner',child_tit:'业主管理'},
                  ]
                },
                {
                  p_index:'5',
                  i_class:'el-icon-location',
                  p_tit:'财务',
                  children_arr:[
                      {child_index:'/home/p_crm',child_tit:'收支管理'},
                      {child_index:'/home/payment',child_tit:'缴费记录'},
                      {child_index:'/home/expenditure',child_tit:'支出记录'},
                      {child_index:'/home/contract',child_tit:'合同管理'},
                      {child_index:'/home/cooperation',child_tit:'合作单位'},
                  ]
                },
                {
                  p_index:'6',
                  i_class:'el-icon-location',
                  p_tit:'员工',
                  children_arr:[
                      {child_index:'/home/employee',child_tit:'员工信息'},
                      {child_index:'/home/wage',child_tit:'工资管理'},
                      {child_index:'/home/rewards_p',child_tit:'请假奖惩'},
                  ]
                },
                {
                  p_index:'7',
                  i_class:'el-icon-location',
                  p_tit:'设置',
                  children_arr:[
                      {child_index:'/home/basic',child_tit:'基础信息'},
                      {child_index:'/home/parameter',child_tit:'参数配置'},
                      {child_index:'/home/payment_a',child_tit:'支付配置'},
                      {child_index:'/home/sms',child_tit:'短信管理'},
                      {child_index:'/home/account',child_tit:'账户安全'},
                      {child_index:'/home/data',child_tit:'数据备份'},
                      {child_index:'/home/login_log',child_tit:'登录日志'},
                  ]
                },
                ]
        }
      }
    }
</script>
<style lang="less" scoped>
.el-menu{height: 100%;}
.el-container,
.el-container,
.el-aside { height: 100%; }
.el-main { height: 100%; width: 100%; }
.el-submenu{border-bottom: 1px solid #f2f2f2}
</style>