<template>
  <div class="blog">
    <div class="blog_header">
      <router-link to="/" class="blogLogo">
        <img src="../assets/images/avatar.png" alt="">
      </router-link>
      <span class="header_Signature">越努力 越幸运</span>
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
    background-color: #111d5e;
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
      flex-grow: 0;
      background-color: #fff;
      border-radius: 0.2rem;
      padding: 0.2rem 0.2rem;
      margin-left: 0.2rem;
      margin-right: 0.2rem;
      &.show {
        display: block;
      }
      .label {
        font-weight: 600;
        margin-top: 0.1rem;
        &.active {
          color: #dd2476;
        }
        &:hover {
          cursor: pointer;
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
      .header_Signature {
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
  }
}
</style>