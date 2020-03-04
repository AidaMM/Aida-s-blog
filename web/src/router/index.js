import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import BlogList from '../views/BlogList.vue'
import BlogContent from '../views/BlogContent.vue'

const http = require('../http')
Vue.prototype.$http = http;
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog,
    children: [{
        path: '/',
        name: 'blogList',
        component: BlogList
      },
      {
        path: '/blogContent',
        name: 'blogContent',
        component: BlogContent
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router