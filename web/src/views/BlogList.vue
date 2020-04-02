<template>
  <div class="bloglist">
    <div v-if="blogs.length>0" class="blogs">
      <div v-for="blog in blogs" :key="blog._id" class="blog">
        <router-link tag="div" :to="`/blogContent/${blog._id}`">
          <h2>{{blog.title}}</h2>
          <h4 class="description">{{blog.description}}</h4>
          <p class="date"> {{blog.createdAt|formatDate}}</p>
        </router-link>
      </div>
    </div>
    <div class="more">
      <button v-show="hasMore&&$route.path==='/bloglist'" @click="moreBlog">加载更多</button>
    </div>
    <p>
      {{comment}}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    id: String
  },
  data () {
    return {
      flag: false,
      blogs: [],
      comment: '',
      hasMore: true
    }
  },
  created () {
    this.getBlogs();
  },
  watch: {
    '$route.query.title': 'getBlogs'
  },
  methods: {
    async moreBlog () {
      if (!this.id) {
        const result = await this.$http.get(`/listBlog/${this.blogs.length}`);
        if (result.data.length > 0) {
          if (result.data.length < 12) {
            this.hasMore = false;
          }
          this.blogs = [...this.blogs, ...result.data];
        } else {
          this.hasMore = false;
        }
      }
    },
    async getBlogs () {
      this.comment = '';
      const title = this.$route.query.title;
      if (!this.id) {//id无值
        const result = await this.$http.get(`/listBlog/0`);
        this.blogs = result.data;
        if (result.data.length < 12) {
          this.hasMore = false;
        }
      } else {
        if (this.id == -1 && title) {
          const result = await this.$http.get(`/getBlogByTitle/${title}`);
          this.blogs = result.data;
        } else {
          const result = await this.$http.get(`/listBlogByLabelId/${this.id}`);
          this.blogs = result.data[0].blogList;
        }
      }
      if (this.blogs.length === 0) {
        this.comment = "暂无博客"
      }

    }
  }
}
</script>

<style lang="scss">
.bloglist {
  margin: 0 auto;
  width: 70%;
  padding: 0.2rem;
  padding-top: 0;
  .blogs {
    padding-bottom: 0.1rem;
    .blog {
      cursor: pointer;
      padding: 0.2rem;
      border-bottom: 1px solid #666;
      h3 {
        color: #009688;
      }
      .description {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .date {
        width: 2rem;
        margin-left: auto;
      }
    }
  }
  .more {
    margin-top: 0.1rem;
    text-align: right;
  }
}

@media screen and (max-width: 768px) {
  .bloglist {
    width: 100vw;
    padding: 0.1rem;
  }
}
</style>