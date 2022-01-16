import axios from "axios";
import router from '@/router/index';
const CancelToken = axios.CancelToken;
const sourece = CancelToken.source();
axios.interceptors.request.use(config => {
    if (!localStorage.getItem('token')) {
        sourece.cancel();
        router.push('/login');
    }
    return config;
});