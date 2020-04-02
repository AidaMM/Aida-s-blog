<template>
  <div class="bloglist">
    <div v-if="blogs.length>0" class="blogs">
      <div v-for="blog in blogs" :key="blog._id" class="blog">
        <router-link tag="div" :to="`/blogContent/${blog._id}`">
<<<<<<< HEAD
          <h2>{{blog.title}}</h2>
          <h4 class="description">{{blog.description}}</h4>
          <p class="date"> {{blog.updatedAt|formatDate}}</p>
=======
          <h3>{{blog.title}}</h3>
          <p class="description">{{blog.description}}</p>
          <p>{{blog.updatedAt|formatDate}}</p>
>>>>>>> d2d1ae01c40e4e7ede800de1bf237d6edf0b8330
        </router-link>
      </div>
    </div>
    <div class="more">
<<<<<<< HEAD
      <button v-show="hasMore&&$route.path==='/bloglist'" @click="moreBlog">加载更多</button>
=======
      <button v-show="hasMore&&$route.path==='/bloglist'" @click="moreBlog">加载更多=></button>
>>>>>>> d2d1ae01c40e4e7ede800de1bf237d6edf0b8330
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
<<<<<<< HEAD
        if (result.data.length < 12) {
          this.hasMore = false;
        }
=======
>>>>>>> d2d1ae01c40e4e7ede800de1bf237d6edf0b8330
      } else {
        if (this.id == -1 && title) {
          const result = await this.$http.get(`/getBlogByTitle/${title}`);
          this.blogs = result.data;
        } else {
          const result = await this.$http.get(`/listBlogByLabelId/${this.id}`);
          this.blogs = result.data[0].blogList;
        }
<<<<<<< HEAD
      }
      if (this.blogs.length === 0) {
        this.comment = "暂无博客"
      }
=======
      }
      if (this.blogs.length === 0) {
        this.comment = "暂无博客"
      }
>>>>>>> d2d1ae01c40e4e7ede800de1bf237d6edf0b8330

    }
  }
}
</script>

<style lang="scss">
.bloglist {
<<<<<<< HEAD
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
=======
  padding: 0.2rem;
  .blogs {
    display: grid;
    grid-template-columns: repeat(4, minmax(1.5rem, 4rem));
    grid-column-gap: 0.1rem;
    grid-row-gap: 0.1rem;
    padding-bottom: 0.1rem;
    .blog {
      height: 2rem;
      background-color: #fff;
      border-radius: 0.1rem;
      padding: 0.1rem;

>>>>>>> d2d1ae01c40e4e7ede800de1bf237d6edf0b8330
      .description {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
<<<<<<< HEAD
      }
      .date {
        width: 2rem;
        margin-left: auto;
=======
        font-weight: 600;
      }
      h3 {
        text-decoration: underline;
        color: #ff512f;
>>>>>>> d2d1ae01c40e4e7ede800de1bf237d6edf0b8330
      }
    }
  }
  .more {
    margin-top: 0.1rem;
    text-align: right;
  }
<<<<<<< HEAD
}

=======

  .page {
    display: grid;
    grid-template-columns: repeat(7, minmax(1.5rem, 4rem));
  }
}
@media (max-width: 1100px) {
  .bloglist {
    .blogs {
      grid-template-columns: repeat(3, minmax(1.5rem, 4rem));
      grid-row-gap: 0.1rem;
    }
  }
}
@media (max-width: 992px) {
  .bloglist {
    .blogs {
      grid-template-columns: repeat(2, minmax(1.5rem, 4rem));
      grid-row-gap: 0.1rem;
    }
  }
}
>>>>>>> d2d1ae01c40e4e7ede800de1bf237d6edf0b8330
@media screen and (max-width: 768px) {
  .bloglist {
    width: 100vw;
    padding: 0.1rem;
<<<<<<< HEAD
=======
    .blogs {
      grid-template-columns: 99%;
      grid-row-gap: 0.1rem;
    }
>>>>>>> d2d1ae01c40e4e7ede800de1bf237d6edf0b8330
  }
}
</style>