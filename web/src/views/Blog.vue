<template>
  <div class="blog">
    <div class="blog_header">
<<<<<<< HEAD
      <div class="blogLogo">
        <router-link to="/">
          Aida的博客
        </router-link>
        <span></span>
      </div>

=======
      <router-link to="/" class="blogLogo">
        <img src="../assets/images/avatar.png" alt="">
      </router-link>
      <span class="header_Signature">越努力 越幸运</span>
>>>>>>> d2d1ae01c40e4e7ede800de1bf237d6edf0b8330
      <div class="search">
        <input type="text" placeholder="搜索博客" v-model="title" />
        <button @click="searchBlog">搜索</button>
      </div>
    </div>
    <div class="blog_content">
      <img src="../assets/images/category.png" @click="showLabel" class="category">
      <div :class="{show:isShowLabel}" class="content_label">
        <h2>分类</h2>
        <div class="label" :class="{active:lableId===-1}" @click="changeLableId(-1)">
          <router-link tag="div" to="/">最新</router-link>
        </div>
        <div class="label" :class="{active:lableId===label._id}" @click="changeLableId(label._id)" v-for="label in labels" :key="label._id">
          <router-link tag="div" :to="`/blogList/${label._id}`">{{label.label}}</router-link>
        </div>
      </div>
      <router-view :key="$route.path" />
<<<<<<< HEAD
    </div>
    <div class="footer">
      <div class="explain">
        <h3>刘诗夏的博客</h3>
        <p>
          本站属于个人博客网站,内容均属工作中的记录或总结
        </p>
        <p>
          <span>源码地址:</span>
          <a href="#" target="_blank"> <img src="../assets/images/GitHub.png" alt="" /></a>
        </p>
      </div>
      <div class="source">
        <h3>友情链接</h3>
        <ul>
          <li><a href="https://cn.vuejs.org/">vue</a></li>
          <li><a href="https://sass-lang.com/">sass</a></li>
          <li><a href="">css</a></li>
          <li><a href="">vue</a></li>
          <li><a href="">vue</a></li>
          <li><a href="">vue</a></li>
          <li><a href="">vue</a></li>
          <li><a href="">vue</a></li>
        </ul>

      </div>
=======
>>>>>>> d2d1ae01c40e4e7ede800de1bf237d6edf0b8330
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.getLabels();
  },
  data () {
    return {
      labels: [],
      lableId: -1,
      isShowLabel: false,
      title: ''
    }
  },
  methods: {
    searchBlog () {
      this.lableId = -2;
      this.$router.push({ path: '/blogList/-1', query: { title: this.title } })
<<<<<<< HEAD
      this.title = "";
=======
>>>>>>> d2d1ae01c40e4e7ede800de1bf237d6edf0b8330
    },
    async getLabels () {
      const result = await this.$http.get('/listLabel/-1');
      this.labels = result.data;
    },
    changeLableId (lableId) {
      this.lableId = lableId;
      this.showLabel();
    },
    showLabel () {
      this.isShowLabel = !this.isShowLabel;
    }
  }
}
</script>

<style lang="scss">
.blog {
  .blog_header {
<<<<<<< HEAD
    background-color: #1f2330;
=======
    background-color: #111d5e;
>>>>>>> d2d1ae01c40e4e7ede800de1bf237d6edf0b8330
    height: 0.6rem;
    font-size: 0.14rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    padding: 0 0.2rem;
    z-index: 1501;
    .blogLogo {
<<<<<<< HEAD
      line-height: 0.85rem;
      a {
        padding-left: 0.1rem;
        font-size: 24px;
        color: #fff;
      }
    }
  }
  .blog_content {
    padding-top: 0.9rem;
    min-height: 100vh;
    background-color: #27273a;
=======
      img {
        width: 0.6rem;
        height: 0.6rem;
        &:hover {
          transform: rotate(360deg);
          transition: 1s;
        }
      }
    }
    .header_Signature {
      font-size: 0.4rem;
      font-family: "kaiti";
      color: #dd2476;
    }
  }
  .blog_content {
    padding-top: 0.7rem;
    min-height: 100vh;
    background-color: #eee;
>>>>>>> d2d1ae01c40e4e7ede800de1bf237d6edf0b8330
    display: flex;
    justify-content: flex-start;
    font-size: 0.16rem;
    align-items: flex-start;
    .category {
      display: none;
      position: fixed;
      top: 0.1rem;
      left: 0.2rem;
    }
    .content_label {
<<<<<<< HEAD
      min-width: 1.5rem;
      min-height: calc(100vh - 1rem);
      padding: 0.2rem 0.2rem;
      margin-left: 0.2rem;
      margin-right: 0.2rem;
      text-align: left;
=======
      flex-grow: 0;
      background-color: #fff;
      border-radius: 0.2rem;
      padding: 0.2rem 0.2rem;
      margin-left: 0.2rem;
      margin-right: 0.2rem;
>>>>>>> d2d1ae01c40e4e7ede800de1bf237d6edf0b8330
      &.show {
        display: block;
      }
      .label {
<<<<<<< HEAD
        margin-top: 0.1rem;
        &.active {
          color: #009688;
          font-weight: 600;
=======
        font-weight: 600;
        margin-top: 0.1rem;
        &.active {
          color: #dd2476;
>>>>>>> d2d1ae01c40e4e7ede800de1bf237d6edf0b8330
        }
        &:hover {
          cursor: pointer;
        }
      }
    }
<<<<<<< HEAD
  }
  .footer {
    height: 2rem;
    background-color: #1f2330;
    font-size: 0.15rem;
    display: flex;
    color: #60606d;
    justify-content: space-around;
    h3 {
      color: #fff;
    }
    .explain {
      display: flex;
      flex-direction: column;
      p {
        margin: 0.1rem 0;
        span {
          padding-right: 0.2rem;
        }
      }
      img:hover {
        background-color: #fff;
        border-radius: 20%;
      }
    }
    .source {
      vertical-align: middle;
      ul {
        list-style: none;
        width: 80%;

        li {
          float: left;
          margin: 0.1rem;
          a {
            color: #60606d;
            &:hover {
              color: #fff;
            }
          }
        }
      }
    }
=======
>>>>>>> d2d1ae01c40e4e7ede800de1bf237d6edf0b8330
  }
}
@media screen and (max-width: 768px) {
  .blog {
    .blog_header {
      justify-content: flex-end;
      .blogLogo {
        display: none;
      }
<<<<<<< HEAD
=======
      .header_Signature {
        display: none;
      }
>>>>>>> d2d1ae01c40e4e7ede800de1bf237d6edf0b8330
    }

    .blog_content {
      .category {
        display: block;
        z-index: 1600;
      }
      .content_label {
        display: none;
      }
    }
<<<<<<< HEAD
    .footer {
      display: none;
    }
=======
>>>>>>> d2d1ae01c40e4e7ede800de1bf237d6edf0b8330
  }
}
</style>