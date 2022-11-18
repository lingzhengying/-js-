import Vue from "vue";
// import VueRouter, { RouteConfig } from "vue-router";
// import Home from "../views/Home.vue";

import Router from 'vue-router'


const routes: Array<any> = [
//   {
//     path: '/',
//     redirect:'/login',
//     meta:{
//       hidden: true
//     }
//   },
  {
    path:'/',
    redirect:'/login',
    name:'首页',
    hidden:true,
    component: () => import('@/components/Login.vue') 
},
{
    path:'/login',
    name:'Login',
    hidden:true,
    component: () => import('@/components/Login.vue') 
},
{
    path:'*',
    name:'NotFound',
    hidden:true,
    component: () => import('@/components/NotFound.vue') 
},
// {
//     path:'/home',
//     // component:() => import('@/components/Home') // 路由懒加载
//     component: resolve => require(['@/components/Home'],resolve) // 异步
// },
{
    path:'/home',
    name:'学生管理',
    iconClass:'fa fa-user',
    redirect:'/home/student',
    component: () => import('@/components/Home.vue'),
    children:[
        {
            path:'/home/student',
            name:'学生列表',
            iconClass:'fa fa-list',
            component: () => import('@/components/students/StudentList.vue')
        },
        {
            path:'/home/info',
            name:'信息列表',
            iconClass:'fa fa-list-alt',
            component: () => import('@/components/students/InfoList.vue')
        },
        {
            path:'/home/infos',
            name:'信息管理',
            iconClass:'fa fa-list-alt',
            component: () => import('@/components/students/InfoLists.vue')
        },
        {
            path:'/home/work',
            name:'作业列表',
            iconClass:'fa fa-list-ul',
            component: () => import('@/components/students/WorkList.vue')
        },
        {
            path:'/home/works',
            name:'作业管理',
            iconClass:'fa fa-th-list',
            component: () => import('@/components/students/WorkMent.vue')
        },
    ]
},
{
    path:'/home',
    name:'数据分析',
    iconClass:'fa fa-bar-chart',
    component: () => import('@/components/Home.vue'),
    children:[
        {
            path:'/home/dataview',
            name:'数据概览',
            iconClass:'fa fa-line-chart',
            component: () => import('@/components/dataAnalysis/DateView.vue')
        },
        {
            path:'/home/mapview',
            name:'地图概览',
            iconClass:'fa fa-line-chart',
            component: () => import('@/components/dataAnalysis/MapView.vue')
        },
        {
            path:'/home/travel',
            name:'生源地图',
            iconClass:'fa fa-line-chart',
            component: () => import('@/components/dataAnalysis/TraveMap.vue')
        },
        {
            path:'/home/score',
            name:'分数地图',
            iconClass:'fa fa-line-chart',
            component: () => import('@/components/dataAnalysis/ScoreMap.vue')
        },
    ]
},
{
    path:'/homes',
    name:'用户中心',
    iconClass:'fa fa-user',
    component: () => import('@/components/Home.vue'),
    children:[
        {
            path:'/homes/user',
            name:'权限管理',
            iconClass:'fa fa-user',
            component: () => import('@/components/users/User.vue'),
        }
    ]
}
];

Vue.use(Router);
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
