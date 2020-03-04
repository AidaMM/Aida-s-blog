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
  props: {
    blogList: Array
  }
};
</script>

<style>
</style>