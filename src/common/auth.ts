import axios from "axios";
import router from '@/router/index';

axios.interceptors.request.use(config => {
    console.log(config.headers);
});

// redirect
axios.interceptors.response.use(response => {
    if (response.data.data === '没有登录') {
        router.push('/login');
    }
});