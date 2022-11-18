<template>
  <div class="login">
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>学生后台管理系统</span>
        </div>
                <el-form label-width="80px" :model="form" ref="form" :rules="rules">
        <el-form-item label="用户名" prop="username">
            <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-button type="primary" @click="login('form')">登录</el-button>
        </el-form>
    </el-card>
  </div>
</template>

<script>
import { nameRule,passRule } from '../utils/vaildate.js'
import { setToKen } from  '@/utils/setToken.js'
import { login } from '@/api/api.ts'
    export default {
        data(){
            return {
                form:{
                    username: "",
                    password: ""
                },
                rules:{
                    username:[{validator: nameRule,trigger: "blur"}],
                    password:[{validator: passRule,trigger: "blur"}],
                }
            }
        },
        methods:{
            login(form){
                this.$refs[form].validate((valid) => {
                    if(valid){
                     console.log(this.form);
                     /* 把这个登录方法封装成API进行调用
                        this.service.post('/login',this.form)
                        .then(res => {
                            if(res.data.status === 200){
                                setToKen('username',res.data.username)
                                setToKen('toKen',res.data.toKen)
                                this.$message({message: res.data.message, type: 'success'})
                                this.$router.push('/home')
                            }
                            console.log(res);
                        })
                    */
                   login(this.form).then(res => {
                     if(res.data.status === 200){
                            setToKen('username',res.data.username)
                            setToKen('toKen',res.data.toKen)
                            this.$message({message: res.data.message, type: 'success'})
                            this.$router.push('/home')
                        }
                         console.log(res);
                   })
                    } else {
                        console.error(this.form);
                    }
                })
            }
        }
    }
</script>

<style>
.login{
    width: 100%;
    height: 100%;
    position: absolute;
    background: url('../assets/xl.jpg') center;
}
.el-card{
    text-align: center;
    width: 450px;
    margin: 200px auto 0px auto;
    background: #6576851e;
    color: #fff;
}
.el-card__header{
    font-size: 30px;
}
.el-button{
    width: 100%;
}
.el-form .el-form-item__label{
    color: #fff;
}
</style>