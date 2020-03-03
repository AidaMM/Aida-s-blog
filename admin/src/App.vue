<template>
  <div id="app">
    <div class="header-nav">
      <span>loly_zhang网站后台管理系统</span>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
.header-nav {
  height: 50px;
  color: #409eff;
  border-bottom: 1px solid gray;
  line-height: 50px;
  font-size: 1.5rem;
}
</style>
