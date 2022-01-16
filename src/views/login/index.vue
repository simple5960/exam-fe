<template>
  <div class="login-wrapper">
    <p>登录</p>
    <i class="iconfont icon-zuqiu"></i>
    <el-input v-model="account" placeholder="请输入账号"></el-input>
    <el-input v-model="password" placeholder="请输入密码"></el-input>
    <el-button type="primary" @click="login">登录</el-button>
    <el-button>注册</el-button>
  </div>
</template>

<script lang='ts'>
import { defineComponent,  reactive, toRefs } from "vue";
import { ElButton, ElInput, ElMessage } from 'element-plus';
import { User } from "@/interface/login/index";
import axios from "axios";
import router from "@/router/index";
export default defineComponent({
    name: 'login',
    components: {
        ElButton,
        ElInput
    },
    setup() {
        const user:User = reactive({
            account: undefined,
            password: undefined
        });
        const login = async () => {
            try {
                ElMessage.success('success');
                const { data } = await axios.post('/rest/login', {
                    account: user.account,
                    password: user.password
                });
                router.push('/home');
            } catch (error) {

            }
        };
        return {
            login,
            ...toRefs(user)
        }
    }
});
</script>

<style lang="less" scoped>
.login-wrapper {
    width: 35%;
    height: 70%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    background: #ccc;
}
</style>