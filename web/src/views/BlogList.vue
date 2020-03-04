<template>
  <div>
    <b-card :title="blog.title" v-for="(blog,index) in blogList" :key="index">
      <b-card-text>{{blog.description}}</b-card-text>
      <b-link :to="{name:'blogContent',params:{blog:blog}}" class="card-link">查看详情</b-link>
      <b-link href="#" class="card-link">查看相似博客</b-link>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogList: {}
    };
  },
  props: {
    id: String
  },
  created() {
    this.getBlogByLabel();
  },
  methods: {
    async getBlogByLabel() {
      if (!this.id) {
        const result = await this.$http.get(`/listBlog`);
        this.blogList = result.data;
      } else {
        const result2 = await this.$http.get(`/listBlog/${this.id}`);
        console.log(result2);
        this.blogList = result2.data[0].blogList;
      }
    }
  }
};
</script>

<style>
</style>