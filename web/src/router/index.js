import Vue from 'vue'
import VueRouter from 'vue-router'

const http = require('../http')
Vue.prototype.$http = http;
Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: () => import('../views/Blog.vue'),
  redirect: '/bloglist',
  children: [{
      path: '/bloglist',
      component: () => import('../views/BlogList.vue'),
      props: true,
      meta: {
        title: '最新博客'
      }
    },
    {
      path: '/blogList/:id',
      component: () => import('../views/BlogList.vue'),
      props: true,
      name: 'blogList',
      meta: {
        title: '博客列表'
      }
    },
    {
      path: '/blogContent/:id',
      component: () => import('../views/BlogContent.vue'),
      props: true,
      meta: {
        title: '博客详情'
      }
    }
  ]
}]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
})


export default router