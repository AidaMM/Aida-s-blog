<template>
  <div class="blog">
    <div class="blog_header">
      <div class="blogLogo">
        <router-link to="/">
          Aida的博客
        </router-link>
        <span></span>
      </div>

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
    </div>
    <div class="footer">
      <div class="explain">
        <h3>刘诗夏的博客</h3>
        <p>
          本站属于个人博客网站,内容均属工作中的记录或总结
        </p>
      </div>
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
      this.title = "";
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
    background-color: #1f2330;
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
      min-width: 1.5rem;
      min-height: calc(100vh - 1rem);
      padding: 0.2rem 0.2rem;
      margin-left: 0.2rem;
      margin-right: 0.2rem;
      text-align: left;
      &.show {
        display: block;
      }
      .label {
        margin-top: 0.1rem;
        &.active {
          color: #009688;
          font-weight: 600;
        }
        &:hover {
          cursor: pointer;
        }
      }
    }
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
      text-align: center;
      p {
        margin: 0.1rem 0;
        span {
          padding-right: 0.2rem;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .blog {
    .blog_header {
      justify-content: flex-end;
      .blogLogo {
        display: none;
      }
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
    .footer {
      display: none;
    }
  }
}
</style>