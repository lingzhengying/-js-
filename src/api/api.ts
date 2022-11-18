// 项目中大多数时候都会把对应的接口请求封装成api进行调用
import service from "../service.js";
import qs from 'qs'
import { IUserData } from "../types";

// 登录接口
export function login(data:IUserData){
    return service({
        method:'post',
        url:'/login',
        data
    })
}

// 学生列表的查询接口
// 这种一般不做ts限制，用any
export function students(params: any){
    return service({
        method:'get',
        url:'/students',
        params
    })
}

// 学生列表删除接口
export function studentDel(id: any){
    return service({
        method: 'delete',
        url:`/students/${id}`
    })
}


// 信息列表新增和修改接口
export function info(type: any,data: any){
    data = qs.stringify(data)
    let obj = {method: type,url:'/info',data}
    return service(obj)
}

// 信息列表查询接口
export function getInfo(){
    return service({
        method:'get',
        url:'/info',
    })
}

// 信息列表的删除接口
export function infoDel(id: any){
    return service({
        method:'delete',
        url:`/info/${id}`

    })
}

// 数据概览的接口
export function dataview(){
    return service({
        method: 'get',
        url:'/dataview'
    })
}

// 旅游地图的接口
export function travel(){
    return service({
        method: 'get',
        url: '/travel'
    })
}