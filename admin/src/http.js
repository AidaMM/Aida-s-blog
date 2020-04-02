import axios from 'axios';
import Vue from 'vue';
import router from './router';
const http = axios.create({
  baseURL: 'http://localhost:3000/ly/api'
  // baseURL: process.env.VUE_APP_API_URL || '/ly/api'
});


http.interceptors.request.use(function (config) {
  config.headers.Authorization = 'Bearer ' + (localStorage.token || '');
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

http.interceptors.response.use(res => {
  return res
}, err => { //不是200就进入err
  if (err.response.data.message) {
    Vue.prototype.$message({
      type: 'error',
      message: err.response.data.message
    });
    if (err.response.status === 401) {
      router.push('/login');
    }
  }
  return Promise.reject(err);
})
export default http;