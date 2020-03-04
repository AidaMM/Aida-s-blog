<template>
  <div>
    <b-jumbotron class="border-bottom">
      <template v-slot:header>{{blog.title}}</template>

      <template v-slot:lead>{{blog.description}}</template>

      <hr class="my-4" />
      <p v-html="blog.body"></p>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {}
    };
  },
  created() {
    this.getBlog();
  },
  methods: {
    getBlog() {
      this.blog = this.$route.params.blog;
      console.log(this.blog);
    }
  }
};
</script>

<style>
</style>