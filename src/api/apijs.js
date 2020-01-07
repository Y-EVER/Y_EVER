import axios from 'axios'

const ax = axios.create({
    baseURL:'http://localhost:3000'//后台数据接口
})

// 登录接口
export function login(username,password){
    //  /login == http://localhost:3000/login
    return ax.post('/login',{username,password})
}