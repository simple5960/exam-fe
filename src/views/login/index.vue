<template>
  <div class="login-wrapper">
    <p>登录</p>
    <el-input v-model="account" placeholder="请输入账号"></el-input>
    <el-input v-model="password" placeholder="请输入密码"></el-input>
    <el-button type="primary" @click="login">登录</el-button>
    <el-button>注册</el-button>
    <p>{{name}}</p>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, reactive, ref, toRefs } from "vue";
import { ElButton, ElInput } from 'element-plus';
import { User } from "@/interface/login/index";
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
        const name = ref('wangsipeng');
        const login = () => {
            document.cookie = `${user.account}-${user.password}`;
        };
        return {
            name,
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