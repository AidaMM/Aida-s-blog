import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style/common.scss'
import '../node_modules/github-markdown-css/github-markdown.css';
import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css' //样式文件


Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

import dayjs from 'dayjs'
Vue.filter('formatDate', (date) => {
  if (!date) {
    return '';
  }
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
});
Vue.config.productionTip = false

import http from './http'
Vue.prototype.$http = http

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')