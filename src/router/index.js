import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../pages/Login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children:[
          // 首页
          {path: '/home/project',name: 'project',component: () => import('../pages/home/Project.vue')},//预设方案
          {path: '/home/software',name: 'software',component: () => import('../pages/home/Software.vue')},//软件说明
          {path: '/home/subscription',name: 'subscription',component: () => import('../pages/home/Subscription.vue')},//订购服务
          // 工作
          {path: '/home/security',name: 'security',component: () => import('../pages/work/Security.vue')},//安保消防
          {path: '/home/cleaning',name: 'cleaning',component: () => import('../pages/work/Cleaning.vue')},//保洁环卫
          {path: '/home/pay',name: 'pay',component: () => import('../pages/work/Pay.vue')},//缴费管理
          {path: '/home/club',name: 'club',component: () => import('../pages/work/Club.vue')},//会所管理 
          {path: '/home/energy',name: 'energy',component: () => import('../pages/work/Energy.vue')},//能耗管理 
          {path: '/home/lease',name: 'lease',component: () => import('../pages/work/Lease.vue')},//租赁管理 
          {path: '/home/material',name: 'material',component: () => import('../pages/work/Material.vue')},//物资管理 
          {path: '/home/group',name: 'group',component: () => import('../pages/work/Group.vue')},//集团办公 
          // 公众
          {path: '/home/property',name: 'property',component: () => import('../pages/info_p/Property.vue')},//物业信息
          {path: '/home/notice',name: 'notice',component: () => import('../pages/info_p/Notice.vue')},//小区通知
          {path: '/home/publicity',name: 'publicity',component: () => import('../pages/info_p/Publicity.vue')},//物业公示 
          {path: '/home/exposure',name: 'exposure',component: () => import('../pages/info_p/Exposure.vue')},//小区曝光   
          {path: '/home/troubleshooting',name: 'troubleshooting',component: () => import('../pages/info_p/Troubleshooting.vue')},//故障维修   
          {path: '/home/questionnaire',name: 'questionnaire',component: () => import('../pages/info_p/Questionnaire.vue')},//问卷调查   
          {path: '/home/convenient',name: 'convenient',component: () => import('../pages/info_p/Convenient.vue')},//便民服务   
          {path: '/home/complaint',name: 'complaint',component: () => import('../pages/info_p/Complaint.vue')},//投诉建议   
          {path: '/home/express',name: 'express',component: () => import('../pages/info_p/Express.vue')},//快递管理   
          {path: '/home/community',name: 'community',component: () => import('../pages/info_p/Community.vue')},//社区管理   
          {path: '/home/user_m',name: 'user_m',component: () => import('../pages/info_p/User_m.vue')},//用户管理  
          // 房产 
          {path: '/home/house',name: 'house',component: () => import('../pages/house_g/House.vue')},//房产管理  
          {path: '/home/parking',name: 'parking',component: () => import('../pages/house_g/Parking.vue')},//车位管理  
          {path: '/home/shops',name: 'shops',component: () => import('../pages/house_g/Shops.vue')},//商铺管理  
          {path: '/home/owner',name: 'owner',component: () => import('../pages/house_g/Owner.vue')},//业主管理 
          // 财务
          {path: '/home/p_crm',name: 'p_crm',component: () => import('../pages/finance/P_crm.vue')},//收支管理 
          {path: '/home/payment',name: 'payment',component: () => import('../pages/finance/Payment.vue')},//缴费记录 
          {path: '/home/expenditure',name: 'expenditure',component: () => import('../pages/finance/Expenditure.vue')},//支出记录 
          {path: '/home/contract',name: 'contract',component: () => import('../pages/finance/Contract.vue')},//合同管理 
          {path: '/home/cooperation',name: 'cooperation',component: () => import('../pages/finance/Cooperation.vue')},//合作单位 
          // 员工
          {path: '/home/employee',name: 'employee',component: () => import('../pages/staff/Employee.vue')},//员工信息 
          {path: '/home/wage',name: 'wage',component: () => import('../pages/staff/Wage.vue')},//工资管理 
          {path: '/home/rewards_p',name: 'rewards_p',component: () => import('../pages/staff/Rewards_p.vue')},//请假奖惩 
          // 设置
          {path: '/home/basic',name: 'basic',component: () => import('../pages/set_up/Basic.vue')},//基础信息 
          {path: '/home/parameter',name: 'parameter',component: () => import('../pages/set_up/Parameter.vue')},//参数配置 
          {path: '/home/payment_a',name: 'payment_a',component: () => import('../pages/set_up/Payment_a.vue')},//支付配置 
          {path: '/home/sms',name: 'sms',component: () => import('../pages/set_up/Sms.vue')},//短信管理 
          {path: '/home/account',name: 'account',component: () => import('../pages/set_up/Account.vue')},//账户安全 
          {path: '/home/data',name: 'data',component: () => import('../pages/set_up/Data.vue')},//数据备份 
          {path: '/home/login_log',name: 'login_log',component: () => import('../pages/set_up/Login_log.vue')},//登录日志 
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
