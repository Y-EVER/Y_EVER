<template>
    <div class="container">
        <div class="conainer-top flex flex_b">
            <img src="../assets/images/logo.png" alt="">
            <span>客服电话：400-023-5008</span>
        </div>
        <div class="login">
            <el-form ref="form" label-width="80px">
                <el-form-item label="用户名">
                    <el-input v-model="username" clearable placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" :plain="true" @click="clickLogin">立即登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import {login} from '../api/apijs'
    export default {
        data(){
            return {
                username:'',//用户名
                password:''//密码
            }
        },
        methods: {
            clickLogin(){
                login(this.username,this.password).then((res) => {
                    // console.log(res);
                    if(res.data == 'ok'){
                        this.$router.history.push('/home/security')//登录成功跳转页面
                    }else{
                       this.$message.error('用户名或密码错误');//登录失败错误提示
                    }
                    
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .conainer-top{width: 96%;height: 350px;background: #2086ee;padding:0 2%;}
    .conainer-top img{width: 14%;height: 14%;margin-top: 30px;}
    .conainer-top > span{font-size: 22px;;color: #fff;margin-top: 30px;}
    .login{position: absolute;width: 16%;padding: 50px 4%;background: #fff;border-radius: 3px;left: 50%;top: 50%;transform: translate(-50%,-50%)}
</style>