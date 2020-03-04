<template>
  <b-navbar
    toggleable="lg"
    variant="faded"
    type="light"
    v-show="$route.path!=='/blog'"
    class="fixed-top"
  >
    <b-navbar-brand href="#">Loly_Zhang</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/blog">博客</b-nav-item>
        <b-nav-item href="#">Demo</b-nav-item>
        <b-nav-item href="#">关于我</b-nav-item>
        <b-nav-item href="#">联系我</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="语言" right>
          <b-dropdown-item href="#">中文</b-dropdown-item>
          <b-dropdown-item href="#">英语</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style>
</style>